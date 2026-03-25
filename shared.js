/* ============================================================
   shared.js — logique commune à toutes les pages
   ============================================================ */

// Navigation inter-pages
function goTo(page) {
  window.location.href = page + '.html';
}

// Highlight lien actif dans la nav
document.addEventListener('DOMContentLoaded', function () {
  var current = location.pathname.split('/').pop().replace('.html', '') || 'accueil';
  document.querySelectorAll('.nav-links li[data-page]').forEach(function (li) {
    if (li.dataset.page === current) li.classList.add('on');
    else li.classList.remove('on');
  });
});

// ---- Utilitaires timer ----
var _timerInterval = null, _timerSeconds = 0, _timerPaused = false, _timerTotal = 0;

function dureeToSeconds(e) {
  return "2h" === e ? 7200 : "1h30" === e ? 5400 : "1h" === e ? 3600 : "30 min" === e ? 1800 : "10 min" === e ? 600 : "5 min" === e ? 300 : 7200;
}

function startTimer(e) {
  _timerInterval && clearInterval(_timerInterval);
  _timerSeconds = dureeToSeconds(e);
  _timerTotal = _timerSeconds;
  _timerPaused = false;
  document.getElementById("timer-box").style.display = "block";
  document.getElementById("timer-pause-btn").textContent = "⏸ pause";
  updateTimerDisplay();
  _timerInterval = setInterval(function () {
    _timerPaused || (_timerSeconds--, updateTimerDisplay(), _timerSeconds <= 0 && (clearInterval(_timerInterval), timerFini()));
  }, 1e3);
}

function updateTimerDisplay() {
  var e = Math.max(0, _timerSeconds),
    t = Math.floor(e / 3600),
    i = Math.floor(e % 3600 / 60),
    n = e % 60,
    o = t > 0 ? t + ":" + (i < 10 ? "0" : "") + i + ":" + (n < 10 ? "0" : "") + n : (i < 10 ? "0" : "") + i + ":" + (n < 10 ? "0" : "") + n,
    r = document.getElementById("timer-display");
  r.textContent = o;
  var s = _timerTotal > 0 ? _timerSeconds / _timerTotal : 1;
  s <= .1 || _timerSeconds <= 300 ? (r.style.color = "#EF4444", document.getElementById("timer-box").style.background = "#FEF2F2") : s <= .25 ? (r.style.color = "var(--orange)", document.getElementById("timer-box").style.background = "#FFF0E8") : (r.style.color = "var(--blue)", document.getElementById("timer-box").style.background = "var(--white)");
}

function toggleTimer() {
  _timerPaused = !_timerPaused;
  document.getElementById("timer-pause-btn").textContent = _timerPaused ? "▶ reprendre" : "⏸ pause";
}

function resetTimer() {
  _timerSeconds = _timerTotal;
  _timerPaused = false;
  document.getElementById("timer-pause-btn").textContent = "⏸ pause";
  updateTimerDisplay();
}

function timerFini() {
  var e = document.getElementById("timer-display");
  e.textContent = "Temps écoulé !";
  e.style.color = "#EF4444";
  document.getElementById("timer-box").style.background = "#FEF2F2";
  document.querySelectorAll(".brevet-answer").forEach(function (e) { e.disabled = true; });
  document.querySelectorAll(".corr-btn").forEach(function (e) { e.disabled = true; });
}

// ---- Page Génerer ----
function selectDuree(e) {
  document.querySelectorAll(".duree-chip").forEach(function (e) { e.classList.remove("sel"); });
  e.classList.add("sel");
  document.getElementById("recap-duree").textContent = e.querySelector("span").textContent;
}

function toggleNotion(e) {
  if ("all" === e.dataset.notion) {
    document.querySelectorAll(".notion-chip").forEach(function (e) { e.classList.remove("sel"); e.querySelector(".ncheck").textContent = ""; });
    e.classList.add("sel");
    e.querySelector(".ncheck").textContent = "✓";
  } else {
    var t = document.querySelector('.notion-chip[data-notion="all"]');
    t.classList.remove("sel");
    t.querySelector(".ncheck").textContent = "";
    e.classList.toggle("sel");
    e.querySelector(".ncheck").textContent = e.classList.contains("sel") ? "✓" : "";
    document.querySelectorAll('.notion-chip.sel:not([data-notion="all"])').length || (t.classList.add("sel"), t.querySelector(".ncheck").textContent = "✓");
  }
  updateRecapNotions();
}

