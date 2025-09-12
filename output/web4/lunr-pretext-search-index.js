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
  "body": " Operations    In this section, we learn how to:    Simplify an expression using the Order of Operations.  Analyze a non-constant expression using the Order of Operations.  Describe expressions and their parts using the words sum, term, product, and factor.  Construct geometric representations of addition and multiplication.  Justify major algebraic formulas geometrically.  Connect collecting like terms to the Distributive Law.    Algebra provides a powerful way of solving many kinds of questions Algebra achieves this by enhancing arithmetic. Arithmetic focuses on the result of operations like addition and multiplication when using numbers that are constant. The contribution of algebra is to enhance arithmetic with variables and with geometry, with a focus on how the numbers appearing a problem relate to each other. With these extra ways of thinking, algebra allows us to answer many questions that are really hard to think about using arithmetic alone.  I want your experience in math to be as smooth and as enjoyable as possible. I want this for you, even if you can recall being frustrated with mathematics. To achieve that goal, I am deliberately writing this book for you the student, and not for your teacher. I hope to take each part of algebra that has the potential to be challenging and really break it down step-by-step. This does mean that I may ask you to try something different from the way you have done it in the past. I might also ask you to think about things that you haven't really thought about much before. I hope you'll give it a shot: what do you have to lose by trying this subject in a new way? In fact, I encourage you to really think about the language used in mathematics.   Pay attention to the language of mathematics.   As an example of this, when writing be sure to say one of the following:  to the  to the th power  raised to the  raised to the th power  If we only say then slightly pause to say this focuses on the specific individual symbols. The bigger problem is that saying followed by is taken to mean . Why is this a problem? Because and are not equal. In fact, when then simplifies to , but simplifies to .   Order of Operations  We will take a little time to make sure that everyone is on the same page regarding the Order of Operations. Before we go any further, we should describe what we mean by an expression.    An expression is mathematical notation representing a number.     An expression may consist of just a single constant such as or , or can be a variable representing a number such as or , or can be a combination of constants and variables connected by operations such as addition, subtraction, multiplication, division, and exponentiation.    Both and are examples of expressions. Both of these expressions are constants .    Writing is another expressions. This is an expression even if we haven't simplified this to the value . Like the two expressions in the previous example, the expression shown here (both the unsimplified and the simplified versions) is a constant , since the expression lacks any variable(s).    Both and are examples of expressions which mention the variable . In the first expression, the variable is written once. In the second expression, the variable is written twice.    The expression mentions two variables. Since one or more variables appear, this expression is not a constant.   Please note that an expression does not contain an equal sign. For example, is not an expression. The notation that we just wrote instead states that one exrpession is equal to another expression.  We need the Order of Operations because this it is easy to misinterpret an expression if we do not all agree on how to read expressions. The Order of Operations is a set of rules that tells us the order in which to evaluate (and more generally read) an expression.   Order of Operations  An expression must always be simplified and read by following the Order of Operations :  Parentheses  Exponents  Multiplication and Division (from left to right)  Addition and Subtraction (from left to right)  In addition, every time you write an expression, ensure your writing is based on the Order of Operations.    By the time we get to the third part of the Order of Operations, all exponents would have been evaluated. At this point, we look for any multiplication or division. If there is both multiplication and division, we evaluate them from left to right. It is not true that multiplication must be done before division. All divisions and multiplications that we see have the same level of precedence, and we evaluate them scanning from left to right in that order.    Similarly, by the time we get to the last part of Order of Operations, all multiplications and divisions would have been handled. That means that what remains of our expressions should only have addition and subtraction operations remaining. These should be handled from left to right.    The Order of Operations is sometimes remembered by the acronym PEMDAS, which stands for Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.  Because of the way that PEMDAS is often taught, many people mistakenly believe that multiplication must be done before division, and addition must be done before subtraction. This is not true. For this reason, some people prefer the acronym GEMA, which stands for Grouping symbols, Exponents, Multiplication and Division, Addition and Subtraction. In the acronym GEMA, the G is used to indicate that there are many kinds of grouping symbols, not just parentheses. Also, the multiplication and division are addressed together in the M , and addition and subtraction are addressed together in the A .     Simplify the expression .    We will simplify the expression by following the Order of Operations. First, notice that there are no parentheses, so we move on to the next part of the Order of Operations. There is a place where the expression has exponens, so we zoom in on and simplify this portion of the expression to . So, the expression given to us becomes .  Now there is no more exponents. Next, we look for any multiplication or division. We see both multiplication and division, so we evaluate them from left to right. The left-most multplication or division we see is the division , which simplifies to . This gives us the expression . Continuing to scan from left to right for any multiplications or divisions, we see the multiplication , which simplifies to . This gives us the expression .  Now there are no more multiplications or divisions, we look for any additions or subtractions, starting from the left. The left-most addition or subtraction we see is the subtraction , which simplifies to . This gives us the expression . Continuing to scan from left to right for any additions or subtractions, we see the addition , which simplifies to .  Because this was our first example of applying the Order of Operations, we wanted to be very thorough to explain each step. To present our work, we start from the original expression and after writing an equal sign (to indicate that what we will write next is equal) write a simplified version of the expression. We continue this process until we reach the final simplified expression. For this example, we have .  It is also acceptable to write each expressions on their own lines, as follows: Note that when presenting our work vertically we still include the equal signs to indicate that each expression is equal to the previous expression.     Expectation  When simplifying any expression, it is important to include equal signs to indicate that each expression is equal to the previous expression.    Expectation  While simplifying expressions, ensure that the next expression you write is truly equal to the previous expression, instead of just writing the portion of the expression that is changing.     Simplify the expression .    We can present our work horizontally, continuing to always write to the right of an equal sign like this .    We can instead present our work vertically       Simplify the expression .    We can present our work horizontally, always writing to the right of the equal sign like this: .    We can instead present our work vertically:       Habit  Always read expressions based on the Order of Operations.    Habit  Always write expressions based on the Order of Operations.    Order of Operations with variables  It is important for us to apply the Order of Operations not only to simplify expressions that contain only constants, but to also apply the Order of Operations when to interpret expressions that contain variables. This is important because one of the main contributions of algebra over arithmetic is to use variables to represent numbers that we do not know yet. So even when expressions contain variables, we still must read and write based on the Order of Operations. Doing this might feel new and totally weird, but let's explain how it's done and walk through examples together.   How to apply Order of Operations to expressions with variables  Given an expression:  Identify each operation that is written in the given expression.  Apply the Order of Operations to identify in which order the operations would be performed.  Instead of simplifying an expression, we would hypothetically perform the operations.     What order are the operations performed in the expression ?    The expression has three operations. Scanning from left to right, we see the following operations present: exponentiation, subtraction, and multiplication. When there is no symbol written between two variables, there is a hidden multiplication sign. In fact, to make it clearer, we can rewrite the expression as .  Now that we have identified which operations are present in this expression (in this example, three of them) we will apply the Order of Operations to determine in which order these operations would be performed.  Since there are no parentheses in our expression, the first operation that we would perform is the exponentiation. That is, if we knew the value of , then we would first simplify .  Next, we would perform the multiplication . In other words, if we knew the value of and we knew the value of , then our work in this second step would be to simplify, and we'd have , whatever the value of that is  Finally, we would perform the subtraction: we would take whatever the value of and subtract from this whatever the vaule of is to get .      Notice that we never simplified the expression or any part of this expression. We couldn't, because we did not know the numerical value of any of the variables. It seems like what we're doing is lazy, but I want to spin this into something positive. I encourage you to think of it this way: since we don't have the numbers behind the variables, we get to be lazy!  To perform this kind of analysis, it is helpful to say phrases like whatever the value of that is . We are discussing in which order we would hypothetically perform the operations, if we knew the values of the variables. It seems like what we're doing is a bit silly, but it is important to practice this way of thinking. It is rare that I'll encourage the following, but I encourage you to say out loud the full text of the next several examples, pausing right before any phrase that looks similar to whatever the value of that is when this kind of phrase appears right after an expression followed by a comma.    What order are the operations performed in the expression ?    First, we identify the operations present, which are an addition, a multiplication written as a dot, and exponentiation. In addition, a part of the expression is contained inside parentheses.    Since is in parentheses, we would perform the addition first. So, if we hypothetically knew the values of and , we'd replace this with the value of , whatever value that is.  After this, there would be no parentheses. Since all that would be left is a multiplication and an exponentiation, we would perform the exponentiation. We would take whatever the value of is and raise this value to the th power. This would give us , whatever the value of that is.  Finally, we'd take whatever the value of is and whatever the value of is and multiply these values together.      Notice that we never simplified the expression or any part of this expression. This process may feel weird to you because you may never have been asked about analyzing expressions in this way. Digging into the careful details of how to analyze an expression like this often gets overlooked but this next-level type of problem in applynig the Order of Operations sets up an important foundation for reading and writing expressions in algebra correctly. It's weird because it's new, but it's important because algebra enhances arithmetic by having variables, so I want you to be comfortable with reading and writing expressions with variables.    What order are the operations performed in the expression ?    To make it clearer where the operations are, let's rewrite the expression as .    Since is in parentheses, we would perform this subtraction first.  Next, there would be no more parentheses, so we would perform the exponentiation: we would take , whatever the value of is, and raise this to the th power. Thus, we'd have whatever the value of is.  Next, we would perform the multiplication . That is, if we knew the value of we would multiply this by the value of value of from the previous step, which would give us , whatever the value of that is .  Then, we would perform the multiplication . That is, if we knew the value of , we would simplify .  Finally, we would perform the addition: we would take whatever the value of is and add to this whatever the value of is.      The activity we just went through leads up to the following new type of activity. We will be given two expressions which will only differ from each other in the inclusion or removal of a set of parentheses. Then, we will determine if the two expressions are equal, or if we don't know based only on the Order of Operations.    Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first because the multiplication is in parentheses. Then we perform the subtraction of and to get .  In the second expression , there are no parentheses. We perform the multiplication first. Then we perform the subtraction of and to get .  In both expressions, we perform the multiplication first, and then we perform the subtraction of and next. Based only on the Order of Operations, the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the the content is in parentheses. We do exponentiation next to get . Our final operation is the multiplication of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Finally, we perform the addition of and .  In the first expression, we perform the addition first, then the exponentiation, and finally the multiplication. In the second expression, we perform the exponentiation first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal. (These expressions might be equal or they might not, but we cannot determine this based only on the Order of Operations. If these expressions happened to be equal, this would have to be explained by something other than the Order of Operations.)      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In the second expression , we perform the multiplication first because this is in parentheses. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In both expressions, we perform the multiplication first, then the addition, and finally the subtraction. Based only on the Order of Operations, the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the addition is in parentheses. Next, we perform the division of by the value of . Finally, we perform the multiplication of the value of and .  In the second expression , we perform the division first. Next, we perform the multiplication . Finally, we perform the addition of the value of and the value of .  In the first expression, we perform the addition first, then the division, and finally the multiplication. In the second expression, we perform the division first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because this is in parentheses. Next, we perform the addition because this is in parentheses. Finally, we perform the division of the value of by the value of .  In the second expression , we perform the division first. Next, we perform the addition of and the value of . Finally, we perform the addition of the value of and .  In the first expression, we perform the addition first, then the addition , and finally do the division of whatever the value of is by whatever the value of is. In the second expression, we perform the division first, then an addition, and finally another addition. To be clear, in the first expression the value of is divided by whatever the value of is, and in the second expression the value of is divided by whatever the value of is. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the subtraction first because the subtraction is in parentheses. Next, we perform the exponentiation to get . Then, we perform the multiplication of and . Next, we perform the multiplication of and to get . Finally, we perform the addition of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Then, we perform the multiplication of and . Finally, we perform the subtraction of the value of and the value of , and then add to this whatever the value of is.  In the first expression, we perform the subtraction first, then the exponentiation, then two multiplications, and finally an addition. In the second expression, we perform an exponentiation first, then two multiplications, then a subtraction, and finally an addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Language  Before we move on, let's be sure that we're on the same page regarding some language used to describe expressions.    An expression that is the result of adding and\/or subtracting two or more expressions together is called a sum . Each individual piece of the sum is called a term .    Informally, a sum is an expression that has additions and\/or subtractions as its last operations. Consider using mental scissors to cut at each plus sign and at each minus sign. Then each of the pieces that we have is called a term .   The expression is the result of adding and subtracting expressions together, so is called a sum. The three terms in this sum are , , and .     An expression that is the result of multiplying two or more expressions together is called a product . Each individual piece of the product is called a factor .    Informally, a product is an expression that has multiplications as its last operations. Consider using mental scissors to cut at each multiplication sign. (Before doing this, you may wish to draw in any hidden multiplication signs.) Then each of the pieces that we have is called a factor .   The expression is the result of multiplying expressions together, so is called a product. The three factors in this product are , , and .     Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a product. The three factors in this product are , , and .      Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The three terms in this sum are , , and .      Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The two terms in this sum are and .      Pictures  In algebra, we will often use pictures to represent expressions. This is a powerful way to think about expressions, and it is important to be able to translate between pictures and expressions. This may be new to you, but I encourage you to give it a try! Practicing this now will make future concepts go smoother!   Representing Addition Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the length of the stick made by gluing a stick of length to a stick of length .  A picture of        We have drawn the sticks slightly separated so that we can see them individually, but in reality we should imagine them pushed together. In the drawing, I made the choice to represent as a slightly larger number than . In addition, I chose to draw the stick representing on the left and the stick representing on the right because in the expression , the appears to the left of the plus sign, while the appears to the right of the plus sign.    Represent geometrically.      A picture of           Represent geometrically.      A picture of           Represent geometrically.      A picture of         We can apply the geometric representation of addition to learn several important algebra facts about addition.   Commutative Property of Addition        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length . In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)    In the Commutative Property of Addition , we can substitute any expression we want for the and any expression we want for the . If we can for a moment explain what the Commutative Property of Addition is saying informally, the result of this plus that is the same as that plus this . In other words, it is saying that when we add two things together, the order in which we add them doesn't matter. For example the Commutative Property of Addition tells us that is equal to .   Associative Property of Addition        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . (What the drawing doesn't indicate is the order of the gluing, so we need to clarify this with words: in the first diagram the stick of length is glued to the stick of length first, but in the second diagram the stick of length is glued to the stick of length first. If doing a hand drawing arrows can be drawn with labels like glue here first and glue here next .) In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)    Having the Commutative Property of Addition and the Associative Property of Addition together basically tells us that when the expression we have is a sum, we can rearrange the terms in any order we want and simplify the addition of any terms in any order we want. For example is equal to and is also equal to . When rearranging, be sure that any minus sign that was in front of a term stays in front of that term.   Representing Multiplication Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the area of a rectangle with height and width .  The area of the rectangle is a picture of        We will draw with the convention that the factor before the muliplication symbol is the height of the rectangle and the factor after the multiplication symbol is the width. In the drawing, I made the choice to represent as a slightly smaller number than .   What we're introducing regarding the geometric representation of multiplication is an idea that we've seen before in geometry: we often write to represent the area of a rectangle with length and width . Here, we're just using and instead of and as the two factors.     Represent geometrically.      A picture of           Represent geometrically.      A picture of         We can apply the geometric representation of addition to learn several important algebra facts about addition.   Commutative Property of Multiplication        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a rectangle with height and width . The right side, , is represented by a rectangle with height and width . Both rectangles have the same area, since we can get from one rectangle to the other by rotation. Since the two areas are equal, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)     Associative Property of Multiplication      We will skip the geometric explanation of the Associative Property of Multiplication, since we'd have to enhance our geometric interpretation of multiplication to include three factors. If you're curious, try to think through how you might represent and geometrically. As a hint, you'll need three-dimensional objects to do this.   I just want to take a moment to keep encouraging you to think about addition and multiplication geometrically. It may be new and strange to you. It may seem like a waste of time to you. So far, it may just seem like a silly to give a geometric explanation of why certain facts (that might even feel obvious to you) are explained using geometry. However, setting up this foundation will make several challenging concepts in the future become a lot easier to digest.    How do I prevent confusing the two geometric representations?  The geometric representation of addition is the gluing together of sticks. The geometric representation of multiplication is the area of a rectangle.  One technique to help recall which is which is to recall that a usual presentation of the area formula is . Because this formula multiplies together two quantities (named and ), we can remember that multiplication is represented by area. Since addition is not represented by area, it must be represented by the other geometric idea we've seen, which is gluing sticks together.  Here's another techinque! Pick two numbers where the sum of the two numbers and the product of the two numbers is different. What I mean is that we wouldn't want to pick and , since both the sum and the product are .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  You can pick any two numbers you want, as long as the sum and product are different   We are now about to talk about an important algebra property that mentions both addition and multiplication. When we look at the geometric representation, we will need both geometric representations: gluing together of sticks and area of rectangles will both appear.   Distributive Law, version 1        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     Before digging in, let's note that in the diagram the left, we see a stick of length glued to a stick of length , making a stick of length . (This makes use of the geometric representation of addition.) The left side, , is represented by a rectangle with height and width . The right side, , is represented by two rectangles: one with height and width , and the other with height and width . The area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, since we can get from the rectangle on the left to the two rectangles on the right by cutting the rectangle on the left vertically into two pieces. Since the area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)    In the Distributive Law , we can substitute any expression we want for the , any expression we want for the , and any expression we want for the . If we can for a moment explain what the Distributive Law is saying informally, the result of this times the sum of that and the other thing is the same as this times that plus this times the other thing . For example the Distributive Law tells us that is equal to .   When you see , I encourage you to think about the Distributive Law as we wrote it , and relate the and and in the formula to the and and in the expression .  It is easy to dismiss this advice and just think What's the point of all this? I can just see that I should distribute . However, it is important to see exactly what this Distributive Law is saying, and what it is not saying. The left side addresses only an expression that has addition on the inside of the parentheses, and multiplication outside. For example, the formula has nothing to say about the expression . It would be tempting to look at and try to distribute the somehow. But when we read the left side of and we see that the left side says , we have to carefully note that addition is inside the parentheses with multiplication outside. The problem with is that multiplication is inside the parentheses with the addition outside. So the Distributive Law does not apply to .     Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite     Using the Distributive Law , we can let , , and . Then we have     In the example above, we informally say that we distributed 10 . We can also turn an expression of the form into an expression of the form . This process is called factoring . (Factoring is the reverse of the process of distributing.)   Distributive Law, version 2      This version has subtraction inside the parentheses instead of addition inside the parentheses. Since we didn't provide a geometric representation of subtraction, we won't provide a geometric explanation of why this version of the Distributive Law is true. (However, for a mental challenge, we can use the first version of the Distributive Law to explain why this version is true. We can think of as , and then apply the first version of the Distributive Law.)    Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .     Distributive Law, version 3      This version has the multiplication on the right instead of the left.     Spend a few minutes providing the geometric explanation of why is true. When doing this, remember we shouldn't select specific numbers for , , or .      Distributive Law, version 4        Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have     The last two examples show that the process known as collecting like terms is actually justified by the Distributive Law. In fact, the only reason why collecting like terms works at all is because of the Distributive Law! Collecting like terms is actually factoring out the variable from several terms (though we often skip writing that middle step such as and just simplify the part that is in parentheses in our head.)   It may be tempting to ignore this comment about the connection between collecting like terms and the Distributive Law. If we ignore the connection, it would be easy to see an expression like and feel stuck thinking that we can't collect like terms. However, if we remember that collecting like terms is actually factoring, then we can see that In another example like we very often skip writing the middle step and just directly go from to . However, it's good to remember that there is a middle step, and that middle step is justified by the Distributive Law. Recalling this allows us to not get intimidated by expressions like .     Summary  Expressions with and without variables can be interpreted and analyzed using the Order of Operations, and expressions without variables can be simplified down to a single constant using the Order of Operations. The result of adding and subtracting expressions called terms results in a sum, while the result of multiplying expression called factors results in a product. The geometric representation of addition by gluing together sticks and the geometric representation of multiplication by the area of a rectangle can be used to justify major algebraic formulas, including the Distributive Law. It is the Distributive Law which actually justifies the shortcut process known as collecting like terms.    Exercises    Write in your own words how each expression could be spoken aloud with clarity.        Simplify the following expressions.        In each expression below, identify which operation is performed first, which is performed next, and so on.        In each expression below, identify which operation is performed first.        In each expression below, identify which operation is performed last.        In each part below, you are given two expressions. Based only on the Order of Operations, are the two expressions equal or do we not have enough information?        Each expression below is a sum. State the terms.  State the terms of  State the terms of  State the terms of  State the terms of    What term(s) do and have in common?  Geometrically represent the following expressions.        For each geometric representation below, write an expression it represents. (Note, there is often more than one correct answer.)        Factor each expression below.        Simplify each expression below two ways: once by applying the appropriate Distributive Law (showing all steps), and once by quickly collecting like terms.           "
},
{
  "id": "sec-operations-2",
  "level": "2",
  "url": "sec-operations.html#sec-operations-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  In this section, we learn how to:    Simplify an expression using the Order of Operations.  Analyze a non-constant expression using the Order of Operations.  Describe expressions and their parts using the words sum, term, product, and factor.  Construct geometric representations of addition and multiplication.  Justify major algebraic formulas geometrically.  Connect collecting like terms to the Distributive Law.   "
},
{
  "id": "sec-operations-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-5",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": " Pay attention to the language of mathematics.  "
},
{
  "id": "def-expression",
  "level": "2",
  "url": "sec-operations.html#def-expression",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  An expression is mathematical notation representing a number.   "
},
{
  "id": "sec-operations-7-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-5",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Both and are examples of expressions. Both of these expressions are constants .  "
},
{
  "id": "sec-operations-7-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-6",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " Writing is another expressions. This is an expression even if we haven't simplified this to the value . Like the two expressions in the previous example, the expression shown here (both the unsimplified and the simplified versions) is a constant , since the expression lacks any variable(s).  "
},
{
  "id": "sec-operations-7-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-7",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Both and are examples of expressions which mention the variable . In the first expression, the variable is written once. In the second expression, the variable is written twice.  "
},
{
  "id": "sec-operations-7-8",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-8",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " The expression mentions two variables. Since one or more variables appear, this expression is not a constant.  "
},
{
  "id": "sec-operations-7-11-2",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-11-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Order of Operations "
},
{
  "id": "sec-operations-7-12",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-12",
  "type": "Remark",
  "number": "1.1.7",
  "title": "",
  "body": " By the time we get to the third part of the Order of Operations, all exponents would have been evaluated. At this point, we look for any multiplication or division. If there is both multiplication and division, we evaluate them from left to right. It is not true that multiplication must be done before division. All divisions and multiplications that we see have the same level of precedence, and we evaluate them scanning from left to right in that order.  "
},
{
  "id": "sec-operations-7-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-13",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": " Similarly, by the time we get to the last part of Order of Operations, all multiplications and divisions would have been handled. That means that what remains of our expressions should only have addition and subtraction operations remaining. These should be handled from left to right.  "
},
{
  "id": "sec-operations-7-14",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-14",
  "type": "Remark",
  "number": "1.1.9",
  "title": "",
  "body": " The Order of Operations is sometimes remembered by the acronym PEMDAS, which stands for Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.  Because of the way that PEMDAS is often taught, many people mistakenly believe that multiplication must be done before division, and addition must be done before subtraction. This is not true. For this reason, some people prefer the acronym GEMA, which stands for Grouping symbols, Exponents, Multiplication and Division, Addition and Subtraction. In the acronym GEMA, the G is used to indicate that there are many kinds of grouping symbols, not just parentheses. Also, the multiplication and division are addressed together in the M , and addition and subtraction are addressed together in the A .  "
},
{
  "id": "ex-expression-simplify",
  "level": "2",
  "url": "sec-operations.html#ex-expression-simplify",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Simplify the expression .    We will simplify the expression by following the Order of Operations. First, notice that there are no parentheses, so we move on to the next part of the Order of Operations. There is a place where the expression has exponens, so we zoom in on and simplify this portion of the expression to . So, the expression given to us becomes .  Now there is no more exponents. Next, we look for any multiplication or division. We see both multiplication and division, so we evaluate them from left to right. The left-most multplication or division we see is the division , which simplifies to . This gives us the expression . Continuing to scan from left to right for any multiplications or divisions, we see the multiplication , which simplifies to . This gives us the expression .  Now there are no more multiplications or divisions, we look for any additions or subtractions, starting from the left. The left-most addition or subtraction we see is the subtraction , which simplifies to . This gives us the expression . Continuing to scan from left to right for any additions or subtractions, we see the addition , which simplifies to .  Because this was our first example of applying the Order of Operations, we wanted to be very thorough to explain each step. To present our work, we start from the original expression and after writing an equal sign (to indicate that what we will write next is equal) write a simplified version of the expression. We continue this process until we reach the final simplified expression. For this example, we have .  It is also acceptable to write each expressions on their own lines, as follows: Note that when presenting our work vertically we still include the equal signs to indicate that each expression is equal to the previous expression.   "
},
{
  "id": "sec-operations-7-18",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-18",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Simplify the expression .    We can present our work horizontally, continuing to always write to the right of an equal sign like this .    We can instead present our work vertically    "
},
{
  "id": "sec-operations-7-19",
  "level": "2",
  "url": "sec-operations.html#sec-operations-7-19",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Simplify the expression .    We can present our work horizontally, always writing to the right of the equal sign like this: .    We can instead present our work vertically:    "
},
{
  "id": "ex-expression-simplify-variables",
  "level": "2",
  "url": "sec-operations.html#ex-expression-simplify-variables",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    The expression has three operations. Scanning from left to right, we see the following operations present: exponentiation, subtraction, and multiplication. When there is no symbol written between two variables, there is a hidden multiplication sign. In fact, to make it clearer, we can rewrite the expression as .  Now that we have identified which operations are present in this expression (in this example, three of them) we will apply the Order of Operations to determine in which order these operations would be performed.  Since there are no parentheses in our expression, the first operation that we would perform is the exponentiation. That is, if we knew the value of , then we would first simplify .  Next, we would perform the multiplication . In other words, if we knew the value of and we knew the value of , then our work in this second step would be to simplify, and we'd have , whatever the value of that is  Finally, we would perform the subtraction: we would take whatever the value of and subtract from this whatever the vaule of is to get .     "
},
{
  "id": "sec-operations-10-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-7",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    First, we identify the operations present, which are an addition, a multiplication written as a dot, and exponentiation. In addition, a part of the expression is contained inside parentheses.    Since is in parentheses, we would perform the addition first. So, if we hypothetically knew the values of and , we'd replace this with the value of , whatever value that is.  After this, there would be no parentheses. Since all that would be left is a multiplication and an exponentiation, we would perform the exponentiation. We would take whatever the value of is and raise this value to the th power. This would give us , whatever the value of that is.  Finally, we'd take whatever the value of is and whatever the value of is and multiply these values together.     "
},
{
  "id": "sec-operations-10-9",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-9",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    To make it clearer where the operations are, let's rewrite the expression as .    Since is in parentheses, we would perform this subtraction first.  Next, there would be no more parentheses, so we would perform the exponentiation: we would take , whatever the value of is, and raise this to the th power. Thus, we'd have whatever the value of is.  Next, we would perform the multiplication . That is, if we knew the value of we would multiply this by the value of value of from the previous step, which would give us , whatever the value of that is .  Then, we would perform the multiplication . That is, if we knew the value of , we would simplify .  Finally, we would perform the addition: we would take whatever the value of is and add to this whatever the value of is.     "
},
{
  "id": "sec-operations-10-11",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-11",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first because the multiplication is in parentheses. Then we perform the subtraction of and to get .  In the second expression , there are no parentheses. We perform the multiplication first. Then we perform the subtraction of and to get .  In both expressions, we perform the multiplication first, and then we perform the subtraction of and next. Based only on the Order of Operations, the two expressions are equal.   "
},
{
  "id": "sec-operations-10-12",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-12",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the the content is in parentheses. We do exponentiation next to get . Our final operation is the multiplication of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Finally, we perform the addition of and .  In the first expression, we perform the addition first, then the exponentiation, and finally the multiplication. In the second expression, we perform the exponentiation first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal. (These expressions might be equal or they might not, but we cannot determine this based only on the Order of Operations. If these expressions happened to be equal, this would have to be explained by something other than the Order of Operations.)   "
},
{
  "id": "sec-operations-10-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-13",
  "type": "Example",
  "number": "1.1.18",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In the second expression , we perform the multiplication first because this is in parentheses. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In both expressions, we perform the multiplication first, then the addition, and finally the subtraction. Based only on the Order of Operations, the two expressions are equal.   "
},
{
  "id": "sec-operations-10-14",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-14",
  "type": "Example",
  "number": "1.1.19",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the addition is in parentheses. Next, we perform the division of by the value of . Finally, we perform the multiplication of the value of and .  In the second expression , we perform the division first. Next, we perform the multiplication . Finally, we perform the addition of the value of and the value of .  In the first expression, we perform the addition first, then the division, and finally the multiplication. In the second expression, we perform the division first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-10-15",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-15",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because this is in parentheses. Next, we perform the addition because this is in parentheses. Finally, we perform the division of the value of by the value of .  In the second expression , we perform the division first. Next, we perform the addition of and the value of . Finally, we perform the addition of the value of and .  In the first expression, we perform the addition first, then the addition , and finally do the division of whatever the value of is by whatever the value of is. In the second expression, we perform the division first, then an addition, and finally another addition. To be clear, in the first expression the value of is divided by whatever the value of is, and in the second expression the value of is divided by whatever the value of is. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-10-16",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10-16",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the subtraction first because the subtraction is in parentheses. Next, we perform the exponentiation to get . Then, we perform the multiplication of and . Next, we perform the multiplication of and to get . Finally, we perform the addition of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Then, we perform the multiplication of and . Finally, we perform the subtraction of the value of and the value of , and then add to this whatever the value of is.  In the first expression, we perform the subtraction first, then the exponentiation, then two multiplications, and finally an addition. In the second expression, we perform an exponentiation first, then two multiplications, then a subtraction, and finally an addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-11-3",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-3",
  "type": "Definition",
  "number": "1.1.22",
  "title": "",
  "body": "  An expression that is the result of adding and\/or subtracting two or more expressions together is called a sum . Each individual piece of the sum is called a term .   "
},
{
  "id": "sec-operations-11-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-5",
  "type": "Example",
  "number": "1.1.23",
  "title": "",
  "body": " The expression is the result of adding and subtracting expressions together, so is called a sum. The three terms in this sum are , , and .  "
},
{
  "id": "sec-operations-11-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-6",
  "type": "Definition",
  "number": "1.1.24",
  "title": "",
  "body": "  An expression that is the result of multiplying two or more expressions together is called a product . Each individual piece of the product is called a factor .   "
},
{
  "id": "sec-operations-11-8",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-8",
  "type": "Example",
  "number": "1.1.25",
  "title": "",
  "body": " The expression is the result of multiplying expressions together, so is called a product. The three factors in this product are , , and .  "
},
{
  "id": "sec-operations-11-9",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-9",
  "type": "Example",
  "number": "1.1.26",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a product. The three factors in this product are , , and .   "
},
{
  "id": "sec-operations-11-10",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-10",
  "type": "Example",
  "number": "1.1.27",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The three terms in this sum are , , and .   "
},
{
  "id": "sec-operations-11-11",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-11",
  "type": "Example",
  "number": "1.1.28",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The two terms in this sum are and .   "
},
{
  "id": "fig-a-plus-b",
  "level": "2",
  "url": "sec-operations.html#fig-a-plus-b",
  "type": "Figure",
  "number": "1.1.29",
  "title": "",
  "body": " A picture of     "
},
{
  "id": "sec-operations-12-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-5",
  "type": "Example",
  "number": "1.1.30",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-12-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-6",
  "type": "Example",
  "number": "1.1.32",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-12-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-7",
  "type": "Example",
  "number": "1.1.34",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-12-10",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-10",
  "type": "Example",
  "number": "1.1.36",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length . In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)   "
},
{
  "id": "sec-operations-12-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-13",
  "type": "Example",
  "number": "1.1.38",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . (What the drawing doesn't indicate is the order of the gluing, so we need to clarify this with words: in the first diagram the stick of length is glued to the stick of length first, but in the second diagram the stick of length is glued to the stick of length first. If doing a hand drawing arrows can be drawn with labels like glue here first and glue here next .) In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)   "
},
{
  "id": "fig-a-times-b",
  "level": "2",
  "url": "sec-operations.html#fig-a-times-b",
  "type": "Figure",
  "number": "1.1.40",
  "title": "",
  "body": " The area of the rectangle is a picture of     "
},
{
  "id": "sec-operations-12-17",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-17",
  "type": "Note",
  "number": "1.1.41",
  "title": "",
  "body": " What we're introducing regarding the geometric representation of multiplication is an idea that we've seen before in geometry: we often write to represent the area of a rectangle with length and width . Here, we're just using and instead of and as the two factors.  "
},
{
  "id": "sec-operations-12-18",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-18",
  "type": "Example",
  "number": "1.1.42",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-12-19",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-19",
  "type": "Example",
  "number": "1.1.44",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-12-22",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-22",
  "type": "Example",
  "number": "1.1.46",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a rectangle with height and width . The right side, , is represented by a rectangle with height and width . Both rectangles have the same area, since we can get from one rectangle to the other by rotation. Since the two areas are equal, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)   "
},
{
  "id": "sec-operations-12-25",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-25",
  "type": "Note",
  "number": "1.1.48",
  "title": "",
  "body": " I just want to take a moment to keep encouraging you to think about addition and multiplication geometrically. It may be new and strange to you. It may seem like a waste of time to you. So far, it may just seem like a silly to give a geometric explanation of why certain facts (that might even feel obvious to you) are explained using geometry. However, setting up this foundation will make several challenging concepts in the future become a lot easier to digest.  "
},
{
  "id": "sec-operations-12-29",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-29",
  "type": "Example",
  "number": "1.1.49",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     Before digging in, let's note that in the diagram the left, we see a stick of length glued to a stick of length , making a stick of length . (This makes use of the geometric representation of addition.) The left side, , is represented by a rectangle with height and width . The right side, , is represented by two rectangles: one with height and width , and the other with height and width . The area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, since we can get from the rectangle on the left to the two rectangles on the right by cutting the rectangle on the left vertically into two pieces. Since the area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)   "
},
{
  "id": "sec-operations-12-31",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-31",
  "type": "Note",
  "number": "1.1.51",
  "title": "",
  "body": " When you see , I encourage you to think about the Distributive Law as we wrote it , and relate the and and in the formula to the and and in the expression .  It is easy to dismiss this advice and just think What's the point of all this? I can just see that I should distribute . However, it is important to see exactly what this Distributive Law is saying, and what it is not saying. The left side addresses only an expression that has addition on the inside of the parentheses, and multiplication outside. For example, the formula has nothing to say about the expression . It would be tempting to look at and try to distribute the somehow. But when we read the left side of and we see that the left side says , we have to carefully note that addition is inside the parentheses with multiplication outside. The problem with is that multiplication is inside the parentheses with the addition outside. So the Distributive Law does not apply to .  "
},
{
  "id": "sec-operations-12-32",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-32",
  "type": "Example",
  "number": "1.1.52",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-33",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-33",
  "type": "Example",
  "number": "1.1.53",
  "title": "",
  "body": "  Use the Distributive Law to rewrite     Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-34",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distributed factoring "
},
{
  "id": "sec-operations-12-37",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-37",
  "type": "Example",
  "number": "1.1.54",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-38",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-38",
  "type": "Example",
  "number": "1.1.55",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .   "
},
{
  "id": "sec-operations-12-41",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-41",
  "type": "Try it",
  "number": "1.1.56",
  "title": "",
  "body": "  Spend a few minutes providing the geometric explanation of why is true. When doing this, remember we shouldn't select specific numbers for , , or .    "
},
{
  "id": "sec-operations-12-43",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-43",
  "type": "Example",
  "number": "1.1.57",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-44",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-44",
  "type": "Example",
  "number": "1.1.58",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-45",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-45",
  "type": "Example",
  "number": "1.1.59",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-12-46",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "collecting like terms "
},
{
  "id": "sec-operations-12-47",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-47",
  "type": "Note",
  "number": "1.1.60",
  "title": "",
  "body": " It may be tempting to ignore this comment about the connection between collecting like terms and the Distributive Law. If we ignore the connection, it would be easy to see an expression like and feel stuck thinking that we can't collect like terms. However, if we remember that collecting like terms is actually factoring, then we can see that In another example like we very often skip writing the middle step and just directly go from to . However, it's good to remember that there is a middle step, and that middle step is justified by the Distributive Law. Recalling this allows us to not get intimidated by expressions like .  "
},
{
  "id": "sec-expressions-with-fractions",
  "level": "1",
  "url": "sec-expressions-with-fractions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Expressions with Fractions",
  "body": " Expressions with Fractions  Text of section.  The top and bottom of a fraction are in (hidden) parentheses. Affects calculator input.  Mixed fractions, improper fractions, decimal answers. Why improper fractions are the focus.  Two correct (and one incorrect) interpretation of .  "
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
