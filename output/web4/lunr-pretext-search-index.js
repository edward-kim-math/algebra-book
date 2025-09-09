var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "    "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Insert AAAA  second  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Hello to you the student. As this course has evolved to support our computer science major, so has the text. The current version of the book is intended to support inquiry-based teaching for understanding that is so crucial for future teachers, while also providing the necessary mathematical foundation and application-based motivation for computer science students. While teaching the course in Spring 2024 using an early version of this edition, I was pleasantly surprised by how many students reported that they, for the first time, saw how useful math could be in the real world. I hope that this experience can be replicated in other classes using this text.  This book is intended to be used in a class taught using problem-oriented or inquiry-based methods. Each section begins with a preview of the content that includes an open-ended Investigate! motivating question, as well as a structured preview activity. The preview activities are carefully scaffolded to provide an entry-point to the section's topic and to prime students to engage deeply in the material. Depending on the pace of the class, I have found success assigning only the section preview before class, using the preview activity as in-class group work, or assigning the entire section to be read before class (each section concludes with a small set of reading questions that can be assigned to encourage students to actually read). For those readers using this book for self-study, the organization of the sections will hopefully mimic the style of a rich inquiry-based classroom.   Edward D. Kim  University of Wisconsin-La Crosse   "
},
{
  "id": "frontmatter-7",
  "level": "1",
  "url": "frontmatter-7.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book",
  "body": " How to Use This Book  In addition to expository text, this book has a few features designed to encourage you to interact with the mathematics.   Investigate! questions  Sprinkled throughout the sections (usually at the very beginning of a topic) you will find open-ended questions designed to engage you with the topic soon to be discussed. You really should spend some time thinking about, or even working through, these problems before reading the section. However, don't worry if you cannot find a satisfying solution right away. The goal is to pique your interest, so you will read what is next looking for answers.    Preview Activities  Most sections include a structured preview activity. These contain leading questions that you should be able to completely answer before reading the section. The idea is that the questions prime you to engage meaningfully with the new content ahead. If you are using the online version, most of these questions will provide you with immediate feedback so you can be confident moving forward.    Examples  I have tried to include the correct number of examples. For those examples that include problems , full solutions are included. Before reading the solution, try to at least have an understanding of what the problem is asking. Unlike some textbooks, the examples are not meant to be all-inclusive for problems you will see in the exercises. They should not be used as a blueprint for solving other problems. Instead, use the examples to deepen your understanding of the concepts and techniques discussed in each section. Then use this understanding to solve the exercises at the end of each section.    Exercises  You get good at math through practice. Each section concludes with practice problems meant to solidify concepts and basic skills presented in that section; the online version provides immediate feedback on these problems. There are then additional exercises that are more challenging and open-ended. These might be assigned as written homework or used in class as group work. Some of the additional exercises have hints or solutions in the back of the book, but use these as little as possible. Struggle is good for you. At the end of each chapter, a larger collection of similar exercises is included (as a sort of chapter review ) which might bridge the material of different sections in that chapter.    Interactive Online Version  For those of you reading this in print or as a PDF, I encourage you to also check out the interactive online version. Many of the preview activities and exercises are interactive and can give you immediate feedback. Some of these have randomized components, allowing you to practice many similar versions of the same problems until you master the topic.  Hints and solutions to examples are also hidden away behind an extra click to encourage you to think about the problem before reading the solution. There is a good search feature available as well, and the index has expandable links to see the content without jumping to the page immediately. There is also a python scratch pad (the pencil icon) so you can try out some code if you feel so inclined.  Additional interactivity is planned. These bonus features will be added on a rolling basis, so keep an eye out!  You can view the interactive version for free at or by scanning the QR code below.   QR Code to https:\/\/discrete\/openmathbooks.org     "
},
{
  "id": "sec_intro-intro",
  "level": "1",
  "url": "sec_intro-intro.html",
  "type": "Section",
  "number": "0.1",
  "title": "What is Discrete Mathematics?",
  "body": " What is Discrete Mathematics?   dis crete \/ dis'krët.   Adjective : Individually separate and distinct.   Synonyms : separate - detached - distinct - abstract.   Defining discrete mathematics is hard because defining mathematics is hard. What is mathematics? The study of numbers? In part yes, but you also study functions and lines and triangles and parallelepipeds and vectors and . Or perhaps you want to say that mathematics is a collection of tools that allow you to solve problems. What sort of problems? Well, those that involve numbers, functions, lines, triangles, . Whatever your conception of what mathematics is, try applying the concept of discrete to it, as defined above. Some math fundamentally deals with stuff that is individually separate and distinct.  In an algebra or calculus class, you might have found a particular set of numbers (perhaps they constitute the range of a function). You would represent this set as an interval: is the range of since the set of outputs of the function are all real numbers 0 and greater. This set of numbers is NOT discrete. The numbers in the set are not separated by much at all. In fact, take any two numbers in the set and there are infinitely many more between them that are also in the set.  Discrete math could still ask about the range of a function, but the set would not be an interval. Consider the function that gives the number of children of each person reading this. What is the range? I'm guessing it is something like . Maybe 5 or 6 is in there too. Even larger natural numbers for old ladies who live in shoes. But certainly nobody reading this has 1.32419 children. This output set is discrete because the elements are separate. The inputs to the function also form a discrete set because each input is an individual person.  There are many discrete mathematical objects besides sets of numbers; we will introduce some of these in REMOVED reference. Studying these discrete structures is the main focus of discrete mathematics and this book. However, the reason we want to study these structures is because they provide a way to model real-world problems. Many of the problems discussed in this book are admittedly contrived and clearly fictional, but hopefully you will see how these toy problems can be generalized to actually represent problems that people would care about in reality.   To get a feel for the subject, let's consider the types of problems you solve in discrete math. Here are a few simple examples:    Note: Throughout the book you will see Investigate! activities like this one. Answer the questions in these as best you can to give yourself a feel for what is coming next.      The most popular mathematician in the world is throwing a party for all of his friends. To kick things off, they decide that everyone should shake hands. Assuming all 10 people at the party each shake hands with every other person (but not themselves, obviously) exactly once, how many handshakes take place?    At the warm-up event for Oscar's All-Star Hot Dog Eating Contest, Al ate one hot dog. Bob then showed him up by eating three hot dogs. Not to be outdone, Carl ate five. This continued with each contestant eating two more hot dogs than the previous contestant. How many hot dogs did Zeno (the 26th and final contestant) eat? How many hot dogs were eaten in total?    After excavating for weeks, you finally arrive at the burial chamber. The room is empty except for two large chests. On each is carved a message (strangely in English):   Exactly one of these chests contains a treasure, while the other is filled with deadly immortal scorpions.  For either chest, if the chest's message is true, then the chest contains treasure.   The problem is, you don't know whether the messages are true or false. What do you do?    Back in the days of yore, five small towns decided they wanted to build roads directly connecting each pair of towns. While the towns had plenty of money to build roads as long and as winding as they wished, it was very important that the roads not intersect with each other (as stop signs had not yet been invented). Also, tunnels and bridges were not allowed, for moral reasons. Is it possible for each of these towns to build a road to each of the four other towns without creating any intersections?      As you consider the problems above, don't worry if it is not obvious to you what the solutions are. We are more interested here in what sort of information we need to be able to answer the questions. How can we represent the situation using individually separate and distinct objects? Don't read on until you have thought about at least this for each of the questions.  Ready? Here are some things you might have thought about:   The people at the party are individuals. We can consider the set of people. We can also consider sets of pairs of people, since it takes exactly two people to shake hands. So the question is really, how many pairs can you make using elements from a 10-element set?  For example, if there were three people at the party, conveniently named , , and , then the pairs would be , , and . Or should we include , , and as well?    To count the number of hot dogs eaten, either by an individual or in total, we could use a sequence of integers (whole numbers). The th term in the sequence might represent the number of hot dogs eaten by the th contestant. We can consider a second sequence, also of integers, that gives the total number of hot dogs eaten by the first contestants combined.  The solution to the problem will then be the value of the 26th term in the sequence. To help us find this, we could consider the rate of growth of the sequences, as well as how these two sequences relate to each other.    Logic questions also belong under the discrete math umbrella: Each statement can have a value of True or False (and there is nothing in-between). To answer questions like that of the chests of scorpions, we must understand the structure of the statements, and how the truth values of the parts of the statements interact to determine the truth value of the whole statement.    The last question is about a discrete structure called a graph , not to be confused with a graph of a function or set of points. We can use a graph to represent which elements of a set (or towns) are related to each other (or connected by a road). In this case, the question becomes, can we draw a graph with five vertices (towns) and ten edges (roads) such that no two edges intersect?     The four problems above illustrate the four main topics of this book: combinatorics (the theory of ways things combine ; in particular, how to count these ways), sequences , symbolic logic , and graph theory . However, there are other topics that are also considered part of discrete mathematics, including computer science, abstract algebra, number theory, game theory, probability, and geometry (some of these, particularly the last two, have both discrete and non-discrete variants).  Ultimately the best way to learn what discrete math is about is to do it. Let's get started! Before we can begin answering more complicated (and fun) problems, we will consider a very brief overview of the types of discrete structures we will be using.    Each section of the book will end with a small number of Reading Questions like the ones below. These are designed to help you reflect on what you have read. In particular, the final reading question asks you to ask a question of your own. Thinking about what you don't yet know is a wonderful way to further your understanding of what you do.     Right now, how would you describe what discrete mathematics is about, if you were telling your friends about the class you are in? Write one or two sentences.       What questions do you have after reading this section? Write at least one question about the content of this section that you are curious about.      "
},
{
  "id": "sec_intro-intro-6",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structures "
},
{
  "id": "sec_intro-intro-8",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-8",
  "type": "Investigate!",
  "number": "0.1",
  "title": "",
  "body": "  Note: Throughout the book you will see Investigate! activities like this one. Answer the questions in these as best you can to give yourself a feel for what is coming next.      The most popular mathematician in the world is throwing a party for all of his friends. To kick things off, they decide that everyone should shake hands. Assuming all 10 people at the party each shake hands with every other person (but not themselves, obviously) exactly once, how many handshakes take place?    At the warm-up event for Oscar's All-Star Hot Dog Eating Contest, Al ate one hot dog. Bob then showed him up by eating three hot dogs. Not to be outdone, Carl ate five. This continued with each contestant eating two more hot dogs than the previous contestant. How many hot dogs did Zeno (the 26th and final contestant) eat? How many hot dogs were eaten in total?    After excavating for weeks, you finally arrive at the burial chamber. The room is empty except for two large chests. On each is carved a message (strangely in English):   Exactly one of these chests contains a treasure, while the other is filled with deadly immortal scorpions.  For either chest, if the chest's message is true, then the chest contains treasure.   The problem is, you don't know whether the messages are true or false. What do you do?    Back in the days of yore, five small towns decided they wanted to build roads directly connecting each pair of towns. While the towns had plenty of money to build roads as long and as winding as they wished, it was very important that the roads not intersect with each other (as stop signs had not yet been invented). Also, tunnels and bridges were not allowed, for moral reasons. Is it possible for each of these towns to build a road to each of the four other towns without creating any intersections?     "
},
{
  "id": "sec_intro-intro-10",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence graph "
},
{
  "id": "sec_intro-intro-11",
  "level": "2",
  "url": "sec_intro-intro.html#sec_intro-intro-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "combinatorics sequences symbolic logic graph theory "
},
{
  "id": "rq-intro-intro-about",
  "level": "2",
  "url": "sec_intro-intro.html#rq-intro-intro-about",
  "type": "Reading Question",
  "number": "0.1.1",
  "title": "",
  "body": "  Right now, how would you describe what discrete mathematics is about, if you were telling your friends about the class you are in? Write one or two sentences.    "
},
{
  "id": "rq-intro-intro-q",
  "level": "2",
  "url": "sec_intro-intro.html#rq-intro-intro-q",
  "type": "Reading Question",
  "number": "0.1.2",
  "title": "",
  "body": "  What questions do you have after reading this section? Write at least one question about the content of this section that you are curious about.    "
},
{
  "id": "sec-operations",
  "level": "1",
  "url": "sec-operations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Operations",
  "body": " Operations  Algebra provides a powerful way of solving many kinds of questions Algebra achieves this by enhancing arithmetic. Arithmetic focuses on the result of operations like addition and multiplication when using numbers that are constant. The contribution of algebra is to enhance arithmetic with variables and with geometry, with a focus on how the numbers appearing a problem relate to each other. With these extra ways of thinking, algebra allows us to answer many questions that are really hard to think about using arithmetic alone.  I want your experience in math to be as smooth and as enjoyable as possible. I want this for you, even if you can recall being frustrated with mathematics. To achieve that goal, I am deliberately writing this book for you the student, and not for your teacher. I hope to take each part of algebra that has the potential to be challenging and really break it down step-by-step. This does mean that I may ask you to try something different from the way you have done it in the past. I might also ask you to think about things that you haven't really thought about much before. I hope you'll give it a shot: what do you have to lose by trying this subject in a new way? In fact, I encourage you to really think about the language used in mathematics.   Pay attention to the lanugage of mathematics.   As an example of this, when writing be sure to say one of the following:  to the  to the th power  raised to the  raised to the th power  If we only say then slightly pause to say this focuses on the specific individual symbols. The bigger problem is that saying followed by is taken to mean . Why is this a problem? Because and are not equal. In fact, when then simplifies to , but simplifies to .   Pictures and Language  sticks, rectangles, terms, factors    Order of Operations  Sequencing the operations in a given expression   Text of section.  Text of section.  Text of section.  Text of section.  Text of section.  Text of section.  "
},
{
  "id": "sec-operations-4",
  "level": "2",
  "url": "sec-operations.html#sec-operations-4",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": " Pay attention to the lanugage of mathematics.  "
},
{
  "id": "sec-expressions-with-fractions",
  "level": "1",
  "url": "sec-expressions-with-fractions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Expressions with Fractions",
  "body": " Expressions with Fractions  Text of section.  "
},
{
  "id": "sec-solving-equations",
  "level": "1",
  "url": "sec-solving-equations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Solving Equations",
  "body": " Solving Equations  Intro to equations.  Technique with one copy of the variable.  Multiple terms.  Rewriting as multiple terms.  Strategy comparison.  "
},
{
  "id": "sec-equations-with-fractions",
  "level": "1",
  "url": "sec-equations-with-fractions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Equations with Fractions",
  "body": " Equations with Fractions  Text of section.  "
},
{
  "id": "sec-exponents",
  "level": "1",
  "url": "sec-exponents.html",
  "type": "Section",
  "number": "1.5",
  "title": "Exponents",
  "body": " Exponents  Text of section.  "
},
{
  "id": "sec-radicals",
  "level": "1",
  "url": "sec-radicals.html",
  "type": "Section",
  "number": "1.6",
  "title": "Radicals",
  "body": " Radicals  Text of section.  "
},
{
  "id": "sec-factoring-and-expansion",
  "level": "1",
  "url": "sec-factoring-and-expansion.html",
  "type": "Section",
  "number": "1.7",
  "title": "Factoring and Expansion",
  "body": " Factoring and Expansion  Text of section.  "
},
{
  "id": "sec-rational-expressions",
  "level": "1",
  "url": "sec-rational-expressions.html",
  "type": "Section",
  "number": "1.8",
  "title": "Rational Expressions",
  "body": " Rational Expressions  Text of section.  "
},
{
  "id": "sec-solving-equations-revisited",
  "level": "1",
  "url": "sec-solving-equations-revisited.html",
  "type": "Section",
  "number": "1.9",
  "title": "Solving Equations Revisited",
  "body": " Solving Equations Revisited  Text of section.  "
},
{
  "id": "sec-sample-code",
  "level": "1",
  "url": "sec-sample-code.html",
  "type": "Section",
  "number": "1.10",
  "title": "Sample code",
  "body": " Sample code    After completing this section, you should be able to do the following.     Explain the conditions under which an implication is true.    Identify statements as equivalent to a given implication or its converse.    Explain the relationship between the truth values of an implication, its converse, and its contrapositive.      Section Preview    knights and knaves  puzzle knights and knaves  While walking through a fictional forest, you encounter three trolls guarding a bridge. Each is either a knight , who always tells the truth, or a knave , who always lies. The trolls will not let you pass until you correctly identify each as either a knight or a knave. Each troll makes a single statement:   Troll 1: If I am a knave, then there are exactly two knights here.  Troll 2: Troll 1 is lying.  Troll 3: Either we are all knaves, or at least one of us is a knight.   Which troll is which? self reference reference, self  reference, self self reference       Spend a few minutes thinking about the Investigate problem above. What could you conclude if you knew Troll 1 really was a knave (i.e., their statement was false)? Share your initial thoughts on this.        Argument  argument  premise  conclusion  valid  sound  proof   An argument  argument is a sequence of statements, the last of which is called the conclusion  conclusion and the rest of which are called premises . premises   An argument is said to be valid  valid provided the conclusion must be true whenever the premises are all true. An argument is invalid if it is not valid; that is, all the premises can be true, and the conclusion could still be false.  An argument is sound provided it is valid and all the premises are true. A proof of a statement is a sound argument whose conclusion is the statement.     Our definitions of argument , valid argument , and sound argument are the same ones used in philosophy, the other primary academic discipline concerned with logic and reasoning.    cookie   Consider the following two arguments:     If Edith eats her vegetables, then she can have a cookie.     Edith eats her vegetables.     Edith gets a cookie.       Florence must eat her vegetables to get a cookie.     Florence eats her vegetables.     Florence gets a cookie.    (The symbol    therefore  means therefore )  Are these arguments valid?    Do you agree that the first argument is valid but the second argument is not? We will soon develop a better understanding of the logic involved in this analysis, but if your intuition agrees with this assessment, then you are in good shape.  Notice the two arguments look almost identical. Edith and Florence both eat their vegetables. In both cases, there is a connection between the eating of vegetables and cookies. Yet we claim that it is valid to conclude that Edith gets a cookie, but not that Florence does. The difference must be in the connection between eating vegetables and getting cookies. We need to be skilled at reading and comprehending these sentences. Do the two sentences mean the same thing?  Unfortunately, in everyday language we are often sloppy, and you might be tempted to say they are equivalent. But notice that just because Florence must eat her vegetables, we have not claimed that doing so would be enough (she might also need to clean her room, for example). In everyday (non-mathematical) practice, you might be tempted to say this other direction is implied. In mathematics, we never get that luxury.     The arguments in the example above illustrate another important point: Even if you don't care about the advancement of human knowledge in the field of mathematics, becoming skilled at analyzing arguments is useful. And even if you don't want to give your grandmother a cookie. If you are using mathematics to solve problems in some other discipline, it is still necessary to demonstrate that your solution is correct. You better have a good argument that it is!   "
},
{
  "id": "sec-sample-code-2",
  "level": "2",
  "url": "sec-sample-code.html#sec-sample-code-2",
  "type": "Objectives",
  "number": "1.10",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     Explain the conditions under which an implication is true.    Identify statements as equivalent to a given implication or its converse.    Explain the relationship between the truth values of an implication, its converse, and its contrapositive.    "
},
{
  "id": "sec-sample-code-3-2",
  "level": "2",
  "url": "sec-sample-code.html#sec-sample-code-3-2",
  "type": "Investigate!",
  "number": "1.1",
  "title": "",
  "body": " knights and knaves  puzzle knights and knaves  While walking through a fictional forest, you encounter three trolls guarding a bridge. Each is either a knight , who always tells the truth, or a knave , who always lies. The trolls will not let you pass until you correctly identify each as either a knight or a knave. Each troll makes a single statement:   Troll 1: If I am a knave, then there are exactly two knights here.  Troll 2: Troll 1 is lying.  Troll 3: Either we are all knaves, or at least one of us is a knight.   Which troll is which? self reference reference, self  reference, self self reference   "
},
{
  "id": "ip_sec_logic-statements",
  "level": "2",
  "url": "sec-sample-code.html#ip_sec_logic-statements",
  "type": "Try it",
  "number": "1.10.1",
  "title": "",
  "body": "  Spend a few minutes thinking about the Investigate problem above. What could you conclude if you knew Troll 1 really was a knave (i.e., their statement was false)? Share your initial thoughts on this.    "
},
{
  "id": "def-argument",
  "level": "2",
  "url": "sec-sample-code.html#def-argument",
  "type": "Definition",
  "number": "1.10.2",
  "title": "Argument.",
  "body": " Argument  argument  premise  conclusion  valid  sound  proof   An argument  argument is a sequence of statements, the last of which is called the conclusion  conclusion and the rest of which are called premises . premises   An argument is said to be valid  valid provided the conclusion must be true whenever the premises are all true. An argument is invalid if it is not valid; that is, all the premises can be true, and the conclusion could still be false.  An argument is sound provided it is valid and all the premises are true. A proof of a statement is a sound argument whose conclusion is the statement.   "
},
{
  "id": "sec-sample-code-5-1",
  "level": "2",
  "url": "sec-sample-code.html#sec-sample-code-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "argument valid argument sound argument "
},
{
  "id": "sec-sample-code-6",
  "level": "2",
  "url": "sec-sample-code.html#sec-sample-code-6",
  "type": "Example",
  "number": "1.10.3",
  "title": "",
  "body": " cookie   Consider the following two arguments:     If Edith eats her vegetables, then she can have a cookie.     Edith eats her vegetables.     Edith gets a cookie.       Florence must eat her vegetables to get a cookie.     Florence eats her vegetables.     Florence gets a cookie.    (The symbol    therefore  means therefore )  Are these arguments valid?    Do you agree that the first argument is valid but the second argument is not? We will soon develop a better understanding of the logic involved in this analysis, but if your intuition agrees with this assessment, then you are in good shape.  Notice the two arguments look almost identical. Edith and Florence both eat their vegetables. In both cases, there is a connection between the eating of vegetables and cookies. Yet we claim that it is valid to conclude that Edith gets a cookie, but not that Florence does. The difference must be in the connection between eating vegetables and getting cookies. We need to be skilled at reading and comprehending these sentences. Do the two sentences mean the same thing?  Unfortunately, in everyday language we are often sloppy, and you might be tempted to say they are equivalent. But notice that just because Florence must eat her vegetables, we have not claimed that doing so would be enough (she might also need to clean her room, for example). In everyday (non-mathematical) practice, you might be tempted to say this other direction is implied. In mathematics, we never get that luxury.   "
},
{
  "id": "sec-sample-code-7",
  "level": "2",
  "url": "sec-sample-code.html#sec-sample-code-7",
  "type": "Remark",
  "number": "1.10.4",
  "title": "",
  "body": " The arguments in the example above illustrate another important point: Even if you don't care about the advancement of human knowledge in the field of mathematics, becoming skilled at analyzing arguments is useful. And even if you don't want to give your grandmother a cookie. If you are using mathematics to solve problems in some other discipline, it is still necessary to demonstrate that your solution is correct. You better have a good argument that it is!  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