function updateRecapNotions() {
  var e = document.getElementById("recap-notions");
  e.innerHTML = "";
  document.querySelector(".notion-chip.all-chip.sel") ? e.innerHTML = '<span class="recap-tag all">Toutes les notions</span>' :
    document.querySelectorAll(".notion-chip.sel:not(.all-chip)").forEach(function (t) {
      var i = document.createElement("span");
      i.className = "recap-tag";
      i.textContent = t.dataset.notion;
      e.appendChild(i);
    });
}

function selectCorr(e) {
  document.querySelectorAll(".corr-chip").forEach(function (e) {
    e.classList.remove("sel");
    var t = e.querySelector(".ccheck");
    t.textContent = ""; t.style.background = ""; t.style.borderColor = ""; t.style.color = "";
  });
  e.classList.add("sel");
  var t = e.querySelector(".ccheck");
  t.textContent = "✓"; t.style.background = "var(--blue)"; t.style.borderColor = "var(--blue)"; t.style.color = "#fff";
  document.getElementById("recap-corr").textContent = "question" === e.dataset.mode ? "question par question" : "à la fin de l'examen";
}

function genererBrevet() {
  var e = document.querySelector(".duree-chip.sel"),
    t = e ? e.querySelector("span").textContent : "2h",
    i = [], n = false;
  document.querySelector(".notion-chip.all-chip.sel") ? n = true :
    document.querySelectorAll(".notion-chip.sel:not(.all-chip)").forEach(function (e) { i.push(e.dataset.notion); });
  var o = (document.querySelector(".corr-chip.sel") || { dataset: { mode: "question" } }).dataset.mode;
  window._brevetMode = o;
  window._brevetData = null;
  window._scores = {};
  var r, s, l = document.querySelector(".duree-chip.sel"),
    a = l ? parseInt(l.dataset.mins) : 120;
  a >= 120 ? (r = 5, s = false) : a >= 90 ? (r = 4, s = false) : a >= 60 ? (r = 3, s = false) : a >= 30 ? (r = 1, s = false) : (r = 1, s = true);
  var x = data.filter(function (e) {
    var t = n || -1 !== i.indexOf(e.notion),
      o = !s || 0 === e.id.indexOf("qcm");
    return t && o;
  });
  0 === x.length && (x = data.filter(function (e) { return !s || 0 === e.id.indexOf("qcm"); }));
  0 === x.length && (x = data.slice());
  var d = (x = x.slice().sort(function () { return Math.random() - .5; })).slice(0, r).map(function (e, t) {
    return Object.assign({}, e, { numero: t + 1 });
  });
  // Sauvegarder config dans sessionStorage et naviguer
  sessionStorage.setItem('brevet_config', JSON.stringify({ duree: t, notions: n ? 'all' : i, mode: o, exercices: d }));
  window.location.href = 'brevet.html';
}

// ---- Page Brevet ----
function buildGraphique(e) { return _SVG_CACHE[e] || ""; }

