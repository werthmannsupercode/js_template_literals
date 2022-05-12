// Lev1_1

let ism = "Michaela";
let nachName = "Werthmann";
let alter = "34 Jahre";
let geburtsort = "Schweinfurt";
let groesse = "1.65m";
let gewicht = "zu schwer";
let hobbys = "Selbstversorgung";
let computerspiele = "sind echt nervig";
let lieblingsessen = "Mantu";
let lieblingssport = "Fahrrad fahren";
let lieblingsmodemarke = "Gudrun Sjöden";
let lieblingsjahreszeit = "Frühling";
let lieblingsurlaubsort = "Südfrankreich";

document.write("Hi, ich bin " + ism + " " + nachName + ". Ich bin " + alter + " alt und komme aus " + geburtsort + ". Ich bin " + groesse + " groß und leider " + gewicht + ". Meine Freizeit verbringe ich mit allen Arbeiten rund um das Thema " + hobbys + " und Computerspiele " + computerspiele + ". Ich esse sehr gerne " + lieblingsessen + " und mein Lieblingssport ist " + lieblingssport + ". Hätte ich genug Geld, würde ich am liebsten nur Kleider von " + lieblingsmodemarke + " tragen und im " + lieblingsjahreszeit + " nach " + lieblingsurlaubsort + " reisen.");

document.write("<br>");
document.write("<br>");

document.write(`Hi ich bin ${ism} ${nachName}. Ich bin ${alter} alt und komme aus ${geburtsort}. Ich bin ${groesse} groß und leider ${gewicht}. Meine Freizeit verbringe ich mit allen Arbeiten rund um das Thema ${hobbys} und Computerspiele ${computerspiele}. Ich essse sehr gerne ${lieblingsessen} und mein Lieblingssport ist ${lieblingssport}. Hätte ich genug Geld, würde ich am Liebsten nur Kleider von ${lieblingsmodemarke} tragen und im ${lieblingsjahreszeit} nach ${lieblingsurlaubsort} reisen.`);

document.write("<br>");
document.write("<br>");

// Erstelle für den Text des Songs passende Variablen. 
// Schreibe mit Hilfe von String concatenation und Template literals.
// Jeder sich wiederholende Reim und Refrain soll durch eine Variable ersetzt werden. 
// Songtexte, Beispiele für Variablen:

// Brain Damage Songtext
// The lunatic is on the grass
// The lunatic is on the grass
// Remembering games and daisy chains and laughs
// Got to keep the loonies on the path

// The lunatic is in the hall
// The lunatics are in my hall
// The paper holds their folded faces to the floor
// And every day the paperboy brings more


// And if the dam breaks open many years too soon
// And if there is no room upon the hill
// And if your head explodes with dark forebodings too
// I'll see you on the dark side of the moon

// The lunatic is in my head
// The lunatic is in my head
// You raise the blade, you make the change
// You rearrange me 'til I'm sane
// You lock the door
// And throw away the key
// There's someone in my head but it's not me

// And if the cloud bursts, thunder in your ear
// You shout and no one seems to hear
// And if the band you're in starts playing different tunes
// I'll see you on the dark side of the moon

// Lev1_2

let a = "The lunatic is on the grass<br>"
let b = "The lunatic is in my head<br>"
let c = "I'll see you on the dark side of the moon<br><br>"

document.write(`Brain Damage Songtext<br><br>${a}${a}Remembering games and daisy chains and laughs<br>Got to keep the loonies on the path<br><br>The lunatic is in the hall<br>The lunatics are in my hall<br>The paper holds their folded faces to the floor<br>And every day the paperboy brings more<br><br>And if the dam breaks open many years too soon<br>And if there is no room upon the hill<br>And if your head explodes with dark forebodings too<br>${c}${b}${b}You raise the blade, you make the change<br>You rearrange me 'til I'm sane<br>You lock the door<br>And throw away the key<br>There's someone in my head but it's not me<br><br>And if the cloud bursts, thunder in your ear<br>You shout and no one seems to hear<br>And if the band you're in starts playing different tunes<br>${c}`);

document.write("<br>");
document.write("<br>");

document.write("Brain Damage Songtext<br><br>" + a + a + "Remembering games and daisy chains and laughs<br>Got to keep the loonies on the path<br><br>" + "The lunatic is in the hall<br>The lunatics are in my hall<br>The paper holds their folded faces to the floor<br>And every day the paperboy brings more<br><br>And if the dam breaks open many years too soon<br>And if there is no room upon the hill<br>And if your head explodes with dark forebodings too<br>" + c + b + b + "You raise the blade, you make the change<br>You rearrange me 'til I'm sane<br>You lock the door<br>And throw away the key<br>There's someone in my head but it's not me<br><br>And if the cloud bursts, thunder in your ear<br>You shout and no one seems to hear<br>And if the band you're in starts playing different tunes<br>" + c);


