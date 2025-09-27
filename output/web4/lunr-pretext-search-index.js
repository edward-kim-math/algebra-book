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
  "body": " Operations    In this section, we learn how to:    Simplify an expression using the Order of Operations.  Analyze a non-constant expression using the Order of Operations.  Describe expressions and their parts using the words sum, term, product, and factor.  Construct geometric representations of addition and multiplication.  Justify major algebraic formulas geometrically.  Connect collecting like terms to the Distributive Law.      AAAAAAAA Edit   As a cashier, a customer gives you $20 for their purchase of $15.75. You input into the cash register, and just as you're about to make the $4.25 change, the customer hands you a one-dollar bill they found. What do you do?  A taxi charges $3 to start plus $2 for every mile. If you ride 7 miles, what is the total cost? ( )  A movie ticket costs $12, and popcorn costs $5. If you buy 3 tickets and 1 popcorn, how much do you spend? ( )  A plumber charges $50 per hour plus a $30 service fee. If the plumber works for 4 hours, what is the total bill? ( )  A shirt costs $20 and jeans cost $30. If you buy 2 shirts and 3 pairs of jeans, how much do you spend? ( )  A train travels 60 miles per hour. How far does it go in 2.5 hours, and then return halfway back? ( )  A gym charges $40 per month plus $10 per guest pass. If you keep the membership for 6 months and buy 4 guest passes, what is the cost? ( )  A baker sells cakes for $15 each. If she sells 10 cakes and then spends $25 on ingredients, what is her profit? ( )  A ride at an amusement park charges $4 admission plus $2 per ride. If someone goes on 5 rides, how much do they pay? ( )  A cell phone plan costs $25 per month plus $0.10 per text. If you keep the plan for 3 months and send 200 texts total, what is the cost? ( )  A pizza shop sells large pizzas for $12 and small pizzas for $8. If you buy 2 large and 3 small pizzas, how much do you spend? ( )  A car rental costs $40 per day plus $20 for insurance. If you rent it for 5 days, what is the total cost? ( )  A taxi charges $2 per mile, but there is also a $5 starting fee. If you ride 10 miles, how much do you pay? ( )  A runner trains by running 3 miles each morning and 5 miles each evening for 7 days. How many miles total? ( )  A concert ticket is $60, and a service fee of $5 is added to each ticket. If you buy 4 tickets, how much do you pay? ( )  A plumber charges $40 per hour, plus a $25 trip fee. If a job takes 3 hours, what is the total bill? ( )  A baseball team sells hot dogs for $3 and sodas for $2. If 50 hot dogs and 70 sodas are sold, how much money is made? ( )  A ride service charges $2 per mile, with a $10 discount applied at the end. If the trip is 15 miles, what is the total? ( )  A theme park charges $50 admission and $5 per ride. If someone goes on 6 rides, how much do they pay? ( )  A farmer sells apples for $2 per pound and pears for $3 per pound. If she sells 15 pounds of apples and 10 pounds of pears, how much does she earn? ( )     Algebra provides a powerful way of solving many kinds of questions Algebra achieves this by enhancing arithmetic. Arithmetic focuses on the result of operations like addition and multiplication when using numbers that are constant. The contribution of algebra is to enhance arithmetic with variables and with geometry, with a focus on how the numbers appearing a problem relate to each other. With these extra ways of thinking, algebra allows us to answer many questions that are really hard to think about using arithmetic alone.  I want your experience in math to be as smooth and as enjoyable as possible. I want this for you, even if you can recall being frustrated with mathematics. To achieve that goal, I am deliberately writing this book for you the student, and not for your teacher. I hope to take each part of algebra that has the potential to be challenging and really break it down step-by-step. This does mean that I may ask you to try something different from the way you have done it in the past. I might also ask you to think about things that you haven't really thought about much before. I hope you'll give it a shot: what do you have to lose by trying this subject in a new way? In fact, I encourage you to really think about the language used in mathematics.   Pay attention to the language of mathematics.   As an example of this, when writing be sure to say one of the following:  to the  to the th power  raised to the  raised to the th power  If we only say then slightly pause to say this focuses on the specific individual symbols. The bigger problem is that saying followed by is taken to mean . Why is this a problem? Because and are not equal. In fact, when then simplifies to , but simplifies to .   Order of Operations  We will take a little time to make sure that everyone is on the same page regarding the Order of Operations. Before we go any further, we should describe what we mean by an expression.    An expression is mathematical notation representing a number.     An expression may consist of just a single constant such as or , or can be a variable representing a number such as or , or can be a combination of constants and variables connected by operations such as addition, subtraction, multiplication, division, and exponentiation.    Both and are examples of expressions. Both of these expressions are constants .    Writing is another expressions. This is an expression even if we haven't simplified this to the value . Like the two expressions in the previous example, the expression shown here (both the unsimplified and the simplified versions) is a constant , since the expression lacks any variable(s).    Both and are examples of expressions which mention the variable . In the first expression, the variable is written once. In the second expression, the variable is written twice.    The expression mentions two variables. Since one or more variables appear, this expression is not a constant.   Please note that an expression does not contain an equal sign. For example, is not an expression. The notation that we just wrote instead states that one exrpession is equal to another expression.  We need the Order of Operations because this it is easy to misinterpret an expression if we do not all agree on how to read expressions. The Order of Operations is a set of rules that tells us the order in which to evaluate (and more generally read) an expression.   Order of Operations  An expression must always be simplified and read by following the Order of Operations :  Parentheses  Exponents  Multiplication and Division (from left to right)  Addition and Subtraction (from left to right)  In addition, every time you write an expression, ensure your writing is based on the Order of Operations.    By the time we get to the third part of the Order of Operations, all exponents would have been evaluated. At this point, we look for any multiplication or division. If there is both multiplication and division, we evaluate them from left to right. It is not true that multiplication must be done before division. All divisions and multiplications that we see have the same level of precedence, and we evaluate them scanning from left to right in that order.    Similarly, by the time we get to the last part of Order of Operations, all multiplications and divisions would have been handled. That means that what remains of our expressions should only have addition and subtraction operations remaining. These should be handled from left to right.    The Order of Operations is sometimes remembered by the acronym PEMDAS, which stands for Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.  Because of the way that PEMDAS is often taught, many people mistakenly believe that multiplication must be done before division, and addition must be done before subtraction. This is not true. For this reason, some people prefer the acronym GEMA, which stands for Grouping symbols, Exponents, Multiplication and Division, Addition and Subtraction. In the acronym GEMA, the G is used to indicate that there are many kinds of grouping symbols, not just parentheses. Also, the multiplication and division are addressed together in the M , and addition and subtraction are addressed together in the A .     Simplify the expression .    We will simplify the expression by following the Order of Operations. First, notice that there are no parentheses, so we move on to the next part of the Order of Operations. There is a place where the expression has exponens, so we zoom in on and simplify this portion of the expression to . So, the expression given to us becomes .  Now there is no more exponents. Next, we look for any multiplication or division. We see both multiplication and division, so we evaluate them from left to right. The left-most multplication or division we see is the division , which simplifies to . This gives us the expression . Continuing to scan from left to right for any multiplications or divisions, we see the multiplication , which simplifies to . This gives us the expression .  Now there are no more multiplications or divisions, we look for any additions or subtractions, starting from the left. The left-most addition or subtraction we see is the subtraction , which simplifies to . This gives us the expression . Continuing to scan from left to right for any additions or subtractions, we see the addition , which simplifies to .  Because this was our first example of applying the Order of Operations, we wanted to be very thorough to explain each step. To present our work, we start from the original expression and after writing an equal sign (to indicate that what we will write next is equal) write a simplified version of the expression. We continue this process until we reach the final simplified expression. For this example, we have .  It is also acceptable to write each expressions on their own lines, as follows: Note that when presenting our work vertically we still include the equal signs to indicate that each expression is equal to the previous expression.     Expectation  When simplifying any expression, it is important to include equal signs to indicate that each expression is equal to the previous expression.    Expectation  While simplifying expressions, ensure that the next expression you write is truly equal to the previous expression, instead of just writing the portion of the expression that is changing.     Simplify the expression .    We can present our work horizontally, continuing to always write to the right of an equal sign like this .    We can instead present our work vertically       Simplify the expression .    We can present our work horizontally, always writing to the right of the equal sign like this: .    We can instead present our work vertically:       Habit  Always read expressions based on the Order of Operations.    Habit  Always write expressions based on the Order of Operations.    Order of Operations with variables  It is important for us to apply the Order of Operations not only to simplify expressions that contain only constants, but to also apply the Order of Operations when to interpret expressions that contain variables. This is important because one of the main contributions of algebra over arithmetic is to use variables to represent numbers that we do not know yet. So even when expressions contain variables, we still must read and write based on the Order of Operations. Doing this might feel new and totally weird, but let's explain how it's done and walk through examples together.   How to apply Order of Operations to expressions with variables  Given an expression:  Identify each operation that is written in the given expression.  Apply the Order of Operations to identify in which order the operations would be performed.  Instead of simplifying an expression, we would hypothetically perform the operations.     What order are the operations performed in the expression ?    The expression has three operations. Scanning from left to right, we see the following operations present: exponentiation, subtraction, and multiplication. When there is no symbol written between two variables, there is a hidden multiplication sign. In fact, to make it clearer, we can rewrite the expression as .  Now that we have identified which operations are present in this expression (in this example, three of them) we will apply the Order of Operations to determine in which order these operations would be performed.  Since there are no parentheses in our expression, the first operation that we would perform is the exponentiation. That is, if we knew the value of , then we would first simplify .  Next, we would perform the multiplication . In other words, if we knew the value of and we knew the value of , then our work in this second step would be to simplify, and we'd have , whatever the value of that is  Finally, we would perform the subtraction: we would take whatever the value of and subtract from this whatever the vaule of is to get .      Notice that we never simplified the expression or any part of this expression. We couldn't, because we did not know the numerical value of any of the variables. It seems like what we're doing is lazy, but I want to spin this into something positive. I encourage you to think of it this way: since we don't have the numbers behind the variables, we get to be lazy!  To perform this kind of analysis, it is helpful to say phrases like whatever the value of that is . We are discussing in which order we would hypothetically perform the operations, if we knew the values of the variables. It seems like what we're doing is a bit silly, but it is important to practice this way of thinking. It is rare that I'll encourage the following, but I encourage you to say out loud the full text of the next several examples, pausing right before any phrase that looks similar to whatever the value of that is when this kind of phrase appears right after an expression followed by a comma.    What order are the operations performed in the expression ?    First, we identify the operations present, which are an addition, a multiplication written as a dot, and exponentiation. In addition, a part of the expression is contained inside parentheses.    Since is in parentheses, we would perform the addition first. So, if we hypothetically knew the values of and , we'd replace this with the value of , whatever value that is.  After this, there would be no parentheses. Since all that would be left is a multiplication and an exponentiation, we would perform the exponentiation. We would take whatever the value of is and raise this value to the th power. This would give us , whatever the value of that is.  Finally, we'd take whatever the value of is and whatever the value of is and multiply these values together.      Notice that we never simplified the expression or any part of this expression. This process may feel weird to you because you may never have been asked about analyzing expressions in this way. Digging into the careful details of how to analyze an expression like this often gets overlooked but this next-level type of problem in applynig the Order of Operations sets up an important foundation for reading and writing expressions in algebra correctly. It's weird because it's new, but it's important because algebra enhances arithmetic by having variables, so I want you to be comfortable with reading and writing expressions with variables.    What order are the operations performed in the expression ?    To make it clearer where the operations are, let's rewrite the expression as .    Since is in parentheses, we would perform this subtraction first.  Next, there would be no more parentheses, so we would perform the exponentiation: we would take , whatever the value of is, and raise this to the th power. Thus, we'd have whatever the value of is.  Next, we would perform the multiplication . That is, if we knew the value of we would multiply this by the value of value of from the previous step, which would give us , whatever the value of that is .  Then, we would perform the multiplication . That is, if we knew the value of , we would simplify .  Finally, we would perform the addition: we would take whatever the value of is and add to this whatever the value of is.      The activity we just went through leads up to the following new type of activity. We will be given two expressions which will only differ from each other in the inclusion or removal of a set of parentheses. Then, we will determine if the two expressions are equal, or if we don't know based only on the Order of Operations.    Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first because the multiplication is in parentheses. Then we perform the subtraction of and to get .  In the second expression , there are no parentheses. We perform the multiplication first. Then we perform the subtraction of and to get .  In both expressions, we perform the multiplication first, and then we perform the subtraction of and next. Based only on the Order of Operations, the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the the content is in parentheses. We do exponentiation next to get . Our final operation is the multiplication of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Finally, we perform the addition of and .  In the first expression, we perform the addition first, then the exponentiation, and finally the multiplication. In the second expression, we perform the exponentiation first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal. (These expressions might be equal or they might not, but we cannot determine this based only on the Order of Operations. If these expressions happened to be equal, this would have to be explained by something other than the Order of Operations.)      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In the second expression , we perform the multiplication first because this is in parentheses. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In both expressions, we perform the multiplication first, then the addition, and finally the subtraction. Based only on the Order of Operations, the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the addition is in parentheses. Next, we perform the division of by the value of . Finally, we perform the multiplication of the value of and .  In the second expression , we perform the division first. Next, we perform the multiplication . Finally, we perform the addition of the value of and the value of .  In the first expression, we perform the addition first, then the division, and finally the multiplication. In the second expression, we perform the division first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because this is in parentheses. Next, we perform the addition because this is in parentheses. Finally, we perform the division of the value of by the value of .  In the second expression , we perform the division first. Next, we perform the addition of and the value of . Finally, we perform the addition of the value of and .  In the first expression, we perform the addition first, then the addition , and finally do the division of whatever the value of is by whatever the value of is. In the second expression, we perform the division first, then an addition, and finally another addition. To be clear, in the first expression the value of is divided by whatever the value of is, and in the second expression the value of is divided by whatever the value of is. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the subtraction first because the subtraction is in parentheses. Next, we perform the exponentiation to get . Then, we perform the multiplication of and . Next, we perform the multiplication of and to get . Finally, we perform the addition of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Then, we perform the multiplication of and . Finally, we perform the subtraction of the value of and the value of , and then add to this whatever the value of is.  In the first expression, we perform the subtraction first, then the exponentiation, then two multiplications, and finally an addition. In the second expression, we perform an exponentiation first, then two multiplications, then a subtraction, and finally an addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.      Language  Before we move on, let's be sure that we're on the same page regarding some language used to describe expressions.    An expression that is the result of adding and\/or subtracting two or more expressions together is called a sum . Each individual piece of the sum is called a term .    Informally, a sum is an expression that has additions and\/or subtractions as its last operations. Consider using mental scissors to cut at each plus sign and at each minus sign. Then each of the pieces that we have is called a term .   The expression is the result of adding and subtracting expressions together, so is called a sum. The three terms in this sum are , , and .     An expression that is the result of multiplying two or more expressions together is called a product . Each individual piece of the product is called a factor .    Informally, a product is an expression that has multiplications as its last operations. Consider using mental scissors to cut at each multiplication sign. (Before doing this, you may wish to draw in any hidden multiplication signs.) Then each of the pieces that we have is called a factor .   The expression is the result of multiplying expressions together, so is called a product. The three factors in this product are , , and .     Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a product. The three factors in this product are , , and .      Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The three terms in this sum are , , and .      Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The two terms in this sum are and .      Pictures  In algebra, we will often use pictures to represent expressions. This is a powerful way to think about expressions, and it is important to be able to translate between pictures and expressions. This may be new to you, but I encourage you to give it a try! Practicing this now will make future concepts go smoother!   Representing Addition Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the length of the stick made by gluing a stick of length to a stick of length .  A picture of        We have drawn the sticks slightly separated so that we can see them individually, but in reality we should imagine them pushed together. In the drawing, I made the choice to represent as a slightly larger number than . In addition, I chose to draw the stick representing on the left and the stick representing on the right because in the expression , the appears to the left of the plus sign, while the appears to the right of the plus sign.    Represent geometrically.      A picture of           Represent geometrically.      A picture of           Represent geometrically.      A picture of         We can apply the geometric representation of addition to learn several important algebra facts about addition.   Commutative Property of Addition        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length . In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)    In the Commutative Property of Addition , we can substitute any expression we want for the and any expression we want for the . If we can for a moment explain what the Commutative Property of Addition is saying informally, the result of this plus that is the same as that plus this . In other words, it is saying that when we add two things together, the order in which we add them doesn't matter. For example the Commutative Property of Addition tells us that is equal to .   Associative Property of Addition        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . (What the drawing doesn't indicate is the order of the gluing, so we need to clarify this with words: in the first diagram the stick of length is glued to the stick of length first, but in the second diagram the stick of length is glued to the stick of length first. If doing a hand drawing arrows can be drawn with labels like glue here first and glue here next .) In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)    Having the Commutative Property of Addition and the Associative Property of Addition together basically tells us that when the expression we have is a sum, we can rearrange the terms in any order we want and simplify the addition of any terms in any order we want. For example is equal to and is also equal to . When rearranging, be sure that any minus sign that was in front of a term stays in front of that term.   Representing Multiplication Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the area of a rectangle with height and width .  The area of the rectangle is a picture of        We will draw with the convention that the factor before the muliplication symbol is the height of the rectangle and the factor after the multiplication symbol is the width. In the drawing, I made the choice to represent as a slightly smaller number than .   What we're introducing regarding the geometric representation of multiplication is an idea that we've seen before in geometry: we often write to represent the area of a rectangle with length and width . Here, we're just using and instead of and as the two factors.     Represent geometrically.      A picture of           Represent geometrically.      A picture of         We can apply the geometric representation of addition to learn several important algebra facts about addition.   Commutative Property of Multiplication        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a rectangle with height and width . The right side, , is represented by a rectangle with height and width . Both rectangles have the same area, since we can get from one rectangle to the other by rotation. Since the two areas are equal, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)     Associative Property of Multiplication      We will skip the geometric explanation of the Associative Property of Multiplication, since we'd have to enhance our geometric interpretation of multiplication to include three factors. If you're curious, try to think through how you might represent and geometrically. As a hint, you'll need three-dimensional objects to do this.   I just want to take a moment to keep encouraging you to think about addition and multiplication geometrically. It may be new and strange to you. It may seem like a waste of time to you. So far, it may just seem like a silly to give a geometric explanation of why certain facts (that might even feel obvious to you) are explained using geometry. However, setting up this foundation will make several challenging concepts in the future become a lot easier to digest.    How do I prevent confusing the two geometric representations?  The geometric representation of addition is the gluing together of sticks. The geometric representation of multiplication is the area of a rectangle.  One technique to help recall which is which is to recall that a usual presentation of the area formula is . Because this formula multiplies together two quantities (named and ), we can remember that multiplication is represented by area. Since addition is not represented by area, it must be represented by the other geometric idea we've seen, which is gluing sticks together.  Here's another techinque! Pick two numbers where the sum of the two numbers and the product of the two numbers is different. What I mean is that we wouldn't want to pick and , since both the sum and the product are .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  You can pick any two numbers you want, as long as the sum and product are different   We are now about to talk about an important algebra property that mentions both addition and multiplication. When we look at the geometric representation, we will need both geometric representations: gluing together of sticks and area of rectangles will both appear.   Distributive Law, version 1        Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     Before digging in, let's note that in the diagram the left, we see a stick of length glued to a stick of length , making a stick of length . (This makes use of the geometric representation of addition.) The left side, , is represented by a rectangle with height and width . The right side, , is represented by two rectangles: one with height and width , and the other with height and width . The area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, since we can get from the rectangle on the left to the two rectangles on the right by cutting the rectangle on the left vertically into two pieces. Since the area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)    In the Distributive Law , we can substitute any expression we want for the , any expression we want for the , and any expression we want for the . If we can for a moment explain what the Distributive Law is saying informally, the result of this times the sum of that and the other thing is the same as this times that plus this times the other thing . For example the Distributive Law tells us that is equal to .   When you see , I encourage you to think about the Distributive Law as we wrote it , and relate the and and in the formula to the and and in the expression .  It is easy to dismiss this advice and just think What's the point of all this? I can just see that I should distribute . However, it is important to see exactly what this Distributive Law is saying, and what it is not saying. The left side addresses only an expression that has addition on the inside of the parentheses, and multiplication outside. For example, the formula has nothing to say about the expression . It would be tempting to look at and try to distribute the somehow. But when we read the left side of and we see that the left side says , we have to carefully note that addition is inside the parentheses with multiplication outside. The problem with is that multiplication is inside the parentheses with the addition outside. So the Distributive Law does not apply to .     Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite     Using the Distributive Law , we can let , , and . Then we have     In the example above, we informally say that we distributed 10 . We can also turn an expression of the form into an expression of the form . This process is called factoring . (Factoring is the reverse of the process of distributing.)    Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .      Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .      Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have      When factoring it is common to make the mistake of saying that this expression is equal to instead of . When we see , to successfully factor out a we will write an expression in the format , and the first question mark is filled in by asking 9 times what is the first term , while the second question mark is filled in by asking 9 times what is the second term .  To provide a little more convincing, you can always check your factoring by taking your answer and distributing. Note that distributing in the expression gives us .     Factor the expression .    Using the Distributive Law , we can let , , and . Then we have As we factor out , the reason that there is a as the second term in parentheses is because this answers times what equals the second term in the original expression , which applies the same reasoning for why an appears as the first term in parentheses because this answers times what equals the first term in the original expression .     Distributive Law, version 2      This version has subtraction inside the parentheses instead of addition inside the parentheses. Since we didn't provide a geometric representation of subtraction, we won't provide a geometric explanation of why this version of the Distributive Law is true. (However, for a mental challenge, we can use the first version of the Distributive Law to explain why this version is true. We can think of as , and then apply the first version of the Distributive Law.)    Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .     Distributive Law, version 3      This version has the multiplication on the right instead of the left.     Spend a few minutes providing the geometric explanation of why is true. When doing this, remember we shouldn't select specific numbers for , , or .      Distributive Law, version 4        Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have       Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have     The last two examples show that the process known as collecting like terms is actually justified by the Distributive Law. In fact, the only reason why collecting like terms works at all is because of the Distributive Law! Collecting like terms is actually factoring out the variable from several terms (though we often skip writing that middle step such as and just simplify the part that is in parentheses in our head.)   It may be tempting to ignore this comment about the connection between collecting like terms and the Distributive Law. If we ignore the connection, it would be easy to see an expression like and feel stuck thinking that we can't collect like terms. However, if we remember that collecting like terms is actually factoring, then we can see that In another example like we very often skip writing the middle step and just directly go from to . However, it's good to remember that there is a middle step, and that middle step is justified by the Distributive Law. Recalling this allows us to not get intimidated by expressions like .   We have shown four versions of the Distributive Law. Here is an extended version of the Distributive Law:   Distributive Law, one extended version         Come up with other extended versions of the Distributive Law. Be careful to pay attention to where the addition and subtraction signs are, and where the multiplication signs are (including hidden multiplication signs).     We will need to watch out for some subtle problems involving distribution.    Simplify .    The first set of parentheses can be dropped. So, the given expression is equal to . Now, the minus sign in front of the parentheses is often casually called distributing the minus sign . The previous expression is equal to . We have provided explanations, but to now provide a good presentation of work which includes equal signs where they should belong, we should write .    For some, the explanation given above was sufficient. However, I think that if I had seen this for the first time (or if I've always been confused by this in the past), then I'd love to have a more detailed explanation. So here is a more detailed explanation. When subtracting any value, we can think of replacing what's being subtracting by adding the value multiplied by . That sounds confusing, so let's describe this on several examples, starting small. We can reinterpret as . We can reinterpret as . We can reinterpret as . In the same way, we can treat as , again reintrepreting by saying that instead of subtracting a quantity, we'll add the negative of the quantity (and the negative of a quantity is obtained when multiplying the quantity by .) Then in , we can distribute but even here, let's choose to do this slowly, so that we can see what's going on. What I mean is that instead of disturbiting and simplifynig all in one step, let's just distribute without simplifying any multiplications. So, the previous expression is equal to . We can change the adding of into subtracting instead, and for the last term, we happen to be adding , due to that plus sign, but adding what? We are adding a negative times a negative. So, we could copy down that final plus sign first, and replace with . So the previous expression is equal to . Putting this altogether: .      Simplify     One view is to distribute the minus sign and have     We can turn as , or in reverse turn into . Using both of these ideas (and really, the second idea is the first idea in reverse), we write .    While we advertised this concept of distributing the minus sign in its most subtle form (when we are distributing ), a similar idea applies when we are distributing any negative number.    Simplify .    One view is to distribute  .    The answer we gave may be unsatisfying to some folks, so here's a version where the subtracting is rewritten as adding a negative. Visually, we still will have the same amount of minus signs: where the minus sign used to be will be replaced with a plus sign followed by a minus sign (it's just that the minus sign will be right in front of the ). We have .      Simplify .    One view is to distribute  .    Here's a version where the subtracting is rewritten as adding a negative. We have .    Perhaps the slightly longer second answer convinces you that the first answer worked. In any case, the question in this example is only slightly different than the example right before that, so it makes sense that the final expressions are very similar: the question we just answered had a constant of while the question before had a constant of . In particular, it makes sense that the two different questions had two different answers. I think it would have been a little weird if we got the same answer for the two differnt questions.    Summary  Expressions with and without variables can be interpreted and analyzed using the Order of Operations, and expressions without variables can be simplified down to a single constant using the Order of Operations. The result of adding and subtracting expressions called terms results in a sum, while the result of multiplying expression called factors results in a product. The geometric representation of addition by gluing together sticks and the geometric representation of multiplication by the area of a rectangle can be used to justify major algebraic formulas, including the Distributive Law. It is the Distributive Law which actually justifies the shortcut process known as collecting like terms.    Exercises     Write in your own words how each expression could be spoken aloud with clarity.               Simplify the following expressions. Because there are no variables, each expression can be simplified based only on the Order of Operations. Because the intention of this exercise is to practice the Order of Operations, avoid applying the Distributive Law, even if you are certain that the Distributive Law could be applied.                  In each expression below, identify which operation is performed first, which is performed next, and so on.            In each expression below, identify which operation is performed first.               In each expression below, identify which operation is performed last.               In each part below, you are given two expressions. Based only on the Order of Operations, are the two expressions equal or do we not have enough information? Notice how similar the expressions are: in most cases, one expression just has more parentheses. (Base your answer only on the Order of Operations, and not on whether anything should or shouldn't distribute.)  and  and  and  and  and  and  and  and  and  and  and     Each expression below is a sum. State the terms.  State the terms of  State the terms of  State the terms of  State the terms of    What term(s) do and have in common?  Geometrically represent the following expressions.          For each geometric representation below, write an expression it represents. (Note, there is often more than one correct answer.)            Factor each expression below.           Simplify each expression below two ways: once by applying the appropriate Distributive Law to factor (showing all steps), and once by quickly collecting like terms. Why ask you to simplify each expression the slightly slower way and the slightly faster way ? The purpose of this exercise is to reinforce the important idea that collecting like terms is actually justified by the Distributive Law.             "
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
  "id": "sec-operations-3",
  "level": "2",
  "url": "sec-operations.html#sec-operations-3",
  "type": "Try it",
  "number": "1.1.1",
  "title": "",
  "body": "  AAAAAAAA Edit   As a cashier, a customer gives you $20 for their purchase of $15.75. You input into the cash register, and just as you're about to make the $4.25 change, the customer hands you a one-dollar bill they found. What do you do?  A taxi charges $3 to start plus $2 for every mile. If you ride 7 miles, what is the total cost? ( )  A movie ticket costs $12, and popcorn costs $5. If you buy 3 tickets and 1 popcorn, how much do you spend? ( )  A plumber charges $50 per hour plus a $30 service fee. If the plumber works for 4 hours, what is the total bill? ( )  A shirt costs $20 and jeans cost $30. If you buy 2 shirts and 3 pairs of jeans, how much do you spend? ( )  A train travels 60 miles per hour. How far does it go in 2.5 hours, and then return halfway back? ( )  A gym charges $40 per month plus $10 per guest pass. If you keep the membership for 6 months and buy 4 guest passes, what is the cost? ( )  A baker sells cakes for $15 each. If she sells 10 cakes and then spends $25 on ingredients, what is her profit? ( )  A ride at an amusement park charges $4 admission plus $2 per ride. If someone goes on 5 rides, how much do they pay? ( )  A cell phone plan costs $25 per month plus $0.10 per text. If you keep the plan for 3 months and send 200 texts total, what is the cost? ( )  A pizza shop sells large pizzas for $12 and small pizzas for $8. If you buy 2 large and 3 small pizzas, how much do you spend? ( )  A car rental costs $40 per day plus $20 for insurance. If you rent it for 5 days, what is the total cost? ( )  A taxi charges $2 per mile, but there is also a $5 starting fee. If you ride 10 miles, how much do you pay? ( )  A runner trains by running 3 miles each morning and 5 miles each evening for 7 days. How many miles total? ( )  A concert ticket is $60, and a service fee of $5 is added to each ticket. If you buy 4 tickets, how much do you pay? ( )  A plumber charges $40 per hour, plus a $25 trip fee. If a job takes 3 hours, what is the total bill? ( )  A baseball team sells hot dogs for $3 and sodas for $2. If 50 hot dogs and 70 sodas are sold, how much money is made? ( )  A ride service charges $2 per mile, with a $10 discount applied at the end. If the trip is 15 miles, what is the total? ( )  A theme park charges $50 admission and $5 per ride. If someone goes on 6 rides, how much do they pay? ( )  A farmer sells apples for $2 per pound and pears for $3 per pound. If she sells 15 pounds of apples and 10 pounds of pears, how much does she earn? ( )    "
},
{
  "id": "sec-operations-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-6",
  "type": "Note",
  "number": "1.1.2",
  "title": "",
  "body": " Pay attention to the language of mathematics.  "
},
{
  "id": "def-expression",
  "level": "2",
  "url": "sec-operations.html#def-expression",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  An expression is mathematical notation representing a number.   "
},
{
  "id": "sec-operations-8-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-5",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " Both and are examples of expressions. Both of these expressions are constants .  "
},
{
  "id": "sec-operations-8-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-6",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Writing is another expressions. This is an expression even if we haven't simplified this to the value . Like the two expressions in the previous example, the expression shown here (both the unsimplified and the simplified versions) is a constant , since the expression lacks any variable(s).  "
},
{
  "id": "sec-operations-8-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-7",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Both and are examples of expressions which mention the variable . In the first expression, the variable is written once. In the second expression, the variable is written twice.  "
},
{
  "id": "sec-operations-8-8",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-8",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " The expression mentions two variables. Since one or more variables appear, this expression is not a constant.  "
},
{
  "id": "order-of-operations",
  "level": "2",
  "url": "sec-operations.html#order-of-operations",
  "type": "Principle",
  "number": "1.1.8",
  "title": "Order of Operations.",
  "body": " Order of Operations  An expression must always be simplified and read by following the Order of Operations :  Parentheses  Exponents  Multiplication and Division (from left to right)  Addition and Subtraction (from left to right)  In addition, every time you write an expression, ensure your writing is based on the Order of Operations.  "
},
{
  "id": "sec-operations-8-12",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-12",
  "type": "Remark",
  "number": "1.1.9",
  "title": "",
  "body": " By the time we get to the third part of the Order of Operations, all exponents would have been evaluated. At this point, we look for any multiplication or division. If there is both multiplication and division, we evaluate them from left to right. It is not true that multiplication must be done before division. All divisions and multiplications that we see have the same level of precedence, and we evaluate them scanning from left to right in that order.  "
},
{
  "id": "sec-operations-8-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-13",
  "type": "Remark",
  "number": "1.1.10",
  "title": "",
  "body": " Similarly, by the time we get to the last part of Order of Operations, all multiplications and divisions would have been handled. That means that what remains of our expressions should only have addition and subtraction operations remaining. These should be handled from left to right.  "
},
{
  "id": "sec-operations-8-14",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-14",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " The Order of Operations is sometimes remembered by the acronym PEMDAS, which stands for Parentheses, Exponents, Multiplication, Division, Addition, and Subtraction.  Because of the way that PEMDAS is often taught, many people mistakenly believe that multiplication must be done before division, and addition must be done before subtraction. This is not true. For this reason, some people prefer the acronym GEMA, which stands for Grouping symbols, Exponents, Multiplication and Division, Addition and Subtraction. In the acronym GEMA, the G is used to indicate that there are many kinds of grouping symbols, not just parentheses. Also, the multiplication and division are addressed together in the M , and addition and subtraction are addressed together in the A .  "
},
{
  "id": "ex-expression-simplify",
  "level": "2",
  "url": "sec-operations.html#ex-expression-simplify",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Simplify the expression .    We will simplify the expression by following the Order of Operations. First, notice that there are no parentheses, so we move on to the next part of the Order of Operations. There is a place where the expression has exponens, so we zoom in on and simplify this portion of the expression to . So, the expression given to us becomes .  Now there is no more exponents. Next, we look for any multiplication or division. We see both multiplication and division, so we evaluate them from left to right. The left-most multplication or division we see is the division , which simplifies to . This gives us the expression . Continuing to scan from left to right for any multiplications or divisions, we see the multiplication , which simplifies to . This gives us the expression .  Now there are no more multiplications or divisions, we look for any additions or subtractions, starting from the left. The left-most addition or subtraction we see is the subtraction , which simplifies to . This gives us the expression . Continuing to scan from left to right for any additions or subtractions, we see the addition , which simplifies to .  Because this was our first example of applying the Order of Operations, we wanted to be very thorough to explain each step. To present our work, we start from the original expression and after writing an equal sign (to indicate that what we will write next is equal) write a simplified version of the expression. We continue this process until we reach the final simplified expression. For this example, we have .  It is also acceptable to write each expressions on their own lines, as follows: Note that when presenting our work vertically we still include the equal signs to indicate that each expression is equal to the previous expression.   "
},
{
  "id": "sec-operations-8-16",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-16",
  "type": "Principle",
  "number": "1.1.13",
  "title": "Expectation.",
  "body": " Expectation  When simplifying any expression, it is important to include equal signs to indicate that each expression is equal to the previous expression.  "
},
{
  "id": "sec-operations-8-17",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-17",
  "type": "Principle",
  "number": "1.1.14",
  "title": "Expectation.",
  "body": " Expectation  While simplifying expressions, ensure that the next expression you write is truly equal to the previous expression, instead of just writing the portion of the expression that is changing.  "
},
{
  "id": "sec-operations-8-18",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-18",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": "  Simplify the expression .    We can present our work horizontally, continuing to always write to the right of an equal sign like this .    We can instead present our work vertically    "
},
{
  "id": "sec-operations-8-19",
  "level": "2",
  "url": "sec-operations.html#sec-operations-8-19",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Simplify the expression .    We can present our work horizontally, always writing to the right of the equal sign like this: .    We can instead present our work vertically:    "
},
{
  "id": "sec-operations-9",
  "level": "2",
  "url": "sec-operations.html#sec-operations-9",
  "type": "Principle",
  "number": "1.1.17",
  "title": "Habit.",
  "body": " Habit  Always read expressions based on the Order of Operations.  "
},
{
  "id": "sec-operations-10",
  "level": "2",
  "url": "sec-operations.html#sec-operations-10",
  "type": "Principle",
  "number": "1.1.18",
  "title": "Habit.",
  "body": " Habit  Always write expressions based on the Order of Operations.  "
},
{
  "id": "order-of-operations-variables",
  "level": "2",
  "url": "sec-operations.html#order-of-operations-variables",
  "type": "Principle",
  "number": "1.1.19",
  "title": "How to apply Order of Operations to expressions with variables.",
  "body": " How to apply Order of Operations to expressions with variables  Given an expression:  Identify each operation that is written in the given expression.  Apply the Order of Operations to identify in which order the operations would be performed.  Instead of simplifying an expression, we would hypothetically perform the operations.  "
},
{
  "id": "ex-expression-simplify-variables",
  "level": "2",
  "url": "sec-operations.html#ex-expression-simplify-variables",
  "type": "Example",
  "number": "1.1.20",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    The expression has three operations. Scanning from left to right, we see the following operations present: exponentiation, subtraction, and multiplication. When there is no symbol written between two variables, there is a hidden multiplication sign. In fact, to make it clearer, we can rewrite the expression as .  Now that we have identified which operations are present in this expression (in this example, three of them) we will apply the Order of Operations to determine in which order these operations would be performed.  Since there are no parentheses in our expression, the first operation that we would perform is the exponentiation. That is, if we knew the value of , then we would first simplify .  Next, we would perform the multiplication . In other words, if we knew the value of and we knew the value of , then our work in this second step would be to simplify, and we'd have , whatever the value of that is  Finally, we would perform the subtraction: we would take whatever the value of and subtract from this whatever the vaule of is to get .     "
},
{
  "id": "sec-operations-11-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-7",
  "type": "Example",
  "number": "1.1.21",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    First, we identify the operations present, which are an addition, a multiplication written as a dot, and exponentiation. In addition, a part of the expression is contained inside parentheses.    Since is in parentheses, we would perform the addition first. So, if we hypothetically knew the values of and , we'd replace this with the value of , whatever value that is.  After this, there would be no parentheses. Since all that would be left is a multiplication and an exponentiation, we would perform the exponentiation. We would take whatever the value of is and raise this value to the th power. This would give us , whatever the value of that is.  Finally, we'd take whatever the value of is and whatever the value of is and multiply these values together.     "
},
{
  "id": "sec-operations-11-9",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-9",
  "type": "Example",
  "number": "1.1.22",
  "title": "",
  "body": "  What order are the operations performed in the expression ?    To make it clearer where the operations are, let's rewrite the expression as .    Since is in parentheses, we would perform this subtraction first.  Next, there would be no more parentheses, so we would perform the exponentiation: we would take , whatever the value of is, and raise this to the th power. Thus, we'd have whatever the value of is.  Next, we would perform the multiplication . That is, if we knew the value of we would multiply this by the value of value of from the previous step, which would give us , whatever the value of that is .  Then, we would perform the multiplication . That is, if we knew the value of , we would simplify .  Finally, we would perform the addition: we would take whatever the value of is and add to this whatever the value of is.     "
},
{
  "id": "sec-operations-11-11",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-11",
  "type": "Example",
  "number": "1.1.23",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first because the multiplication is in parentheses. Then we perform the subtraction of and to get .  In the second expression , there are no parentheses. We perform the multiplication first. Then we perform the subtraction of and to get .  In both expressions, we perform the multiplication first, and then we perform the subtraction of and next. Based only on the Order of Operations, the two expressions are equal.   "
},
{
  "id": "sec-operations-11-12",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-12",
  "type": "Example",
  "number": "1.1.24",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the the content is in parentheses. We do exponentiation next to get . Our final operation is the multiplication of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Finally, we perform the addition of and .  In the first expression, we perform the addition first, then the exponentiation, and finally the multiplication. In the second expression, we perform the exponentiation first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal. (These expressions might be equal or they might not, but we cannot determine this based only on the Order of Operations. If these expressions happened to be equal, this would have to be explained by something other than the Order of Operations.)   "
},
{
  "id": "sec-operations-11-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-13",
  "type": "Example",
  "number": "1.1.25",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the multiplication first. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In the second expression , we perform the multiplication first because this is in parentheses. Then, we perform the addition of and the value of . Finally, we perform the subtraction of the value of and .  In both expressions, we perform the multiplication first, then the addition, and finally the subtraction. Based only on the Order of Operations, the two expressions are equal.   "
},
{
  "id": "sec-operations-11-14",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-14",
  "type": "Example",
  "number": "1.1.26",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because the addition is in parentheses. Next, we perform the division of by the value of . Finally, we perform the multiplication of the value of and .  In the second expression , we perform the division first. Next, we perform the multiplication . Finally, we perform the addition of the value of and the value of .  In the first expression, we perform the addition first, then the division, and finally the multiplication. In the second expression, we perform the division first, then the multiplication, and finally the addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-11-15",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-15",
  "type": "Example",
  "number": "1.1.27",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the addition first because this is in parentheses. Next, we perform the addition because this is in parentheses. Finally, we perform the division of the value of by the value of .  In the second expression , we perform the division first. Next, we perform the addition of and the value of . Finally, we perform the addition of the value of and .  In the first expression, we perform the addition first, then the addition , and finally do the division of whatever the value of is by whatever the value of is. In the second expression, we perform the division first, then an addition, and finally another addition. To be clear, in the first expression the value of is divided by whatever the value of is, and in the second expression the value of is divided by whatever the value of is. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-11-16",
  "level": "2",
  "url": "sec-operations.html#sec-operations-11-16",
  "type": "Example",
  "number": "1.1.28",
  "title": "",
  "body": "  Based only on the Order of Operations, are and equal or do we not have enough information?      In the first expression , we perform the subtraction first because the subtraction is in parentheses. Next, we perform the exponentiation to get . Then, we perform the multiplication of and . Next, we perform the multiplication of and to get . Finally, we perform the addition of the value of and the value of .  In the second expression , we perform the exponentiation first to get the value of . Next, we perform the multiplication of and . Then, we perform the multiplication of and . Finally, we perform the subtraction of the value of and the value of , and then add to this whatever the value of is.  In the first expression, we perform the subtraction first, then the exponentiation, then two multiplications, and finally an addition. In the second expression, we perform an exponentiation first, then two multiplications, then a subtraction, and finally an addition. Based only on the Order of Operations, we do not have enough information to determine if the two expressions are equal.   "
},
{
  "id": "sec-operations-12-3",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-3",
  "type": "Definition",
  "number": "1.1.29",
  "title": "",
  "body": "  An expression that is the result of adding and\/or subtracting two or more expressions together is called a sum . Each individual piece of the sum is called a term .   "
},
{
  "id": "sec-operations-12-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-5",
  "type": "Example",
  "number": "1.1.30",
  "title": "",
  "body": " The expression is the result of adding and subtracting expressions together, so is called a sum. The three terms in this sum are , , and .  "
},
{
  "id": "sec-operations-12-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-6",
  "type": "Definition",
  "number": "1.1.31",
  "title": "",
  "body": "  An expression that is the result of multiplying two or more expressions together is called a product . Each individual piece of the product is called a factor .   "
},
{
  "id": "sec-operations-12-8",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-8",
  "type": "Example",
  "number": "1.1.32",
  "title": "",
  "body": " The expression is the result of multiplying expressions together, so is called a product. The three factors in this product are , , and .  "
},
{
  "id": "sec-operations-12-9",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-9",
  "type": "Example",
  "number": "1.1.33",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a product. The three factors in this product are , , and .   "
},
{
  "id": "sec-operations-12-10",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-10",
  "type": "Example",
  "number": "1.1.34",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The three terms in this sum are , , and .   "
},
{
  "id": "sec-operations-12-11",
  "level": "2",
  "url": "sec-operations.html#sec-operations-12-11",
  "type": "Example",
  "number": "1.1.35",
  "title": "",
  "body": "  Is a sum, a product, or neither? If it is a sum, what are the terms? If it is a product, what are the factors?    The expression is a sum. The two terms in this sum are and .   "
},
{
  "id": "geometric-addition",
  "level": "2",
  "url": "sec-operations.html#geometric-addition",
  "type": "Principle",
  "number": "1.1.36",
  "title": "Representing Addition Geometrically.",
  "body": " Representing Addition Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the length of the stick made by gluing a stick of length to a stick of length .  A picture of       "
},
{
  "id": "sec-operations-13-5",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-5",
  "type": "Example",
  "number": "1.1.38",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-13-6",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-6",
  "type": "Example",
  "number": "1.1.40",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-13-7",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-7",
  "type": "Example",
  "number": "1.1.42",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "commutative-property-addition",
  "level": "2",
  "url": "sec-operations.html#commutative-property-addition",
  "type": "Principle",
  "number": "1.1.44",
  "title": "Commutative Property of Addition.",
  "body": " Commutative Property of Addition     "
},
{
  "id": "sec-operations-13-10",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-10",
  "type": "Example",
  "number": "1.1.45",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length . In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)   "
},
{
  "id": "associative-property-addition",
  "level": "2",
  "url": "sec-operations.html#associative-property-addition",
  "type": "Principle",
  "number": "1.1.47",
  "title": "Associative Property of Addition.",
  "body": " Associative Property of Addition     "
},
{
  "id": "sec-operations-13-13",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-13",
  "type": "Example",
  "number": "1.1.48",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . The right side, , is represented by a stick of length glued to a stick of length , and then this resulting stick is glued to a stick of length . (What the drawing doesn't indicate is the order of the gluing, so we need to clarify this with words: in the first diagram the stick of length is glued to the stick of length first, but in the second diagram the stick of length is glued to the stick of length first. If doing a hand drawing arrows can be drawn with labels like glue here first and glue here next .) In both cases, the resulting stick has the same length, so the two expressions are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)   "
},
{
  "id": "geometric-multiplication",
  "level": "2",
  "url": "sec-operations.html#geometric-multiplication",
  "type": "Principle",
  "number": "1.1.50",
  "title": "Representing Multiplication Geometrically.",
  "body": " Representing Multiplication Geometrically  Suppose and are positive real numbers. Then is geometrically represented by the area of a rectangle with height and width .  The area of the rectangle is a picture of       "
},
{
  "id": "sec-operations-13-17",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-17",
  "type": "Note",
  "number": "1.1.52",
  "title": "",
  "body": " What we're introducing regarding the geometric representation of multiplication is an idea that we've seen before in geometry: we often write to represent the area of a rectangle with length and width . Here, we're just using and instead of and as the two factors.  "
},
{
  "id": "sec-operations-13-18",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-18",
  "type": "Example",
  "number": "1.1.53",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "sec-operations-13-19",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-19",
  "type": "Example",
  "number": "1.1.55",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "commutative-property-multiplication",
  "level": "2",
  "url": "sec-operations.html#commutative-property-multiplication",
  "type": "Principle",
  "number": "1.1.57",
  "title": "Commutative Property of Multiplication.",
  "body": " Commutative Property of Multiplication     "
},
{
  "id": "sec-operations-13-22",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-22",
  "type": "Example",
  "number": "1.1.58",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     The left side, , is represented by a rectangle with height and width . The right side, , is represented by a rectangle with height and width . Both rectangles have the same area, since we can get from one rectangle to the other by rotation. Since the two areas are equal, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or .)   "
},
{
  "id": "associative-property-multiplication",
  "level": "2",
  "url": "sec-operations.html#associative-property-multiplication",
  "type": "Principle",
  "number": "1.1.60",
  "title": "Associative Property of Multiplication.",
  "body": " Associative Property of Multiplication     "
},
{
  "id": "sec-operations-13-25",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-25",
  "type": "Note",
  "number": "1.1.61",
  "title": "",
  "body": " I just want to take a moment to keep encouraging you to think about addition and multiplication geometrically. It may be new and strange to you. It may seem like a waste of time to you. So far, it may just seem like a silly to give a geometric explanation of why certain facts (that might even feel obvious to you) are explained using geometry. However, setting up this foundation will make several challenging concepts in the future become a lot easier to digest.  "
},
{
  "id": "sec-operations-13-26",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-26",
  "type": "Principle",
  "number": "1.1.62",
  "title": "How do I prevent confusing the two geometric representations?",
  "body": " How do I prevent confusing the two geometric representations?  The geometric representation of addition is the gluing together of sticks. The geometric representation of multiplication is the area of a rectangle.  One technique to help recall which is which is to recall that a usual presentation of the area formula is . Because this formula multiplies together two quantities (named and ), we can remember that multiplication is represented by area. Since addition is not represented by area, it must be represented by the other geometric idea we've seen, which is gluing sticks together.  Here's another techinque! Pick two numbers where the sum of the two numbers and the product of the two numbers is different. What I mean is that we wouldn't want to pick and , since both the sum and the product are .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  If we pick and , we can ask ourselves what geometric object has some aspect of having size and what geometric object has some aspect of having size . The object with size is a stick of length , which is the result of gluing together a stick of length and a stick of length . The object with size is a rectangle with area , which is the result of multiplying together and .  You can pick any two numbers you want, as long as the sum and product are different  "
},
{
  "id": "distributive-multiplication-addition",
  "level": "2",
  "url": "sec-operations.html#distributive-multiplication-addition",
  "type": "Principle",
  "number": "1.1.63",
  "title": "Distributive Law, version 1.",
  "body": " Distributive Law, version 1     "
},
{
  "id": "sec-operations-13-29",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-29",
  "type": "Example",
  "number": "1.1.64",
  "title": "",
  "body": "  Give a geometric explanation of why is true.    To see why this is true, we can represent both sides of the equation geometrically.  A picture of and     Before digging in, let's note that in the diagram the left, we see a stick of length glued to a stick of length , making a stick of length . (This makes use of the geometric representation of addition.) The left side, , is represented by a rectangle with height and width . The right side, , is represented by two rectangles: one with height and width , and the other with height and width . The area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, since we can get from the rectangle on the left to the two rectangles on the right by cutting the rectangle on the left vertically into two pieces. Since the area of the big rectangle on the left is equal to the sum of the areas of the two rectangles on the right, the two expressions they represent, namely and , are equal. (Note that in providing our geometric explanation, we never plug in numbers for or or .)   "
},
{
  "id": "sec-operations-13-31",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-31",
  "type": "Note",
  "number": "1.1.66",
  "title": "",
  "body": " When you see , I encourage you to think about the Distributive Law as we wrote it , and relate the and and in the formula to the and and in the expression .  It is easy to dismiss this advice and just think What's the point of all this? I can just see that I should distribute . However, it is important to see exactly what this Distributive Law is saying, and what it is not saying. The left side addresses only an expression that has addition on the inside of the parentheses, and multiplication outside. For example, the formula has nothing to say about the expression . It would be tempting to look at and try to distribute the somehow. But when we read the left side of and we see that the left side says , we have to carefully note that addition is inside the parentheses with multiplication outside. The problem with is that multiplication is inside the parentheses with the addition outside. So the Distributive Law does not apply to .  "
},
{
  "id": "sec-operations-13-32",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-32",
  "type": "Example",
  "number": "1.1.67",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-33",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-33",
  "type": "Example",
  "number": "1.1.68",
  "title": "",
  "body": "  Use the Distributive Law to rewrite     Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-34",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distributed factoring "
},
{
  "id": "sec-operations-13-35",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-35",
  "type": "Example",
  "number": "1.1.69",
  "title": "",
  "body": "  Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-36",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-36",
  "type": "Example",
  "number": "1.1.70",
  "title": "",
  "body": "  Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .   "
},
{
  "id": "sec-operations-13-37",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-37",
  "type": "Example",
  "number": "1.1.71",
  "title": "",
  "body": "  Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .   "
},
{
  "id": "sec-operations-13-38",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-38",
  "type": "Example",
  "number": "1.1.72",
  "title": "",
  "body": "  Use the Distributive Law to factor .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-39",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-39",
  "type": "Warning",
  "number": "1.1.73",
  "title": "",
  "body": " When factoring it is common to make the mistake of saying that this expression is equal to instead of . When we see , to successfully factor out a we will write an expression in the format , and the first question mark is filled in by asking 9 times what is the first term , while the second question mark is filled in by asking 9 times what is the second term .  To provide a little more convincing, you can always check your factoring by taking your answer and distributing. Note that distributing in the expression gives us .  "
},
{
  "id": "sec-operations-13-40",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-40",
  "type": "Example",
  "number": "1.1.74",
  "title": "",
  "body": "  Factor the expression .    Using the Distributive Law , we can let , , and . Then we have As we factor out , the reason that there is a as the second term in parentheses is because this answers times what equals the second term in the original expression , which applies the same reasoning for why an appears as the first term in parentheses because this answers times what equals the first term in the original expression .   "
},
{
  "id": "distributive-multiplication-subtraction",
  "level": "2",
  "url": "sec-operations.html#distributive-multiplication-subtraction",
  "type": "Principle",
  "number": "1.1.75",
  "title": "Distributive Law, version 2.",
  "body": " Distributive Law, version 2     "
},
{
  "id": "sec-operations-13-43",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-43",
  "type": "Example",
  "number": "1.1.76",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-44",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-44",
  "type": "Example",
  "number": "1.1.77",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have The selection of occured by looking for the greatest common factor of and .   "
},
{
  "id": "distributive-addition-multiplication",
  "level": "2",
  "url": "sec-operations.html#distributive-addition-multiplication",
  "type": "Principle",
  "number": "1.1.78",
  "title": "Distributive Law, version 3.",
  "body": " Distributive Law, version 3     "
},
{
  "id": "sec-operations-13-47",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-47",
  "type": "Try it",
  "number": "1.1.79",
  "title": "",
  "body": "  Spend a few minutes providing the geometric explanation of why is true. When doing this, remember we shouldn't select specific numbers for , , or .    "
},
{
  "id": "distributive-subtraction-multiplication",
  "level": "2",
  "url": "sec-operations.html#distributive-subtraction-multiplication",
  "type": "Principle",
  "number": "1.1.80",
  "title": "Distributive Law, version 4.",
  "body": " Distributive Law, version 4     "
},
{
  "id": "sec-operations-13-49",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-49",
  "type": "Example",
  "number": "1.1.81",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-50",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-50",
  "type": "Example",
  "number": "1.1.82",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-51",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-51",
  "type": "Example",
  "number": "1.1.83",
  "title": "",
  "body": "  Use the Distributive Law to rewrite .    Using the Distributive Law , we can let , , and . Then we have    "
},
{
  "id": "sec-operations-13-52",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "collecting like terms "
},
{
  "id": "sec-operations-13-53",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-53",
  "type": "Note",
  "number": "1.1.84",
  "title": "",
  "body": " It may be tempting to ignore this comment about the connection between collecting like terms and the Distributive Law. If we ignore the connection, it would be easy to see an expression like and feel stuck thinking that we can't collect like terms. However, if we remember that collecting like terms is actually factoring, then we can see that In another example like we very often skip writing the middle step and just directly go from to . However, it's good to remember that there is a middle step, and that middle step is justified by the Distributive Law. Recalling this allows us to not get intimidated by expressions like .  "
},
{
  "id": "distributive-extended",
  "level": "2",
  "url": "sec-operations.html#distributive-extended",
  "type": "Principle",
  "number": "1.1.85",
  "title": "Distributive Law, one extended version.",
  "body": " Distributive Law, one extended version     "
},
{
  "id": "sec-operations-13-56",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-56",
  "type": "Try it",
  "number": "1.1.86",
  "title": "",
  "body": "  Come up with other extended versions of the Distributive Law. Be careful to pay attention to where the addition and subtraction signs are, and where the multiplication signs are (including hidden multiplication signs).    "
},
{
  "id": "sec-distributing-negatives",
  "level": "2",
  "url": "sec-operations.html#sec-distributing-negatives",
  "type": "Example",
  "number": "1.1.87",
  "title": "",
  "body": "  Simplify .    The first set of parentheses can be dropped. So, the given expression is equal to . Now, the minus sign in front of the parentheses is often casually called distributing the minus sign . The previous expression is equal to . We have provided explanations, but to now provide a good presentation of work which includes equal signs where they should belong, we should write .    For some, the explanation given above was sufficient. However, I think that if I had seen this for the first time (or if I've always been confused by this in the past), then I'd love to have a more detailed explanation. So here is a more detailed explanation. When subtracting any value, we can think of replacing what's being subtracting by adding the value multiplied by . That sounds confusing, so let's describe this on several examples, starting small. We can reinterpret as . We can reinterpret as . We can reinterpret as . In the same way, we can treat as , again reintrepreting by saying that instead of subtracting a quantity, we'll add the negative of the quantity (and the negative of a quantity is obtained when multiplying the quantity by .) Then in , we can distribute but even here, let's choose to do this slowly, so that we can see what's going on. What I mean is that instead of disturbiting and simplifynig all in one step, let's just distribute without simplifying any multiplications. So, the previous expression is equal to . We can change the adding of into subtracting instead, and for the last term, we happen to be adding , due to that plus sign, but adding what? We are adding a negative times a negative. So, we could copy down that final plus sign first, and replace with . So the previous expression is equal to . Putting this altogether: .   "
},
{
  "id": "sec-operations-13-59",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-59",
  "type": "Example",
  "number": "1.1.88",
  "title": "",
  "body": "  Simplify     One view is to distribute the minus sign and have     We can turn as , or in reverse turn into . Using both of these ideas (and really, the second idea is the first idea in reverse), we write .   "
},
{
  "id": "sec-operations-13-61",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-61",
  "type": "Example",
  "number": "1.1.89",
  "title": "",
  "body": "  Simplify .    One view is to distribute  .    The answer we gave may be unsatisfying to some folks, so here's a version where the subtracting is rewritten as adding a negative. Visually, we still will have the same amount of minus signs: where the minus sign used to be will be replaced with a plus sign followed by a minus sign (it's just that the minus sign will be right in front of the ). We have .   "
},
{
  "id": "sec-operations-13-62",
  "level": "2",
  "url": "sec-operations.html#sec-operations-13-62",
  "type": "Example",
  "number": "1.1.90",
  "title": "",
  "body": "  Simplify .    One view is to distribute  .    Here's a version where the subtracting is rewritten as adding a negative. We have .   "
},
{
  "id": "sec-expressions-with-fractions",
  "level": "1",
  "url": "sec-expressions-with-fractions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Expressions with Fractions",
  "body": " Expressions with Fractions    In this section, we learn how to:    Add, subtract, multiply, and divide fractions.  Determine when common denominators are required and when they are not.  Determine when cancelling is permissible in a fraction and when it isn't.  Convert between mixed fractions and improper fractions.     Applications  Operations on fractions are a little more involved than operations on whole numbers, but what we learn will enable us to answer these questions:   A baking recipe calls for cups of flour. The recipe says that it serves . You are hosting a party where people will attend, so you need to make times the recipe. How many cups of flour do you need?    You have a two-by-four piece of lumber that measures feet long and another that is feet long. You will glue the two pieces together to create one leg of a nightstand. But you'll need to go to the store to make three other legs of the same height. How long is each leg?    A swimming pool is being filled at a rate of gallons per hour. How many gallons of water will be in the pool after hour?    A car is traveling at a speed of miles per hour. How far will the car travel in hours?    A group of friends go out to dinner. The bill comes to . If they split the bill evenly, how much does each person pay?    A recipe calls for cup of sugar. You only have a cup measuring cup. How many cups of sugar do you need to use to get the correct amount?    A recipe calls for cup of sugar. You put in cup of sugar by accident. How much more sugar do you need to put in to get back on track in following the recipe?       Representation and Equal\/Unequal Fractions   Representing Fractions Geometrically  Suppose and are positive real numbers. We can represent the fraction as follows: Start with a pizza that has equal-sized slices. Then is represented by eating of those slices.   In this way, represents taking\/eating the whole pizza, and represents taking a pizza that only has slices (those are huge slices, since there are only two of them) and eating one of those slices.    The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of           What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.    The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of     To get a denominator of , we need to cut each of the slices in half. This gives us equal slices, and we have eaten of those slices. So the answer is .  A picture of     If we step back and ignore where the cuts were made by a pizza cutter, the blue shaded part (representing the eaten pizza) looks to be the same amount in both pictures. So .      What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.    The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of     To get a denominator of , we need to cut each of the slices in half. This gives us equal slices, and we have eaten of those slices. So the answer is .  A picture of            What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.      In earlier examples, we had to cut each original slice of pizza into two equal-sized smaller pieces. In the Try it exercise, we need to cut each original slice of pizza into three equal-sized smaller pieces.    In the Try it exercise, going from a total of slices to a total of slices meant that in the resulting pizza, every slice was very small. This makes intuitive sense to us: when the denominator is large (in other words, there are many slices), then the size of each slice is small. In addition, when the denominator is small (in other words, there are few slices), then the size of each slice is large.   To create an equal fraction to the fraction we're given but without drawing pictures, we can notice that we take our starting fraction and multiply both the numerator and denominator by the same number. To formally state this fact:   Equal Fractions, different denominators   where and are nonzero.     Using the Equal Fractions formula, What fraction is equal to but has in the denominator?    To get a denominator of , we need to multiply the denominator of by . So we also need to multiply the numerator by . In what we just wrote, we went from the initial fraction to the middle expression to emphasize the Equal Fractions formula, though if we feel comfortable skipping this, we might write directly. That said, we may find a future example more complicated and writing the middle step (which indicates multiplication on top and on bottom, but does not simplify the multiplication) is good to practice, even in cases where we might not feel we need it.      Using the Equal Fractions formula, What fraction is equal to but has in the denominator?    To get a denominator of , we need to multiply the denominator of by . So we also need to multiply the numerator by .      When writing our work, we must be careful how we write our work. It is possible to write something that can be interpreted incorrectly. In detail:   We can write exactly as the previous example showed.    We can write the that we were multiplying on top and on bottom before the original content like this: and this just swaps the order of the factors in both multiplications.    We can skip actually writing in the times on top and on bottom and just write in the resulting numerator and denominator like this:     We cannot write to mean that we are multiplying by on top and on bottom. There are two ways of interpreting . We will discuss one of the ways to interpret by the end of this section, but a common way to interpret is as a mixed fraction, whose value is clearly larger than itself, while the original fraction is smaller than . So, we either jump to writing directly, or we need to write that we are multiplying by on top and on bottom (and that really requires physically writing two s: one on top and one on bottom), but we cannot just write a single . Reading as a mixed fraction has a differnt value than the original fraction, and in the other interpretation will also result in a value that is not equal to .      For another example of this warning, if we start with and we want to properly write about multiplying by on top and on bottom, we can write or or just immediately write , but we cannot write .    What fraction is equal to but has in the denominator?    We need to multiply the denominator by , so we also multiply the numerator by .       What fraction is equal to but has in the denominator?    We need to multiply the denominator by so we also multiply the numerator by . Here, if we wanted, we can distribute in both the numerator and denominator. However, we stopped where we did because we wanted to highlight the role of the Equal Fractions formula.      What fraction is equal to but has in the denominator?    We need to multiply the denominator by , so we also multiply the numerator by .     In certain situations, we can also use the Equal Fractions formula to reduce the size of the denominator.   Reducing Fractions  If we see the same factor in the numerator and denominator of a fraction, the process of removing this common factor is called cancelling in a fraction or reducing a fraction. This is applying our earlier formula  backwards in other words, this is turning into      What fraction is equal to but has in the denominator?    The numerator and denominator both have a factor of . For the first several examples, we will intentionally slow down and rewrite the numerator and denominator in factored form to highlight the common factor, which helps highlight exactly the role taken by the Reducing Fractions process we just described. We cancelled the common factor of in the numerator and denominator.      What fraction is equal to but has in the denominator?     We cancelled the common factor of in the numerator and denominator.      What fraction is equal to but has in the denominator?     Now we can cancel the common factor of in the numerator and denominator.      Reduce the fraction as much as possible.     Now we can cancel the common factor of in the numerator and denominator.     While we can cancel common factors in a fraction, we cannot cancel common terms . In other words, Let's describe this frequent error through two examples:   If someone took and tried to cancel the in the numerator and denominator, they would get , which is in a calculator. However, the original fraction can naturally be rewritten as , which is in a calculator.    The issue is more likely to occur when there are variables. (In fact, the previous example with its decimal representations of fractions was included to create a concrete and convincing example that we cannot cancel terms on top and bottom.) We cannot turn into by cancelling the common in the numerator and denominator. This is because is a term on top and bottom, and not a factor on top and bottom.        Reduce the fraction     There is a temptation to want to cancel part of the with the , but these are terms. We can only cancel factors. First, we rewrite the numerator and denominator in factored form: We cancelled the common factor of in the numerator and denominator.    You may prefer to factor a larger factor out of the numerator. (Note, we still cannot cancel terms.) After factoring, we replaced the that we factored out with to really highight that it is a factor of on top and bottom that we cancelled. To make the final expression in this solution look like the final expression in the previous solution, we could distribute the in the numerator. (In this example, you may feel comfortable skipping the writing the third expression, jumping directly from the second expression to the fourth expression. We included the third expression because going from the third expression to the fourth expression highlights the role of the Reducing Fractions process we described earlier.)      Adding and subtracting fractions     The pictures of and are shown below. How can we use these pictures to represent a picture that represents the value of as a single fraction?  A picture of       A picture of          Did you try this exercise? What did you notice about the pictures? Because of the different denominators, the slices in the two pictures are different sizes, so it seems a little funny if we just tried to add the numerators across and add the denominators across when we write with notation. This hints at the following idea: To add fractions, we need a common denominator. In this case, we can use as a common denominator. We can convert to a fraction with denominator by multiplying the numerator and denominator by . We can convert to a fraction with denominator by multiplying the numerator and denominator by . So: Note that the final answer is an improper fraction. This is perfectly fine. In algebra, it is often more helpful to leave answers as improper fractions. (By the end of this section, we'll explain exactly why improper fractions are preferred.)   Adding Fractions  Simplifying the addition of fractions requires having a common denominator .    Notice in the two fractions on the left side of the formula above, is the denominator for both fractions. The fact that is written for both denominators on the left is the formula communicating to us that both fractions have to have the same denominator. When we have that common denominator , the right side of this formula which says is tell us that fraction that we get as a result from simplifying the addition copies that same denominator , while the numerator of the new fraction is made by adding the numerators of the two fractions that had the same denominator. It is incorrect to try to just add straight across :       To show why this warning is here, in , we saw simplifies to but if we added straight across (using the fake formula meantion in the warning), we would have gotten . You can check that and are different answers with a calculator, or without a calculator, we can notice that is greater than , while is less than .    Simplify      The third expression may be skipped if you feel comfortable, but this is a nice technique to practice in smaller situations (beacuse in some larger situations, it may be harder for us to simplify the addition of the numerators in our head). The purpose of showing the second expression being equal to the third expression is also helpful in seeing the Adding Fractions formula apply as literally as possible.      Simplify          Because we are doing algebra, our fractions may have variables in them. The Adding Fractions formula still applies, and we still need a common denominator to simplify the addition of fractions.    Simplify            Simplify     Recall that means . To achieve a common denominator of , let's multiply both the top and bottom of the first fraction by , and multiply both the top and bottom of the second fraction by . Note that our final answer is , and there is nothing that will cancel: the denominator is a product (the result of multiplication) so its pieces (called factors) are eligible to be cancelled, but the numerator is not a product, and so we cannot cancel any common factors on top and bottom (since the top is not written as a product).      Simplify     Recall that means . To achieve a common denominator of , let's multiply both the top and bottom of the first fraction by , and multiply both the top and bottom of the second fraction by . (Be sure to read using the Order of Operations: the exponent does not apply to all variables, just to .)     How should we add a fraction and a non-fraction together? Anything that presents as a non-fraction can be written as a fraction with denominator .   How to add a fraction and a non-fraction  Turn the non-fraction into a fraction with denominator . Then use the Adding Fractions formula, noting that this formula requires a common denominator.     Simplify     We rewrite as . Then we can use the Adding Fractions formula, noting that we need a common denominator.       Simplify     We rewrite as .     Like adding fractions, subtracting requires a common denominator:   Subtracting Fractions  Simplifying the subtraction of fractions requires having a common denominator .      Simplify      The third expression may be skipped if you feel comfortable, but we specifically included this step because going from the second expression to the third expression highlights the role of the Subtracting Fractions formula.      Simplify      In this example, to achieve a common denominator of , the top and bottom of the first fraction both got multiplied by , while the top and bottom of the second fraction both got multiplied by .  Note that nothing cancels in , because the denominator is a product (the result of multiplication) so its pieces (called factors) are eligible to be cancelled, but the numerator is not a product, and so we cannot cancel any common factors on top and bottom (since the top is not written as a product).      Simplify      In this example, to achieve a common denominator of , the top and bottom of the first fraction both got multiplied by , while the top and bottom of the second fraction both got multiplied by .   Subtraction that occurs between a fraction and a non-fraction is a lot like addition: turn the non-fraction into a fraction.  Subtraction involving a fraction and a non-fraction  Turn the non-fraction into a fraction with denominator . Then use the Subtracting Fractions formula, noting that this formula requires a common denominator.     Simplify     Rewrite as .       Multiplying fractions  The process for multiplying fractions feels really different from adding or subtracting fractions. To be convinced that the process we will describe in a moment works, we'll go back to the geometric interpretation of multiplication. Recall that can be represented as the area of a rectangle with height and width .    Represent geometrically.      A picture of         The dotted lines in the picture above help us see that the rectangle has a height of and a width of . We can be really convinced that the resulting area is because we can notice the rectangle is made up of unit squares. I understand that it probably still feels a little funny to represent multiplication as an area, but this is a really useful way to think about multiplication.    Represent geometrically. Use the picture to determine the value of .    It can be a little more challenging to represent the area. To standardize things, let's copy (to scale) one of the unit squares from the previous example. Since the first factor is , we need a height of . The entire square that we copied has a height of so to get a height of , we can divide the height of the square into equal parts (achieved by creating > equally-spaced apart cuts in the interior of this line segment) and take of those parts. Similarly, for a width of , we can divide the width of the square into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and take of those parts.  Picture of     By going with what we have said about the geometric interpretation of multiplication, is the area of the blue rectangle. The portion shaded in blue is definitely less than because shading the entire unit square would have had area . How can we determine the area of the blue rectangle exactly, though? Surprisingly, we can apply the geometric interpretation of a fraction! Recall that means to take a whole pizza and cut it into equal slices and take of those slices, but there was no requirement that the pizza had to be a circle. So, we can think of the entire unit square as a whole pizza. To get the area of the blue rectangle, we can see all of the dotted lines as cuts that divide the pizza into equal slices. From our starting square and uncut pizza, the cuts end up creating equal slices (arranged in rows and columns). Then the blue rectange (representing the eaten part of the pizza) is made up of of those equal slices, so the area of the blue rectangle is which we can reduce to .    This is a profound first example that uses a lot of ideas, so be patient with yourself! We used the geometric interpretation of multiplication to create the shaded region in the first place. Once we have the region we need the area of, we stopped thinking about the geometric interpretation of multiplication and instead thought about the geometric representation of a fraction. Imagine someone using a pizza cutter to cut horizontally along lines, and to cut vertically in lines, as shown as dotted lines in . (The figure indicates in red the places where the pizza cutter began to cut the crust.) Out of equal-sized pieces of pizza, the area of the blue rectangle is made up of of those pieces, so the area of the blue rectangle is which reduces to .    Represent geometrically. Use the picture to determine the value of .    Starting from the exact same size unit square used in the last examples, we draw inside a rectangle with height and width . A height of is achieved by dividing square's height of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts. A width of is achieved by dividing the square's width of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts.  Picture of     The area of the blue shaded rectangle answers the question of what is. The dotted lines represent cuts that divide the pizza into equal slices (arranged in rows and columns). The shaded part represents taking of those slices. Thus, the product is .      Represent geometrically. Use the picture to determine the value of .    Starting from the exact same size unit square used in the last examples, we draw inside a rectangle with height and width . A height of is achieved by dividing square's height of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts. A width of is achieved by dividing the square's width of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts.  Picture of     The area of the blue shaded rectangle answers the question of what is. The dotted lines represent cuts that divide the pizza into equal slices (arranged in rows and columns). The shaded part represents taking of those slices. Thus, the product is .    The last example probably felt a little annoying, but I wanted us to explore the product of two fractions where neither fraction had in the numerator, so that we can see if there's a pattern. (Can you guess what the pattern is?) In fact, I thought I'd show the example we just did, so that you can try a slightly less annoying example. If you have a guess for what the pattern is, can you confirm it with drawing a picture in the next example. If you don't have a guess yet, that's totally okay, and I encourage you to try making a drawing for the next example (so that you have another example to look at for the pattern).     Represent geometrically. Use the picture to determine the value of .     Did you try this exercise? What did you find? Let's go back , where we saw that . Let's examine the resulting fraction .   The denominator was the total number of pizza slices. Since the pizza was cut in such a way that there were rows and columns, there were a total of slices. This number happens to be the product of the denominators of the two fractions we were originally given: ,    The numerator was the number of pizza slices that were eaten, shown in the figure shaded in blue. The shaded rectangle is an arrangement of pizza slices in rows and columns, so there were a total of slices eaten. This number happens to be the product of the numerators of the two fractions we were originally given: .   Did you find the same thing in ? Could you describe the numerator and denominator of the product by talking about the numerators and denominators of the two fractions we started with? If you didn't make a drawing, I encourage you to go back and try it. The point of drawing this a couple times is to be convinced that there is a pattern, and once you know that the pattern is always there (and even more awesomely, can see why it works by trying it hands on), then it won't be too surprising for you when we present the following procedure for simplifying the product of fractions.   Multiplying Fractions  To simplify the multiplication of fractions, we use    Notice that this formula does not require a common denominator. This is a big difference from the Adding Fractions and Subtracting Fractions formulas. Even when we looked at , where we saw that , we didn't need a common denominator: the two fractions that we started with had denominators and , which are different. The formula communicates that common denominators are not required by having different letters in the denominators for the two fractions on the left side of the equation. The right side of the equation communicates that we just multiply straight across . This is the opposite of what we saw in the Adding Fractions formula, where we were specifically warned not to add straight across . If you take a quick minute to check that this formula applied to all the examples where we drew pictures, then it'll feel a lot more comfortable going through the next few examples where we don't draw pictures and just multiply straight across.    Simplify          In the example above, we showed the second expression becauuse going from the first expression to the second expression literally highlights the use of the Multiplying Fractions formula. If you feel comfortable, you can skip writing the second expression in future examples, going from the first expression to the third expression.    Simplify          If we felt comfortable skipping the second expression, our work would look like this:     How should we multiply a fraction and a non-fraction together? Will the technique we used for adding and subtracting a fraction and a non-fraction work here too? Yes! Anything that presents as a non-fraction can be written as a fraction with denominator .   Multiplying a Fraction and a Non-Fraction  To multiply a fraction and a non-fraction, we can rewrite the non-fraction as a fraction with a denominator of . Then we can use the Multiplying Fractions formula.     Simplify     We rewrite as .     Let's practice additional examples that illustrate the Multiplying Fractions formula.    Simplify        In this example, we reduced the fraction to in the final step. (Remember that we can only cancel common factors , not common terms . We canceled a factor of from the numerator and denominator.)    Sometimes, we can simplify a multiplication of fractions by canceling common factors before we simplify the straight across multiplication. That is, we can indicate that multiplication is happening without simplifying the multiplication:    Simplify        Now we can see that there is a common factor of in the numerator and denominator, so we can cancel that common factor:     This is the same answer we got in the previous example, but this time we canceled a common factor before doing the multiplication. This technique can be really helpful especially when simplifying the multiplications in the numerator and\/or denominator would lead to large numbers: we avoid needing to do large-number multiplication, and also, it can be easier to spot common factors before multiplying.      Simplify        Now we can see that there is a common factor of in the numerator and denominator as well as a common factor of in the numerator and denominator (or instead of seeing the s and s individuall       Please note that you don't have to do it this way, but it can be convenient. If we write that there is a multiplication happening but do not simplify multiplication, it might just be easier to spot common factors. Cancelling early on means that when we eventually do simplify the multiplication, we will be working with smaller numbers.    Simplify        It takes a bit of work to simplify the multiplications in the numerator and denominator to obtain in the first place. Then, due to the numbers being large, it takes considerable effort to reduce this fraction to its equal value . This solution is completely valid, but the second solution below shows how we can avoid the large-number multiplications by canceling common factors before simplifying the multiplication.       The numerator and denominator both have factors of and , so we can cancel those common factors:         Simplify     First we indicate the multiplication without simplifying:     Above, we rewrote as . The factors that appear in both the numerator and denominator are and and and .   where we rewrote as .     Please note that when multiplying fractions, we do not need a common denominator: sometimes people get overly cautious and try to treat multiplying fractions like adding fractions. Let's look at an example and see what the common error is:   When asked to simplify it is tempting to think about common denominators (because we notice that both fractions already have the same denominator of ) but it is incorrect to state the result of simplying this multiplication as .    Before talking about what we should do and ignoring our work above, let's talk about the work above, to see if we can take the experience and foundation that we've built to question the reasonableness of our answer: Notice that the numerator is larger than the denominator in , so this fraction is greater than , but both of the fractions we started with were less than , so it doesn't make sense that their product would be greater than . In fact, the pizza diagram for would take just some of the slices from a square pizza that was cut into a -by- grid of slices, so the resulting fraction should be less than .    The correct simplification is . Notice that the denominator of the result is , not . The denominator of the result is the product of the denominators of the two fractions we started with: , even though the two denominators that we started with were the same. (This is different from adding fractions, where the denominator of the result was the common denominator.) The fact that we had common denominators is actually a distraction, and we should ignore it.    Here is a silghtly different example: . While this is a different problem, because the only change was by slightly changing the denominator of the second fraction, it seems reasonable that the final answer to this question would be close to the final answer of the previous question. Here, the denominators are different, so there is no distraction. Following our Multiplying Fractions formula, we have by multiplying straight across. Use a calculator to verify that is close to , but far from .   The takeaway is that when multiplying fractions just multiply straight across whether we have a common denominator or not!     Dividing fractions  Dividing by a fraction is the same as multiplying by its reciprocal.   Dividing Fractions formula  To divide by a fraction, multiply by its reciprocal and follow the Multiplying Fractions formula to simplify the multiplication of fractions.      Simplify            Simplify     Although the question didn't write the division symbol , the fraction bar indicates division. (So we could rewrite the problem as , and we'll say this is asking the same question.) However, to practice this new format, let's leave the original question in this format and work from there. From the second-to-last expression to the last expression, we reduced the fraction.     It is often tempting to see a question in this format and in the desire to multiply by the reciprocal, something unintentional remains in the writing. For example, looking to the previous computation, when starting with the next expression shouldn't read . The point is that multiplying by is what replaces dividing by , so we should either have in the denominator or have the multiplication by , but not both.  The analogy in the question before this one would be like if someone turned into instead of . Multiplying by is what replaces dividing by , so we should either divide by or multiply by , but not both.     Simplify          How would we divide between a fraction and a non-fraction? As usual, turn the non-fraction into a fraction with denominator .    Simplify .    We rewrite as . Then:       Additional practice    Simplify      Note that we had to simplify multiplication before simplifying addition. It is easy to fall into the trap of simplifying addition (that is, working on simplifying ) first, because we see the addition written first. However, we still need to read expressions based on the Order of Operations, even if the expression contains fractions.      Simplify     The division must be simplified before the subtraction. We turn dividing by into multiplying by instead.       Simplify .     Note that we cannot cancel part of the with part of the because is not a factor of the numerator. Similarly, we cannot cancel part of the with part of the because is not a factor of the numerator.      Simplify     We can simplify the division of fractions before simplifying addition: Now we need a common denominator to simplify addition of fractions: Finally, we can factor out in the numerator, and having factors of in both the numerator and denominator allows us to cancel :       Clarifications and details  Let's clarify some details about fractions. It will be easier to discuss this using a concrete example, but the discussion here applies in general. What we discuss will lead to important clarifications and expectations. Along the way, we discuss convenient places to stop working on a problem (it's always good to know when to stop and not work further than you have to!), because some formats of writing will be easier to work with in algebra than other formats.   First, we note that when writing a fraction whose value is negative, it is equivalent to present the fraction with the negative sign in the numerator, or in the denominator, or in front of the entire fraction. However, it is not equivalent to present the negative sign in both the numerator and denominator.    Writing and and are all legitimate ways to write the same negative fraction. You can check in a calculator that and and all give the same decimal value.  However, is not the same as the other three ways of writing the negative fraction. Instead, . You can check in a calculator that gives the same decimal value as . Alternatively, you can note that a negative divided by a negative results in a positive, or follow this cancellation of factors:    Suppose somone wrote . Then:   Someone might have written with the intent of writing a mixed fraction . The mixed part of the name refers to the fact that there is a non-fraction part ( ) and a fraction part ( ) mixed together. Using the standard procedure for converting a mixed fraction into an improper fraction, the value of is which simplifies to .  This is a good time to mention that writing to mean a mixed fraction is actually shorthand for . In fact, in we had simplified to get .    An entirely different view is possible. Someone might have written to mean , since a missing operation symbol is actually a hidden multiplication sign. In , we simplified to get . Please note that is not the same as . The two interpretations that we already have lead to different results: the mixed fraction intent leads to while treating a missing operation symbol as multiplication leads to .    We should bring up a third possibility, though what we are about to bring up is a common error of writing. Suppose we were in a situation where someone needs to start with the fraction and multiply the top and bottom by . (A situation where this might happen is when we are tasked with simplifying , and we'd need a common denominator to simplify the addition of fractions.) In a situation where someone needs to start with the fraction and multiply the top and bottom by , they might just write a single next to the fraction, which would look like this: . However, this is not a correct way to write what the writer intends. With this incorrect writing the writer would usually recover and correct for this in the next step by writing the result of actually multiplying by on top and bottom. You can use a calculator to check that is not equal to either or . In fact, is equal to , which makes sense because of what the Equal Fractions formula tells us.  When the desire is to multiply by two on top and on bottom, there are two ways to do this that are clear and unambiguous:   Write the times both on top and on bottom: .    Write neither the on top nor the on bottom, but perform and simplify these actions nonetheless:    But what we really must avoid doing is writing a single  to mean that we are multiplying by on top and bottom. So writing cannot mean for us that we are multiplying by on top and on bottom, even if there's a lot of spacing between the and the fraction. If you wish to write what you're multiplying by, just be sure to write two copies: one on top and one on bottom.     Maybe it's shocking to see that the same excerpt of writing can be interpreted two different ways leading to two different numbers. This discussion leads to some important ideas. First, let's present an expectation regarding our final answers for fractions:   Expectation for Fraction Format  We expect our final answers for fractions to be in improper fraction form whenever possible. Unless specifically requested by the question, we will never present an answer as a mixed fraction. Whenever we write a mixed fraction, we should actually mention that our writing should be interpreted as a mixed fraction.   You may be more used to mixed fractions and feel offended that the expectation avoids mixed fractions and favors improper fractions instead. But improper fractions are easier to work with in algebra, because it is hard to directly add, subtract, multiply, or divide mixed fractions. (In fact, when given a mixed fraction and a second mixed fraction, to perform any operation, we first need to convert both mixed fractions into improper fractions.) Therefore, it's actually convenient to leave any fractions as improper fractions in their final answers.    Simplify where we interpret and as mixed fractions.    We rewrite the first mixed fraction as . We rewrite the second mixed fraction as . Then, the product is By going through this example, I hope you really saw that it's preferrable to work with improper fractions anyway. In this question, we only had the step of completing one opertaion, but in a larger problem, we might need to take the result and do something further. It would be more convenient to do any further task working the improper fraction , so that's why we don't really bother converting this into a mixed fraction.     Perhaps the history of calling an improper fraction is what makes us a little uneasy. We use this language here (as opposed to the fraction ) because the numerator is larger than the denominator in . I guess I'd call an improper fraction only because I wouldn't call a mixed fraction, but because there are variables, I don't really know if is larger than or not. However, behaves like it needs to, and we can apply our fraction operations as described. For example,    Just like improper fractions are easier to work with than mixed fractions, improper fractions are are generally easier to work with than decimal represtations. Therefore, it is often more convenient for future steps to leave as is instead of presenting this as , and similarly, it is more convenient for us (and less work!) to leave as it is instead of presenting this as .   Well then, why have mixed fractions or decimals in the first place?  In everyday settings, people are used to seeing mixed fractions. Therefore, at the very end of an applied problem, when we are done and we are certain that the value will not be needed in further work, it would be reasonable to state a final answer (in this limited situation) as a mixed fraction.  The role of decimals is somewhat similar: when you have a final answer that is an improper fraction but you need to know a ballpark figure representation of that number, a decimal is helpful. For example, I don't really have a good sense of the value of , but I can put this into a calculator to see the value is close to , a decimal representation.   Changing gears, there's one thing that we haven't mentioned yet that's worth clarifying: The top and bottom of a fraction are each in what I'd like to call hidden parentheses.   Fractions have hidden parentheses  The top and bottom of a fraction are each in hidden parentheses..   Let's clarify what this means, and then talk about how this connects to the Order of Operations. The connection to the Order of Operations is really important in applied settings when a fraction-based expression on paper needs to be input into a calculator to get a decimal approximation.    In the fraction , the top is and the bottom is . The top and bottom are each in hidden parentheses, so we can rewrite this as . We can also write this as , but cannot write this as due to the Order of Operations. Therefore, to enter into a calculator, type , including the parentheses.      From a general chemistry class, a student got a value of on paper. How should this be entered on a calculator?    There are two sets of parentheses in the denominator already, but we should insert a set of parentheses around the entire denominator. We should also insert a set of parentheses around the numerator. Therefore, we should enter into the calculator.      If you deposited dollars every month for years into an account that ears interest compounded monthly, we can compute what the balance will be at the end of years by applying an equation in finance, and we would obtain as the balance. How should this be input into the calculator so that we can really understand what the balance will be?    Insert the entire numerator and denominator of the fraction in parentheses. In a calculator, we would type .    This fact that the entire numerator and the entire denominator are each in hidden parentheses, we can enhance and clarify what we've said about when we can cancel in fractions.    Simplify     Let's draw in the hidden parentheses to surround the entire denominator. We canceled the factor of in the numerator and denominator  If it still feels hard to view in the denominator, that's okay! I think that means you're doing a great job of really digging into the idea that factors are the pieces of a multiplication (and where is multiplication in the denominator)? Let's rewrite a solution, noting that multiplying anything by doesn't change a value, so . In fact, writing this level of detail explains why we have a instead of a in the denominator after the cancellation happened.      Simplify     Recall that squaring a thing means to multiply the thing by itself, even if that ``thing'' is longer to write, like , so . Let's make that replacement in the numerator, and then also surround the denominator in parentheses, making those hidden parentheses visible. In the second to last expression, which is the moment we just finished cancellation, we could have written instead of . However, since the numerator was , I wanted to practice the principle that the numerator of a fraction is always in a hidden set of parentheses, but backwards in a sense: just as much as we can draw in the hidden parentheses around the entire top or entire bottom, we can remove parentheses that surround the entire top or entire bottom.      Simplify      We canceled the factor of in the numerator and denominator. One new thing to note in this question: after cancellation, what's left is the factor of in the denominator, and we just removed the parentheses that surrounded the entire denominator. However, a common error that occurs right at the moment of cancellation is that it's temtping to put the factor of in the numerator. Note that after cancellation, the factor that didn't cancel was in the denominator, and shouldn't move up to the numerator.     After cancelling the same factor on top and bottom of a fraction, anything that remains uncanceled should stay in the same part of the fraction. Factors that are in the denominator should remain in the denominator, and shouldn't move up to the numerator. Factors that are in the numerator should remain in the numerator, and shouldn't move down to the denominator.     Simplify            Applications Revisited  Let's revisit the applications we introduced at the beginning of this section.    A baking recipe calls for cups of flour. The recipe says that it serves . You are hosting a party where people will attend, so you need to make times the recipe. How many cups of flour do you need?    The original recipe needs cups of flour, but we need to make times the recipe. We have to multiply both of these numbers, which (at least through context) we can see are both mixed fractions. We convert the two mixed fractions into improper fractions: The mixed fraction is , and the mixed fraction is . Then, we multiply the two improper fractions: Now, given that the problem is about baking, it makes a lot of sense to convert our final answer into a mixed fraction, since that's how measuring cups are typically used: We need cups of flour, as a mixed fraction. As a reminder of what mixed fraction is, if we wanted, we could actually write this quantity unambigously by writing cups of flour.      You have a two-by-four piece of lumber that measures feet long and another that is feet long. You will glue the two pieces together to create one leg of a nightstand. But you'll need to go to the store to make three other legs of the same height. How long is each leg?    Because we are gluing one piece of lumber to another, we need to add their measurements. From context, both numbers provided are mixed fractions, so we convert them: The mixed fraction is , and the mixed fraction is . Then, we add the two improper fractions: Since we needed to simplify the addition of fractions, we first got both fractions to have a common denominator of , which we achieved by leaving the first fraction alone, and multiplying the numerator and denominator of the second fraction by . Each leg will be feet long. Now, given that the problem is about measuring lumber, it makes a lot of sense to convert our final answer into a mixed fraction, since that's how lumber is typically measured: Each leg will be feet long, as a mixed fraction.      A swimming pool is being filled at a rate of gallons per hour. How many gallons of water will be in the pool after hours?    Because we are filling the pool at a rate of gallons per hour, and we are filling it for hours, we need to multiply these two numbers. From context, both numbers provided are mixed fractions, so we convert them: The mixed fraction is , and the mixed fraction is . Then, we multiply the two improper fractions: The pool will have gallons of water, or gallons of water as a mixed fraction. Note that when we simiplified , we need to multiply the two denominators together (even though they matched).      A car is traveling at a speed of miles per hour. How far will the car travel in hours?    Because we are traveling at a rate of miles per hour, and we are traveling for hours, we need to multiply these two numbers. From context, the first number is not a mixed fraction, but the second number is a mixed fraction, so we convert it: The mixed fraction is . Now, we are trying to compute , and to resolve the awkwardness of multiplying a non-fraction by a fraction, we will turn into . The car will travel miles.      A group of friends go out to dinner. The bill comes to . If they split the bill evenly, how much does each person pay?    We can think of as the mixed fraction or by reducing the fraction, we can say this is the mixed fraction , and for the sake of nice computation, as an improper fraction, this is . We need the value of to be a cost shared by five people equally, so we should divide this fraction by . We will actually make our very next step to change the into . Each person's share is dollars, and this as a mixed fraction is dollars and as a decimal is dollars.      A recipe calls for cup of sugar. You have a cup measuring cup. How many cups of sugar do you need to use to get the correct amount?    We need to find the value of , which is the same as . We need to fill the one-third cup measuring cup that we have times, or as a mixed fraction, times. So, to fulfill what the recipe wants, we should fill our cup measuring cup full two times, and then do our best to estimate filling this measuring cup to one-fourth full.      A recipe calls for cup of sugar. You put in cup of sugar by accident. How much more sugar do you need to put in to get back on track in following the recipe?    Since we already put in cup of sugar, we need to find out what's left of the cup of sugar that we haven't put in yet. That is, we need to find the value of . We need to put in cup of sugar to get back on track.      Summary     We can take a fraction and create a fraction of the same value by multiplying by the same quantity on the top and bottom.    Undoing the multiplying of the same thing on top\/bottom is the cancelling of a common factor. We can only cancel common factors, not common terms. (Recall that factor refers to the pieces of multiplication .)    To simplify adding or subtracting fractions, we need a common denominator first.    To multiply fractions, multiply straight across whether we have a common denominator or not.    To divide two fractions, note that dividing by a fraction is the same thing as multiplying by its reciprocal.    We stick to improper fractions as much as possible because it is much easier to perform operations on improper fractions, and only write a mixed fraction or decimal when an application calls for it.    The entire numerator of a fraction is in a set of parentheses, which can be written in explicitly, or be hidden. Similarly, the denominator of a fraction is also in a set of parentheses, which can be written in explicitly, or be hidden. This is important to keep in mind when entering an answer that has fractions into a calculator: ignoring this may lead to very different decimal value than intended.    The fact that both the top and bottom can each be thought of as being in a hidden set of parentheses also enhances our understanding of how we can cancel in fractions: it still remains the case that we can only cancel common factors , but now we can see that the entire top and entire bottom can be considered factors through this understanding of hidden parentheses.       Exercises        Practice rewriting fractions using the Equal Fractions formula. Pay attention to unintended meanings of notation in your work, as described in Section .  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?  What fraction is equal to but has in the denominator?      Simplify the following expressions.   .  .  .  .   .  .  .  .   .  .  .  .   .  .  .  .   .  .  .  .      Simplify the following expressions.   .  .  .  .   .  .  .  .   .  .  .  .   .  .  .  .   .  .  .  .     A runner completed of a marathon in the morning and in the evening. How much of the marathon did the runner complete in total?  A carpenter cuts a piece of wood feet long from a board that is feet long. How much of the board remains?  You drink of a liter of water during a workout, and then another of a liter after. How much water did you drink altogether?  Your health routine requires drinking liters of protein shake a day. You started the day by having liter of protein shake. How much should you have in the rest of the day?  A farmer harvested of a field of corn one week and of the field the next. How much of the field is harvested in total?  A rope is meters long. You cut off a piece that is of a meter and another piece that is of a meter. How much rope is left?  You have of a pizza, and your friend has of the same size pizza. If you combine them, how much pizza do you have altogether?  A car uses of a tank of gas on one trip and of a tank on another trip. How much of a tank of gas is used altogether?  A cyclist rides miles on Monday and miles on Tuesday. How many miles did the cyclist ride in total?  A juice recipe requires of a cup of orange juice and of a cup of pineapple juice. How many cups of juice are needed in total?  A box of nails weighs of a pound. If you buy boxes, how many pounds of nails do you have?  A swimming pool is being filled at a rate of of a gallon per minute. How many gallons of water will be added in minutes?  A gardener uses of a bag of soil for one planter and of a bag for another. How many bags of soil does the gardener use altogether?  You buy of a pound of apples and of a pound of bananas. The apples cost $ per pound, and the bananas cost $ per pound. What is the total cost?  A skateboarder rides of a mile in the morning, then twice that distance in the afternoon. How far does the skateboarder ride in total?  A painter mixes of a gallon of red paint with of a gallon of white paint. How many gallons of paint are mixed altogether?  A scientist has a solution that contains of a liter of chemical A and adds another of a liter of chemical B. What is the total volume of the solution?  A movie lasts hours, and a documentary lasts hours. How long would it take to watch both back-to-back?  A train travels of a mile each minute. How far will it travel in minutes?  A recipe calls for of a cup of sugar. If you want to make of the recipe, how much sugar do you need?     "
},
{
  "id": "sec-expressions-with-fractions-2",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  In this section, we learn how to:    Add, subtract, multiply, and divide fractions.  Determine when common denominators are required and when they are not.  Determine when cancelling is permissible in a fraction and when it isn't.  Convert between mixed fractions and improper fractions.   "
},
{
  "id": "fraction-meaning",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#fraction-meaning",
  "type": "Principle",
  "number": "1.2.1",
  "title": "Representing Fractions Geometrically.",
  "body": " Representing Fractions Geometrically  Suppose and are positive real numbers. We can represent the fraction as follows: Start with a pizza that has equal-sized slices. Then is represented by eating of those slices.  "
},
{
  "id": "sec-expressions-with-fractions-4-4",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of        "
},
{
  "id": "sec-expressions-with-fractions-4-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-5",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.    The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of     To get a denominator of , we need to cut each of the slices in half. This gives us equal slices, and we have eaten of those slices. So the answer is .  A picture of     If we step back and ignore where the cuts were made by a pizza cutter, the blue shaded part (representing the eaten pizza) looks to be the same amount in both pictures. So .   "
},
{
  "id": "sec-expressions-with-fractions-4-6",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-6",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.    The fraction represents taking a pizza that has been cut into equal slices and eating of those slices.  A picture of     To get a denominator of , we need to cut each of the slices in half. This gives us equal slices, and we have eaten of those slices. So the answer is .  A picture of        "
},
{
  "id": "sec-expressions-with-fractions-4-7",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-7",
  "type": "Try it",
  "number": "1.2.10",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator? Draw pictures of and the resulting fraction to convince yourself.    "
},
{
  "id": "sec-expressions-with-fractions-4-8",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-8",
  "type": "Note",
  "number": "1.2.11",
  "title": "",
  "body": " In earlier examples, we had to cut each original slice of pizza into two equal-sized smaller pieces. In the Try it exercise, we need to cut each original slice of pizza into three equal-sized smaller pieces.  "
},
{
  "id": "sec-expressions-with-fractions-4-9",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-9",
  "type": "Note",
  "number": "1.2.12",
  "title": "",
  "body": " In the Try it exercise, going from a total of slices to a total of slices meant that in the resulting pizza, every slice was very small. This makes intuitive sense to us: when the denominator is large (in other words, there are many slices), then the size of each slice is small. In addition, when the denominator is small (in other words, there are few slices), then the size of each slice is large.  "
},
{
  "id": "equal-fractions",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#equal-fractions",
  "type": "Principle",
  "number": "1.2.13",
  "title": "Equal Fractions, different denominators.",
  "body": " Equal Fractions, different denominators   where and are nonzero.  "
},
{
  "id": "sec-expressions-with-fractions-4-12",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-12",
  "type": "Example",
  "number": "1.2.14",
  "title": "",
  "body": "  Using the Equal Fractions formula, What fraction is equal to but has in the denominator?    To get a denominator of , we need to multiply the denominator of by . So we also need to multiply the numerator by . In what we just wrote, we went from the initial fraction to the middle expression to emphasize the Equal Fractions formula, though if we feel comfortable skipping this, we might write directly. That said, we may find a future example more complicated and writing the middle step (which indicates multiplication on top and on bottom, but does not simplify the multiplication) is good to practice, even in cases where we might not feel we need it.   "
},
{
  "id": "sec-expressions-with-fractions-4-13",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-13",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": "  Using the Equal Fractions formula, What fraction is equal to but has in the denominator?    To get a denominator of , we need to multiply the denominator of by . So we also need to multiply the numerator by .    "
},
{
  "id": "sec-expressions-with-fractions-4-14",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-14",
  "type": "Warning",
  "number": "1.2.16",
  "title": "",
  "body": " When writing our work, we must be careful how we write our work. It is possible to write something that can be interpreted incorrectly. In detail:   We can write exactly as the previous example showed.    We can write the that we were multiplying on top and on bottom before the original content like this: and this just swaps the order of the factors in both multiplications.    We can skip actually writing in the times on top and on bottom and just write in the resulting numerator and denominator like this:     We cannot write to mean that we are multiplying by on top and on bottom. There are two ways of interpreting . We will discuss one of the ways to interpret by the end of this section, but a common way to interpret is as a mixed fraction, whose value is clearly larger than itself, while the original fraction is smaller than . So, we either jump to writing directly, or we need to write that we are multiplying by on top and on bottom (and that really requires physically writing two s: one on top and one on bottom), but we cannot just write a single . Reading as a mixed fraction has a differnt value than the original fraction, and in the other interpretation will also result in a value that is not equal to .     "
},
{
  "id": "sec-expressions-with-fractions-4-16",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-16",
  "type": "Example",
  "number": "1.2.17",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?    We need to multiply the denominator by , so we also multiply the numerator by .    "
},
{
  "id": "sec-expressions-with-fractions-4-17",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-17",
  "type": "Example",
  "number": "1.2.18",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?    We need to multiply the denominator by so we also multiply the numerator by . Here, if we wanted, we can distribute in both the numerator and denominator. However, we stopped where we did because we wanted to highlight the role of the Equal Fractions formula.   "
},
{
  "id": "sec-expressions-with-fractions-4-18",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-18",
  "type": "Example",
  "number": "1.2.19",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?    We need to multiply the denominator by , so we also multiply the numerator by .    "
},
{
  "id": "reducing-fractions",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#reducing-fractions",
  "type": "Principle",
  "number": "1.2.20",
  "title": "Reducing Fractions.",
  "body": " Reducing Fractions  If we see the same factor in the numerator and denominator of a fraction, the process of removing this common factor is called cancelling in a fraction or reducing a fraction. This is applying our earlier formula  backwards in other words, this is turning into   "
},
{
  "id": "sec-expressions-with-fractions-4-21",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-21",
  "type": "Example",
  "number": "1.2.21",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?    The numerator and denominator both have a factor of . For the first several examples, we will intentionally slow down and rewrite the numerator and denominator in factored form to highlight the common factor, which helps highlight exactly the role taken by the Reducing Fractions process we just described. We cancelled the common factor of in the numerator and denominator.   "
},
{
  "id": "sec-expressions-with-fractions-4-22",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-22",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?     We cancelled the common factor of in the numerator and denominator.   "
},
{
  "id": "sec-expressions-with-fractions-4-23",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-23",
  "type": "Example",
  "number": "1.2.23",
  "title": "",
  "body": "  What fraction is equal to but has in the denominator?     Now we can cancel the common factor of in the numerator and denominator.   "
},
{
  "id": "sec-expressions-with-fractions-4-24",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-24",
  "type": "Example",
  "number": "1.2.24",
  "title": "",
  "body": "  Reduce the fraction as much as possible.     Now we can cancel the common factor of in the numerator and denominator.   "
},
{
  "id": "sec-expressions-with-fractions-4-25",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-25",
  "type": "Warning",
  "number": "1.2.25",
  "title": "",
  "body": " While we can cancel common factors in a fraction, we cannot cancel common terms . In other words, Let's describe this frequent error through two examples:   If someone took and tried to cancel the in the numerator and denominator, they would get , which is in a calculator. However, the original fraction can naturally be rewritten as , which is in a calculator.    The issue is more likely to occur when there are variables. (In fact, the previous example with its decimal representations of fractions was included to create a concrete and convincing example that we cannot cancel terms on top and bottom.) We cannot turn into by cancelling the common in the numerator and denominator. This is because is a term on top and bottom, and not a factor on top and bottom.     "
},
{
  "id": "sec-expressions-with-fractions-4-26",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-4-26",
  "type": "Example",
  "number": "1.2.26",
  "title": "",
  "body": "  Reduce the fraction     There is a temptation to want to cancel part of the with the , but these are terms. We can only cancel factors. First, we rewrite the numerator and denominator in factored form: We cancelled the common factor of in the numerator and denominator.    You may prefer to factor a larger factor out of the numerator. (Note, we still cannot cancel terms.) After factoring, we replaced the that we factored out with to really highight that it is a factor of on top and bottom that we cancelled. To make the final expression in this solution look like the final expression in the previous solution, we could distribute the in the numerator. (In this example, you may feel comfortable skipping the writing the third expression, jumping directly from the second expression to the fourth expression. We included the third expression because going from the third expression to the fourth expression highlights the role of the Reducing Fractions process we described earlier.)   "
},
{
  "id": "fraction5649",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#fraction5649",
  "type": "Try it",
  "number": "1.2.27",
  "title": "",
  "body": "  The pictures of and are shown below. How can we use these pictures to represent a picture that represents the value of as a single fraction?  A picture of       A picture of         "
},
{
  "id": "fraction-addition",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#fraction-addition",
  "type": "Principle",
  "number": "1.2.30",
  "title": "Adding Fractions.",
  "body": " Adding Fractions  Simplifying the addition of fractions requires having a common denominator .   "
},
{
  "id": "subsec-adding-subtracting-fractions-6",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-6",
  "type": "Warning",
  "number": "1.2.31",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-adding-subtracting-fractions-8",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-8",
  "type": "Example",
  "number": "1.2.32",
  "title": "",
  "body": "  Simplify      The third expression may be skipped if you feel comfortable, but this is a nice technique to practice in smaller situations (beacuse in some larger situations, it may be harder for us to simplify the addition of the numerators in our head). The purpose of showing the second expression being equal to the third expression is also helpful in seeing the Adding Fractions formula apply as literally as possible.   "
},
{
  "id": "subsec-adding-subtracting-fractions-9",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-9",
  "type": "Example",
  "number": "1.2.33",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "subsec-adding-subtracting-fractions-11",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-11",
  "type": "Example",
  "number": "1.2.34",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "subsec-adding-subtracting-fractions-12",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-12",
  "type": "Example",
  "number": "1.2.35",
  "title": "",
  "body": "  Simplify     Recall that means . To achieve a common denominator of , let's multiply both the top and bottom of the first fraction by , and multiply both the top and bottom of the second fraction by . Note that our final answer is , and there is nothing that will cancel: the denominator is a product (the result of multiplication) so its pieces (called factors) are eligible to be cancelled, but the numerator is not a product, and so we cannot cancel any common factors on top and bottom (since the top is not written as a product).   "
},
{
  "id": "subsec-adding-subtracting-fractions-13",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-13",
  "type": "Example",
  "number": "1.2.36",
  "title": "",
  "body": "  Simplify     Recall that means . To achieve a common denominator of , let's multiply both the top and bottom of the first fraction by , and multiply both the top and bottom of the second fraction by . (Be sure to read using the Order of Operations: the exponent does not apply to all variables, just to .)    "
},
{
  "id": "subsec-adding-subtracting-fractions-15",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-15",
  "type": "Principle",
  "number": "1.2.37",
  "title": "How to add a fraction and a non-fraction.",
  "body": " How to add a fraction and a non-fraction  Turn the non-fraction into a fraction with denominator . Then use the Adding Fractions formula, noting that this formula requires a common denominator.  "
},
{
  "id": "example-2-plus-3over5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#example-2-plus-3over5",
  "type": "Example",
  "number": "1.2.38",
  "title": "",
  "body": "  Simplify     We rewrite as . Then we can use the Adding Fractions formula, noting that we need a common denominator.    "
},
{
  "id": "subsec-adding-subtracting-fractions-17",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-17",
  "type": "Example",
  "number": "1.2.39",
  "title": "",
  "body": "  Simplify     We rewrite as .    "
},
{
  "id": "fraction-subtraction",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#fraction-subtraction",
  "type": "Principle",
  "number": "1.2.40",
  "title": "Subtracting Fractions.",
  "body": " Subtracting Fractions  Simplifying the subtraction of fractions requires having a common denominator .   "
},
{
  "id": "subsec-adding-subtracting-fractions-20",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-20",
  "type": "Example",
  "number": "1.2.41",
  "title": "",
  "body": "  Simplify      The third expression may be skipped if you feel comfortable, but we specifically included this step because going from the second expression to the third expression highlights the role of the Subtracting Fractions formula.   "
},
{
  "id": "subsec-adding-subtracting-fractions-21",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-21",
  "type": "Example",
  "number": "1.2.42",
  "title": "",
  "body": "  Simplify      In this example, to achieve a common denominator of , the top and bottom of the first fraction both got multiplied by , while the top and bottom of the second fraction both got multiplied by .  Note that nothing cancels in , because the denominator is a product (the result of multiplication) so its pieces (called factors) are eligible to be cancelled, but the numerator is not a product, and so we cannot cancel any common factors on top and bottom (since the top is not written as a product).   "
},
{
  "id": "subsec-adding-subtracting-fractions-22",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-22",
  "type": "Example",
  "number": "1.2.43",
  "title": "",
  "body": "  Simplify      In this example, to achieve a common denominator of , the top and bottom of the first fraction both got multiplied by , while the top and bottom of the second fraction both got multiplied by .   "
},
{
  "id": "subsec-adding-subtracting-fractions-23",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-23",
  "type": "Principle",
  "number": "1.2.44",
  "title": "Subtraction involving a fraction and a non-fraction.",
  "body": " Subtraction involving a fraction and a non-fraction  Turn the non-fraction into a fraction with denominator . Then use the Subtracting Fractions formula, noting that this formula requires a common denominator.  "
},
{
  "id": "subsec-adding-subtracting-fractions-24",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-adding-subtracting-fractions-24",
  "type": "Example",
  "number": "1.2.45",
  "title": "",
  "body": "  Simplify     Rewrite as .    "
},
{
  "id": "subsec-multiplying-fractions-3",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-3",
  "type": "Example",
  "number": "1.2.46",
  "title": "",
  "body": "  Represent geometrically.      A picture of        "
},
{
  "id": "subsec-multiplying-fractions-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-5",
  "type": "Example",
  "number": "1.2.48",
  "title": "",
  "body": "  Represent geometrically. Use the picture to determine the value of .    It can be a little more challenging to represent the area. To standardize things, let's copy (to scale) one of the unit squares from the previous example. Since the first factor is , we need a height of . The entire square that we copied has a height of so to get a height of , we can divide the height of the square into equal parts (achieved by creating > equally-spaced apart cuts in the interior of this line segment) and take of those parts. Similarly, for a width of , we can divide the width of the square into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and take of those parts.  Picture of     By going with what we have said about the geometric interpretation of multiplication, is the area of the blue rectangle. The portion shaded in blue is definitely less than because shading the entire unit square would have had area . How can we determine the area of the blue rectangle exactly, though? Surprisingly, we can apply the geometric interpretation of a fraction! Recall that means to take a whole pizza and cut it into equal slices and take of those slices, but there was no requirement that the pizza had to be a circle. So, we can think of the entire unit square as a whole pizza. To get the area of the blue rectangle, we can see all of the dotted lines as cuts that divide the pizza into equal slices. From our starting square and uncut pizza, the cuts end up creating equal slices (arranged in rows and columns). Then the blue rectange (representing the eaten part of the pizza) is made up of of those equal slices, so the area of the blue rectangle is which we can reduce to .   "
},
{
  "id": "subsec-multiplying-fractions-7",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-7",
  "type": "Example",
  "number": "1.2.50",
  "title": "",
  "body": "  Represent geometrically. Use the picture to determine the value of .    Starting from the exact same size unit square used in the last examples, we draw inside a rectangle with height and width . A height of is achieved by dividing square's height of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts. A width of is achieved by dividing the square's width of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts.  Picture of     The area of the blue shaded rectangle answers the question of what is. The dotted lines represent cuts that divide the pizza into equal slices (arranged in rows and columns). The shaded part represents taking of those slices. Thus, the product is .   "
},
{
  "id": "example-25-37",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#example-25-37",
  "type": "Example",
  "number": "1.2.52",
  "title": "",
  "body": "  Represent geometrically. Use the picture to determine the value of .    Starting from the exact same size unit square used in the last examples, we draw inside a rectangle with height and width . A height of is achieved by dividing square's height of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts. A width of is achieved by dividing the square's width of into equal parts (achieved by creating equally-spaced apart cuts in the interior of this line segment) and taking of those parts.  Picture of     The area of the blue shaded rectangle answers the question of what is. The dotted lines represent cuts that divide the pizza into equal slices (arranged in rows and columns). The shaded part represents taking of those slices. Thus, the product is .   "
},
{
  "id": "exercise-34-25",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#exercise-34-25",
  "type": "Try it",
  "number": "1.2.54",
  "title": "",
  "body": "  Represent geometrically. Use the picture to determine the value of .    "
},
{
  "id": "fraction-multiplication",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#fraction-multiplication",
  "type": "Principle",
  "number": "1.2.55",
  "title": "Multiplying Fractions.",
  "body": " Multiplying Fractions  To simplify the multiplication of fractions, we use   "
},
{
  "id": "subsec-multiplying-fractions-14",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-14",
  "type": "Example",
  "number": "1.2.56",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "subsec-multiplying-fractions-16",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-16",
  "type": "Example",
  "number": "1.2.57",
  "title": "",
  "body": "  Simplify          If we felt comfortable skipping the second expression, our work would look like this:    "
},
{
  "id": "assemblage-multiplying-fraction-and-nonfraction",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#assemblage-multiplying-fraction-and-nonfraction",
  "type": "Principle",
  "number": "1.2.58",
  "title": "Multiplying a Fraction and a Non-Fraction.",
  "body": " Multiplying a Fraction and a Non-Fraction  To multiply a fraction and a non-fraction, we can rewrite the non-fraction as a fraction with a denominator of . Then we can use the Multiplying Fractions formula.  "
},
{
  "id": "example-2-times-3over5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#example-2-times-3over5",
  "type": "Example",
  "number": "1.2.59",
  "title": "",
  "body": "  Simplify     We rewrite as .    "
},
{
  "id": "subsec-multiplying-fractions-21",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-21",
  "type": "Example",
  "number": "1.2.60",
  "title": "",
  "body": "  Simplify        In this example, we reduced the fraction to in the final step. (Remember that we can only cancel common factors , not common terms . We canceled a factor of from the numerator and denominator.)   "
},
{
  "id": "subsec-multiplying-fractions-23",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-23",
  "type": "Example",
  "number": "1.2.61",
  "title": "",
  "body": "  Simplify        Now we can see that there is a common factor of in the numerator and denominator, so we can cancel that common factor:     This is the same answer we got in the previous example, but this time we canceled a common factor before doing the multiplication. This technique can be really helpful especially when simplifying the multiplications in the numerator and\/or denominator would lead to large numbers: we avoid needing to do large-number multiplication, and also, it can be easier to spot common factors before multiplying.   "
},
{
  "id": "subsec-multiplying-fractions-24",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-24",
  "type": "Example",
  "number": "1.2.62",
  "title": "",
  "body": "  Simplify        Now we can see that there is a common factor of in the numerator and denominator as well as a common factor of in the numerator and denominator (or instead of seeing the s and s individuall      "
},
{
  "id": "subsec-multiplying-fractions-26",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-26",
  "type": "Example",
  "number": "1.2.63",
  "title": "",
  "body": "  Simplify        It takes a bit of work to simplify the multiplications in the numerator and denominator to obtain in the first place. Then, due to the numbers being large, it takes considerable effort to reduce this fraction to its equal value . This solution is completely valid, but the second solution below shows how we can avoid the large-number multiplications by canceling common factors before simplifying the multiplication.       The numerator and denominator both have factors of and , so we can cancel those common factors:      "
},
{
  "id": "subsec-multiplying-fractions-27",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-multiplying-fractions-27",
  "type": "Example",
  "number": "1.2.64",
  "title": "",
  "body": "  Simplify     First we indicate the multiplication without simplifying:     Above, we rewrote as . The factors that appear in both the numerator and denominator are and and and .   where we rewrote as .   "
},
{
  "id": "warning-multiplying-fractions-does-not-need-common-denominator",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#warning-multiplying-fractions-does-not-need-common-denominator",
  "type": "Warning",
  "number": "1.2.65",
  "title": "",
  "body": " Please note that when multiplying fractions, we do not need a common denominator: sometimes people get overly cautious and try to treat multiplying fractions like adding fractions. Let's look at an example and see what the common error is:   When asked to simplify it is tempting to think about common denominators (because we notice that both fractions already have the same denominator of ) but it is incorrect to state the result of simplying this multiplication as .    Before talking about what we should do and ignoring our work above, let's talk about the work above, to see if we can take the experience and foundation that we've built to question the reasonableness of our answer: Notice that the numerator is larger than the denominator in , so this fraction is greater than , but both of the fractions we started with were less than , so it doesn't make sense that their product would be greater than . In fact, the pizza diagram for would take just some of the slices from a square pizza that was cut into a -by- grid of slices, so the resulting fraction should be less than .    The correct simplification is . Notice that the denominator of the result is , not . The denominator of the result is the product of the denominators of the two fractions we started with: , even though the two denominators that we started with were the same. (This is different from adding fractions, where the denominator of the result was the common denominator.) The fact that we had common denominators is actually a distraction, and we should ignore it.    Here is a silghtly different example: . While this is a different problem, because the only change was by slightly changing the denominator of the second fraction, it seems reasonable that the final answer to this question would be close to the final answer of the previous question. Here, the denominators are different, so there is no distraction. Following our Multiplying Fractions formula, we have by multiplying straight across. Use a calculator to verify that is close to , but far from .   The takeaway is that when multiplying fractions just multiply straight across whether we have a common denominator or not!  "
},
{
  "id": "assemblage-dividing-fractions",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#assemblage-dividing-fractions",
  "type": "Principle",
  "number": "1.2.66",
  "title": "Dividing Fractions formula.",
  "body": " Dividing Fractions formula  To divide by a fraction, multiply by its reciprocal and follow the Multiplying Fractions formula to simplify the multiplication of fractions.   "
},
{
  "id": "subsec-dividing-fractions-4",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-dividing-fractions-4",
  "type": "Example",
  "number": "1.2.67",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "subsec-dividing-fractions-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-dividing-fractions-5",
  "type": "Example",
  "number": "1.2.68",
  "title": "",
  "body": "  Simplify     Although the question didn't write the division symbol , the fraction bar indicates division. (So we could rewrite the problem as , and we'll say this is asking the same question.) However, to practice this new format, let's leave the original question in this format and work from there. From the second-to-last expression to the last expression, we reduced the fraction.   "
},
{
  "id": "subsec-dividing-fractions-6",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-dividing-fractions-6",
  "type": "Warning",
  "number": "1.2.69",
  "title": "",
  "body": " It is often tempting to see a question in this format and in the desire to multiply by the reciprocal, something unintentional remains in the writing. For example, looking to the previous computation, when starting with the next expression shouldn't read . The point is that multiplying by is what replaces dividing by , so we should either have in the denominator or have the multiplication by , but not both.  The analogy in the question before this one would be like if someone turned into instead of . Multiplying by is what replaces dividing by , so we should either divide by or multiply by , but not both.  "
},
{
  "id": "subsec-dividing-fractions-7",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-dividing-fractions-7",
  "type": "Example",
  "number": "1.2.70",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "example-2-divide-3over5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#example-2-divide-3over5",
  "type": "Example",
  "number": "1.2.71",
  "title": "",
  "body": "  Simplify .    We rewrite as . Then:    "
},
{
  "id": "subsec-additional-practice-2",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-additional-practice-2",
  "type": "Example",
  "number": "1.2.72",
  "title": "",
  "body": "  Simplify      Note that we had to simplify multiplication before simplifying addition. It is easy to fall into the trap of simplifying addition (that is, working on simplifying ) first, because we see the addition written first. However, we still need to read expressions based on the Order of Operations, even if the expression contains fractions.   "
},
{
  "id": "subsec-additional-practice-3",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-additional-practice-3",
  "type": "Example",
  "number": "1.2.73",
  "title": "",
  "body": "  Simplify     The division must be simplified before the subtraction. We turn dividing by into multiplying by instead.    "
},
{
  "id": "subsec-additional-practice-4",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-additional-practice-4",
  "type": "Example",
  "number": "1.2.74",
  "title": "",
  "body": "  Simplify .     Note that we cannot cancel part of the with part of the because is not a factor of the numerator. Similarly, we cannot cancel part of the with part of the because is not a factor of the numerator.   "
},
{
  "id": "subsec-additional-practice-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-additional-practice-5",
  "type": "Example",
  "number": "1.2.75",
  "title": "",
  "body": "  Simplify     We can simplify the division of fractions before simplifying addition: Now we need a common denominator to simplify addition of fractions: Finally, we can factor out in the numerator, and having factors of in both the numerator and denominator allows us to cancel :    "
},
{
  "id": "negative-fraction",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#negative-fraction",
  "type": "Note",
  "number": "1.2.76",
  "title": "",
  "body": " First, we note that when writing a fraction whose value is negative, it is equivalent to present the fraction with the negative sign in the numerator, or in the denominator, or in front of the entire fraction. However, it is not equivalent to present the negative sign in both the numerator and denominator.  "
},
{
  "id": "subsec-clarifications-and-details-4",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-4",
  "type": "Example",
  "number": "1.2.77",
  "title": "",
  "body": " Writing and and are all legitimate ways to write the same negative fraction. You can check in a calculator that and and all give the same decimal value.  However, is not the same as the other three ways of writing the negative fraction. Instead, . You can check in a calculator that gives the same decimal value as . Alternatively, you can note that a negative divided by a negative results in a positive, or follow this cancellation of factors:   "
},
{
  "id": "subsec-clarifications-and-details-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixed fraction "
},
{
  "id": "assemblage-expectation-improper-fractions",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#assemblage-expectation-improper-fractions",
  "type": "Principle",
  "number": "1.2.78",
  "title": "Expectation for Fraction Format.",
  "body": " Expectation for Fraction Format  We expect our final answers for fractions to be in improper fraction form whenever possible. Unless specifically requested by the question, we will never present an answer as a mixed fraction. Whenever we write a mixed fraction, we should actually mention that our writing should be interpreted as a mixed fraction.  "
},
{
  "id": "subsec-clarifications-and-details-9",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-9",
  "type": "Example",
  "number": "1.2.79",
  "title": "",
  "body": "  Simplify where we interpret and as mixed fractions.    We rewrite the first mixed fraction as . We rewrite the second mixed fraction as . Then, the product is By going through this example, I hope you really saw that it's preferrable to work with improper fractions anyway. In this question, we only had the step of completing one opertaion, but in a larger problem, we might need to take the result and do something further. It would be more convenient to do any further task working the improper fraction , so that's why we don't really bother converting this into a mixed fraction.   "
},
{
  "id": "subsec-clarifications-and-details-10",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-10",
  "type": "Note",
  "number": "1.2.80",
  "title": "",
  "body": " Perhaps the history of calling an improper fraction is what makes us a little uneasy. We use this language here (as opposed to the fraction ) because the numerator is larger than the denominator in . I guess I'd call an improper fraction only because I wouldn't call a mixed fraction, but because there are variables, I don't really know if is larger than or not. However, behaves like it needs to, and we can apply our fraction operations as described. For example,   "
},
{
  "id": "assemblage-why-mixed-decimal",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#assemblage-why-mixed-decimal",
  "type": "Principle",
  "number": "1.2.81",
  "title": "Well then, why have mixed fractions or decimals in the first place?",
  "body": " Well then, why have mixed fractions or decimals in the first place?  In everyday settings, people are used to seeing mixed fractions. Therefore, at the very end of an applied problem, when we are done and we are certain that the value will not be needed in further work, it would be reasonable to state a final answer (in this limited situation) as a mixed fraction.  The role of decimals is somewhat similar: when you have a final answer that is an improper fraction but you need to know a ballpark figure representation of that number, a decimal is helpful. For example, I don't really have a good sense of the value of , but I can put this into a calculator to see the value is close to , a decimal representation.  "
},
{
  "id": "assemblage-fraction-top-bottom",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#assemblage-fraction-top-bottom",
  "type": "Principle",
  "number": "1.2.82",
  "title": "Fractions have hidden parentheses.",
  "body": " Fractions have hidden parentheses  The top and bottom of a fraction are each in hidden parentheses..  "
},
{
  "id": "subsec-clarifications-and-details-16",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-16",
  "type": "Example",
  "number": "1.2.83",
  "title": "",
  "body": "  In the fraction , the top is and the bottom is . The top and bottom are each in hidden parentheses, so we can rewrite this as . We can also write this as , but cannot write this as due to the Order of Operations. Therefore, to enter into a calculator, type , including the parentheses.   "
},
{
  "id": "subsec-clarifications-and-details-17",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-17",
  "type": "Example",
  "number": "1.2.84",
  "title": "",
  "body": "  From a general chemistry class, a student got a value of on paper. How should this be entered on a calculator?    There are two sets of parentheses in the denominator already, but we should insert a set of parentheses around the entire denominator. We should also insert a set of parentheses around the numerator. Therefore, we should enter into the calculator.   "
},
{
  "id": "subsec-clarifications-and-details-18",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-18",
  "type": "Example",
  "number": "1.2.85",
  "title": "",
  "body": "  If you deposited dollars every month for years into an account that ears interest compounded monthly, we can compute what the balance will be at the end of years by applying an equation in finance, and we would obtain as the balance. How should this be input into the calculator so that we can really understand what the balance will be?    Insert the entire numerator and denominator of the fraction in parentheses. In a calculator, we would type .   "
},
{
  "id": "subsec-clarifications-and-details-20",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-20",
  "type": "Example",
  "number": "1.2.86",
  "title": "",
  "body": "  Simplify     Let's draw in the hidden parentheses to surround the entire denominator. We canceled the factor of in the numerator and denominator  If it still feels hard to view in the denominator, that's okay! I think that means you're doing a great job of really digging into the idea that factors are the pieces of a multiplication (and where is multiplication in the denominator)? Let's rewrite a solution, noting that multiplying anything by doesn't change a value, so . In fact, writing this level of detail explains why we have a instead of a in the denominator after the cancellation happened.   "
},
{
  "id": "subsec-clarifications-and-details-21",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-21",
  "type": "Example",
  "number": "1.2.87",
  "title": "",
  "body": "  Simplify     Recall that squaring a thing means to multiply the thing by itself, even if that ``thing'' is longer to write, like , so . Let's make that replacement in the numerator, and then also surround the denominator in parentheses, making those hidden parentheses visible. In the second to last expression, which is the moment we just finished cancellation, we could have written instead of . However, since the numerator was , I wanted to practice the principle that the numerator of a fraction is always in a hidden set of parentheses, but backwards in a sense: just as much as we can draw in the hidden parentheses around the entire top or entire bottom, we can remove parentheses that surround the entire top or entire bottom.   "
},
{
  "id": "subsec-clarifications-and-details-22",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-22",
  "type": "Example",
  "number": "1.2.88",
  "title": "",
  "body": "  Simplify      We canceled the factor of in the numerator and denominator. One new thing to note in this question: after cancellation, what's left is the factor of in the denominator, and we just removed the parentheses that surrounded the entire denominator. However, a common error that occurs right at the moment of cancellation is that it's temtping to put the factor of in the numerator. Note that after cancellation, the factor that didn't cancel was in the denominator, and shouldn't move up to the numerator.   "
},
{
  "id": "subsec-clarifications-and-details-23",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-23",
  "type": "Warning",
  "number": "1.2.89",
  "title": "",
  "body": " After cancelling the same factor on top and bottom of a fraction, anything that remains uncanceled should stay in the same part of the fraction. Factors that are in the denominator should remain in the denominator, and shouldn't move up to the numerator. Factors that are in the numerator should remain in the numerator, and shouldn't move down to the denominator.  "
},
{
  "id": "subsec-clarifications-and-details-24",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-clarifications-and-details-24",
  "type": "Example",
  "number": "1.2.90",
  "title": "",
  "body": "  Simplify         "
},
{
  "id": "subsec-fraction-applications-revisited-3",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-3",
  "type": "Example",
  "number": "1.2.91",
  "title": "",
  "body": "  A baking recipe calls for cups of flour. The recipe says that it serves . You are hosting a party where people will attend, so you need to make times the recipe. How many cups of flour do you need?    The original recipe needs cups of flour, but we need to make times the recipe. We have to multiply both of these numbers, which (at least through context) we can see are both mixed fractions. We convert the two mixed fractions into improper fractions: The mixed fraction is , and the mixed fraction is . Then, we multiply the two improper fractions: Now, given that the problem is about baking, it makes a lot of sense to convert our final answer into a mixed fraction, since that's how measuring cups are typically used: We need cups of flour, as a mixed fraction. As a reminder of what mixed fraction is, if we wanted, we could actually write this quantity unambigously by writing cups of flour.   "
},
{
  "id": "subsec-fraction-applications-revisited-4",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-4",
  "type": "Example",
  "number": "1.2.92",
  "title": "",
  "body": "  You have a two-by-four piece of lumber that measures feet long and another that is feet long. You will glue the two pieces together to create one leg of a nightstand. But you'll need to go to the store to make three other legs of the same height. How long is each leg?    Because we are gluing one piece of lumber to another, we need to add their measurements. From context, both numbers provided are mixed fractions, so we convert them: The mixed fraction is , and the mixed fraction is . Then, we add the two improper fractions: Since we needed to simplify the addition of fractions, we first got both fractions to have a common denominator of , which we achieved by leaving the first fraction alone, and multiplying the numerator and denominator of the second fraction by . Each leg will be feet long. Now, given that the problem is about measuring lumber, it makes a lot of sense to convert our final answer into a mixed fraction, since that's how lumber is typically measured: Each leg will be feet long, as a mixed fraction.   "
},
{
  "id": "subsec-fraction-applications-revisited-5",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-5",
  "type": "Example",
  "number": "1.2.93",
  "title": "",
  "body": "  A swimming pool is being filled at a rate of gallons per hour. How many gallons of water will be in the pool after hours?    Because we are filling the pool at a rate of gallons per hour, and we are filling it for hours, we need to multiply these two numbers. From context, both numbers provided are mixed fractions, so we convert them: The mixed fraction is , and the mixed fraction is . Then, we multiply the two improper fractions: The pool will have gallons of water, or gallons of water as a mixed fraction. Note that when we simiplified , we need to multiply the two denominators together (even though they matched).   "
},
{
  "id": "subsec-fraction-applications-revisited-6",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-6",
  "type": "Example",
  "number": "1.2.94",
  "title": "",
  "body": "  A car is traveling at a speed of miles per hour. How far will the car travel in hours?    Because we are traveling at a rate of miles per hour, and we are traveling for hours, we need to multiply these two numbers. From context, the first number is not a mixed fraction, but the second number is a mixed fraction, so we convert it: The mixed fraction is . Now, we are trying to compute , and to resolve the awkwardness of multiplying a non-fraction by a fraction, we will turn into . The car will travel miles.   "
},
{
  "id": "subsec-fraction-applications-revisited-7",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-7",
  "type": "Example",
  "number": "1.2.95",
  "title": "",
  "body": "  A group of friends go out to dinner. The bill comes to . If they split the bill evenly, how much does each person pay?    We can think of as the mixed fraction or by reducing the fraction, we can say this is the mixed fraction , and for the sake of nice computation, as an improper fraction, this is . We need the value of to be a cost shared by five people equally, so we should divide this fraction by . We will actually make our very next step to change the into . Each person's share is dollars, and this as a mixed fraction is dollars and as a decimal is dollars.   "
},
{
  "id": "subsec-fraction-applications-revisited-8",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-8",
  "type": "Example",
  "number": "1.2.96",
  "title": "",
  "body": "  A recipe calls for cup of sugar. You have a cup measuring cup. How many cups of sugar do you need to use to get the correct amount?    We need to find the value of , which is the same as . We need to fill the one-third cup measuring cup that we have times, or as a mixed fraction, times. So, to fulfill what the recipe wants, we should fill our cup measuring cup full two times, and then do our best to estimate filling this measuring cup to one-fourth full.   "
},
{
  "id": "subsec-fraction-applications-revisited-9",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#subsec-fraction-applications-revisited-9",
  "type": "Example",
  "number": "1.2.97",
  "title": "",
  "body": "  A recipe calls for cup of sugar. You put in cup of sugar by accident. How much more sugar do you need to put in to get back on track in following the recipe?    Since we already put in cup of sugar, we need to find out what's left of the cup of sugar that we haven't put in yet. That is, we need to find the value of . We need to put in cup of sugar to get back on track.   "
},
{
  "id": "sec-expressions-with-fractions-11-2",
  "level": "2",
  "url": "sec-expressions-with-fractions.html#sec-expressions-with-fractions-11-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factor multiplication "
},
{
  "id": "sec-solving-equations",
  "level": "1",
  "url": "sec-solving-equations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Solving Equations",
  "body": " Solving Equations    In this section, we learn how to:    Solve linear equations where the variable is written once.  Solve linear equations where the variable is written more than once.  Write equal signs appropriately in work for simplifying expressions and solving equations.  Use equations to model applied situations, solve the equation constructed, and interpret the solution in the context of the situation.     Applications  This section teaches us how to solve various equations, carefully introducing strategies. The mathematical skills introduced will allow us to answer these and similar questions:  A car rental costs $40 per day plus a one-time insurance fee of $15. If the total cost is $135, how many days was the car rented?  A chemist is cooling a liquid that starts at 90°C and decreases at a rate of 2°C per minute. After how many minutes will the liquid reach 30°C?  A train leaves a station traveling at 60 miles per hour. Another train leaves the same station two hours later traveling at 80 miles per hour. After how many hours will the second train catch up?  A landscaper buys bags of soil for $3 each and a one-time delivery charge of $12. If the total cost is $51, how many bags of soil were purchased?  An Australian internet service provider offers a base plan for $30 per month plus $5 for each additional gigabyte of data. If someone paid $65 one month, how many gigabytes of extra data did they use?  A taxi ride costs $3 plus $2.50 per mile. The taxi is cash only and you have $28.50 available. How many miles can you travel?  A gym charges a membership fee of $50 plus $15 per month. How many months can someone be a member if they paid $200 in total?      Introduction to Equations  We are going to introduce equations, which are not the same as expressions. Before introducing what an equation is, recall from that an expression is a mathematical notation representing a number. For example is an expression and is an expression and is also an expression.    An equation is a mathematical statement that two expressions are equal. For example, is an equation stating that the expression is equal to     The key thing to note about one equation is that it states in its writing that two expressions are equal. An equation is saying to us this and that might not look the same, but this and that actually have the same value.    Is an equation or an expression?     is an equation because it is stating that the expression is equal to the expression .      Is an equation or an expression?     is an expression because it is not stating that two expressions are equal. It is just one expression: the value of is one number, based on whatever the mystery value of is.       Both expressions and equations are mathematical writing involving notation. How would you explain to someone how to spot the difference between an expression and an equation?      Which of the following are equations and which are expressions?              The reason that it is important to know the difference between expressions and equations is that we will be doing different things with them.   For an expression, our primary task will be to simplify the expression we are given.    For an equation, our primary task will be to solve the equation we are given.       An equation is not the same as an expression. We cannot solve an expression. We can only simplify an expression. The action of solving will be language we reserve for equations.   The primary tool we have for solving equations is to apply the same action to both sides. To be more specific:   Apply the same action to both sides  Given an equation, we can:   Add the same expression to both sides of the equation.    Subtract the same expression from both sides of the equation.    Multiply by the same expression on both sides of the equation.    Divide by the same non-zero expression on both sides of the equation.        Equations when the variable is written once  What we just described tells us what the typical steps we can do are. (There are some other things we can do, but let's wait to explain those until we need them.) The key thing to remember is that whatever we do to one side of the equation, we must do to the other side of the equation. Saying do the same thing to both sides tells us what we can do, but it doesn't really give us a lot of guidace on how to do it effectively. There are many kinds of equations we will see in this algebra class. I encourage you to look for patterns and ask why does this work in this equation, but not in another equation? That said, I think it's helpful to be completely transparent, and admit that there is a bit of an art to solving equations. Because of this, I want to share specific situations and explain specific strategies for these situations.  We are going to start by looking at equations where the variable is written once. Examples include equations like and . There are equations where the where the variable is written more than once such as , and these will be discussed after.   To begin, it will be helpful to slow down by writing in the writing the action we are applying to both sides as its own step, then simplifying both sides as a separate step. While this is more time-consuming (and we'll eventually stop doing it this way), skipping this and working too fast makes it impossible to describe certain common errors. To be able to point out what's going on, we need to start slow. I ask for your patience in doing it this way for now. Once the important points have been made, we'll make the process a little smoother.     Solve the equation .    To undo the on the left side of the equation, we can subtract from both sides of the equation: On the left side, the and the together simplify to , so we are left with just . On the right side, simplifies to .    In the answer to this first example, you might have felt annoyed that we wrote the equation as its own step. Writing this equation is exactly what is addressing. While you may feel like skipping this step in the future, let's just do a couple more where we write this step out.    Solve the equation .    We can add to both sides of the equation.      Now, let's examine a new equation where a certain type of error tends to first occur from learners. Given the equation a common error is to end up at . Let's analyze this thorougly:   First, does the answer obtained make sense? If we substitue for in the original equation, we get , which is not true. So, cannot be the correct answer.    While we already see that there is a problem, we haven't discussed how the error occurred. Let's try to figure that out. Here, it will be very helpful to write the action taken on both sides without simplifying right away, just as talked about: From the original equation, based on the final answer that someone wrote, I would guess that they thought about dividing by on both sides. Writing this without simplifying first looks like this: Here, it is true that the right side simplifies to . However, the expression on the left side says I would guess the learner canceled the on top and bottom, but the appearing in the numerator is a term , not a factor . Recall that we can only cancel factors, and not terms. It would be hard to analyze this error if we hadn't slowed the process down.    To stick to principles, we can divide by on both sides. What happens is this: The steps shown above are all valid, but we haven't successfully solved for , since is not by itself on one side of the equation. This goes to show that while it is permissible to divide by on both sides, it is not helpful in solving this equation. Let's show a couple more examples of sucessfully solving equations, and then summarize what kind of actions are helpful : we don't want to just do steps to do them; we want to find steps that lead towards our goal of isolating the variable on one side of the equation.        Solve the equation .    We can divide both sides of the equation by . In this example, dividing both sides by was helpful. This is because in the fraction there is a factor of in both the numerator and denominator, so we can cancel the s. In slightly more detail, we can think of as , which shows more clearly that is a factor in both the numerator and denominator.     In both of the last two examples, we divided by . In one example, this was helpful, and in the other example, this was not helpful. I want you to notice that when we divide both sides by a quantity, we end up creating a fraction even though we sometimes work so fast that we don't write the fraction that encourages us to write. That fraction is there, whether we write it or are too lazy to write it, and we need to carefully apply what we learned in the last section about fractions: we can only cancel common factors .     Solve the equation .    We can think of the left side as . To undo the division by , we can multiply both sides by . We can multiply both sides of the equation by . In this example, multiplying both sides by was helpful. Why? Of the three equations that were one right after another, the left side of the second equation is the expression . From the last section, we can treat the product of a fraction and a non-fraction in the usual way to get . Whether you multiply across first and cancel the factors of on top and bottom after, or note that the s on top and bottom in the separate fractions would eventually become factors in the combined fraction and cancel right away, we're left with which simplifies to .     Solving Equations by Undoing Operations  A general principle that is helpful to keep in mind is that we can think of solving equations as undoing operations. In more detail:   Subtraction undoes addition.    Addition undoes subtraction.    Division undoes multiplication.    Multiplication undoes division.       It is tempting to divide on both sides by in an equation like or . However, division does not undo subtraction. (Instead, addition undoes subtraction.)  Similarly, it is tempting to divide on both sides by in an equation like or . However, division does not undo addition. (Instead, subtraction undoes addition.)  In all four equations that have been mentioned in this box, dividing both sides by is permissible, but not helpful. What ends up happening (if we slow things down the way encourages us to) is that we have a fraction where the in the numerator is a term, not a factor, so we cannot cancel it.     Solve the equation .         Since we made the point about writing the action that occurs on both sides without simplyfing in so that we could analyze a situation like we did in , we can now speed things up a little and show a perfectly acceptable answer to this question which doesn't show the middles step.     While both answers are fine, we will still have situations later in the book where writing the action but not simplifying yet (as described in ) makes it possible for us to discuss what went wrong. The overall point here is not to criticize skipping steps. Instead, if someone's work goes from Equation 1 to Equation 3 while skipping the writing of Equation 2, but there was an error going from Equation 2 to Equation 3, then we need to actually slow down by writing in all the steps. Skipping work is fine when the work is correct. But if there is an error hiding somewhere inside skipped work, then it is really helpful to include all the steps to be able to pinpoint exactly where the error occured.    Solve the equation .         Let's also present a solution which skips showing the action, and instead shows the result of simplifying where possible.     While the two answers showed a different amount of work (by skipping the writing of one equation), we were able to cancel the on top and on bottom (since was a factor on top and a factor on bottom), even if we didn't explicitly write the fraction in the second answer. In both answers, didn't simplify further. If an application called for it, we might present this number as a mixed fraction or a decimal, but recall that leaving as written is what we usually prefer in algebra.    Solve the equation .           Solve the equation .         This last example shows that it's okay to have the variable on the right side of the final equation.   Equations with several operations  So far, we have only seen equations where a single operation is being applied to the variable, and therfore we applied an action to both sides and simplified, and we were done. We only needed to apply one action to both sides.  Let's now look at a more complicated equation. For example, consider the equation . While it may seems strange to you, I want to first point out a common error that learners make when solving this equation. Sometimes, as a first step, people will divide both sides by and might not write the step in between that is discussed in , but we will: What usually happens is that people will skip writing this step, and then they will cancel the s on top and bottom, getting . However, this is an error, because the in the numerator is not a factor of the numerator. (Instead, the numerator has a term of and a term of .)  Another error that sometimes occurs in solving the equation comes from writing ambiguously. What happens is that someone will say they are taking and dividing both sides by by writing While it is true that the s cancel in , the problem is that we shouldn't be writing in the first place. We have to ensure that we divdide the entire left side by , not just part of the left side.   Apply action to the entirety of each side     When adding the same quantity to both sides, add that quantity to the entire left side and the entire right side.    When subtracting the same quantity from both sides, subtract that quantity from the entire left side and the entire right side.    When multiplying the same quantity on both sides, multiply the entire left side and the entire right side by that quantity.    When dividing both sides by the same non-zero quantity, divide the entire left side and the entire right side by that quantity.      In the case of dividing on both sides, the easiest way to follow is to ensure that the fraction bar drawn in is wide enough for the entire left side and the entire right side.    Solve the equation .    To undo the on the left side of the equation, we can subtract from both sides of the equation: From the second equation to the third equation, we dropped the parentheses due to the order of operations. It's more work than most of us want to show to write in the first place, but those parentheses are shown to emphasize following the advice of . Now, we have the equation . To undo the multiplication by , we can divide both sides by .       Solve the equation .    To solve the equation , we can start by isolating the term with the variable . We can do this by subtracting from both sides of the equation: Now, we have the equation . To undo the multiplication by , we can divide both sides by :     Note that a common error in starting this problem is to divide both sides by first. While this is permissible, it is not helpful. We end up with and in this new equation, the s on the left side do not cancel because the in the numerator is not a factor of the numerator. Instead of dividing both sides by as the first action, the action that helped was to subtract on both sides.  Also note that we cannot take the starting equation and simplify the left side by writing . The error here in simplifying like this is that we would not be following the order of operations. Note that multiplication takes precedence over addition: to read we should think something like We would take and multiply it by , whatever that is, to have the valu of , and the value of this would be added to .      In each equation below, identify several possible first actions that someone may try to perform on both sides. (Try to identify at least two different things that people might try to do first.) For each of these first actions, carefully write the resulting equation that has no simplification occurring, as discussed in . Then, discuss whether or not that first action is helpful or not.                                I hope that you tried this actively conisdering what has the potential to work on each equation above, and what seems to not work on each equation above. I hope that the explanations in the previous answers have given you some useful ways to think about and analyze what could create success in solving equations, and what seems like it just increases the complexity of the problem, instead of making a smaller problem. You might feel like you don't have a complete answer on exactly how to solve each equation you'd ever encounter, and that's totally okay! All I really wanted you to get out of the exploration was to make some predictions of what might work and what might not work. Building a little bit of intuition on your own will help make things go smoother when we introduce specific strategies. We're about to introduce a strategy right now, but in case you didn't try exploring what might and might not work in the five equations above, I strongly encourage you to do so before reading any further! Actively thinking about these things will make the strategy we're about to introduce go smoother:    Solving an equation when the variable is written once      When does this strategy apply? This strategy applies in any equation we are asked to solve when the variable is written once.     How to apply the strategy    Identify the side of the equation which contains the variable.    On the side which contains the variable, starting from the variable and working outwards, identify the order in which the operations occur.    Apply an action on both sides of the equation to undo the last operation to occur. Continue in this way by undoing the second-to-last operation and the third-to-last operation and so on.      In short, the strategy tells us to undo the last operation that occurs .     Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Analyzing the left side according to the order of operations, we see that multiplied by occurs first, which gives us and then from subtracting occurs next. Since this finishes our analysis of reading the left side, we note that subtracitng occured last. The strategy tells us to undo subtracting first, so we add to both sides. Now there is only one operation remaining. We undo the multiplication by by dividing both sides by leading to       Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Analyzing the left side according to the order of operations, we see that multiplied by occurs first, which gives us and then from subtracting occurs next. Since this finishes our analysis of reading the left side, we note that subtracitng occured last. The strategy tells us to undo subtracting first, so we add to both sides. Now there is only one operation remaining. We undo the multiplication by by dividing both sides by leading to       Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable appears on the right side. Analyzing the right side using the Order of Operations, the multiplication between the and the occurs first leading to , whatever the value of that is. Then, we add this value to . Since adding and together happens last (we can switch the order of addition if it's convenient for our minds), we will undo adding by making our first step to subtract on both sides, leading to The only remaining operation on the right is multiplication of and . We can undo the multiplication by if we divide both sides by :       Solve the equation     We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Since the variable is on the left side, we analyze the left side according to the Order of Operations. The multiplication between and occurs first, represented as . Then from we subtract to get . (Recall the entire numerator of a fraction is in a hidden set of) Then from we divide by to get . Finally, the addition between and occurs last, so we will undo this addition by subtracting from both sides first.  Now the final operation on the left is the division by , so we multiply both sides by : The final operation on the left is the subtraction of , so we add to both sides: Finally, we divide both sides by to isolate :       Solve the equation      applies. On the side with the variable, adding occurs last, so we undo this first: we'll subtract on both sides leading to the new equation In the new equation the last operation on the right side is the division by which we undo by multiplying both sides by . We get The final operation on the right is the addition of , so we subtract from both sides: Finally, we divide both sides by to isolate : Note, it is perfectly okay for the final equation to display the variable on the right side instead of the left side.       Comments and clarifications  Before moving on to equations where the variable is written more than once, let's make some comments and clarifications about what we've done so far.   Instead of applying an action on one side and the opposite (or undoing ) action on the other side, we must always apply the same action to both sides.    In solving the equation , it would not be correct to make the next equation . How does someone get to this second equation? I would say that they added to the left side (to undo the subtraction of ) but then they subtracted from the right side. Adding  on the left and subtracting  on the right is not the same action on both sides. The correct next step would be to add to both sides, leading to .   Similar situations can occur when someone multiplies on one side and divides on the other side.  When solving equations, we are not simplifying an expression. We have seen two main tasks: simplifying an expression and solving an equation. Properly writing an answer for simplifying an expression involves writing equal signs, and properly writing an answer for solving an equation requires equal signs, but the exact locations of the equal signs feels really different, and definitely looks really different. As we dig into this explanation right now, I encourage you to keep in mind that the equal sign truly means that one expression is equal in value to another expression. We write an equal sign in between one expression and another to indicate that the two expressions have the same value.  When we are asked to simplify an expression, we can present our work horizontally or vertically . Either way that we do it, we start with the given expression. Then, after writing an equal sign, we write a new expression that is equal in value to the previous expression. We can continue in this way, writing a new expression that is equal in value to the previous expression after each equal sign. We stop when we have an expression that cannot be simplified any further. It can feel like the equal sign means and the next step is , but the equal sign doesn't mean next step . Instead, the equal sign means the expression on the left has the same value as the expression on the right . As a coincidence, for simplifying expressions, the next step is to write an expression that is equal to the previous expression. Let's look at an example, and show the work both horizontally and vertically, then discuss.    Simplify the expression .              Both answers are really the same, but they have different visual shapes (horizontal versus vertical). Note, we followed the order of operations (so multiplication occurred before addition\/subtraction). In viewing either answer, I encourage you to think about what an equal sign really means instead of thinking of it as next step . To say start saying it in words: is equal in value to which is equal in value to which is equal to which is equal to which is equal which is finally equal to .   When simplifying an expression, we can write the equal sign between equal expressions. Be sure that the the expressions are equal.   Note that this focus on equal signs helps us create good habits. We really want the next expression we write to be equal to the previous expression. For example, in both answers above, the first four expressions all included even though this part wasn't changing at all. It would be incorrect to write because the two sides are not equal. It can be tempting to drop parts that aren't changing, but we have to be careful to ensure that the two sides of an equal sign are truly equal. Building this habit (even if it feels really tedious) helps to prevent losing track of parts of very large expressions, and writing with good habits (with equal signs) helps to reinforce what an equal sign actually means.  The way that we organize the work for equations looks different. When solving an equation, we start with the given equation. When we have performed an action on both sides, we write the next equation one line below. The equation after that is written one line below that, and so on. Note that an equation (a statement that two expressions are equal) has an equal sign in the middle of its writing.    Solve the equation .         Notice where equal signs are written, and where they are not written. It is helpful for us to say in words what is really happening: Starting from the fact that is equal to , we learn that is equal to . From the fact that is equal to , we learn that is equal to . From the fact that is equal to , we learn that is equal to . Finally, from the fact that is equal to , we learn that is equal to .   When solving an equation, do not write an equal sign to mean and the next step is . Here are two examples of incorrect writing for the previous question:            Both of these answers are essentially the same, but just with different shapes: the first answer is presented vertically, while the second answer is presented horizontally. Every other equal sign is the equal sign that appears in the middle of an equation, but then the other equal signs are being written because someone is thinking my next step is which coincidentally may have worked for simplifying expressions, writing like this is reinforcing an incorrect idea of what an equal sign means. If we read either version out lout, at face value, the writing in this incorrect answer is saying: is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to . Please note how strange this is, especially when saying this aloud: among other things, we have said that the number is equal to something which is then eventually equal to the number , but these numbers are not equal!   For equations, to prevent the common presentation error, it is good practice to write vertically instead of horizontally. Write an equation. Then write the next equation one line below, being sure that there is an equal sign in the middle (since an equation is a statement that two expressions are equal ), but not an equal sign before the new equation. Then write the next equation one line below that, again ensuring that we don't write an equal sign before the new equation. Continue in this way until the variable is isolated.   Summary of expectations for presenting work      Simplifying expressions: Start with the given expression. After each equal sign, write a new expression that is equal in value to the previous expression. (To ensure that the new expression is equal, do not ignore the parts of the expression that are not changing.) Stop when we have an expression that cannot be simplified any further using valid mathematical techniques. When simplifying an expression, we can write horizontally or vertically: in either case, an equal sign is written from one expression to the next equal expression.     Solving equations: Start with the given equation. Write the next equation one line below. While the equation itself contains an equal sign, we should not write an equal sign before the new equation. Continue in this way until the variable is isolated. We write vertically because when the next equation is written to the side of the previous equation, it is really tempting to write an equal sign in that empty space before the new equation, which is incorrect.      While we often see the final equation having the variable on the left and the constant on the right, there is no requirement to have the variable on the left side. We also have a perfectly acceptable final equation if the variable is on the right side. Let's see an example, and show two answer presentations:    Solve the equation .              In the first answer, we isolated on the left side, while in the second answer we isolated on the right side. Both answers are correct. The first answer ended up being a little longer due to the minus signs that appear. The second answer is a little shorter. This is the benefit of not insisting that the variable must be on the left side in the final equation: by having the flexibility to isolate the variable on either side, we can reap the benefit of a possibly shorter answer.   Isolated variable on either side  When solving an equation, it is just as acceptable to isolate the variable on the right side as it is to isolate the variable on the left side. You can choose the side that makes your work easier or shorter!   We are about to introduce strategies for solving equations where the variable is written more than once. Before we do that, I think it's important for us to clarify exactly what is the expectation when solving equations.   Solving equations: expectation for final step  When solving an equation, the final equation should have exactly one copy of the variable isolated (meaning with nothing else) on one side of the equation, and the other side of the equation should be a constant (an expression with no variables).    We have not yet developed any strategies for solving equations like . However, we will use this example to illustrate the point being made above. Suppose someone takes and does the following steps, all of which are valid: This doesn't meet the expectation that we just discussed: though the left side just has the variable on its own, the right side is not a constant because the variable was written.   So far, regarding solving equations, we have discussed:    Primary tool: Apply the same action on both sides of an equation.     When we stop: When the variable is isolated on one side of the equation, and the other side is a constant.   We've discussed our primary tool which is how we solve an equation. We've also discussed when we stop. We haven't really discussed what this signifies. In other words, what we haven't discussed is what it means to solve an equation.   Solving equations: what it means  To solve an equation means to find all values of the variable that make the left side of the original equation equal to the right side of the original equation.    Let's revisit the equation . We will discuss strategies for solving this equation soon, but for now, say that someone claims to have solved this equation and wrote as their final line of work. Let's see if using for makes the origial left side and the original right side equal:   The left side of the original equation is the expression . Substituting for gives .    The right side of the original equation is the expression . Substituting for gives .   Substiting made both the left and right side equal to . This means that is a solution to the equation . Note that this focuses on what it means to solve an equation. We have actually avoided discussing how someone got , which we will do soon. In addition, note that substituing any value of other than will make both sides unequal.    When asked to solve the equation , using techinques we'll introduce in the next chapter, someone presented as their final answer. When substituting for in the original equation, both the left and the right side equal . When substituting for in the original equation, both the left and the right side equal . When substituting any other value for , the left and right sides are not equal. (For example, if we tried substituting for every in the original equation, the left side would equal while the right side would equal , which are not equal. So is not a solution to the equation.) It turns out that and are the only two solutions to the equation are and .   Understanding that solving an equation means finding all values of the variable that make the original left and right sides equal, this gives us a useful tool that we can use to check our work after solving any equation!   Checking solutions to equations  After solving an equation, we can check our work by substituting our solution(s) into the original equation. If substituting a solution into the original equation makes both sides equal, then it is indeed a solution. If substituting a solution into the original equation does not make both sides equal, then there was an error in the work. If there are multiple solutions, we should check each one.    In we started with the equation and we found that is a solution. We didn't check our work then, so let's check it now, following the advice of . (If you have leftover time in a quiz or exam, it's a good idea to check your work on solving equations by substituing your solution(s) into the original equation.) Whenever we check our work, we always start with the original equation. Let's substitute for in the original equation:   The right side of the original equation is the expression . There is no written, so we don't even have to work on substituting for every . The right side has value .    The left side of the original equation is the expression . Substituting for gives .   Since both sides are equal, we have verified that is indeed a solution to the equation .     Consider the equation . For this equation:  Is a solution?  Is a solution?  Is a solution?  Is a solution?  Is a solution?        Substituting , the left side simplifies to and the right side simplifies to . Since these two values do not match, is not a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values do not match, is not a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  We have found three solutions ( ) to this equation and two non-solutions ( ). Actually, the three solutions we have verified are the only solutions to this equation, though we have not explained how we know this to be true. We have only verified that and are not solutions, but just about any number we pick (including or ) will not be a solution. To be clear, we did not give any practical strategy for solving the equation . In fact, the specific reason we picked an equation like where we haven't yet introduced a strategy that discusses things like what we should do on both sides is that it helps focus our conversation: instead of focusing on how to solve this equation, we focused on what it means to solve an equation. We get to practice which is a useful tool to check our work after solving any equation. (Say that someone else claimed that is a solution to this equation. We could use the same process to verify that is not a solution.) Practicing this kind of question also encourages us to think about what it means to solve an equation as introduced in .      Equations when the variable is written more than once  We will now discuss solving some types of equations where the variable is written more than once, but not all types of equations where the variable is written more than once.    Solving an equation when the variable is written more than once, with sides having terms      When does this strategy apply? This strategy applies in any equation where the variable is written more than once. In addition, the left side and right side of the equation must be sums where each term is either a constant or a constant times the variable.     How to apply the strategy    On each side, identify the terms that contain the variable, and the term that don't.    Choose which side you'd like the variable to appear on.    Add on both sides and\/or subtract on both sides to reach the goal of having all terms with the variable on the side you chose in the previous step, and having all terms without the variable on the other side.    Independently simplify each side. On the side where each term contains the variable, we can collect like terms (or in more complicated situations, apply the more general technique of factoring out the variable). Once this step is complete, the variable will only be written once.    Apply a division on both sides (or a multiplication on both sides) to isolate the variable.         In we brought up the equation to discuss details about solving equations, but we left it to know to discuss an actual strategy for solving this equation. Let's go through the steps, based on the strategy we just introduced.    Solve the equation .    First, let's check that the strategy applies. We were given an equation to solve. Each side is a sum (or difference) of terms. Since each side consists of terms, the strategy applies. We need to pick a side to have the variable on. It doesn't matter which side we pick, so let's pick the left side. Currently, the terms on the left side are and , while the terms on the right side are and . Since we want terms with to be on the left side, we should keep the term on the left side. However, the next term on the left side is . This term does not contain , so to get rid of it validly, let's add to both sides, obtaining: Now, the left side has only terms with , but the right side still has a term with . To get rid of the term on the right side, let's subtract from both sides, obtaining: Now, the left side has only terms with , while the right side has only terms without , which is a key goal in the process of this strategy. We can simplify both sides: The left side can be thought of as collecting like terms, or we can factor from the left side to get , which simplifies to . Finally, we can isolate by dividing both sides by :     There are many other answers which perform the actions on both sides in different orders.    Solve the equation .    The variable is written more than once, and each side is a sum of terms, so the strategy applies. Let's add and subtract both sides with the goal of getting all terms with on the left side, and all terms without on the right side. We can start by subtracting from both sides: Now, the left side has only terms with . Let's examine the right side. We wanted all terms with on the left side, so we have to do something about the term on the right side. Let's subtract from both sides: Now, the left side has only terms with , while the right side has only terms without . This was a key achievement described in this strategy. We can simplify each side independently: Finally, divide both sides by to isolate :      As a second solution, we can apply the same startegy, but getting the terms with on the right side and the terms without on the left side. Starting from we can subtract from both sides: The right side has a term without , so we add to both sides: Now, the left side has only terms without , while the right side has only terms with . We can simplify each side independently: Finally, divide both sides by to isolate : The second solution is slightly faster because we didn't need to cancel negative signs. In the original equation, note there was a on the right and a on the left. Strategically, to avoid minus signs, since is larger than and the coefficient of appears on the right, this is why we might choose to keep all terms with the variable on the right side.   In the next example, the strategy doesn't apply right away, but let's not let that stop us!   Solve the equation .    We are asked to solve an equation in which the variable is written more than once. However, the left side is a product, not a sum. So the strategy doesn't directly apply. However, we can rewrite the right side by distributing. The original left side can be replaced with . With this replacement, our equation becomes Now, the strategy applies. Since is bigger than , let's choose to have all terms with on the right, and all terms without on the left. (You could make the opposite choice, and still achieve a perfectly valid answer, but this choice will minimize the number of minus signs that appear.) Starting from , to get all terms with on the right and all terms without on the left, we can subtract from both sides and also add to both sides, obtaining: You might choose to skip the equation we just wrote above to directly write: Finally, divide both sides by to isolate :       Solve the equation .    We are asked to solve an equation in which the variable is written more than once. However, the left side is a product, not a sum. So the strategy doesn't directly apply. However, we can rewrite the left side by distributing. Now, the strategy applies. Since is bigger than , let's choose to have all terms with on the left, and all terms without on the right. (You could make the opposite choice, and still achieve a perfectly valid answer, but this choice will minimize the number of minus signs that appear.) Starting from , we subtract from both sides and also subtract from both sides, obtaining: You might choose to skip the equation we just wrote above to directly write: Finally, divide both sides by to isolate :       Solve the equation .    After distributing, we have: Now, the strategy applies. You can continue work noticing that there are already like terms on the right, so we can combine those like terms. (A successful solution can be made without combining like terms at this moment.) Let's combine like terms on the right, and as long as we're doing this, simplify the constants on the left: Since is bigger than , let's choose to have all terms with on the right, and all terms without on the left. Subtract on both sides and also subtract from both sides: Finally, divide both sides by to isolate :     As a friendly reminder, collecting like terms is really skipping a two-step process of factoring out the variable. This is important to keep in mind, because there are examples (like the next one) where only thinking about collecting like terms usually gets people stuck.    Solve the equation .    The strategy directly applies. Let's get all terms that have on the left side, and all terms without on the right side. We subtract from both sides and also add to both sides: Of course, the new right side is easy to simplify, but to make a point, I didn't simplify here yet, because the left side simplification is not obvious (because how are we supposed to collect like terms here?). While we simplify the right side in the next equation, let's factor out on the left side: Now the content in parentheses is a constant (the variable doesn't appear), so this is a number. It's a funky number -- it take some time and some space to write it -- but it is just a number\/constant. Let's divide both sides by the number . In fact, let's slow this down by showing the division on both sides without simplifying yet: On the left side, the factor of in the numerator cancel with the the entire denominator , recalling that the entire denominator of any fracition is a factor, since the entire denominator is in a hidden set of parentheses. After this cancellation, we have by itself on one side, and no s on the other side, so we're done: In the appendix, we talk about a technique called rationalizing the denominator, which can be used to rewrite this answer in a different form.    AAAA NOTE ON WRITING: dividing on both sides in a LAZY way: making the existing equation part of a fraction.  AAAA NOTE ON WRITING: indicating action on only ONE side.    Applications Revisited  Let's revisit the applications we introduced at the beginning of this section. Before going through the answers, there is one important point to make:   When solving application problems, it is important to write an equation that models the situation. It is tempting to skip the explanation, and try to coach yourself to look for a pattern and boil everything in the question down to an arithmetic problem. However, we introduced these application problems as applications of solving equations . It would be easy to say but I see a pattern, so I don't need to set up an equation . This view is limiting in multiple ways: first off, any pattern devloped on coached arithmetic actually comes from the equation. Second, the skill of writing an equation to model a situation is a critical skill in algebra. It is a really powerful tool to write a variable to stand in for a quantity that we don't know yet. Third, the pattern you see may not be correct for a different problem that is similar but not exactly the same. More generally, attempting to do arithmetic over algebra will eventually limit the kinds of problems you can solve.  The process of modeling will feel awkward, but with practice it becomes more natural. Everyday uses of mathematics later in life (from things as mundane as creating an approximate budget for a kitchen remodel job) will require modeling. Setting up a relevant equation which contains a variable is a core idea of algebra, so I strongly encourage you to give it a try! Run towards this, instead of running away! You can do it!     A car rental costs $40 per day plus a one-time insurance fee of $15. If the total cost is $135, how many days was the car rented?    We introduce the variable to represent the number of days the car was rented. So, if then the car was rented for days. The total cost of renting the car for days is . We were told the total cost of renting the car was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The car was rented for days.      A chemist is cooling a liquid that starts at 90°C and decreases at a rate of 2°C per minute. After how many minutes will the liquid reach 30°C?    We introduce the variable to represent the time in minutes. (Hypothetically, if then the liquid has been cooling for minutes.) The temperature of the liquid after minutes is . We were told that we want to find when the temperature reaches . Since we have two different-looking ways to represent the temperature, namely and , we can set them equal to each other: The liquid will reach 30°C after minutes.      A train leaves a station traveling at 60 miles per hour. Another train leaves the same station two hours later traveling at 80 miles per hour. After how many hours will the second train catch up?    Let represent the number of hours traveled by the faster train. (Hypothetically, if then the faster train has been traveling for hours.)  The slower train leaves earlier, meaning it travels for more time. Since the fast train travels for hours, the slow train travels for hours. The distance of the slow train is .  The distance of the fast train is .  Both trains travel the same distance. This means that the distances and must be equal, even though these expressions look different. We create an equation by setting this different-looking expressions equal to each other: The faster train will catch up after hours.      A landscaper buys bags of soil for $3 each and a one-time delivery charge of $12. If the total cost is $51, how many bags of soil were purchased?    Let represent the number of bags of soil purchased. (Hypothetically, if then the landscaper bought bags of soil.) The total cost of buying bags of soil is . We were told that the total cost was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The landscaper bought bags of soil.      An Australian internet service provider offers a base plan for $30 per month plus $5 for each additional gigabyte of data. If someone paid $65 one month, how many gigabytes of extra data did they use?    Let represent the amount of data used by the customer in gigabytes. (Hypothetically, if then the customer used gigabytes of data.) The total cost of using gigabytes of data is for the month, but the total cost is also for the month, so we set these equal to create an equation: The customer used gigabytes of extra data.      A taxi ride costs $3 plus $2.50 per mile. The taxi is cash only and you have $28.50 available. How many miles can you travel?    Let represent the distance traveled in miles. (Hypothetically, if then the customer traveled miles.)  The total cost of the ride can be expressed as . We know the total cost is , so we can set up the equation:   The customer can travel miles.      A gym charges a membership fee of $50 plus $15 per month. How many months can someone be a member if they paid $200 in total?    Let represent the number of months the person was a member. (Hypothetically, if then the person was a member for months.) The total cost of being a member for months is . We were told that the total cost was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The person was a member for months.      Summary     Expressions and equations are different mathematical writing. An expression is notation representing a number, while an equation is a statement that two expressions are equal. Generally, an expression is simplified, while an equation is solved.    The individual steps of solving an equation involve applying the same action to the entire left side and the entire right side of a fraction.    To solve an equation where the variable is written once, undo the final operation which occured on the side that has the variable.    To solve an equation where the variable is written more than once, if each side is (or can be, after algebra) written as a sum, apply additions and subtractions to both sides to get all terms with the variable on one side and all terms without the variable on the other side.    The placement of equal signs can be confusing at first, but recall that an equal sign that is written can always be intrerpreted to mean equal but does not always mean and the next step is .    While we often concern ourselves with the process of how to solve an equation (performing the same action to both sides), the meaning is to provide a list of all values for the variable which make the original equation's left side equal to the original equation's right side. For this reason, we can always check our answer(s) by substituting our solution(s) into the original equation.       Exercises        Review the strategies for solving equations that we have seen, paying attention to when each strategy applies. Then solve each equation.                                Is the given value a solution to the given equation? Justify your answer.   Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?    Is a solution to ?       Model each situation by first clearly defining a variable to represent the unknown quantity, write an equation that models the situation (by equating two different-looking expressions which are equal due to the situation described), and then solve the equation.  A taxi ride costs a flat fee of $4 plus $2.50 per mile. If the total cost is $29.50, how many miles was the trip?  A recipe requires cups of sugar to make one batch of cookies. If you want to make 5 batches, how many cups of sugar do you need?  A water tank is being filled at a rate of 12 liters per minute. How long will it take to fill 300 liters?  You earn $15 per hour babysitting. If you earned $180 last month, how many hours did you babysit?  A scientist has a sample cooling at a steady rate of 1.5°C per minute. If it started at 95°C, after how many minutes will it reach 35°C?  A gym charges $40 per month plus a one-time registration fee of $20. If someone paid $140 total, how many months were they a member?  A concert ticket costs $45. If you save $270 by skipping other expenses, how many tickets can you buy?  You drive at an average speed of 60 miles per hour. How long does it take to drive 210 miles?  A factory produces 250 parts per hour. How many hours does it take to produce 6,000 parts?  A cell phone plan charges $30 plus $0.05 per text message. If the monthly bill is $47.50, how many text messages were sent?  A bicycle rental costs $12 per hour. If the total cost was $66, for how many hours was the bike rented?  A sports drink container has 1.5 liters. How many containers are needed to hold 21 liters?  A printing company charges $50 setup fee plus $0.20 per page. If the total charge is $110, how many pages were printed?  A runner maintains a pace of 8 minutes per mile. How long does it take to complete a 13-mile run?  A streaming service charges $12 per month. If you paid $96 in total, how many months were covered?  A car uses 3.5 gallons of gas to drive 100 miles. How many gallons are needed to drive 350 miles?  A plumber charges $75 for a service call plus $50 per hour of labor. If the bill was $275, how many hours of labor were included?  A hiking trail is 6.4 kilometers long. If you walk at a steady pace of 4 kilometers per hour, how long does it take to finish the trail?  A landscaper charges $30 per hour plus a one-time fee of $50. If the total cost was $200, how many hours did the landscaper work?        "
},
{
  "id": "sec-solving-equations-2",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  In this section, we learn how to:    Solve linear equations where the variable is written once.  Solve linear equations where the variable is written more than once.  Write equal signs appropriately in work for simplifying expressions and solving equations.  Use equations to model applied situations, solve the equation constructed, and interpret the solution in the context of the situation.   "
},
{
  "id": "subsec-introduction-to-equations-3",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-3",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  An equation is a mathematical statement that two expressions are equal. For example, is an equation stating that the expression is equal to    "
},
{
  "id": "subsec-introduction-to-equations-5",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-5",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Is an equation or an expression?     is an equation because it is stating that the expression is equal to the expression .   "
},
{
  "id": "subsec-introduction-to-equations-6",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-6",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Is an equation or an expression?     is an expression because it is not stating that two expressions are equal. It is just one expression: the value of is one number, based on whatever the mystery value of is.   "
},
{
  "id": "subsec-introduction-to-equations-7",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-7",
  "type": "Try it",
  "number": "1.3.4",
  "title": "",
  "body": "  Both expressions and equations are mathematical writing involving notation. How would you explain to someone how to spot the difference between an expression and an equation?   "
},
{
  "id": "subsec-introduction-to-equations-8",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-8",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  Which of the following are equations and which are expressions?            "
},
{
  "id": "subsec-introduction-to-equations-9",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-9",
  "type": "Note",
  "number": "1.3.6",
  "title": "",
  "body": " The reason that it is important to know the difference between expressions and equations is that we will be doing different things with them.   For an expression, our primary task will be to simplify the expression we are given.    For an equation, our primary task will be to solve the equation we are given.     "
},
{
  "id": "subsec-introduction-to-equations-10",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-introduction-to-equations-10",
  "type": "Warning",
  "number": "1.3.7",
  "title": "",
  "body": " An equation is not the same as an expression. We cannot solve an expression. We can only simplify an expression. The action of solving will be language we reserve for equations.  "
},
{
  "id": "note-slow-down",
  "level": "2",
  "url": "sec-solving-equations.html#note-slow-down",
  "type": "Note",
  "number": "1.3.8",
  "title": "",
  "body": " To begin, it will be helpful to slow down by writing in the writing the action we are applying to both sides as its own step, then simplifying both sides as a separate step. While this is more time-consuming (and we'll eventually stop doing it this way), skipping this and working too fast makes it impossible to describe certain common errors. To be able to point out what's going on, we need to start slow. I ask for your patience in doing it this way for now. Once the important points have been made, we'll make the process a little smoother.  "
},
{
  "id": "sec-solving-equations-5-5",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-5",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Solve the equation .    To undo the on the left side of the equation, we can subtract from both sides of the equation: On the left side, the and the together simplify to , so we are left with just . On the right side, simplifies to .   "
},
{
  "id": "sec-solving-equations-5-7",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-7",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Solve the equation .    We can add to both sides of the equation.    "
},
{
  "id": "warning-why-show-unsimplified-step",
  "level": "2",
  "url": "sec-solving-equations.html#warning-why-show-unsimplified-step",
  "type": "Warning",
  "number": "1.3.11",
  "title": "",
  "body": " Now, let's examine a new equation where a certain type of error tends to first occur from learners. Given the equation a common error is to end up at . Let's analyze this thorougly:   First, does the answer obtained make sense? If we substitue for in the original equation, we get , which is not true. So, cannot be the correct answer.    While we already see that there is a problem, we haven't discussed how the error occurred. Let's try to figure that out. Here, it will be very helpful to write the action taken on both sides without simplifying right away, just as talked about: From the original equation, based on the final answer that someone wrote, I would guess that they thought about dividing by on both sides. Writing this without simplifying first looks like this: Here, it is true that the right side simplifies to . However, the expression on the left side says I would guess the learner canceled the on top and bottom, but the appearing in the numerator is a term , not a factor . Recall that we can only cancel factors, and not terms. It would be hard to analyze this error if we hadn't slowed the process down.    To stick to principles, we can divide by on both sides. What happens is this: The steps shown above are all valid, but we haven't successfully solved for , since is not by itself on one side of the equation. This goes to show that while it is permissible to divide by on both sides, it is not helpful in solving this equation. Let's show a couple more examples of sucessfully solving equations, and then summarize what kind of actions are helpful : we don't want to just do steps to do them; we want to find steps that lead towards our goal of isolating the variable on one side of the equation.     "
},
{
  "id": "sec-solving-equations-5-9",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-9",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Solve the equation .    We can divide both sides of the equation by . In this example, dividing both sides by was helpful. This is because in the fraction there is a factor of in both the numerator and denominator, so we can cancel the s. In slightly more detail, we can think of as , which shows more clearly that is a factor in both the numerator and denominator.   "
},
{
  "id": "sec-solving-equations-5-10",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-10",
  "type": "Note",
  "number": "1.3.13",
  "title": "",
  "body": " In both of the last two examples, we divided by . In one example, this was helpful, and in the other example, this was not helpful. I want you to notice that when we divide both sides by a quantity, we end up creating a fraction even though we sometimes work so fast that we don't write the fraction that encourages us to write. That fraction is there, whether we write it or are too lazy to write it, and we need to carefully apply what we learned in the last section about fractions: we can only cancel common factors .  "
},
{
  "id": "sec-solving-equations-5-11",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-11",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Solve the equation .    We can think of the left side as . To undo the division by , we can multiply both sides by . We can multiply both sides of the equation by . In this example, multiplying both sides by was helpful. Why? Of the three equations that were one right after another, the left side of the second equation is the expression . From the last section, we can treat the product of a fraction and a non-fraction in the usual way to get . Whether you multiply across first and cancel the factors of on top and bottom after, or note that the s on top and bottom in the separate fractions would eventually become factors in the combined fraction and cancel right away, we're left with which simplifies to .   "
},
{
  "id": "sec-solving-equations-5-13",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-13",
  "type": "Warning",
  "number": "1.3.15",
  "title": "",
  "body": " It is tempting to divide on both sides by in an equation like or . However, division does not undo subtraction. (Instead, addition undoes subtraction.)  Similarly, it is tempting to divide on both sides by in an equation like or . However, division does not undo addition. (Instead, subtraction undoes addition.)  In all four equations that have been mentioned in this box, dividing both sides by is permissible, but not helpful. What ends up happening (if we slow things down the way encourages us to) is that we have a fraction where the in the numerator is a term, not a factor, so we cannot cancel it.  "
},
{
  "id": "sec-solving-equations-5-14",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-14",
  "type": "Example",
  "number": "1.3.16",
  "title": "",
  "body": "  Solve the equation .         Since we made the point about writing the action that occurs on both sides without simplyfing in so that we could analyze a situation like we did in , we can now speed things up a little and show a perfectly acceptable answer to this question which doesn't show the middles step.    "
},
{
  "id": "sec-solving-equations-5-16",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-16",
  "type": "Example",
  "number": "1.3.17",
  "title": "",
  "body": "  Solve the equation .         Let's also present a solution which skips showing the action, and instead shows the result of simplifying where possible.    "
},
{
  "id": "sec-solving-equations-5-18",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-18",
  "type": "Example",
  "number": "1.3.18",
  "title": "",
  "body": "  Solve the equation .        "
},
{
  "id": "sec-solving-equations-5-19",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-5-19",
  "type": "Example",
  "number": "1.3.19",
  "title": "",
  "body": "  Solve the equation .        "
},
{
  "id": "subsubsec-equations-with-several-operations-7",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-7",
  "type": "Example",
  "number": "1.3.20",
  "title": "",
  "body": "  Solve the equation .    To undo the on the left side of the equation, we can subtract from both sides of the equation: From the second equation to the third equation, we dropped the parentheses due to the order of operations. It's more work than most of us want to show to write in the first place, but those parentheses are shown to emphasize following the advice of . Now, we have the equation . To undo the multiplication by , we can divide both sides by .    "
},
{
  "id": "subsubsec-equations-with-several-operations-8",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-8",
  "type": "Example",
  "number": "1.3.21",
  "title": "",
  "body": "  Solve the equation .    To solve the equation , we can start by isolating the term with the variable . We can do this by subtracting from both sides of the equation: Now, we have the equation . To undo the multiplication by , we can divide both sides by :    "
},
{
  "id": "subsubsec-equations-with-several-operations-11",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-11",
  "type": "Try it",
  "number": "1.3.22",
  "title": "",
  "body": "  In each equation below, identify several possible first actions that someone may try to perform on both sides. (Try to identify at least two different things that people might try to do first.) For each of these first actions, carefully write the resulting equation that has no simplification occurring, as discussed in . Then, discuss whether or not that first action is helpful or not.                               "
},
{
  "id": "equations-with-variable-written-once",
  "level": "2",
  "url": "sec-solving-equations.html#equations-with-variable-written-once",
  "type": "Strategy",
  "number": "1.3.23",
  "title": "Solving an equation when the variable is written once.",
  "body": " Solving an equation when the variable is written once      When does this strategy apply? This strategy applies in any equation we are asked to solve when the variable is written once.     How to apply the strategy    Identify the side of the equation which contains the variable.    On the side which contains the variable, starting from the variable and working outwards, identify the order in which the operations occur.    Apply an action on both sides of the equation to undo the last operation to occur. Continue in this way by undoing the second-to-last operation and the third-to-last operation and so on.      In short, the strategy tells us to undo the last operation that occurs .  "
},
{
  "id": "solve-5xminus3-equals27",
  "level": "2",
  "url": "sec-solving-equations.html#solve-5xminus3-equals27",
  "type": "Example",
  "number": "1.3.24",
  "title": "",
  "body": "  Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Analyzing the left side according to the order of operations, we see that multiplied by occurs first, which gives us and then from subtracting occurs next. Since this finishes our analysis of reading the left side, we note that subtracitng occured last. The strategy tells us to undo subtracting first, so we add to both sides. Now there is only one operation remaining. We undo the multiplication by by dividing both sides by leading to    "
},
{
  "id": "subsubsec-equations-with-several-operations-15",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-15",
  "type": "Example",
  "number": "1.3.25",
  "title": "",
  "body": "  Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Analyzing the left side according to the order of operations, we see that multiplied by occurs first, which gives us and then from subtracting occurs next. Since this finishes our analysis of reading the left side, we note that subtracitng occured last. The strategy tells us to undo subtracting first, so we add to both sides. Now there is only one operation remaining. We undo the multiplication by by dividing both sides by leading to    "
},
{
  "id": "subsubsec-equations-with-several-operations-16",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-16",
  "type": "Example",
  "number": "1.3.26",
  "title": "",
  "body": "  Solve the equation .    We are being asked to solve an equation where the variable is written just once, so applies. The variable appears on the right side. Analyzing the right side using the Order of Operations, the multiplication between the and the occurs first leading to , whatever the value of that is. Then, we add this value to . Since adding and together happens last (we can switch the order of addition if it's convenient for our minds), we will undo adding by making our first step to subtract on both sides, leading to The only remaining operation on the right is multiplication of and . We can undo the multiplication by if we divide both sides by :    "
},
{
  "id": "subsubsec-equations-with-several-operations-17",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-17",
  "type": "Example",
  "number": "1.3.27",
  "title": "",
  "body": "  Solve the equation     We are being asked to solve an equation where the variable is written just once, so applies. The variable is written on the left side of the equation. Since the variable is on the left side, we analyze the left side according to the Order of Operations. The multiplication between and occurs first, represented as . Then from we subtract to get . (Recall the entire numerator of a fraction is in a hidden set of) Then from we divide by to get . Finally, the addition between and occurs last, so we will undo this addition by subtracting from both sides first.  Now the final operation on the left is the division by , so we multiply both sides by : The final operation on the left is the subtraction of , so we add to both sides: Finally, we divide both sides by to isolate :    "
},
{
  "id": "subsubsec-equations-with-several-operations-18",
  "level": "2",
  "url": "sec-solving-equations.html#subsubsec-equations-with-several-operations-18",
  "type": "Example",
  "number": "1.3.28",
  "title": "",
  "body": "  Solve the equation      applies. On the side with the variable, adding occurs last, so we undo this first: we'll subtract on both sides leading to the new equation In the new equation the last operation on the right side is the division by which we undo by multiplying both sides by . We get The final operation on the right is the addition of , so we subtract from both sides: Finally, we divide both sides by to isolate : Note, it is perfectly okay for the final equation to display the variable on the right side instead of the left side.   "
},
{
  "id": "sec-solving-equations-6-3",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-3",
  "type": "Warning",
  "number": "1.3.29",
  "title": "",
  "body": " Instead of applying an action on one side and the opposite (or undoing ) action on the other side, we must always apply the same action to both sides.  "
},
{
  "id": "sec-solving-equations-6-4",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-4",
  "type": "Example",
  "number": "1.3.30",
  "title": "",
  "body": " In solving the equation , it would not be correct to make the next equation . How does someone get to this second equation? I would say that they added to the left side (to undo the subtraction of ) but then they subtracted from the right side. Adding  on the left and subtracting  on the right is not the same action on both sides. The correct next step would be to add to both sides, leading to .  "
},
{
  "id": "sec-solving-equations-6-8",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-8",
  "type": "Example",
  "number": "1.3.31",
  "title": "",
  "body": "  Simplify the expression .             "
},
{
  "id": "sec-solving-equations-6-10",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-10",
  "type": "Note",
  "number": "1.3.32",
  "title": "",
  "body": " When simplifying an expression, we can write the equal sign between equal expressions. Be sure that the the expressions are equal.  "
},
{
  "id": "sec-solving-equations-6-13",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-13",
  "type": "Example",
  "number": "1.3.33",
  "title": "",
  "body": "  Solve the equation .        "
},
{
  "id": "sec-solving-equations-6-15",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-15",
  "type": "Warning",
  "number": "1.3.34",
  "title": "",
  "body": " When solving an equation, do not write an equal sign to mean and the next step is . Here are two examples of incorrect writing for the previous question:            Both of these answers are essentially the same, but just with different shapes: the first answer is presented vertically, while the second answer is presented horizontally. Every other equal sign is the equal sign that appears in the middle of an equation, but then the other equal signs are being written because someone is thinking my next step is which coincidentally may have worked for simplifying expressions, writing like this is reinforcing an incorrect idea of what an equal sign means. If we read either version out lout, at face value, the writing in this incorrect answer is saying: is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to which is equal to . Please note how strange this is, especially when saying this aloud: among other things, we have said that the number is equal to something which is then eventually equal to the number , but these numbers are not equal!  "
},
{
  "id": "sec-solving-equations-6-19",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-19",
  "type": "Example",
  "number": "1.3.35",
  "title": "",
  "body": "  Solve the equation .             "
},
{
  "id": "equation-7x-minus-2-equals-3x-plus-14",
  "level": "2",
  "url": "sec-solving-equations.html#equation-7x-minus-2-equals-3x-plus-14",
  "type": "Example",
  "number": "1.3.36",
  "title": "",
  "body": " We have not yet developed any strategies for solving equations like . However, we will use this example to illustrate the point being made above. Suppose someone takes and does the following steps, all of which are valid: This doesn't meet the expectation that we just discussed: though the left side just has the variable on its own, the right side is not a constant because the variable was written.  "
},
{
  "id": "solving-equations-meaning",
  "level": "2",
  "url": "sec-solving-equations.html#solving-equations-meaning",
  "type": "Principle",
  "number": "1.3.37",
  "title": "Solving equations: what it means.",
  "body": " Solving equations: what it means  To solve an equation means to find all values of the variable that make the left side of the original equation equal to the right side of the original equation.  "
},
{
  "id": "sec-solving-equations-6-27",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-27",
  "type": "Example",
  "number": "1.3.38",
  "title": "",
  "body": " Let's revisit the equation . We will discuss strategies for solving this equation soon, but for now, say that someone claims to have solved this equation and wrote as their final line of work. Let's see if using for makes the origial left side and the original right side equal:   The left side of the original equation is the expression . Substituting for gives .    The right side of the original equation is the expression . Substituting for gives .   Substiting made both the left and right side equal to . This means that is a solution to the equation . Note that this focuses on what it means to solve an equation. We have actually avoided discussing how someone got , which we will do soon. In addition, note that substituing any value of other than will make both sides unequal.  "
},
{
  "id": "sec-solving-equations-6-28",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-28",
  "type": "Example",
  "number": "1.3.39",
  "title": "",
  "body": " When asked to solve the equation , using techinques we'll introduce in the next chapter, someone presented as their final answer. When substituting for in the original equation, both the left and the right side equal . When substituting for in the original equation, both the left and the right side equal . When substituting any other value for , the left and right sides are not equal. (For example, if we tried substituting for every in the original equation, the left side would equal while the right side would equal , which are not equal. So is not a solution to the equation.) It turns out that and are the only two solutions to the equation are and .  "
},
{
  "id": "principle-checking-equation-solutions",
  "level": "2",
  "url": "sec-solving-equations.html#principle-checking-equation-solutions",
  "type": "Principle",
  "number": "1.3.40",
  "title": "Checking solutions to equations.",
  "body": " Checking solutions to equations  After solving an equation, we can check our work by substituting our solution(s) into the original equation. If substituting a solution into the original equation makes both sides equal, then it is indeed a solution. If substituting a solution into the original equation does not make both sides equal, then there was an error in the work. If there are multiple solutions, we should check each one.  "
},
{
  "id": "sec-solving-equations-6-31",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-31",
  "type": "Example",
  "number": "1.3.41",
  "title": "",
  "body": " In we started with the equation and we found that is a solution. We didn't check our work then, so let's check it now, following the advice of . (If you have leftover time in a quiz or exam, it's a good idea to check your work on solving equations by substituing your solution(s) into the original equation.) Whenever we check our work, we always start with the original equation. Let's substitute for in the original equation:   The right side of the original equation is the expression . There is no written, so we don't even have to work on substituting for every . The right side has value .    The left side of the original equation is the expression . Substituting for gives .   Since both sides are equal, we have verified that is indeed a solution to the equation .  "
},
{
  "id": "sec-solving-equations-6-32",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-6-32",
  "type": "Example",
  "number": "1.3.42",
  "title": "",
  "body": "  Consider the equation . For this equation:  Is a solution?  Is a solution?  Is a solution?  Is a solution?  Is a solution?        Substituting , the left side simplifies to and the right side simplifies to . Since these two values do not match, is not a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values do not match, is not a solution to .  Substituting , the left side simplifies to and the right side simplifies to . Since these two values match, is a solution to .  We have found three solutions ( ) to this equation and two non-solutions ( ). Actually, the three solutions we have verified are the only solutions to this equation, though we have not explained how we know this to be true. We have only verified that and are not solutions, but just about any number we pick (including or ) will not be a solution. To be clear, we did not give any practical strategy for solving the equation . In fact, the specific reason we picked an equation like where we haven't yet introduced a strategy that discusses things like what we should do on both sides is that it helps focus our conversation: instead of focusing on how to solve this equation, we focused on what it means to solve an equation. We get to practice which is a useful tool to check our work after solving any equation. (Say that someone else claimed that is a solution to this equation. We could use the same process to verify that is not a solution.) Practicing this kind of question also encourages us to think about what it means to solve an equation as introduced in .   "
},
{
  "id": "equations-with-variable-written-more-than-once",
  "level": "2",
  "url": "sec-solving-equations.html#equations-with-variable-written-more-than-once",
  "type": "Strategy",
  "number": "1.3.43",
  "title": "Solving an equation when the variable is written more than once, with sides having terms.",
  "body": " Solving an equation when the variable is written more than once, with sides having terms      When does this strategy apply? This strategy applies in any equation where the variable is written more than once. In addition, the left side and right side of the equation must be sums where each term is either a constant or a constant times the variable.     How to apply the strategy    On each side, identify the terms that contain the variable, and the term that don't.    Choose which side you'd like the variable to appear on.    Add on both sides and\/or subtract on both sides to reach the goal of having all terms with the variable on the side you chose in the previous step, and having all terms without the variable on the other side.    Independently simplify each side. On the side where each term contains the variable, we can collect like terms (or in more complicated situations, apply the more general technique of factoring out the variable). Once this step is complete, the variable will only be written once.    Apply a division on both sides (or a multiplication on both sides) to isolate the variable.        "
},
{
  "id": "sec-solving-equations-7-5",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-5",
  "type": "Example",
  "number": "1.3.44",
  "title": "",
  "body": "  Solve the equation .    First, let's check that the strategy applies. We were given an equation to solve. Each side is a sum (or difference) of terms. Since each side consists of terms, the strategy applies. We need to pick a side to have the variable on. It doesn't matter which side we pick, so let's pick the left side. Currently, the terms on the left side are and , while the terms on the right side are and . Since we want terms with to be on the left side, we should keep the term on the left side. However, the next term on the left side is . This term does not contain , so to get rid of it validly, let's add to both sides, obtaining: Now, the left side has only terms with , but the right side still has a term with . To get rid of the term on the right side, let's subtract from both sides, obtaining: Now, the left side has only terms with , while the right side has only terms without , which is a key goal in the process of this strategy. We can simplify both sides: The left side can be thought of as collecting like terms, or we can factor from the left side to get , which simplifies to . Finally, we can isolate by dividing both sides by :    "
},
{
  "id": "sec-solving-equations-7-7",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-7",
  "type": "Example",
  "number": "1.3.45",
  "title": "",
  "body": "  Solve the equation .    The variable is written more than once, and each side is a sum of terms, so the strategy applies. Let's add and subtract both sides with the goal of getting all terms with on the left side, and all terms without on the right side. We can start by subtracting from both sides: Now, the left side has only terms with . Let's examine the right side. We wanted all terms with on the left side, so we have to do something about the term on the right side. Let's subtract from both sides: Now, the left side has only terms with , while the right side has only terms without . This was a key achievement described in this strategy. We can simplify each side independently: Finally, divide both sides by to isolate :      As a second solution, we can apply the same startegy, but getting the terms with on the right side and the terms without on the left side. Starting from we can subtract from both sides: The right side has a term without , so we add to both sides: Now, the left side has only terms without , while the right side has only terms with . We can simplify each side independently: Finally, divide both sides by to isolate : The second solution is slightly faster because we didn't need to cancel negative signs. In the original equation, note there was a on the right and a on the left. Strategically, to avoid minus signs, since is larger than and the coefficient of appears on the right, this is why we might choose to keep all terms with the variable on the right side.   "
},
{
  "id": "sec-solving-equations-7-8",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-8",
  "type": "Example",
  "number": "1.3.46",
  "title": "",
  "body": "  Solve the equation .    We are asked to solve an equation in which the variable is written more than once. However, the left side is a product, not a sum. So the strategy doesn't directly apply. However, we can rewrite the right side by distributing. The original left side can be replaced with . With this replacement, our equation becomes Now, the strategy applies. Since is bigger than , let's choose to have all terms with on the right, and all terms without on the left. (You could make the opposite choice, and still achieve a perfectly valid answer, but this choice will minimize the number of minus signs that appear.) Starting from , to get all terms with on the right and all terms without on the left, we can subtract from both sides and also add to both sides, obtaining: You might choose to skip the equation we just wrote above to directly write: Finally, divide both sides by to isolate :    "
},
{
  "id": "sec-solving-equations-7-9",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-9",
  "type": "Example",
  "number": "1.3.47",
  "title": "",
  "body": "  Solve the equation .    We are asked to solve an equation in which the variable is written more than once. However, the left side is a product, not a sum. So the strategy doesn't directly apply. However, we can rewrite the left side by distributing. Now, the strategy applies. Since is bigger than , let's choose to have all terms with on the left, and all terms without on the right. (You could make the opposite choice, and still achieve a perfectly valid answer, but this choice will minimize the number of minus signs that appear.) Starting from , we subtract from both sides and also subtract from both sides, obtaining: You might choose to skip the equation we just wrote above to directly write: Finally, divide both sides by to isolate :    "
},
{
  "id": "sec-solving-equations-7-10",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-10",
  "type": "Example",
  "number": "1.3.48",
  "title": "",
  "body": "  Solve the equation .    After distributing, we have: Now, the strategy applies. You can continue work noticing that there are already like terms on the right, so we can combine those like terms. (A successful solution can be made without combining like terms at this moment.) Let's combine like terms on the right, and as long as we're doing this, simplify the constants on the left: Since is bigger than , let's choose to have all terms with on the right, and all terms without on the left. Subtract on both sides and also subtract from both sides: Finally, divide both sides by to isolate :    "
},
{
  "id": "sec-solving-equations-7-12",
  "level": "2",
  "url": "sec-solving-equations.html#sec-solving-equations-7-12",
  "type": "Example",
  "number": "1.3.49",
  "title": "",
  "body": "  Solve the equation .    The strategy directly applies. Let's get all terms that have on the left side, and all terms without on the right side. We subtract from both sides and also add to both sides: Of course, the new right side is easy to simplify, but to make a point, I didn't simplify here yet, because the left side simplification is not obvious (because how are we supposed to collect like terms here?). While we simplify the right side in the next equation, let's factor out on the left side: Now the content in parentheses is a constant (the variable doesn't appear), so this is a number. It's a funky number -- it take some time and some space to write it -- but it is just a number\/constant. Let's divide both sides by the number . In fact, let's slow this down by showing the division on both sides without simplifying yet: On the left side, the factor of in the numerator cancel with the the entire denominator , recalling that the entire denominator of any fracition is a factor, since the entire denominator is in a hidden set of parentheses. After this cancellation, we have by itself on one side, and no s on the other side, so we're done: In the appendix, we talk about a technique called rationalizing the denominator, which can be used to rewrite this answer in a different form.   "
},
{
  "id": "subsec-TITLE-applications-revisited-3",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-3",
  "type": "Warning",
  "number": "1.3.50",
  "title": "",
  "body": " When solving application problems, it is important to write an equation that models the situation. It is tempting to skip the explanation, and try to coach yourself to look for a pattern and boil everything in the question down to an arithmetic problem. However, we introduced these application problems as applications of solving equations . It would be easy to say but I see a pattern, so I don't need to set up an equation . This view is limiting in multiple ways: first off, any pattern devloped on coached arithmetic actually comes from the equation. Second, the skill of writing an equation to model a situation is a critical skill in algebra. It is a really powerful tool to write a variable to stand in for a quantity that we don't know yet. Third, the pattern you see may not be correct for a different problem that is similar but not exactly the same. More generally, attempting to do arithmetic over algebra will eventually limit the kinds of problems you can solve.  The process of modeling will feel awkward, but with practice it becomes more natural. Everyday uses of mathematics later in life (from things as mundane as creating an approximate budget for a kitchen remodel job) will require modeling. Setting up a relevant equation which contains a variable is a core idea of algebra, so I strongly encourage you to give it a try! Run towards this, instead of running away! You can do it!  "
},
{
  "id": "subsec-TITLE-applications-revisited-4",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-4",
  "type": "Example",
  "number": "1.3.51",
  "title": "",
  "body": "  A car rental costs $40 per day plus a one-time insurance fee of $15. If the total cost is $135, how many days was the car rented?    We introduce the variable to represent the number of days the car was rented. So, if then the car was rented for days. The total cost of renting the car for days is . We were told the total cost of renting the car was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The car was rented for days.   "
},
{
  "id": "subsec-TITLE-applications-revisited-5",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-5",
  "type": "Example",
  "number": "1.3.52",
  "title": "",
  "body": "  A chemist is cooling a liquid that starts at 90°C and decreases at a rate of 2°C per minute. After how many minutes will the liquid reach 30°C?    We introduce the variable to represent the time in minutes. (Hypothetically, if then the liquid has been cooling for minutes.) The temperature of the liquid after minutes is . We were told that we want to find when the temperature reaches . Since we have two different-looking ways to represent the temperature, namely and , we can set them equal to each other: The liquid will reach 30°C after minutes.   "
},
{
  "id": "subsec-TITLE-applications-revisited-6",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-6",
  "type": "Example",
  "number": "1.3.53",
  "title": "",
  "body": "  A train leaves a station traveling at 60 miles per hour. Another train leaves the same station two hours later traveling at 80 miles per hour. After how many hours will the second train catch up?    Let represent the number of hours traveled by the faster train. (Hypothetically, if then the faster train has been traveling for hours.)  The slower train leaves earlier, meaning it travels for more time. Since the fast train travels for hours, the slow train travels for hours. The distance of the slow train is .  The distance of the fast train is .  Both trains travel the same distance. This means that the distances and must be equal, even though these expressions look different. We create an equation by setting this different-looking expressions equal to each other: The faster train will catch up after hours.   "
},
{
  "id": "subsec-TITLE-applications-revisited-7",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-7",
  "type": "Example",
  "number": "1.3.54",
  "title": "",
  "body": "  A landscaper buys bags of soil for $3 each and a one-time delivery charge of $12. If the total cost is $51, how many bags of soil were purchased?    Let represent the number of bags of soil purchased. (Hypothetically, if then the landscaper bought bags of soil.) The total cost of buying bags of soil is . We were told that the total cost was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The landscaper bought bags of soil.   "
},
{
  "id": "subsec-TITLE-applications-revisited-8",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-8",
  "type": "Example",
  "number": "1.3.55",
  "title": "",
  "body": "  An Australian internet service provider offers a base plan for $30 per month plus $5 for each additional gigabyte of data. If someone paid $65 one month, how many gigabytes of extra data did they use?    Let represent the amount of data used by the customer in gigabytes. (Hypothetically, if then the customer used gigabytes of data.) The total cost of using gigabytes of data is for the month, but the total cost is also for the month, so we set these equal to create an equation: The customer used gigabytes of extra data.   "
},
{
  "id": "subsec-TITLE-applications-revisited-9",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-9",
  "type": "Example",
  "number": "1.3.56",
  "title": "",
  "body": "  A taxi ride costs $3 plus $2.50 per mile. The taxi is cash only and you have $28.50 available. How many miles can you travel?    Let represent the distance traveled in miles. (Hypothetically, if then the customer traveled miles.)  The total cost of the ride can be expressed as . We know the total cost is , so we can set up the equation:   The customer can travel miles.   "
},
{
  "id": "subsec-TITLE-applications-revisited-10",
  "level": "2",
  "url": "sec-solving-equations.html#subsec-TITLE-applications-revisited-10",
  "type": "Example",
  "number": "1.3.57",
  "title": "",
  "body": "  A gym charges a membership fee of $50 plus $15 per month. How many months can someone be a member if they paid $200 in total?    Let represent the number of months the person was a member. (Hypothetically, if then the person was a member for months.) The total cost of being a member for months is . We were told that the total cost was . Since we have two different-looking ways to represent the total cost, namely and , we can set them equal to each other: The person was a member for months.   "
},
{
  "id": "sec-equations-with-fractions",
  "level": "1",
  "url": "sec-equations-with-fractions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Equations with Fractions",
  "body": " Equations with Fractions    In this section, we learn how to:    Solve equations with fractions present.     A new strategy  In , we learned how to simplify expressions with fractions. In this section, we look beyond simplifying expressions with fractions, and instead look at solving equations with fractions. The last two sections discussed expressions with fractions followed by solving equations, so now it's time to see efficient ways to solve equations with fractions. Recall from that simplifying expressions with fractions does not always require a common denominator. (More specifically, when asked to simplify the product of two fractions, we do not need a common denominator.) So, I invite you -- as we go through this section -- to be willing to question the idea that we'd always need a common denominator when solving equations with fractions. After all, it wasn't every fractional expression that required common denominators: only some of them did.    Solving an equation with fractions      When does this strategy apply? This strategy applies in any equation we are asked to solve when there is one or more fractions.     How to apply the strategy    Inventory all of the fractions, whether they appear on the left side, the right side, or both. In particular, identify all of the denominators present.    Off to the side, compute the least common denominator (LCD) of all of the fractions. This phrase least common denominator is shorthand to mean the least common multiple of all of the denominators. (See APPENDIX for details on least common multiples.)    Take the least common multiple computed in the previous step and multiply both sides of the equation by this expression. (Because we have to multiply the entire left side and the entire right side, it may be necessary to use parentheses due to the Order of Operations.)    On each side, distribute if applicable.    In each term on each side, cancel where applicable. This always results in an equation which has no fractions.           Solve .    We are being asked to solve an equation with fractions, so applies. First, we inventory all of the fractions and identify the denominators, which are and and . The least common multiple of and and is .  We multiply both sides of the equation by : Note that on the left side of the equation, we used parentheses to ensure that the entire left side is multiplied by : the Order of Operations tells us that multiplication is performed before addition, so without parentheses, only the first fraction would be multiplied by . On the right side, we could have drawn parentheses around the entire right side, but because there is only one term on the right side, it was not necessary.  Now, distribute on the left side: Next, we cancel where applicable. In the first term (all content before the first plus sign), the in the numerator partially cancels with the in the denominator, or said differently, after cancelling factor of on top and bottom, we are left with a factor of on top. In the second term (all content between the plus sign and the equal sign), the in the numerator partially cancels with the in the denominator, leaving a factor of on top. On the right side, the in the numerator partially cancels with the in the denominator, leaving a factor of on top. Here's what it looks like with the cancellations written in: After performing the cancellations, we are left with: This is an equation with no fractions, so we can solve it using the strategies we have learned previously. Subtracting from both sides gives: Dividing both sides by gives:      Before seeing more examples, let's discuss why this strategy works:   We multiplied by the appropriate quantity (in our last example ) which ensured that, after distributing where needed, all factors in the denominator would cancel. Using the least common multiple of the denominators as the number to multiply by on both sides ended up leading to this value appearing as a factor in the numerator of each term, allowing each copy to create all the necessary cancellations so that each denominator ends up being after cancellations occur. In other words, this ends up creating an equation without fractions.    For a fraction expression, there are not two sides, so to simplify adding fractions, a common denominator is needed. However, when you have an equation there are two sides. We can take avantage of the two sides by multiplying by the same thing on both sides! In the case of an expression, there aren't sides in the first place.    In an equation with fractions, multiplying both sides by the least common multilple of the denominators is the fastest way to get rid of fractions.        Solve the equation .    We are being asked to solve an equation with fractions, so applies. The least common multiple of the denominators and and is . So we multiply both sides of the equation by : Distributing on the left side gives: Now we cancel where applicable. After performing the cancellations, we are left with: This is an equation with no fractions. Subtracting from both sides gives: Dividing both sides by gives:       Solve the equation .    The least common multiple of the denominators and and is . So we multiply both sides of the equation by , though Order of Operations requires us to wrap the left side in parentheses: Distributing on the left side gives: Now we cancel where applicable. After performing the cancellations, we are left with: This is an equation with no fractions. Subtracting from both sides gives:     You may have never heard of before, but it is the fastest way to solve any equation that has fractions. You may be used to another method that works involving common denominators, but as a friendly reminder, told us that even when we looked at fractional expressions, we didn't always need common denominators. Let's compare the two methods in the next example.    Solve     Here's what it looks like to solve by ignoring and doing everything with common denominators instead:    Multiply both sides by .        Here's what it looks like to solve by using . First, the least common multiple of the denominators and and is , so we make our first step to multiply both sides by . On the left side, distribute . After cancelling, we have:         Let's be clear that both answers to the previous question are completely valid. In both answers, it took multiplying by to get rid of the fractions. (I ask you to pause for a second and think about this: if we didn't multiply by , we would not have been able to get rid of the fractions.) Since we have to multiply by anyway, why not do it right away and save ourselves some time? This saves us time because we don't have to keep writing fractions. Fractions take longer to write than non-fractions (because fractions have a top and a bottom). To be clear, there are ways to skip some of the steps in both answers above (but for a fair comparison, both answers stated the original equation at the start of the answer).   works because an equation has two sides. If we only had an expression , then we don't have two sides to work with.    Simplify the expression .           In the previous example, we could not use because there is no second side to multiply by the least common multiple. Instead, we had to find a common denominator in order to simplify the addition of fractions. This is why only applies to equations with fractions. However, when we have an equation with fractions, even if there is a plus sign between two fractions, there is no requirement to simplify the addition of fractions. Instead, we can use to get rid of the fractions entirely.    Solve the equation .    An answer that ignores and uses common denominators instead looks like this:   Multiply both sides by .   To try to speed things up, we skipped writing several steps.    An answer that uses first computes that the least common multiple of and and is . To create a fair comparison with the previous answer, we start by writing the original equation: Now, if we were in the setting of a quiz or exam, this equation is probably already typed for you. For the multiplying by on both sides, you could actually handwrite the on both sides, surrounding the typed left side in parentheses. That is, by handwriting on top of the original equation, you could see this next equation without having to write it in full: In fact, the step that would appear after this involves distributing on the left, as we saw in previous examples using . Instead of writing the equation we might just stare at each term to figure out what results after cancellation. In other words, by looking at we could see that result of multiplying by is . Similarly, looking at the second term , multiplying by gives . For the term on the right side, multiplying by simplifies to . Thus, our first full equation to write could be this equation, which has no fractions:           Solve .    An answer that ignores and uses common denominators looks like this:   Multiply both sides by .   To try to minimize the amount of writing, some steps were skipped. Even with skipped steps, there were three equations written after the original equation which had fractions, and fractions take longer to write than non-fractions. (One common point of confusion is why the left side of the second equation has instead of . The reason for this is that the numerator on the left is really before any distributing occured. Some people would prefer to distribute before combining fractions, in which case one numerator is in a hidden set of parentheses and the second numerator is also in a hidden set of parentheses.)    Using , the least common multiple of and and is . We could handwrite a on each side of the original typed equation, surrounding the left side in parentheses. Knowing that we will distribute on the left side anyway, we can really just think of what it means to multiply each term on each side by . Multiplying by means that a factor of remains in the numerator from the so we'd have . Multiplying by means that a factor of remains in the numerator from the so we'd have after the minus sign. Multiplying by means that a factor of remains in the numerator from the so we'd have . So, the first full equation we write doesn't have fractions:         In an attempt to make a fair comparison and skip as much as people might eventually feel comfortable in writing (just to compare how much writing there is, and how much time it takes), a certain aspect of the first answer may have been confusing. For that reason, outside of the comparison, I think it would be good for us to see the first several steps of the first answer without skipping any work. There are actually two subvariants of the first answer, and we'll go through the steps of both subvariants. Spending the time to do this isn't to persuade you to move away from . Far from it. In fact, the subtle things that we're about to dig into aren't a problem by following . That said, going into the details (as annoying as it might be) I hope will demystify some of the steps that are too often glossed over quickly (and I don't blame people who are confused)! The throughout explanations we're about to dig into are meant to ensure we don't create confusion by shoving things under the rug.   Starting from the usual work to create a common denominator leads to At this moment, we can either distribute and distribute , or since we have common denominators on the left, we can combine the fractions. I don't think it's wise at this moment to try to do both at the same time. One thing at a time. So, let's see what happens if we rewrite each denominator by distributing: Now, before doing the next step, something that tiny that can get easily ignored can lead to problems. Recall that the entire numerator and entire denominator of every fraction is in a set of parentheses. For this problem, we need to really think about this for the numerators (and don't need to really think about it for the denominators). While we really actually need to think about these parentheses for the second numerator, let's just draw in thoe hidden parentheses for all numerators, making visible those once-hidden parentheses: Now, on the left side, since we are subtracting fractions of a common denominator, we can combine this into one fraction: we leave in the parentheses for now, just to process one thing at a time. The first set of parentheses can be dropped. The parentheses on the right side can also be dropped. However, the second set of parentheses on the left side cannot be dropped because of the minus sign in front of it. In fact, we addressed the expression in , so we can apply what we learned there: We'll stop working on the problem here, because the previous equation appeared in the first answer we already provided.    Starting over, once we got common denominators which gave the equation instead of distributing first, we could have combined the fractions first: Now, distributing and and gives us the equation: Again, we stop working on the problem here.       Clarifications, Cautions, and Connections  We've seen a technique for solving equations that have fractions, but there are some things that we should clarify. I invite you to read through this section carefully. My hope is to really make sure everything that you've seen about equations with fractions is honored: we'll discuss it all! Moreover, I hope that what you read is empowering, because we've worked hard together to lay a foundation for what's happening step-by-step!   When being asked to solve an equation with fractions, a common error occurs among those who insist on a common denominator approach. What usually happens is that there is adding and\/or subtracting on both sides to reach the goal of having one side of the equation becoming just zero. After achieving this, often the work shown will involve only looking at the busier side and simplifying the expression.  Let's illustrate exactly what this looks like with an example. When asked to solve , someone might first subtract , and their work in full might look like this:       Doesn't the end of this work seem a little strange? Normally, when we solve an equation, we expect the last line of work to look something like or perhaps . The end of the work didn't tell us what number should be. Instead, our final work was an expression. How did this happen? Often, when people see a zero on one side (as you see in the work above), people feel like zero is insignificant, and feel no need to keep copying this from one line to the next. This mistake does not happen when using , which gives another compelling reason (besides speed) to use that strategy. The mistake made earlier never seems to happen in an equation without fractions, but just to demonstrate and to intentionally try to create that error, if someone is asked to solve and someone shows as their steps   and declares that their final answer is , that seems strange.     Solve .    After multiplying both sides by , effectively, we can think about what cancellations are created by multiplying each term by . The new first term would be , the new second term would be , and the new third term would be . So, we have:         Just to be thorough, the steps that we didn't show were right at the beginning, namely,      Solve .    The least common multiple of and and and is . Multiplying both sides by gives: Distributing on both sides gives: After cancelling, we have:        The original equation was slightly different from our earlier examples in that the original equation had multiple fractions on each side. However, still applies: the strategy applies to any equation with fractions, no matter how many fractions are on each side.   Expectation: equations where the variable appears in the denominator  If the original equation had variables in the denominator, check to ensure there are no false solutions. (Any solution which causes division by zero to occur is a false solution .)     Solve     Because the equation we are asked to solve has fractions, we use . It will be easier to compute the least common multiple of the denominators if we factor the first denominator: . The least common multiple of and and is . So we will multiply both sides by . Just a friendly reminder: the original left side had two terms, so due to Order of Operations, to indicate that we are multiplying the entire left side, we wrapped the original left side in parentheses. Now we distribute . The language being used here can be confusing: I don't mean that we look at and expand this in any way, which is not only valid, this is a completely reasonable interpretation of distributing in this context. I mean that we place a copy of to the side of each of the original terms on the left. In the first term (which is everything before the minus sign), a factor of and a factor of cancel on top and bottom. In the second term, a factor of cancels. On the right side, a factor of cancels. We are left with        Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero.   The first denominator is . When we put in , we see .    When we put in into the second denominator , we see .    When we put in into the third denominator , we see .   We checked that does not cause any of the three denominators to simplify to zero. Therefore, is a solution.      Solve     The third denominator in factored form is . The least common multiple of and and is , or in other words, . We multiply both sides by , noting that we have to wrap the left side in parentheses: Now we distribute . By this, I'm not saying that we write . Instead, I mean that a copy of is written to the side of both fractinos on the left: After processing cancellations,  Now, there are multiple ways to proceed, so don't fret if your next steps look different from my next steps:     Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero.   When we put in into the first denominator , we see .    The second denominator is without needing to substitute for , since there was no in the second denominator. Note .    When we put in into the third denominator , we see .   We checked that does not cause any of the three denominators to become zero. Therefore, is a solution.      Solve     The third denominator in factored form is . The least common multiple of and and is . We multiply both sides by , noting that we have to wrap the left side in parentheses: Now we distribute . By this, I'm not saying that we write . Instead, I mean that a copy of is written to the side of both fractions on the left: After processing cancellations,    Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero. When we put in into the first denominator , we see . Therefore, is a false solution, and the equation has no solution. (We don't even need to bother checking the other denominators: any time one or more denominators become zero, the solution is false.) It turns out that the equation has no solution.     At this point, we have two different concepts of checking an equation. To be transparent with you, it's time for some clarification. Let's compare:   In , we gave an expectation, or really a requirement: after solving an equation where the variable appears in the denominator, we are required to check that the value(s) obtanied for do not cause any denominator to equal zero.    In , we mentioned that you can always see if the value(s) of make the left and right side of the original equation to be equal. This check is never required, but it is recommended. If we encounter a time when the left and right side do not end up being equal, we should scan our work for any errors. After all, we're all human!   The purpose of discussing this is to spell out that the two checks are checking for different things. In the first case, we're just checking to see that denominators are never zero, and this check is required whenever the variable appears in the denominator. In the second, we're checking for something else (do the left and right sides of the original equation equal each other), and only because getting different values for the left and right hints to us that there's an error in our work, and we should go over it. In fact, we only completed the first kind of check in , and we didn't do the second kind of check mentioned in . To illustrate that point more fully, we can check that putting in in for into both the left side and the right side shows that both sides equal or from a calculator, .  In summary, when the variable appears in the denominator, we must check that we never have zero in the denominator due to the value(s) of . In any equation, we can always check to see if the original left and right sides are equal for the sake of quality control.    In an equation with fractions where all fractions have the same denominator, we cannot say that we are deleting all the denominators.  To be clear about what this warning is saying, we provided to answers to . The first answer, which was slower, ignored and used common denominators. If we go back and look at the work of our first answer, at some point we had the equation Two steps later, we had the. equation , but it would be wrong to say that we just got rid of the denominators. It definitely looks like we got rid of denominators, but this is not what happened. Instead, we multiplied both sides by 30 . This is a subtle but important distinction. The issue is that if we say we got rid of denominators , we are noticing a pattern (and I appreciate the desire to notice patterns), but it is not actually a pattern: things don't always behave like this. Let's see several examples:   When asked to solve , a well-meaning but incorrect thought is to say that since all three fractions have the same denominator, we can get rid of the denominators. This is incorrect, but let's follow through with this. This would lead to the equation , which eventually gets us to . Now we can follow up by checking the original equation like encourages us to do. Putting in for into the left side gives . Putting in for into the right side gives . Since , we know that is not a solution.      When asked to solve the equation a well-meaning but incorrect thought is to say that since all four fractions have the same denominator, we can get rid of the denominators. This is would lead to which gives us so and . Let's following . Putting in for into the left side gives . Putting in for into the right side gives . Because the left and right sides simplified to different values, is not a solution. The problem was created by the incorrect idea that we could get rid of the denominators.    The two examples above illustrate that we cannot say that we get rid of denominators when all fractions have the same denominator. (Our last two examples show that we can't just delete denominators when they are all the same, and we certainly can't delete denominators when fractions have different denominators). We're never erasing denominators. Instead, we stick to the only tool we really have for equations: which is to apply the same action to both sides. The action of multiplying on both sides helps create the possibility that cancellations can occur: the newly introduced factor in the numerator (the number we multiply both sides by) works to cancel with factors in the denominator. In fact, the reason that works is that we are multiplying both sides by the least common multiple of all denominators, and this quantity is guaranteed to have all the factors needed to create cancellations in every denominator.   Up until now, we have avoided talking about cross multiplying. The reason for waiting for so long to talk about this is that there is a common setting in which learners try to apply cross multiplying where the techinque is not valid. Specifically, given the task of simplifying the multiplying of two fractions, learners sometimes try to cross multiply. Let's dig into an example:   When asked to simplify , a well-meaning but incorrect thought is to say that we can cross multiply. This is incorrect, but let's follow through with this. This would lead to the expression .    Before immediately dismissing this answer, let's talk about it. I believe that you have the background to follow the discussion we're about to make, and taking the time to actively read this discussion will be empowering for building your confidence in math, and moreover, can help you avoid mistakes in the future.  Say we take the same problem about simplifying the product of fractions, but just switch the order of the fractions: Then, applying cross multiplying would lead to . This is a different answer from the previous answer of . This seems strange, because we know the multiplication is commutative, either from our everyday experience with examples like , or from giving a geometric argument that the Commutative Property of Multiplication in is true in general. Because we got different results from cross multiplying, it's reasonable for us to be suspicious of our two answers, and the technique in general. In a moment, we will in fact see that neither nor is the correct final answer. Cross multiplying is not a valid technique for simplifying the product of two fractions.    To simplify , recall that tells us to multiply straight arcoss:    Cross multiplying is really just a special case of . Cross multiplying only applies when there are two fractions in an equation, one on each side of the equal sign. In this case, the least common multiple of the two denominators is simply the product of the two denominators. So, cross multiplying is just multiplying both sides by the product of the two denominators. This is exactly what tells us to do. So, cross multiplying is not a different technique, but rather a special case of . Because cross multiplying is so limited in its application, and because it is just a special case of , we have avoided talking about it. More importantly, we have avoided talking about it because of the common mistake of trying to apply it to simplify the multiplication of two fractions.     Solve the equation .    Because we have an equation with a single fraction on each side, we can use the cross multiplying technique that we have avoided talking about until now. This leads to . So:       Alternatively, we can use . The least common multiple of and is . Multiplying both sides by gives: After cancelling, we have:        In the last example, I admit that cross multiplying got us slightly faster to the equation than did. However, the difference in speed is very small, and cross multiplying only applies in a very limited setting. People, both students and instructors alike, will differ in their opinions about cross multiplying. If you wish to use this techinque, it's important to read the fine print . This would be like knowing the side effects of a medication: it's just good to be informed. In the case of cross multiplying, it cannot be used to simplify the multiplication of two fractions, and it only applies to solving an equation when there are exactly two fractions in an equation, one on each side of the equal sign, and each side consists only of a fraction. Furthermore, cross multiplying is just a special case of , which applies to any equation with fractions.   A word on writing  When we worked on solving in , one of our first steps was: We then distributed (which ended up removing the parentheses) then canceled. It would be strange to not yet distribute and write in cancellations like this: Work that looks like this gets dangerous, since we need to distribute first. Distributing creates two copies of on the left, and it's actually one of the copies from the distribution that cancels with the in the denominator of the first fraction. Let's think of the parentheses for what they really are: we can say that these grouping symbols are protecting the content inside, and preventing this kind of cancellation.     Summary     A technique that always works for solving equations with fractions is to first compute the least common multiple of all denominators, then multiply both sides by this least common multiple. (Insisting on common denominators is always more time consuming, and there are several types of errors that can occur when insisting on common denominators. When we discussed simplifying fractional expressions, we even saw back then that multiplying fractions does not require a common denominator.)    Cross multiplying is a special case of multiplying both sides by the least common multiple of the denominators. This technique only applies when each side of the equation has exactly one fraction and nothing else. This technique is what sometimes people erroneously think of when working simplifying the product of fractions, which is why some people avoid talking about cross multiplying.       Exercises      Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .    Solve .      "
},
{
  "id": "sec-equations-with-fractions-2",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  In this section, we learn how to:    Solve equations with fractions present.   "
},
{
  "id": "strategy-equations-with-fractions",
  "level": "2",
  "url": "sec-equations-with-fractions.html#strategy-equations-with-fractions",
  "type": "Strategy",
  "number": "1.4.1",
  "title": "Solving an equation with fractions.",
  "body": " Solving an equation with fractions      When does this strategy apply? This strategy applies in any equation we are asked to solve when there is one or more fractions.     How to apply the strategy    Inventory all of the fractions, whether they appear on the left side, the right side, or both. In particular, identify all of the denominators present.    Off to the side, compute the least common denominator (LCD) of all of the fractions. This phrase least common denominator is shorthand to mean the least common multiple of all of the denominators. (See APPENDIX for details on least common multiples.)    Take the least common multiple computed in the previous step and multiply both sides of the equation by this expression. (Because we have to multiply the entire left side and the entire right side, it may be necessary to use parentheses due to the Order of Operations.)    On each side, distribute if applicable.    In each term on each side, cancel where applicable. This always results in an equation which has no fractions.        "
},
{
  "id": "subsec-24375623987698-4",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-4",
  "type": "Example",
  "number": "1.4.2",
  "title": "",
  "body": "  Solve .    We are being asked to solve an equation with fractions, so applies. First, we inventory all of the fractions and identify the denominators, which are and and . The least common multiple of and and is .  We multiply both sides of the equation by : Note that on the left side of the equation, we used parentheses to ensure that the entire left side is multiplied by : the Order of Operations tells us that multiplication is performed before addition, so without parentheses, only the first fraction would be multiplied by . On the right side, we could have drawn parentheses around the entire right side, but because there is only one term on the right side, it was not necessary.  Now, distribute on the left side: Next, we cancel where applicable. In the first term (all content before the first plus sign), the in the numerator partially cancels with the in the denominator, or said differently, after cancelling factor of on top and bottom, we are left with a factor of on top. In the second term (all content between the plus sign and the equal sign), the in the numerator partially cancels with the in the denominator, leaving a factor of on top. On the right side, the in the numerator partially cancels with the in the denominator, leaving a factor of on top. Here's what it looks like with the cancellations written in: After performing the cancellations, we are left with: This is an equation with no fractions, so we can solve it using the strategies we have learned previously. Subtracting from both sides gives: Dividing both sides by gives:    "
},
{
  "id": "subsec-24375623987698-5",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-5",
  "type": "Note",
  "number": "1.4.3",
  "title": "",
  "body": " Before seeing more examples, let's discuss why this strategy works:   We multiplied by the appropriate quantity (in our last example ) which ensured that, after distributing where needed, all factors in the denominator would cancel. Using the least common multiple of the denominators as the number to multiply by on both sides ended up leading to this value appearing as a factor in the numerator of each term, allowing each copy to create all the necessary cancellations so that each denominator ends up being after cancellations occur. In other words, this ends up creating an equation without fractions.    For a fraction expression, there are not two sides, so to simplify adding fractions, a common denominator is needed. However, when you have an equation there are two sides. We can take avantage of the two sides by multiplying by the same thing on both sides! In the case of an expression, there aren't sides in the first place.    In an equation with fractions, multiplying both sides by the least common multilple of the denominators is the fastest way to get rid of fractions.     "
},
{
  "id": "subsec-24375623987698-6",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Solve the equation .    We are being asked to solve an equation with fractions, so applies. The least common multiple of the denominators and and is . So we multiply both sides of the equation by : Distributing on the left side gives: Now we cancel where applicable. After performing the cancellations, we are left with: This is an equation with no fractions. Subtracting from both sides gives: Dividing both sides by gives:    "
},
{
  "id": "strategy-equation-with-fraction-one-denominator-is-LCD",
  "level": "2",
  "url": "sec-equations-with-fractions.html#strategy-equation-with-fraction-one-denominator-is-LCD",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Solve the equation .    The least common multiple of the denominators and and is . So we multiply both sides of the equation by , though Order of Operations requires us to wrap the left side in parentheses: Distributing on the left side gives: Now we cancel where applicable. After performing the cancellations, we are left with: This is an equation with no fractions. Subtracting from both sides gives:    "
},
{
  "id": "first-example-ignoring-strategy-for-equations-with-fractions",
  "level": "2",
  "url": "sec-equations-with-fractions.html#first-example-ignoring-strategy-for-equations-with-fractions",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Solve     Here's what it looks like to solve by ignoring and doing everything with common denominators instead:    Multiply both sides by .        Here's what it looks like to solve by using . First, the least common multiple of the denominators and and is , so we make our first step to multiply both sides by . On the left side, distribute . After cancelling, we have:        "
},
{
  "id": "subsec-24375623987698-12",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-12",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Simplify the expression .          "
},
{
  "id": "subsec-24375623987698-14",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-14",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  Solve the equation .    An answer that ignores and uses common denominators instead looks like this:   Multiply both sides by .   To try to speed things up, we skipped writing several steps.    An answer that uses first computes that the least common multiple of and and is . To create a fair comparison with the previous answer, we start by writing the original equation: Now, if we were in the setting of a quiz or exam, this equation is probably already typed for you. For the multiplying by on both sides, you could actually handwrite the on both sides, surrounding the typed left side in parentheses. That is, by handwriting on top of the original equation, you could see this next equation without having to write it in full: In fact, the step that would appear after this involves distributing on the left, as we saw in previous examples using . Instead of writing the equation we might just stare at each term to figure out what results after cancellation. In other words, by looking at we could see that result of multiplying by is . Similarly, looking at the second term , multiplying by gives . For the term on the right side, multiplying by simplifies to . Thus, our first full equation to write could be this equation, which has no fractions:        "
},
{
  "id": "subsec-24375623987698-15",
  "level": "2",
  "url": "sec-equations-with-fractions.html#subsec-24375623987698-15",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  Solve .    An answer that ignores and uses common denominators looks like this:   Multiply both sides by .   To try to minimize the amount of writing, some steps were skipped. Even with skipped steps, there were three equations written after the original equation which had fractions, and fractions take longer to write than non-fractions. (One common point of confusion is why the left side of the second equation has instead of . The reason for this is that the numerator on the left is really before any distributing occured. Some people would prefer to distribute before combining fractions, in which case one numerator is in a hidden set of parentheses and the second numerator is also in a hidden set of parentheses.)    Using , the least common multiple of and and is . We could handwrite a on each side of the original typed equation, surrounding the left side in parentheses. Knowing that we will distribute on the left side anyway, we can really just think of what it means to multiply each term on each side by . Multiplying by means that a factor of remains in the numerator from the so we'd have . Multiplying by means that a factor of remains in the numerator from the so we'd have after the minus sign. Multiplying by means that a factor of remains in the numerator from the so we'd have . So, the first full equation we write doesn't have fractions:        "
},
{
  "id": "sec-equations-with-fractions-4-3",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-3",
  "type": "Warning",
  "number": "1.4.10",
  "title": "",
  "body": " When being asked to solve an equation with fractions, a common error occurs among those who insist on a common denominator approach. What usually happens is that there is adding and\/or subtracting on both sides to reach the goal of having one side of the equation becoming just zero. After achieving this, often the work shown will involve only looking at the busier side and simplifying the expression.  Let's illustrate exactly what this looks like with an example. When asked to solve , someone might first subtract , and their work in full might look like this:       Doesn't the end of this work seem a little strange? Normally, when we solve an equation, we expect the last line of work to look something like or perhaps . The end of the work didn't tell us what number should be. Instead, our final work was an expression. How did this happen? Often, when people see a zero on one side (as you see in the work above), people feel like zero is insignificant, and feel no need to keep copying this from one line to the next. This mistake does not happen when using , which gives another compelling reason (besides speed) to use that strategy. The mistake made earlier never seems to happen in an equation without fractions, but just to demonstrate and to intentionally try to create that error, if someone is asked to solve and someone shows as their steps   and declares that their final answer is , that seems strange.  "
},
{
  "id": "sec-equations-with-fractions-4-4",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-4",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Solve .    After multiplying both sides by , effectively, we can think about what cancellations are created by multiplying each term by . The new first term would be , the new second term would be , and the new third term would be . So, we have:        "
},
{
  "id": "sec-equations-with-fractions-4-6",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-6",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Solve .    The least common multiple of and and and is . Multiplying both sides by gives: Distributing on both sides gives: After cancelling, we have:       "
},
{
  "id": "expectation-variable-in-denominator",
  "level": "2",
  "url": "sec-equations-with-fractions.html#expectation-variable-in-denominator",
  "type": "Principle",
  "number": "1.4.13",
  "title": "Expectation: equations where the variable appears in the denominator.",
  "body": " Expectation: equations where the variable appears in the denominator  If the original equation had variables in the denominator, check to ensure there are no false solutions. (Any solution which causes division by zero to occur is a false solution .)  "
},
{
  "id": "example-equation-variable-denominator-first",
  "level": "2",
  "url": "sec-equations-with-fractions.html#example-equation-variable-denominator-first",
  "type": "Example",
  "number": "1.4.14",
  "title": "",
  "body": "  Solve     Because the equation we are asked to solve has fractions, we use . It will be easier to compute the least common multiple of the denominators if we factor the first denominator: . The least common multiple of and and is . So we will multiply both sides by . Just a friendly reminder: the original left side had two terms, so due to Order of Operations, to indicate that we are multiplying the entire left side, we wrapped the original left side in parentheses. Now we distribute . The language being used here can be confusing: I don't mean that we look at and expand this in any way, which is not only valid, this is a completely reasonable interpretation of distributing in this context. I mean that we place a copy of to the side of each of the original terms on the left. In the first term (which is everything before the minus sign), a factor of and a factor of cancel on top and bottom. In the second term, a factor of cancels. On the right side, a factor of cancels. We are left with        Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero.   The first denominator is . When we put in , we see .    When we put in into the second denominator , we see .    When we put in into the third denominator , we see .   We checked that does not cause any of the three denominators to simplify to zero. Therefore, is a solution.   "
},
{
  "id": "sec-equations-with-fractions-4-10",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-10",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "  Solve     The third denominator in factored form is . The least common multiple of and and is , or in other words, . We multiply both sides by , noting that we have to wrap the left side in parentheses: Now we distribute . By this, I'm not saying that we write . Instead, I mean that a copy of is written to the side of both fractinos on the left: After processing cancellations,  Now, there are multiple ways to proceed, so don't fret if your next steps look different from my next steps:     Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero.   When we put in into the first denominator , we see .    The second denominator is without needing to substitute for , since there was no in the second denominator. Note .    When we put in into the third denominator , we see .   We checked that does not cause any of the three denominators to become zero. Therefore, is a solution.   "
},
{
  "id": "sec-equations-with-fractions-4-11",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-11",
  "type": "Example",
  "number": "1.4.16",
  "title": "",
  "body": "  Solve     The third denominator in factored form is . The least common multiple of and and is . We multiply both sides by , noting that we have to wrap the left side in parentheses: Now we distribute . By this, I'm not saying that we write . Instead, I mean that a copy of is written to the side of both fractions on the left: After processing cancellations,    Since the original equation had the variable written in the denominator, applies, and we need to check that the solution that we got doesn't cause any denominator to be zero. When we put in into the first denominator , we see . Therefore, is a false solution, and the equation has no solution. (We don't even need to bother checking the other denominators: any time one or more denominators become zero, the solution is false.) It turns out that the equation has no solution.   "
},
{
  "id": "sec-equations-with-fractions-4-12",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-12",
  "type": "Note",
  "number": "1.4.17",
  "title": "",
  "body": " At this point, we have two different concepts of checking an equation. To be transparent with you, it's time for some clarification. Let's compare:   In , we gave an expectation, or really a requirement: after solving an equation where the variable appears in the denominator, we are required to check that the value(s) obtanied for do not cause any denominator to equal zero.    In , we mentioned that you can always see if the value(s) of make the left and right side of the original equation to be equal. This check is never required, but it is recommended. If we encounter a time when the left and right side do not end up being equal, we should scan our work for any errors. After all, we're all human!   The purpose of discussing this is to spell out that the two checks are checking for different things. In the first case, we're just checking to see that denominators are never zero, and this check is required whenever the variable appears in the denominator. In the second, we're checking for something else (do the left and right sides of the original equation equal each other), and only because getting different values for the left and right hints to us that there's an error in our work, and we should go over it. In fact, we only completed the first kind of check in , and we didn't do the second kind of check mentioned in . To illustrate that point more fully, we can check that putting in in for into both the left side and the right side shows that both sides equal or from a calculator, .  In summary, when the variable appears in the denominator, we must check that we never have zero in the denominator due to the value(s) of . In any equation, we can always check to see if the original left and right sides are equal for the sake of quality control.  "
},
{
  "id": "sec-equations-with-fractions-4-13",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-13",
  "type": "Warning",
  "number": "1.4.18",
  "title": "",
  "body": " In an equation with fractions where all fractions have the same denominator, we cannot say that we are deleting all the denominators.  "
},
{
  "id": "sec-equations-with-fractions-4-22",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-22",
  "type": "Example",
  "number": "1.4.19",
  "title": "",
  "body": "  When asked to solve , a well-meaning but incorrect thought is to say that since all three fractions have the same denominator, we can get rid of the denominators. This is incorrect, but let's follow through with this. This would lead to the equation , which eventually gets us to . Now we can follow up by checking the original equation like encourages us to do. Putting in for into the left side gives . Putting in for into the right side gives . Since , we know that is not a solution.   "
},
{
  "id": "sec-equations-with-fractions-4-23",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-23",
  "type": "Example",
  "number": "1.4.20",
  "title": "",
  "body": "  When asked to solve the equation a well-meaning but incorrect thought is to say that since all four fractions have the same denominator, we can get rid of the denominators. This is would lead to which gives us so and . Let's following . Putting in for into the left side gives . Putting in for into the right side gives . Because the left and right sides simplified to different values, is not a solution. The problem was created by the incorrect idea that we could get rid of the denominators.   "
},
{
  "id": "sec-equations-with-fractions-4-25",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-25",
  "type": "Note",
  "number": "1.4.21",
  "title": "",
  "body": " Up until now, we have avoided talking about cross multiplying. The reason for waiting for so long to talk about this is that there is a common setting in which learners try to apply cross multiplying where the techinque is not valid. Specifically, given the task of simplifying the multiplying of two fractions, learners sometimes try to cross multiply. Let's dig into an example:   When asked to simplify , a well-meaning but incorrect thought is to say that we can cross multiply. This is incorrect, but let's follow through with this. This would lead to the expression .    Before immediately dismissing this answer, let's talk about it. I believe that you have the background to follow the discussion we're about to make, and taking the time to actively read this discussion will be empowering for building your confidence in math, and moreover, can help you avoid mistakes in the future.  Say we take the same problem about simplifying the product of fractions, but just switch the order of the fractions: Then, applying cross multiplying would lead to . This is a different answer from the previous answer of . This seems strange, because we know the multiplication is commutative, either from our everyday experience with examples like , or from giving a geometric argument that the Commutative Property of Multiplication in is true in general. Because we got different results from cross multiplying, it's reasonable for us to be suspicious of our two answers, and the technique in general. In a moment, we will in fact see that neither nor is the correct final answer. Cross multiplying is not a valid technique for simplifying the product of two fractions.    To simplify , recall that tells us to multiply straight arcoss:    Cross multiplying is really just a special case of . Cross multiplying only applies when there are two fractions in an equation, one on each side of the equal sign. In this case, the least common multiple of the two denominators is simply the product of the two denominators. So, cross multiplying is just multiplying both sides by the product of the two denominators. This is exactly what tells us to do. So, cross multiplying is not a different technique, but rather a special case of . Because cross multiplying is so limited in its application, and because it is just a special case of , we have avoided talking about it. More importantly, we have avoided talking about it because of the common mistake of trying to apply it to simplify the multiplication of two fractions.  "
},
{
  "id": "sec-equations-with-fractions-4-26",
  "level": "2",
  "url": "sec-equations-with-fractions.html#sec-equations-with-fractions-4-26",
  "type": "Example",
  "number": "1.4.22",
  "title": "",
  "body": "  Solve the equation .    Because we have an equation with a single fraction on each side, we can use the cross multiplying technique that we have avoided talking about until now. This leads to . So:       Alternatively, we can use . The least common multiple of and is . Multiplying both sides by gives: After cancelling, we have:       "
},
{
  "id": "sec-exponents",
  "level": "1",
  "url": "sec-exponents.html",
  "type": "Section",
  "number": "1.5",
  "title": "Exponents",
  "body": " Exponents    In this section, we learn how to:    .  .  .     Applications  Exponents appear in a variety of applications. Here are some common scenarios where exponent rules are essential:   Compound Interest (Finance)  Scenario: You deposit money in a bank account that compounds interest.  Formula: or for continuous compounding.  Exponent Rule Used:  Example: If $1000 is invested at 5% per year for 3 years: . Using exponent rules: .  Example: Given , , and , simplify the value of . This is a finance problem, and the value answers the following question: if $1000 is deposited now in an account earning 4% interest compounded continuously, what will the account balance be in 5 years?    Population Growth \/ Decay (Biology and Chemistry)  Scenario: Populations, bacteria, or radioactive isotopes grow or decay exponentially.  Formula: or  Exponent Rules Used: ,  Example: A bacteria culture doubles every 3 hours: . After 6 hours: times the initial population.    Physics: Scaling Laws  Scenario: Volume, area, or mass often scale with powers of linear dimensions.  Exponent Rules Used: ,  Example: Volume of a cube with side : . If the side doubles: .    Computer Science: Algorithms and Complexity  Scenario: Exponential growth in possibilities.  Example: A 4-character password with 26 letters: total possibilities.  Exponent Rule: Multiply powers of the same base: .    Chemistry: Solution Dilution  Scenario: Concentration decreases by a fixed ratio with each dilution.  Formula: After n dilutions:  Exponent Rule: to simplify repeated dilutions.    Physics: Sound and Light Intensity  Scenario: Intensity decreases with the square of the distance.  Formula:  Exponent Rule:    Engineering: Material Strength  Scenario: Strength often scales as a power of thickness.  Formula:  Exponent Rules: or to compute effects of scaling dimensions.       Exponent formulas  Writing expressions involving exponents provides a powerful way to describe certain quantifiable phenomena in a variety of applications. We will need some exponent rules that help us rewrite expressions involving exponents. These rules will also help us simplify expressions involving exponents. Before introducing the rules, let's make sure we're on the same page about what an exponent means.   What does an exponent mean?   Exponentiation can be interpreted to mean repeated multiplication . An exponent is a way to represent repeated multiplication of a number by itself: means is multiplied by itself a total of times, where is a positive integer.    This principle only really makes sense when is a positive integer such as . For example, means , and means . We will later talk about situations where the exponent is zero, a negative number, or a fraction. In those stranger situations, doesn't apply.   Exponent rules, part 1                   Reading from left to right, the first formula says that when multiplying two expressions with the same base, we can add the exponents (in which case we write the base once). This is why the left side has where the same base is appears twice, while the right side has where the base appears only once. The first formula's requirement requiring that the two expressions being multiplied together have the same base is analogous to the requirement that two fractions being added or subtracted must have the same denominator. Reading from right to left, an expression of the form can be rewritten as .  Reading from left to right, the second formula says that when taking an exponential expression such as and raise it to a power, we can multiply the exponents. Read from right to left, an expression of the form can be rewritten as , meaning that when we see an expression with an exponent that is a product, we can rewrite it as an expression where the base is raised to one of the factors, and then the entire expression wrapped in parentheses is raised to the other factor.   Simplify .   Using the exponent rule , we have .     Simplify .   Using the exponent rule , we have .       Simplify .      . First, we used the exponent rule to rewrite as . Then, we used the exponent rule to rewrite each factor and also to rewrite .      Simplify .    Using the exponent rule , we have . Thus, .  Next, using the exponent rule , we have .  The third term and fourth term are already simplified: and .  Finally, using the exponent rule again, we have .  Now we can combine like terms: .    An example like the one we just did is meant to provide a bit of caution. After applying exponent rules, we get to the expression . It is tempting to say that the final expression is . Combine only what we can (which is just up to like terms).   Simplify .   Using the exponent rule , we have .    In a simpler example, namely , we wrote , though many prefer to skip the middle step and directly go from to . This is fine to do when we can do the simplification in our heads, but in the example we just did, it might be harder to see how the sum of the exponents simplifies. That's why even in the easier problem, we wrote out the step. In a situation like this that's more complicated, it is practical to write the addition (without having simplified yet), and then in the next step(s), we can zoom in focusing only in the exponent area, and simplify the exponent from to to . Even if you see it in this example without writing all the steps, there's definitely eventually going to be a challenging enough example where we can't just picture it all. Being willing to write that two things are added together without immediately simplifying it is a power tool to have.   Simplify .        We showed two standard formulas in how they usually look: and . However, these two are often confused for each other, and it's easier to see why people confuse these two formulas when we see all operations written in, with none hidden:            These are actually the same formulas, and I admit they look bulkier with all the operations explicitly shown. But this helps us see why there is confusion! Notice that the formula that has multiplication on the left has addition on the right, while the second formula has multiplication the right. So, it is incorrect to turn into which would eventually be , but I can understand why people would make that error! (Instead, the correct simplification is .)  This leads us to ask a more general question: how are we supposed to know what to do when we see an expression of the form versus what we are supposed to do when we see an expression of the form ? The short answer (just memorize the formulas) is really unsatisfying. It's easy to cross the wires here. Fortunately, there is a tool that we have that can help us remember how each of these formulas end, and more importantly, if we keep practicing the process that we're about to suggest, it actually provides a reason why these formulas are true in the first place! That's a win-win!   How to keep track of exponent formulas, part 1   For the two formulas we presented in , the left sides said and . How can know what is on the right side of each formula? What can we do when we've forgotten what's on the right side of each formula? And finally, how can we know why the right sides that get presented are actually legitimate in the first place? The answer to all of these questions is to expand the expression after selecting your own constants for the exponents (but not for the base), and expand based on .      Suppose we recall that there is a formula that starts with , but we can't remember what is on the right side of the formula. Say we also recall there is a formula that starts with , but we can't remember what is on the right side of that formula either. Which of these two expressions involves adding the exponents, and which involes multiplying the exponents? That is, which has a power of and which has a power of ? To figure this out, we can pick our own values for and , and then expand each expression based on . While we can pick and to be as large as we want, let's pick small values to make the expansion easier. That said, we can't pick and to be too small: for example if we picked both and , both and would be equal to , which wouldn't help us distinguish between the two formulas.  Let's pick and , which is about as minimal as we can pick. Based on what exponents mean in :   We can expand as .    We can expand as .   Noting that and , we see that involves adding the exponents, while involves multiplying the exponents.     Note that we never picked a specific value for . It's not that we can't. We can! But, if we did (say we picked ), then we'd be looking at an expression like , and with constants in all places, it's too tempting to work on simplyfing arithmetic, which is both time-consuming, and hides what it is we're trying to get out of this. The point is that we just want to count how many times the base appears as a factor, and record that number of appearances as an exponent.     Say we need to simplify , but forgot how the formulas go. Go through a process to recover the formula, then apply it it to simplify this expression.    Suppose we forgot how the formulas go. The shape of what we have is multiplying to expressions that have the same base: this is addressed by . The question becomes whether we add or multiply the exponents. To figure this out, we can work on the side where we temporarily pick our own values for and . Let's say we pick and , which are relatively small numbers. Then, based on , we can expand as and counting how many times the base is a factor, this is . So, in the case of , we add the exponents, which is why the full formula (which we might forget, but we just recovered through this process) is .  Now we can apply this formula: . Because it is challenging to simplify the addition of these fractions right away, we just first wrote the addition without simplifying it by writing , though we still needed to write as the base in order to ensure that the equal sign truly means equal. In the next step, we focused on simplifying the exponent area (by mentally zooming in) and found a common denominator.    The natural question arises: it's easy to remember what to do to get these formulas when the author or teacher hints to me what to do, but how am I supposed to recall? In the end, the two formulas we introduced (and several more!) all can be recovered using the same tool: select values for exponents (but not for the base), and expand based on asking yourself what exponents mean ( ), then count the number of times the base appears. This works for the two formulas we introduced, and it also works for several more formulas that we will introduce next. Before showing the new formulas, it would be good to put this useful tool into a box!    Based on what exponents mean in    Select values for exponents. (To avoid the temptation to do unnecessary arithmetic, do not select a value for base(s).)  Expand based on what exponents mean.    Count the number of times the base appears, and rewrite based on what exponents mean.       Let's introduce a couple new formulas where the tool in applies. Let's then demonstrate full examples of how to practice this tool, then do full examples of computations based on the new formulas.   Exponent rules, part 2                   Simplify .    Using the exponent rule , we have . Please note that inside the first parentheses where the text is , we must read this using the Order of Operations, and recognize that the exponent applies only to , and not to . Thus, . Next, using the exponent rule again, we have . Thus, . Now, using the exponent rule , we have . Therefore, .      (except possibly if )        Simplify .    Simplify .    Simplify .    Simplify .    What does a radical mean?    asks for the value that fills in the blank: . If two numbers can fill in the blank (positive and negative), then by definition, the positive number is the answer.     Find .    Find .      If the small number outside of the radical is missing, it is a hidden 2.     should be said “ n-th root of a ”.    or can be said “2nd root of a” or “square root of a”.    is spoken “3rd root of a” but not “3 square root of a”.    is spoken “7th root of a” but not “7 square root of a”.          Simplify .    Simplify .    Simplify .    (when this makes sense)    .    Write with only one radical.    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .    Simplify .   The curse of distribution: In general, . For example, . In reality,   Exponents do not distribute over addition or subtraction. Since radicals are really exponents, radicals also do not distribute over addition and subtraction.      False  False  False  True  False    If , then .    text  text     Statement text    Solution text       Text      Text    text     Applications Revisited  Let's revisit the applications we introduced at the beginning of this section.    Text    Answer      Summary     Summary point.    Summary point.    Summary point.       Exercises        Text.  Subpart  Subpart  Subpart      Text.  Subpart  Subpart  Subpart      Text.  Subpart  Subpart  Subpart        "
},
{
  "id": "sec-exponents-2",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  In this section, we learn how to:    .  .  .   "
},
{
  "id": "principle-what-exponent-means",
  "level": "2",
  "url": "sec-exponents.html#principle-what-exponent-means",
  "type": "Principle",
  "number": "1.5.1",
  "title": "What does an exponent mean?",
  "body": " What does an exponent mean?   Exponentiation can be interpreted to mean repeated multiplication . An exponent is a way to represent repeated multiplication of a number by itself: means is multiplied by itself a total of times, where is a positive integer.   "
},
{
  "id": "principle-exponent-rules-1",
  "level": "2",
  "url": "sec-exponents.html#principle-exponent-rules-1",
  "type": "Principle",
  "number": "1.5.2",
  "title": "Exponent rules, part 1.",
  "body": " Exponent rules, part 1                  "
},
{
  "id": "sec-exponents-4-8",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-8",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " Simplify .   Using the exponent rule , we have .   "
},
{
  "id": "exponential-example-1",
  "level": "2",
  "url": "sec-exponents.html#exponential-example-1",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": " Simplify .   Using the exponent rule , we have .   "
},
{
  "id": "sec-exponents-4-10",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-10",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "   Simplify .      . First, we used the exponent rule to rewrite as . Then, we used the exponent rule to rewrite each factor and also to rewrite .   "
},
{
  "id": "sec-exponents-4-11",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-11",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  Simplify .    Using the exponent rule , we have . Thus, .  Next, using the exponent rule , we have .  The third term and fourth term are already simplified: and .  Finally, using the exponent rule again, we have .  Now we can combine like terms: .   "
},
{
  "id": "sec-exponents-4-13",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-13",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": " Simplify .   Using the exponent rule , we have .   "
},
{
  "id": "sec-exponents-4-15",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-15",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": " Simplify .       "
},
{
  "id": "principle-tool-for-exponents",
  "level": "2",
  "url": "sec-exponents.html#principle-tool-for-exponents",
  "type": "Principle",
  "number": "1.5.9",
  "title": "How to keep track of exponent formulas, part 1.",
  "body": " How to keep track of exponent formulas, part 1   For the two formulas we presented in , the left sides said and . How can know what is on the right side of each formula? What can we do when we've forgotten what's on the right side of each formula? And finally, how can we know why the right sides that get presented are actually legitimate in the first place? The answer to all of these questions is to expand the expression after selecting your own constants for the exponents (but not for the base), and expand based on .   "
},
{
  "id": "sec-exponents-4-19",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-19",
  "type": "Example",
  "number": "1.5.10",
  "title": "",
  "body": "  Suppose we recall that there is a formula that starts with , but we can't remember what is on the right side of the formula. Say we also recall there is a formula that starts with , but we can't remember what is on the right side of that formula either. Which of these two expressions involves adding the exponents, and which involes multiplying the exponents? That is, which has a power of and which has a power of ? To figure this out, we can pick our own values for and , and then expand each expression based on . While we can pick and to be as large as we want, let's pick small values to make the expansion easier. That said, we can't pick and to be too small: for example if we picked both and , both and would be equal to , which wouldn't help us distinguish between the two formulas.  Let's pick and , which is about as minimal as we can pick. Based on what exponents mean in :   We can expand as .    We can expand as .   Noting that and , we see that involves adding the exponents, while involves multiplying the exponents.   "
},
{
  "id": "sec-exponents-4-20",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-20",
  "type": "Note",
  "number": "1.5.11",
  "title": "",
  "body": " Note that we never picked a specific value for . It's not that we can't. We can! But, if we did (say we picked ), then we'd be looking at an expression like , and with constants in all places, it's too tempting to work on simplyfing arithmetic, which is both time-consuming, and hides what it is we're trying to get out of this. The point is that we just want to count how many times the base appears as a factor, and record that number of appearances as an exponent.  "
},
{
  "id": "sec-exponents-4-21",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-21",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Say we need to simplify , but forgot how the formulas go. Go through a process to recover the formula, then apply it it to simplify this expression.    Suppose we forgot how the formulas go. The shape of what we have is multiplying to expressions that have the same base: this is addressed by . The question becomes whether we add or multiply the exponents. To figure this out, we can work on the side where we temporarily pick our own values for and . Let's say we pick and , which are relatively small numbers. Then, based on , we can expand as and counting how many times the base is a factor, this is . So, in the case of , we add the exponents, which is why the full formula (which we might forget, but we just recovered through this process) is .  Now we can apply this formula: . Because it is challenging to simplify the addition of these fractions right away, we just first wrote the addition without simplifying it by writing , though we still needed to write as the base in order to ensure that the equal sign truly means equal. In the next step, we focused on simplifying the exponent area (by mentally zooming in) and found a common denominator.   "
},
{
  "id": "principle-tool-for-exponents-2",
  "level": "2",
  "url": "sec-exponents.html#principle-tool-for-exponents-2",
  "type": "Principle",
  "number": "1.5.13",
  "title": "",
  "body": "  Based on what exponents mean in    Select values for exponents. (To avoid the temptation to do unnecessary arithmetic, do not select a value for base(s).)  Expand based on what exponents mean.    Count the number of times the base appears, and rewrite based on what exponents mean.      "
},
{
  "id": "principle-exponent-rules-2",
  "level": "2",
  "url": "sec-exponents.html#principle-exponent-rules-2",
  "type": "Principle",
  "number": "1.5.14",
  "title": "Exponent rules, part 2.",
  "body": " Exponent rules, part 2                "
},
{
  "id": "sec-exponents-4-26",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-26",
  "type": "Example",
  "number": "1.5.15",
  "title": "",
  "body": "  Simplify .    Using the exponent rule , we have . Please note that inside the first parentheses where the text is , we must read this using the Order of Operations, and recognize that the exponent applies only to , and not to . Thus, . Next, using the exponent rule again, we have . Thus, . Now, using the exponent rule , we have . Therefore, .   "
},
{
  "id": "sec-exponents-4-28",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-28",
  "type": "Example",
  "number": "1.5.16",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-29",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-29",
  "type": "Example",
  "number": "1.5.17",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-30",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-30",
  "type": "Example",
  "number": "1.5.18",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-31",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-31",
  "type": "Example",
  "number": "1.5.19",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-33",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-33",
  "type": "Example",
  "number": "1.5.20",
  "title": "",
  "body": " Find .  "
},
{
  "id": "sec-exponents-4-34",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-34",
  "type": "Example",
  "number": "1.5.21",
  "title": "",
  "body": " Find .  "
},
{
  "id": "sec-exponents-4-42",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-42",
  "type": "Example",
  "number": "1.5.22",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-43",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-43",
  "type": "Example",
  "number": "1.5.23",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-44",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-44",
  "type": "Example",
  "number": "1.5.24",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-46",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-46",
  "type": "Warning",
  "number": "1.5.25",
  "title": "",
  "body": " .  "
},
{
  "id": "sec-exponents-4-47",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-47",
  "type": "Example",
  "number": "1.5.26",
  "title": "",
  "body": " Write with only one radical.  "
},
{
  "id": "sec-exponents-4-48",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-48",
  "type": "Example",
  "number": "1.5.27",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-49",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-49",
  "type": "Example",
  "number": "1.5.28",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-50",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-50",
  "type": "Example",
  "number": "1.5.29",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-51",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-51",
  "type": "Example",
  "number": "1.5.30",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-52",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-52",
  "type": "Example",
  "number": "1.5.31",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-53",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-53",
  "type": "Example",
  "number": "1.5.32",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-54",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-54",
  "type": "Example",
  "number": "1.5.33",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-55",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-55",
  "type": "Example",
  "number": "1.5.34",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-56",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-56",
  "type": "Example",
  "number": "1.5.35",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-57",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-57",
  "type": "Example",
  "number": "1.5.36",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-58",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-58",
  "type": "Example",
  "number": "1.5.37",
  "title": "",
  "body": " Simplify .  "
},
{
  "id": "sec-exponents-4-62",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-62",
  "type": "Warning",
  "number": "1.5.38",
  "title": "",
  "body": "  "
},
{
  "id": "sec-exponents-4-66",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-66",
  "type": "Example",
  "number": "1.5.39",
  "title": "",
  "body": "  Statement text    Solution text   "
},
{
  "id": "sec-exponents-4-67",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-67",
  "type": "Try it",
  "number": "1.5.40",
  "title": "",
  "body": "  Text    "
},
{
  "id": "sec-exponents-4-68",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-68",
  "type": "Note",
  "number": "1.5.41",
  "title": "",
  "body": " Text  "
},
{
  "id": "sec-exponents-4-69",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-4-69",
  "type": "Warning",
  "number": "1.5.42",
  "title": "",
  "body": " text  "
},
{
  "id": "sec-exponents-5-3",
  "level": "2",
  "url": "sec-exponents.html#sec-exponents-5-3",
  "type": "Example",
  "number": "1.5.43",
  "title": "",
  "body": "  Text    Answer   "
},
{
  "id": "sec-radicals",
  "level": "1",
  "url": "sec-radicals.html",
  "type": "Section",
  "number": "1.6",
  "title": "Radicals",
  "body": " Radicals    In this section, we learn how to:    .  .  .     Applications  Intro:   Text    Text    Text       subsection title  > text  text     Statement text    Solution text       Text      Text    Title  Text    text     Applications Revisited  Let's revisit the applications we introduced at the beginning of this section.    Text    Answer      Summary     Summary point.    Summary point.    Summary point.       Exercises        Text.  Subpart  Subpart  Subpart      Text.  Subpart  Subpart  Subpart      Text.  Subpart  Subpart  Subpart        "
},
{
  "id": "sec-radicals-2",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "  In this section, we learn how to:    .  .  .   "
},
{
  "id": "sec-radicals-4-3",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-4-3",
  "type": "Example",
  "number": "1.6.1",
  "title": "",
  "body": "  Statement text    Solution text   "
},
{
  "id": "sec-radicals-4-4",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-4-4",
  "type": "Try it",
  "number": "1.6.2",
  "title": "",
  "body": "  Text    "
},
{
  "id": "sec-radicals-4-5",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-4-5",
  "type": "Note",
  "number": "1.6.3",
  "title": "",
  "body": " Text  "
},
{
  "id": "sec-radicals-4-7",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-4-7",
  "type": "Warning",
  "number": "1.6.4",
  "title": "",
  "body": " text  "
},
{
  "id": "sec-radicals-5-3",
  "level": "2",
  "url": "sec-radicals.html#sec-radicals-5-3",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": "  Text    Answer   "
},
{
  "id": "sec-factoring-and-expansion",
  "level": "1",
  "url": "sec-factoring-and-expansion.html",
  "type": "Section",
  "number": "1.7",
  "title": "Factoring and Expansion",
  "body": " Factoring and Expansion  Text of section. Systematize the factoring of quadratic trinomials. Add warning that we shouldn't set an expression equal to zero and create an equation to solve: gently preview what the student is confusing this with  "
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
  "body": " Solving Equations Revisited  Text of section. More applications, more challenging (up to linear) equations, and fractional equations (checking denominator). Applications where the variable appears more than once: transfer bonuses, mixtures, distance, percentages Literal equations (multiple variables) Systems of equations Justifying cross-multiplication  A flight requires 12,500 miles, but your credit card offers a 10% bonus when transferring. How many miles should you transfer to meet the requirement while taking advantage of the transfer bonus?  "
},
{
  "id": "sec-sample-code",
  "level": "1",
  "url": "sec-sample-code.html",
  "type": "Section",
  "number": "1.10",
  "title": "Sample code",
  "body": " Sample code    After completing this section, you should be able to do the following.     Explain the conditions under which an implication is true.    Identify statements as equivalent to a given implication or its converse.    Explain the relationship between the truth values of an implication, its converse, and its contrapositive.      Section Preview    knights and knaves  puzzle knights and knaves  While walking through a fictional forest, you encounter three trolls guarding a bridge. Each is either a knight , who always tells the truth, or a knave , who always lies. The trolls will not let you pass until you correctly identify each as either a knight or a knave. Each troll makes a single statement:   Troll 1: If I am a knave, then there are exactly two knights here.  Troll 2: Troll 1 is lying.  Troll 3: Either we are all knaves, or at least one of us is a knight.   Which troll is which? self reference reference, self  reference, self self reference       Spend a few minutes thinking about the Investigate problem above. What could you conclude if you knew Troll 1 really was a knave (i.e., their statement was false)? Share your initial thoughts on this.        Argument  argument  premise  conclusion  valid  sound  proof   An argument  argument is a sequence of statements, the last of which is called the conclusion  conclusion and the rest of which are called premises . premises   An argument is said to be valid  valid provided the conclusion must be true whenever the premises are all true. An argument is invalid if it is not valid; that is, all the premises can be true, and the conclusion could still be false.  An argument is sound provided it is valid and all the premises are true. A proof of a statement is a sound argument whose conclusion is the statement.     Our definitions of argument , valid argument , and sound argument are the same ones used in philosophy, the other primary academic discipline concerned with logic and reasoning.    cookie   Consider the following two arguments:     If Edith eats her vegetables, then she can have a cookie.     Edith eats her vegetables.     Edith gets a cookie.       Florence must eat her vegetables to get a cookie.     Florence eats her vegetables.     Florence gets a cookie.    (The symbol    therefore  means therefore )  Are these arguments valid?    Do you agree that the first argument is valid but the second argument is not? We will soon develop a better understanding of the logic involved in this analysis, but if your intuition agrees with this assessment, then you are in good shape.  Notice the two arguments look almost identical. Edith and Florence both eat their vegetables. In both cases, there is a connection between the eating of vegetables and cookies. Yet we claim that it is valid to conclude that Edith gets a cookie, but not that Florence does. The difference must be in the connection between eating vegetables and getting cookies. We need to be skilled at reading and comprehending these sentences. Do the two sentences mean the same thing?  Unfortunately, in everyday language we are often sloppy, and you might be tempted to say they are equivalent. But notice that just because Florence must eat her vegetables, we have not claimed that doing so would be enough (she might also need to clean her room, for example). In everyday (non-mathematical) practice, you might be tempted to say this other direction is implied. In mathematics, we never get that luxury.     The arguments in the example above illustrate another important point: Even if you don't care about the advancement of human knowledge in the field of mathematics, becoming skilled at analyzing arguments is useful. And even if you don't want to give your grandmother a cookie. If you are using mathematics to solve problems in some other discipline, it is still necessary to demonstrate that your solution is correct. You better have a good argument that it is!      Test    To show why this warning is here, in   "
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
  "id": "sampleref",
  "level": "2",
  "url": "sec-sample-code.html#sampleref",
  "type": "Try it",
  "number": "1.10.5",
  "title": "",
  "body": "  Test   "
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