function renderExercices(e, t) {
  var i = "";
  e.forEach(function (e, n) {
    var o = e.questions.reduce(function (e, t) { return e + t.points; }, 0);
    i += '<div class="brevet-ex" id="ex-' + n + '">';
    i += '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">';
    i += '<div><span class="brevet-ex-num">Exercice ' + e.numero + "</span>";
    i += '<span class="brevet-ex-titre">' + e.titre + "</span>";
    e.source && (i += '<span style="font-size:11px;font-weight:400;color:var(--muted);display:block;margin-top:4px;letter-spacing:0;text-transform:none">' + e.source + "</span>");
    i += "</div>";
    i += '<div style="display:flex;gap:6px;align-items:center">';
    i += '<span class="ctag b">' + e.notion + "</span>";
    i += '<span class="ctag" id="ex-score-tag-' + n + '">' + o + " pts</span>";
    i += "</div></div>";
    i += '<div class="brevet-enonce">';
    i += '<div style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap">';
    i += '<div style="flex:1;min-width:200px">' + (e.enonce || "").replace(/\n/g, "<br>").replace(/──\s*(Partie [AB][^─]*?)──/g, '<br><span style="display:inline-block;margin:8px 0 4px;padding:6px 12px;background:rgba(0,33,188,.06);border-radius:6px;border-left:3px solid var(--blue);font-weight:700;font-size:13px;color:var(--blue);letter-spacing:.03em;text-transform:uppercase">$1</span><br>') + "</div>";
    e.figure && (i += '<div style="width:100%;margin-top:12px">' + buildGraphique(e.figure) + "</div>");
    i += "</div></div>";
    e.questions.forEach(function (e, o) {
      var r = e.options && e.options.length >= 2, s = ["A", "B", "C", "D"];
      if (i += '<div class="brevet-q" id="q-' + n + "-" + o + '">', -1 !== e.id.indexOf("Partie")) {
        var l = e.id.replace(/──/g, "").trim();
        i += '<div style="margin:18px 0 10px;padding:8px 14px;background:rgba(0,33,188,.06);border-radius:8px;border-left:3px solid var(--blue)">';
        i += '<span style="font-weight:700;font-size:13px;color:var(--blue);letter-spacing:.03em;text-transform:uppercase">' + l + "</span>";
        i += "</div>";
        e.texte && (i += '<div style="margin:6px 0 12px;font-size:13px;color:var(--ink)">' + (e.texte || "").replace(/\n/g, "<br>") + "</div>");
        e.graphique && (i += '<div style="margin:8px 0 12px">' + buildGraphique(e.graphique) + "</div>");
        i += '<div class="brevet-q-row">';
        if (e.num) {
          var a = e.texte.split("\n\n"), x = a.slice(0, a.length - 1).join("\n\n"), d = a[a.length - 1];
          i += x ? '<span class="brevet-q-text" style="width:100%;margin-bottom:10px">' + x.replace(/\n/g, "<br>") + '</span></div><div class="brevet-q-row"><span class="brevet-q-id">' + e.num + '.</span><span class="brevet-q-text">' + d + "</span>" : '<span class="brevet-q-id">' + e.num + '.</span><span class="brevet-q-text">' + e.texte.replace(/\n/g, "<br>") + "</span>";
        } else {
          e.points > 0 && (i += '<span class="brevet-q-text">' + e.texte.replace(/\n/g, "<br>") + "</span>");
        }
        i += '<span class="brevet-q-pts" id="pts-badge-' + n + "-" + o + '">' + e.points + " pt" + (e.points > 1 ? "s" : "") + "</span></div>";
      } else {
        i += '<div class="brevet-q-row">';
        i += '<span class="brevet-q-id">' + e.id + ".</span>";
        i += '<span class="brevet-q-text">' + e.texte + "</span>";
        i += '<span class="brevet-q-pts" id="pts-badge-' + n + "-" + o + '">' + e.points + " pt" + (e.points > 1 ? "s" : "") + "</span></div>";
        e.graphique && (i += '<div style="margin:8px 0 12px">' + buildGraphique(e.graphique) + "</div>");
        e.points > 0 && (r ? (i += '<div class="qcm-options' + (e.options[0] && -1 !== e.options[0].indexOf("<svg") ? " row" : "") + '" id="qcm-' + n + "-" + o + '">',
          e.options.forEach(function (e, t) {
            var r = s[t] || t;
            i += '<button class="qcm-btn" id="qcm-opt-' + n + "-" + o + "-" + r + '" onclick="selectQcm(' + n + "," + o + ",'" + r + "')\"><span class=\"qcm-btn-letter\">" + r + "</span><span class=\"qcm-btn-label\">" + e + "</span><span class=\"qcm-btn-icon\"></span></button>";
          }),
          i += "</div>",
          i += '<input type="hidden" id="ans-' + n + "-" + o + '" value="">',
          "question" === t && (i += '<button class="corr-btn" id="corr-btn-' + n + "-" + o + '" onclick="corrigerQuestion(' + n + "," + o + ')" disabled style="opacity:.35;margin-top:12px">Corriger →</button>'))
          : (i += '<textarea class="brevet-answer" id="ans-' + n + "-" + o + '" placeholder="Ta réponse…" rows="3"></textarea>',
            "question" === t && (i += '<button class="corr-btn" onclick="corrigerQuestion(' + n + "," + o + ')">Corriger cette question →</button>')));
      }
      i += '<div class="q-feedback" id="fb-' + n + "-" + o + '"></div></div>';
    });
    i += '<div class="ex-score-bar" id="ex-bar-' + n + '" style="display:none">';
    i += '<div class="ex-score-row"><span class="ex-score-label">Score exercice ' + e.numero + '</span><span class="ex-score-val" id="ex-score-val-' + n + '">0 / ' + o + " pts</span></div>";
    i += '<div class="ex-bar"><div class="ex-bar-fill" id="ex-bar-fill-' + n + '" style="width:0%"></div></div></div></div>';
  });
  i += '<div style="margin-top:24px;display:flex;gap:12px;align-items:center" id="submit-row">';
  i += "fin" === t ? '<button class="btn btn-blue" onclick="corrigerTout()" style="font-size:14px;padding:14px 32px">Corriger mon brevet →</button>' : '<button class="btn btn-orange" onclick="rendreNote()" style="font-size:14px;padding:14px 32px">Voir ma note finale →</button>';
  i += '<button class="btn btn-ghost" onclick="goTo(\'generer\')" style="font-size:13px;padding:12px 24px">← Nouveau brevet</button>';
  i += "</div>";
  i += '<div class="score-panel" id="score-panel"></div>';
  var _cont = document.getElementById("brevet-exercises");
  _cont.innerHTML = "";
  var _parts = i.split('<div class="brevet-ex"');
  _parts[0] && (_cont.innerHTML = _parts[0]);
  _parts.slice(1).forEach(function (p, k) {
    requestAnimationFrame(function () {
      var d = document.createElement("div");
      d.className = "brevet-ex";
      d.innerHTML = p.replace(/^[^>]*>/, "");
      _cont.appendChild(d);
    });
  });
}

function selectQcm(e, t, i) {
  var n = document.getElementById("fb-" + e + "-" + t);
  if (!n || "block" !== n.style.display) {
    ["A", "B", "C", "D"].forEach(function (i) {
      var n = document.getElementById("qcm-opt-" + e + "-" + t + "-" + i);
      n && n.classList.remove("selected");
    });
    var o = document.getElementById("qcm-opt-" + e + "-" + t + "-" + i);
    o && o.classList.add("selected");
    var r = document.getElementById("ans-" + e + "-" + t);
    r && (r.value = i);
    corrigerQcmInstant(e, t);
  }
}

function corrigerQcmInstant(e, t) {
  var i = window._brevetData[e].questions[t],
    n = document.getElementById("ans-" + e + "-" + t).value.trim(),
    o = i.reponse ? i.reponse.match(/R.ponse\s*([A-Z])/i) : null,
    r = i.reponse ? i.reponse.match(/^([A-Z])\s*[-—.]/) : null,
    s = o ? o[1].toUpperCase() : r ? r[1].toUpperCase() : null;
  ["A", "B", "C", "D"].forEach(function (i) {
    var o = document.getElementById("qcm-opt-" + e + "-" + t + "-" + i);
    if (o) {
      o.disabled = true;
      var r = o.querySelector(".qcm-btn-icon");
      i === n && i === s ? (o.classList.add("correct"), r && (r.textContent = "✓")) :
        i === n ? (o.classList.add("wrong"), r && (r.textContent = "✗")) :
          i === s && (o.classList.add("missed"), r && (r.textContent = "✓"));
    }
  });
  var l = s && n === s,
    a = document.getElementById("corr-btn-" + e + "-" + t);
  a && (a.style.display = "none");
  showFeedback(e, t, { pts: l ? i.points : 0, max: i.points, verdict: l ? "ok" : "ko", correction: i.reponse || "Bonne réponse : " + (s || "?") }, i.points);
  updateExScore(e);
}

async function corrigerQuestion(e, t) {
  var i = window._brevetData[e], n = i.questions[t],
    o = document.getElementById("ans-" + e + "-" + t).value.trim(),
    r = document.getElementById("fb-" + e + "-" + t);
  if (/^[A-D]$/.test(o)) { corrigerQcmInstant(e, t); return; }
  var s = document.querySelector("#q-" + e + "-" + t + " .corr-btn");
  if (!o) {
    r.className = "q-feedback ko"; r.style.display = "block";
    r.innerHTML = '<span class="q-pts-earned">0/' + n.points + " pt" + (n.points > 1 ? "s" : "") + "</span>Écris une réponse avant de corriger.";
    return;
  }
  s.disabled = true; s.textContent = "Correction en cours…";
  document.getElementById("ans-" + e + "-" + t).disabled = true;
  var l = 'Tu es un professeur de mathématiques qui corrige un brevet de collège. Exercice : "' + i.titre + '". Énoncé : "' + i.enonce + '". Question ' + n.id + " (" + n.points + " point" + (n.points > 1 ? "s" : "") + ') : "' + n.texte + '". Réponse de l\'élève : "' + o + '". Évalue et réponds UNIQUEMENT en JSON : {"pts":X,"max":' + n.points + ',"verdict":"ok"|"bof"|"ko","correction":"explication courte en 1-2 phrases"}. pts entre 0 et ' + n.points + ".";
  try {
    var a = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 300, messages: [{ role: "user", content: l }] }) }),
      x = (await a.json()).content[0].text.trim().replace(/^```json\s*/, "").replace(/^```\s*/, "").replace(/\s*```$/, "");
    showFeedback(e, t, JSON.parse(x), n.points); updateExScore(e);
  } catch (i) {
    r.className = "q-feedback bof"; r.style.display = "block";
    r.innerHTML = "Erreur lors de la correction. Réessaie.";
    s.disabled = false; s.textContent = "Corriger cette question →";
    document.getElementById("ans-" + e + "-" + t).disabled = false;
  }
}

function showFeedback(e, t, i, n) {
  var o = document.getElementById("fb-" + e + "-" + t), r = Math.min(i.pts, n);
  o.className = "q-feedback " + i.verdict; o.style.display = "block";
  var s = "ok" === i.verdict ? "✓" : "bof" === i.verdict ? "~" : "✗";
  o.innerHTML = '<span class="q-pts-earned">' + s + " " + r + "/" + n + " pt" + (n > 1 ? "s" : "") + "</span>" + i.correction;
  var l = document.getElementById("pts-badge-" + e + "-" + t);
  l.style.background = "ok" === i.verdict ? "#EDFBF0" : "bof" === i.verdict ? "#FFFBEB" : "#FEF2F2";
  l.style.color = "ok" === i.verdict ? "#166534" : "bof" === i.verdict ? "#92400E" : "#991B1B";
  l.textContent = r + "/" + n + " pt" + (n > 1 ? "s" : "");
  window._scores || (window._scores = {}); window._scores[e] || (window._scores[e] = {}); window._scores[e][t] = r;
}

function updateExScore(e) {
  var t = window._brevetData[e], i = t.questions.reduce(function (e, t) { return e + t.points; }, 0), n = 0,
    o = window._scores && window._scores[e] ? window._scores[e] : {};
  t.questions.forEach(function (e, t) { n += o[t] || 0; });
  var r = Math.round(n / i * 100);
  document.getElementById("ex-bar-" + e).style.display = "block";
  document.getElementById("ex-score-val-" + e).textContent = n + " / " + i + " pts";
  document.getElementById("ex-bar-fill-" + e).style.width = r + "%";
  var s = r >= 80 ? "#22C55E" : r >= 50 ? "var(--orange)" : "#EF4444";
  document.getElementById("ex-bar-fill-" + e).style.background = s;
  document.getElementById("ex-score-tag-" + e).textContent = n + "/" + i + " pts";
}

async function corrigerTout() {
  var e = window._brevetData, t = document.querySelector("#submit-row .btn-blue");
  t.textContent = "Correction en cours…"; t.disabled = true;
  document.querySelectorAll(".brevet-answer").forEach(function (e) { e.disabled = true; });
  for (var i = 0; i < e.length; i++) {
    for (var n = e[i], o = 0; o < n.questions.length; o++) await corrigerQuestionSilent(i, o);
    updateExScore(i);
  }
  afficherScoreFinal();
}

async function corrigerQuestionSilent(e, t) {
  var i = window._brevetData[e], n = i.questions[t],
    o = document.getElementById("ans-" + e + "-" + t).value.trim();
  if (/^[A-D]$/.test(o)) { corrigerQcmInstant(e, t); return; }
  if (!o) {
    window._scores || (window._scores = {}); window._scores[e] || (window._scores[e] = {}); window._scores[e][t] = 0;
    showFeedback(e, t, { pts: 0, verdict: "ko", correction: "Pas de réponse fournie." }, n.points); return;
  }
  var r = 'Tu es un professeur de mathématiques. Exercice : "' + i.titre + '". Question ' + n.id + " (" + n.points + " pt" + (n.points > 1 ? "s" : "") + ') : "' + n.texte + '". Réponse : "' + o + '". Réponds UNIQUEMENT en JSON : {"pts":X,"max":' + n.points + ',"verdict":"ok"|"bof"|"ko","correction":"1-2 phrases"}';
  try {
    var s = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 300, messages: [{ role: "user", content: r }] }) }),
      l = (await s.json()).content[0].text.trim().replace(/^```json\s*/, "").replace(/^```\s*/, "").replace(/\s*```$/, "");
    showFeedback(e, t, JSON.parse(l), n.points);
  } catch (i) {
    window._scores || (window._scores = {}); window._scores[e] || (window._scores[e] = {}); window._scores[e][t] = 0;
  }
}

function rendreNote() { afficherScoreFinal(); }

function afficherScoreFinal() {
  var e = window._brevetData, t = 0, i = 0, n = [];
  e.forEach(function (e, o) {
    var r = e.questions.reduce(function (e, t) { return e + t.points; }, 0), s = 0,
      l = window._scores && window._scores[o] ? window._scores[o] : {};
    e.questions.forEach(function (e, t) { s += l[t] || 0; });
    t += r; i += s; n.push({ nom: e.titre, earned: s, max: r }); updateExScore(o);
  });
  var o, r, s, l = t > 0 ? Math.round(i / t * 20 * 10) / 10 : 0;
  l >= 18 ? (o = "Félicitations", r = "#8B5A7A", s = "var(--rose)") :
    l >= 16 ? (o = "Très bien", r = "#fff", s = "var(--orange)") :
      l >= 14 ? (o = "Bien", r = "#fff", s = "#3B82F6") :
        l >= 12 ? (o = "Assez bien", r = "#fff", s = "var(--blue-lt)") :
          l >= 10 ? (o = "Admis", r = "#fff", s = "#8A8DAA") : (o = "À retravailler", r = "#fff", s = "#EF4444");
  var a = n.map(function (e) {
    var t = e.max > 0 ? Math.round(e.earned / e.max * 100) : 0;
    return '<div class="score-ex-row"><span class="score-ex-name">' + e.nom.substring(0, 14) + '</span><div class="score-ex-bar"><div class="score-ex-fill" style="width:' + t + '%"></div></div><span class="score-ex-pts">' + e.earned + "/" + e.max + "</span></div>";
  }).join(""), x = document.getElementById("score-panel");
  x.style.display = "block";
  x.innerHTML = '<div class="score-panel-inner"><div><div class="score-note">Ta note finale</div><div class="score-big">' + l.toString().replace(".", ",") + ' <span style="font-size:28px;font-weight:400;opacity:.5">/20</span></div><div><span class="score-mention" style="background:' + s + ";color:" + r + '">' + o + '</span></div><div style="margin-top:16px;font-size:13px;color:rgba(255,255,255,.5)">' + i + " pts sur " + t + ' au total</div></div><div><div style="font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:16px">détail par exercice</div><div class="score-bars">' + a + '</div><button onclick="sauvegarderEtVoirParcours()" style="margin-top:24px;width:100%;font-size:13px;font-weight:600;padding:13px;border-radius:100px;border:none;cursor:pointer;background:rgba(255,255,255,.15);color:#fff" onmouseover="this.style.background=\'rgba(255,255,255,.25)\'" onmouseout="this.style.background=\'rgba(255,255,255,.15)\'">Ajouter au tableau de bord →</button></div></div>';
  x.scrollIntoView({ behavior: "smooth", block: "center" });
  genererConseils(l, o, n);
}

async function genererConseils(e, t, i) {
  var n = i.filter(function (e) { return e.max > 0 && e.earned / e.max < .6; }).map(function (e) { return e.nom; }),
    o = i.filter(function (e) { return e.max > 0 && e.earned / e.max >= .8; }).map(function (e) { return e.nom; }),
    r = "Un élève de 3e vient de faire un brevet blanc de maths. Note : " + e + "/20 (mention " + t + "). " + (n.length ? "Points faibles : " + n.join(", ") + ". " : "") + (o.length ? "Points forts : " + o.join(", ") + ". " : "") + 'Donne 3 conseils courts et bienveillants. Réponds UNIQUEMENT en JSON : {"conseils":["conseil1","conseil2","conseil3"]}';
  try {
    var s = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 400, messages: [{ role: "user", content: r }] }) }),
      l = (await s.json()).content[0].text.trim().replace(/^```json\s*/, "").replace(/^```\s*/, "").replace(/\s*```$/, ""),
      a = JSON.parse(l);
    window._dernierConseils = a.conseils;
  } catch (e) {
    window._dernierConseils = ["Revois les notions où tu as perdu des points.", "Refais des exercices similaires.", "Continue, la régularité paie !"];
  }
  sauvegarderSession(e, t, i);
}

function sauvegarderSession(e, t, i) {
  var n = JSON.parse(localStorage.getItem("brevet_sessions") || "[]"),
    o = (new Date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }),
    r = window._brevetData.map(function (e) { return e.notion; }).filter(function (e, t, i) { return i.indexOf(e) === t; });
  n.unshift({ date: o, note: e, mention: t, notions: r.join(", "), scoresParEx: i, conseils: window._dernierConseils || [] });
  n.length > 20 && (n = n.slice(0, 20));
  localStorage.setItem("brevet_sessions", JSON.stringify(n));
  window._sessionsData = n;
}

function sauvegarderEtVoirParcours() {
  window.location.href = 'parcours.html';
}

// ---- Page Parcours ----
function renderHistorique() {
  var e = JSON.parse(localStorage.getItem("brevet_sessions") || "[]"),
    t = document.getElementById("histo-dynamique");
  if (!t) return;
  if (e.length) {
    var i = "";
    e.forEach(function (t, n) {
      var o = getMentionStyle(t.mention), r = "";
      t.scoresParEx && t.scoresParEx.forEach(function (e) {
        var t = e.max > 0 ? Math.round(e.earned / e.max * 100) : 0,
          i = t >= 80 ? "#22C55E" : t >= 50 ? "var(--orange)" : "#EF4444";
        r += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="font-size:11px;color:var(--muted);width:80px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + e.nom.substring(0, 12) + '</span><div style="flex:1;height:5px;background:rgba(0,0,0,.06);border-radius:100px;overflow:hidden"><div style="height:100%;width:' + t + "%;background:" + i + ';border-radius:100px"></div></div><span style="font-size:11px;font-weight:600;color:var(--muted);width:36px;text-align:right">' + e.earned + "/" + e.max + "</span></div>";
      });
      var s = "";
      t.conseils && t.conseils.length && (s = '<div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(0,0,0,.06)"><div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:8px">conseils personnalisés</div><ul style="list-style:none;display:flex;flex-direction:column;gap:6px">',
        t.conseils.forEach(function (e) { s += '<li style="font-size:13px;color:var(--ink);line-height:1.5;display:flex;gap:8px"><span style="color:var(--blue);flex-shrink:0">→</span>' + e + "</li>"; }),
        s += "</ul></div>");
      i += '<div style="background:var(--white);border-radius:16px;padding:28px;margin-bottom:10px"><div style="display:grid;grid-template-columns:auto 1fr auto;gap:20px;align-items:start"><div style="text-align:center"><div style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:4px">brevet</div><div style="font-size:28px;font-weight:700;color:var(--blue);letter-spacing:-.03em;line-height:1">' + String(e.length - n).padStart(2, "0") + '</div><div style="font-size:11px;color:var(--muted);margin-top:4px;white-space:nowrap">' + t.date + '</div></div><div><div style="font-size:12px;color:var(--muted);font-weight:300;margin-bottom:10px">' + t.notions + "</div>" + r + s + '</div><div style="text-align:right"><div style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:4px">note</div><div style="font-size:36px;font-weight:700;color:var(--blue);letter-spacing:-.04em;line-height:1">' + t.note.toString().replace(".", ",") + ' <span style="font-size:14px;font-weight:400;color:var(--muted)">/20</span></div><span style="display:inline-block;margin-top:8px;font-size:11px;font-weight:600;padding:4px 14px;border-radius:100px;background:' + o.bg + ";color:" + o.color + '">' + t.mention + "</span></div></div></div>";
    });
    t.innerHTML = i;
    var n = e.reduce(function (e, t) { return e + t.note; }, 0) / e.length;
    n = Math.round(10 * n) / 10;
    var o = document.getElementById("stat-moy");
    o && (o.textContent = n.toString().replace(".", ","));
    var r = document.getElementById("mention-actuelle-label");
    r && (r.textContent = getMentionLabel(n));
    var s = document.getElementById("mention-actuelle-note");
    s && (s.textContent = n.toString().replace(".", ",") + " / 20");
    var l = document.getElementById("stat-nb");
    l && (l.textContent = e.length);
  } else {
    t.innerHTML = '<p style="color:var(--muted);font-size:14px;padding:20px 0">Aucun brevet réalisé pour l\'instant. <span style="color:var(--blue);cursor:pointer" onclick="goTo(\'generer\')">Génère ton premier brevet →</span></p>';
  }
}

function getMentionStyle(e) {
  return "Félicitations" === e ? { bg: "#F9F0F7", color: "#8B5A7A" } :
    "Très bien" === e ? { bg: "#FFF0E8", color: "var(--orange)" } :
      "Bien" === e ? { bg: "#EEF2FF", color: "var(--blue)" } :
        "Assez bien" === e ? { bg: "rgba(189,212,231,.3)", color: "#5a7a9a" } :
          "Admis" === e ? { bg: "rgba(0,0,0,.06)", color: "var(--muted)" } :
            { bg: "#FEF2F2", color: "#991B1B" };
}

function getMentionLabel(e) {
  return e >= 18 ? "Félicitations" : e >= 16 ? "Très bien" : e >= 14 ? "Bien" : e >= 12 ? "Assez bien" : e >= 10 ? "Admis" : "À retravailler";
}

// ---- Abonnement ----
function togglePricing(e) {
  var t = document.getElementById("tog-month"), i = document.getElementById("tog-year"),
    n = document.getElementById("price-main"), o = document.getElementById("price-period"), r = document.getElementById("price-sub");
  "month" === e ? (t.style.background = "rgba(255,255,255,0.2)", t.style.color = "#fff", i.style.background = "transparent", i.style.color = "rgba(255,255,255,0.5)", n.textContent = "9€", o.textContent = "/mois", r.textContent = "7 jours essai gratuit sans CB") :
    (i.style.background = "rgba(255,255,255,0.2)", i.style.color = "#fff", t.style.background = "transparent", t.style.color = "rgba(255,255,255,0.5)", n.textContent = "6€", o.textContent = "/mois", r.textContent = "72€/an · 2 mois offerts · sans engagement");
}
