import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, BrainCircuit, CalendarDays, CheckCircle2, ChevronRight, CircleHelp, Code2, FileText, GraduationCap, LayoutDashboard, Menu, Network, Plus, Search, Send, ShieldCheck, Sparkles, Target, X } from 'lucide-react';
import './styles.css';

const subjects = [
  { name: 'Computer Programming', code: '301', icon: Code2, tag: 'CSE', topics: ['Unit 1: Computational Thinking, Variables & Data Representation', 'Unit 2: Operators & Input-Output', 'Unit 3: Conditional & Looping Constructs', 'Unit 4: Arrays & Pointer', 'Unit 5: Functions & Recursion'] },
  { name: 'Scripting Languages', code: '302', icon: Code2, tag: 'CSE', topics: ['Unit 1: Introduction, Variables & Data Types', 'Unit 2: Advanced Data Types', 'Unit 3: Control Structures', 'Unit 4: Functions, Modules & Packages', 'Unit 5: File I/O, Text Processing & Regular Expressions'] },
  { name: 'Data Structures', code: '303', icon: Network, tag: 'CSE', topics: ['Unit 1: Basics of Data Structure', 'Unit 2: Searching & Sorting Techniques', 'Unit 3: Linear Data Structures', 'Unit 4: Linked List', 'Unit 5: Non-Linear Data Structure'] },
  { name: 'Computer System Organisation', code: '304', icon: LayoutDashboard, tag: 'CSE', topics: ['Unit 1: Basic Computer Structure', 'Unit 2: Instruction Set Architecture', 'Unit 3: Control Unit Organization', 'Unit 4: Memory & I/O Organization', 'Unit 5: 8085 Case Study & Assembly Language Programming'] },
  { name: 'Algorithms', code: '305', icon: Target, tag: 'CSE', topics: ['Unit 1: Fundamentals of Algorithms', 'Unit 2: Sorting', 'Unit 3: Searching', 'Unit 4: Graphs', 'Unit 5: Strings & Data Compression'] },
  { name: 'Summer Internship - I', code: '—', icon: CalendarDays, tag: 'Internship', topics: ['3–4 Week Internship', 'Industry / Government / Certified Agency', 'Work & Practical Learning', 'Report Preparation', 'Viva-Voce & Presentation'] },
  { name: 'Professional Development', code: '—', icon: GraduationCap, tag: 'Career', topics: ['Unit I: Professional & Social Ethics', 'Unit II: Lifelong & Self-directed Learning', 'Unit III: Career Planning', 'Unit IV: Industrial Visits', 'Unit V: CV, Resume, Bio-data & Interview', 'Unit VI: Group Discussion'] },
];

const notes = [
  { subject:'Computer Programming', code:'301', unit:'Unit 1', title:'Computational Thinking, Variables & Data Representation', desc:'Complete Unit 1 notes with problem solving, computational thinking, algorithms, flowcharts, variables, constants, data types and memory representation.', type:'Detailed Notes',
    content:'Unit 1 — Introduction to Computational Thinking & Variables and Data Representation\n\n1. PROBLEM SOLVING\nProblem solving means understanding a problem, designing a logical solution, implementing it and checking whether the solution works correctly. In programming, a problem is converted into a sequence of clear steps that a computer can execute.\n\nBasic steps in problem solving:\n1) Understand and define the problem.\n2) Identify required inputs and expected outputs.\n3) Break the problem into smaller parts.\n4) Design an algorithm and/or flowchart.\n5) Implement the solution in a programming language such as C.\n6) Test the program with suitable inputs.\n7) Find and correct errors and refine the solution.\n\n2. COMPUTATIONAL THINKING\nComputational thinking is a structured way of approaching problems so that a solution can be expressed as logical, executable steps.\n\nImportant components:\n• Decomposition — break a complex problem into smaller manageable parts.\n• Pattern recognition — identify similarities or repeated structures.\n• Abstraction — focus on important information and ignore unnecessary detail.\n• Algorithmic thinking — develop a clear step-by-step procedure.\n\n3. ALGORITHMS\nAn algorithm is a finite, ordered sequence of clear steps used to solve a problem or perform a task. A good algorithm should have clear steps, required inputs, a defined output and a finite termination.\n\nExample: Algorithm to add two numbers\nStep 1: Start\nStep 2: Read A and B\nStep 3: Calculate SUM = A + B\nStep 4: Display SUM\nStep 5: Stop\n\n4. FLOWCHART\nA flowchart is a graphical representation of an algorithm. It uses standard symbols connected by arrows to show the sequence of operations and decisions.\n\nCommon symbols:\n• Oval — Start/End\n• Rectangle — Process or calculation\n• Parallelogram — Input/Output\n• Diamond — Decision/condition\n• Arrow — Direction of flow\n\nFor the addition example, the flow is:\nStart → Input A, B → SUM = A + B → Display SUM → Stop\n\n5. VARIABLES\nA variable is a named storage location whose value can change during program execution. In C, a variable is associated with a data type that determines how its stored value is interpreted.\n\nExample:\nint marks;\nmarks = 75;\n\nHere, marks is a variable and 75 is its current value.\n\n6. CONSTANTS\nA constant is a value that is intended not to change during program execution. Constants can be represented using literal values or symbolic constants.\n\nExample:\nconst int DAYS = 7;\n\n7. DATA TYPES IN C\nThe syllabus focuses on variables and data representation. Common C data types include:\n• int — integer values\n• char — a character value\n• float — single-precision floating-point value\n• double — double-precision floating-point value\n• void — represents absence of a value/type in relevant contexts\n\nThe data type affects how the compiler interprets the value and how much memory is required; exact storage size can depend on the implementation.\n\n8. MEMORY REPRESENTATION OF VARIABLES\nComputers store data in binary form using bits (0 or 1). A group of 8 bits is called a byte. When a variable is declared, memory is reserved for storing its value according to its data type. The variable name is used in the program to refer to that stored value.\n\nConceptually:\nVariable name → memory location → stored binary value\n\nA variable therefore has a value and a memory location (address). The data type tells the program how the stored bit pattern should be interpreted.\n\n9. QUICK EXAM REVISION\n• Problem solving = define → analyze → design → implement → test → improve.\n• Computational thinking = systematic problem-solving approach.\n• Algorithm = step-by-step procedure.\n• Flowchart = graphical representation of an algorithm.\n• Variable = named storage whose value may change.\n• Constant = value intended not to change.\n• Data type determines the kind of value and its representation/interpretation.\n• Computer memory stores information in binary form.\n\nIMPORTANT EXAM QUESTIONS\n1. Define problem solving and list its steps.\n2. What is computational thinking? Explain its components.\n3. Define algorithm and write an algorithm for adding two numbers.\n4. What is a flowchart? Explain its common symbols.\n5. Define variable and constant with examples in C.\n6. Explain common C data types.\n7. Explain memory representation of variables.\n\nSyllabus alignment: This note covers the Unit 1 topics listed in the uploaded Semester III CSE syllabus: problem-solving and computational thinking, steps/components, flowcharts and algorithms, variables, constants, data types and memory representation.' },
  { subject:'Computer Programming', code:'301', unit:'Unit 2', title:'Operators and Input-Output', desc:'Detailed Unit 2 notes covering arithmetic, relational, logical and bitwise operators, precedence, associativity, input-output, formatted output and basic file I/O.', type:'Detailed Notes',
    content:'Unit 2 — Operators and Input-Output\n\n1. OPERATORS\nAn operator is a symbol that tells the C compiler to perform an operation on one or more values or variables.\n\n2. ARITHMETIC OPERATORS\nArithmetic operators are used for mathematical calculations.\n• +  Addition\n• -  Subtraction\n• *  Multiplication\n• /  Division\n• %  Remainder (modulus)\n\nExample:\nint a = 10, b = 3;\nint sum = a + b;\nint rem = a % b;\n\nImportant: For integer operands, integer division discards the fractional part. For example, 10 / 3 gives 3.\n\n3. RELATIONAL OPERATORS\nRelational operators compare two values. The result is used as a true/false condition.\n• <  less than\n• >  greater than\n• <= less than or equal to\n• >= greater than or equal to\n• == equal to\n• != not equal to\n\nExample:\nif (marks >= 40) {\n    printf("Pass");\n}\n\nDo not confuse = (assignment) with == (equality comparison).\n\n4. LOGICAL OPERATORS\nLogical operators combine or negate conditions.\n• &&  logical AND — true when both conditions are true\n• ||  logical OR — true when at least one condition is true\n• !   logical NOT — reverses the truth value\n\nExample:\nif (age >= 18 && citizen == 1) {\n    printf("Eligible");\n}\n\n5. BITWISE OPERATORS\nBitwise operators work on the individual bits of integer values.\n• &  bitwise AND\n• |  bitwise OR\n• ^  bitwise XOR\n• ~  bitwise NOT\n• << left shift\n• >> right shift\n\nExample:\nint a = 5;\nint b = 3;\nint c = a & b;\n\nBinary idea:\n5 = 0101\n3 = 0011\nAND → 0001 = 1\n\nBitwise operators are different from logical && and || operators.\n\n6. OPERATOR PRECEDENCE\nOperator precedence decides which operator is evaluated first in an expression when parentheses are not used. Multiplication, division and modulus have higher precedence than addition and subtraction. Parentheses can be used to make the intended order explicit.\n\nExample:\nint x = 2 + 3 * 4;\n\nThe multiplication is evaluated before addition, so x becomes 14.\n\nUsing parentheses:\nint y = (2 + 3) * 4;\n\nHere, y becomes 20.\n\n7. ASSOCIATIVITY\nWhen operators of the same precedence occur together, associativity determines the direction in which they are evaluated. Many arithmetic operators such as +, -, *, / and % are evaluated left-to-right when grouped at the same precedence level.\n\nExample:\nint x = 20 / 5 * 2;\n\nThe / and * operators have the same precedence and are evaluated left-to-right, so x becomes 8.\n\nUse parentheses whenever the intended order is important or may be unclear.\n\n8. INPUT AND OUTPUT FUNCTIONS\nThe standard C input/output functions are commonly provided by stdio.h.\n\nprintf() — displays formatted output.\nscanf() — reads formatted input.\n\nExample:\n#include <stdio.h>\nint main() {\n    int age;\n    printf("Enter age: ");\n    scanf("%d", &age);\n    printf("Age = %d", age);\n    return 0;\n}\n\nIn scanf(), the address operator & is commonly used with ordinary variables so the function can store the entered value in the variable.\n\n9. FORMATTED OUTPUT\nprintf() uses format specifiers to display values of different types.\n• %d — integer\n• %c — character\n• %f — floating-point value\n• %s — string\n\nExample:\nprintf("Marks = %d\\n", marks);\n\nThe \\n escape sequence moves the cursor to a new line.\n\n10. BASIC FILE I/O\nFile I/O allows a C program to store data in and retrieve data from files. The syllabus includes file modes and the basic open, read, write and close operations.\n\nCommon steps:\n1) Declare a file pointer.\n2) Open the file using fopen().\n3) Perform the required read/write operation.\n4) Close the file using fclose().\n\nExample:\nFILE *fp;\nfp = fopen("notes.txt", "w");\nif (fp != NULL) {\n    fprintf(fp, "Computer Programming Unit 2");\n    fclose(fp);\n}\n\nCommon file modes:\n• "r" — open for reading\n• "w" — open for writing; an existing file may be replaced\n• "a" — open for appending\n\nAlways check whether fopen() succeeded before using the file pointer, and close an opened file when finished.\n\n11. QUICK EXAM REVISION\n• Arithmetic = mathematical calculations.\n• Relational = comparison of values.\n• Logical = combination/negation of conditions.\n• Bitwise = operations on individual bits.\n• Precedence = priority of operators.\n• Associativity = evaluation direction when precedence is the same.\n• printf() = formatted output.\n• scanf() = formatted input.\n• fopen() = open a file.\n• fclose() = close a file.\n\nIMPORTANT EXAM QUESTIONS\n1. Explain arithmetic, relational, logical and bitwise operators with examples.\n2. What is operator precedence? Give an example.\n3. What is associativity? Explain with an expression.\n4. Differentiate = and == in C.\n5. Explain printf() and scanf() with suitable examples.\n6. What is formatted output?\n7. Explain basic file I/O and common file modes.\n8. Write the basic steps for opening, using and closing a file in C.\n\nPRACTICAL PRACTICE\n• Write programs using different operators.\n• Evaluate expressions while applying precedence and associativity.\n• Take input using scanf() and display formatted output using printf().\n• Create a file, write data to it and close the file.\n\nSyllabus alignment: This note covers the Unit 2 topics listed in the uploaded Semester III CSE syllabus: arithmetic, relational, logical and bitwise operators; precedence and associativity; input/output functions; formatted output; and basic file I/O with file modes and open/read/write/close operations.' },
  { subject:'Computer Programming', code:'301', unit:'Unit 3', title:'Conditional and Looping Constructs', desc:'Detailed Unit 3 notes covering if, if-else, nested if, conditional operator, for/while/do-while, switch-case, continue and break.', type:'Detailed Notes',
    content:'Unit 3 — Conditional and Looping Constructs\n\n1. CONDITIONAL STATEMENTS\nConditional statements allow a program to make decisions based on whether a condition is true or false. They control which block of code should execute.\n\n2. if STATEMENT\nThe if statement executes a block only when its condition is true.\n\nSyntax:\nif (condition) {\n    statement;\n}\n\nExample:\nif (marks >= 40) {\n    printf("Pass");\n}\n\n3. if-else STATEMENT\nThe if-else statement chooses between two blocks: one for a true condition and one for a false condition.\n\nExample:\nif (number % 2 == 0) {\n    printf("Even");\n} else {\n    printf("Odd");\n}\n\n4. NESTED if\nA nested if is an if statement placed inside another if or else block. It is useful when one decision depends on another decision.\n\nExample:\nif (marks >= 40) {\n    if (marks >= 75) {\n        printf("Distinction");\n    }\n}\n\nKeep nested conditions organized so the logic remains easy to understand.\n\n5. CONDITIONAL OPERATOR\nThe conditional operator ?: is a compact way to choose one of two expressions based on a condition.\n\nSyntax:\ncondition ? expression1 : expression2;\n\nExample:\nresult = (a > b) ? a : b;\n\nIf a > b is true, result gets a; otherwise it gets b.\n\n6. for LOOP\nA for loop is commonly used when initialization, a condition and an update can be written together and the loop needs to repeat while the condition remains true.\n\nSyntax:\nfor (initialization; condition; update) {\n    statement;\n}\n\nExample:\nfor (int i = 1; i <= 5; i++) {\n    printf("%d\\n", i);\n}\n\nThe loop above prints the numbers 1 through 5.\n\n7. while LOOP\nA while loop checks the condition before each iteration. It is useful when the number of repetitions depends on a condition and is not necessarily known in advance.\n\nSyntax:\nwhile (condition) {\n    statement;\n}\n\nExample:\nint i = 1;\nwhile (i <= 5) {\n    printf("%d\\n", i);\n    i++;\n}\n\n8. do-while LOOP\nA do-while loop executes its body first and checks the condition afterward. Therefore, the body executes at least once.\n\nSyntax:\ndo {\n    statement;\n} while (condition);\n\nExample:\nint choice;\ndo {\n    printf("1. Continue  0. Exit\\n");\n    scanf("%d", &choice);\n} while (choice != 0);\n\nRemember the semicolon after the while(condition) in a do-while statement.\n\n9. NESTED LOOPS\nA loop can be placed inside another loop. This is called a nested loop. The inner loop completes its iterations for each iteration of the outer loop. Nested loops are commonly used for tables, patterns and multidimensional data.\n\nExample:\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        printf("%d ", j);\n    }\n    printf("\\n");\n}\n\n10. switch-case\nThe switch-case statement selects one block from several alternatives based on the value of an expression.\n\nBasic form:\nswitch (expression) {\n    case value1:\n        statement;\n        break;\n    case value2:\n        statement;\n        break;\n    default:\n        statement;\n}\n\nThe break statement usually prevents execution from continuing into the next case. The default block runs when no case matches.\n\nExample:\nswitch (choice) {\n    case 1:\n        printf("Add");\n        break;\n    case 2:\n        printf("Exit");\n        break;\n    default:\n        printf("Invalid choice");\n}\n\n11. break STATEMENT\nThe break statement immediately terminates the nearest enclosing loop or switch statement and transfers control to the statement that follows it.\n\nExample:\nfor (int i = 1; i <= 10; i++) {\n    if (i == 5) break;\n    printf("%d ", i);\n}\n\nThe loop stops when i becomes 5.\n\n12. continue STATEMENT\nThe continue statement skips the remaining statements in the current loop iteration and moves to the next iteration.\n\nExample:\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    printf("%d ", i);\n}\n\nThe value 3 is skipped.\n\n13. COMPARISON OF LOOPS\n• for — convenient when initialization, condition and update are together and the iteration pattern is clear.\n• while — condition-controlled loop; condition is checked before each iteration.\n• do-while — condition is checked after the body, so the body runs at least once.\n\n14. QUICK EXAM REVISION\n• if = execute when condition is true.\n• if-else = choose between two blocks.\n• Nested if = decision inside another decision block.\n• ?: = conditional operator.\n• for = initialization + condition + update.\n• while = check condition first.\n• do-while = execute first, check condition later.\n• switch-case = select among multiple alternatives.\n• break = exit loop/switch immediately.\n• continue = skip current iteration and proceed with the next one.\n\nIMPORTANT EXAM QUESTIONS\n1. Explain if and if-else statements with examples.\n2. What is a nested if statement?\n3. Explain the conditional operator with an example.\n4. Explain for, while and do-while loops and compare them.\n5. What is a nested loop? Give an example.\n6. Explain switch-case with break and default.\n7. Differentiate break and continue.\n8. Write a C program to demonstrate a loop and a conditional statement.\n\nPRACTICAL PRACTICE\n• Write a program to check whether a number is positive, negative or zero.\n• Write a program to check whether a number is even or odd.\n• Print numbers using for, while and do-while loops.\n• Write a menu-driven program using switch-case.\n• Use break and continue in a loop and observe the difference.\n• Write a nested-loop program for a simple pattern.\n\nSyllabus alignment: This note covers Unit 3 of the uploaded Semester III CSE syllabus: if, if-else, nested if, conditional operator, for, while, do-while, nested structures, switch-case, continue and break.' },
    { subject:'Computer Programming', code:'301', unit:'Unit 4', title:'Arrays and Pointer', desc:'Detailed Unit 4 notes covering one-dimensional and multidimensional arrays, memory organization, strings, pointers and dynamic memory allocation.', type:'Detailed Notes',
    content:`Unit 4 — Arrays and Pointer

1. ARRAYS
An array is a collection of elements of the same data type stored in a contiguous block of memory. Each element is accessed using an index. In C, array indexing starts from 0.

Example:
int marks[5] = {72, 65, 81, 90, 76};

Here, marks[0] is the first element and marks[4] is the fifth element.

2. ONE-DIMENSIONAL ARRAY
A one-dimensional array represents a simple linear collection of values. It is declared by giving the data type, array name and size.

Syntax:
data_type array_name[size];

Example:
int numbers[5];

Reading and displaying elements commonly uses a loop with an index.

3. MULTIDIMENSIONAL ARRAYS
A multidimensional array uses more than one index. A two-dimensional array is commonly represented as rows and columns and is useful for tables and matrices.

Example:
int matrix[2][3] = {{1,2,3}, {4,5,6}};

Access example:
matrix[1][2] gives 6.

Nested loops are commonly used to process a two-dimensional array.

4. MEMORY ORGANIZATION OF AN ARRAY
Array elements are stored in contiguous memory locations. Because elements have the same data type and size, the address of an element can be related to the base address and its index.

For a one-dimensional array, conceptually:
Address of a[i] = Base Address + (i × size of each element)

For a two-dimensional array in C, row-major order is used: elements of a row are stored together before moving to the next row.

5. STRINGS IN C
A string in C is a sequence of characters terminated by the null character, commonly written as the NUL character. Strings are stored in character arrays.

Example:
char name[] = "Harsh";

The array contains the characters followed by the terminating NUL character.

6. STRING CREATION, USE AND MODIFICATION
Strings can be declared as character arrays and initialized using a string literal. Individual characters can be accessed using an index. A string can be modified when stored in a writable character array.

Example:
char name[20] = "Harsh";
name[0] = 'J';

7. COMMON STRING FUNCTIONS
The C standard string functions are commonly provided through the string header. Important functions include:
• strlen() — finds the length of a string, excluding the terminating NUL character.
• strcpy() — copies a string.
• strcat() — appends one string to another.
• strcmp() — compares two strings.

Example:
#include <string.h>
int len = strlen(name);

Use functions according to the size of the destination array to avoid writing beyond its bounds.

8. POINTERS
A pointer is a variable that stores the memory address of another object. Pointers are important for working with memory, arrays, functions and dynamic memory allocation.

Declaration:
int *p;

Initialization with the address of a variable:
int x = 10;
int *p = &x;

Here, &x gives the address of x and *p accesses the value stored at that address.

9. POINTER DECLARATION AND INITIALIZATION
The star symbol in a pointer declaration indicates that the variable is a pointer. A pointer should be initialized to a valid address or a null pointer before it is dereferenced.

Example:
int x = 20;
int *ptr = &x;
printf("%d", *ptr);

The output is 20.

10. POINTERS AND ARRAYS
In many expressions, the name of an array can be used as a reference to its first element. Pointer arithmetic can then be used to move between elements.

Example:
int a[3] = {10, 20, 30};
int *p = a;

*p gives 10, and *(p + 1) gives 20.

11. POINTER ARITHMETIC
Adding 1 to a pointer moves it to the next element of the pointed-to type, not simply one byte forward. This makes pointer arithmetic useful for traversing arrays.

Example:
p++

p moves to the next int element when p is an int pointer.

12. DYNAMIC MEMORY ALLOCATION
Dynamic memory allocation allows memory to be obtained during program execution rather than using only fixed-size storage. The functions are declared in the standard library.

Important functions:
• malloc() — allocates a specified number of bytes.
• calloc() — allocates space for multiple elements and initializes the allocated bytes to zero.
• realloc() — changes the size of a previously allocated block.
• free() — releases dynamically allocated memory.

Example:
int *p = malloc(5 * sizeof(int));
if (p != NULL) {
    p[0] = 10;
    free(p);
}

In modern C, malloc does not need a cast. Always check allocation results and release memory that is no longer needed.

13. ARRAY VS POINTER
• Array = fixed collection of elements declared as an array object.
• Pointer = variable that stores an address and can point to different objects during its lifetime.
• Array storage is part of the array object; a pointer only stores an address.
• Pointer arithmetic can be used to traverse arrays.

14. QUICK EXAM REVISION
• Array = collection of same-type elements accessed by index.
• First index in C = 0.
• Two-dimensional array = rows and columns.
• C stores two-dimensional arrays in row-major order.
• C string = character array ending with the NUL character.
• strlen() = string length.
• strcpy() = copy string.
• strcat() = concatenate strings.
• strcmp() = compare strings.
• Pointer = stores a memory address.
• Ampersand operator = address-of operator.
• Star operator = dereference operator in pointer expressions.
• malloc and calloc = allocate dynamic memory.
• realloc = resize dynamic memory.
• free = release dynamic memory.

IMPORTANT EXAM QUESTIONS
1. Define an array and explain one-dimensional and multidimensional arrays.
2. Explain memory organization of an array.
3. What is a string in C? Explain the NUL character.
4. Explain common string functions with examples.
5. Define a pointer. Explain declaration, initialization and dereferencing.
6. Explain the relationship between arrays and pointers.
7. What is pointer arithmetic?
8. Explain dynamic memory allocation and the functions malloc(), calloc(), realloc() and free().
9. Differentiate an array and a pointer.

PRACTICAL PRACTICE
• Read and display elements of a one-dimensional array.
• Perform operations on a two-dimensional matrix.
• Find the largest and smallest value in an array.
• Perform string operations using the standard string functions.
• Demonstrate pointer declaration, initialization and dereferencing.
• Traverse an array using a pointer.
• Allocate and release dynamic memory using malloc() and free().

Syllabus alignment: This note covers Unit 4 of the uploaded Semester III CSE syllabus: one-dimensional and multidimensional arrays, memory organization, strings and string functions, pointers, and dynamic memory allocation.` },
    { subject:'Computer Programming', code:'301', unit:'Unit 5', title:'Functions and Recursion', desc:'Detailed Unit 5 notes covering function declaration, scope and lifetime of variables, function types, parameter passing, recursion, recursive-function characteristics, recursion types and examples.', type:'Detailed Notes',
    content:`Unit 5 — Functions and Recursion

1. FUNCTIONS
A function is a named block of code that performs a specific task. Functions help divide a program into smaller, reusable parts and make programs easier to understand, test and maintain.

2. FUNCTION DECLARATION
A function declaration tells the compiler the function's name, return type and parameter types before the function is used.

General form:
return_type function_name(parameter_list);

Example:
int add(int a, int b);

A function is commonly used through three related parts:
• Declaration (prototype) — tells the compiler the function interface.
• Definition — contains the statements that perform the task.
• Function call — requests execution of the function.

Example:
int add(int a, int b) {
    return a + b;
}

int result = add(10, 20);

3. SCOPE OF VARIABLES IN FUNCTIONS
Scope means the region of the program where a variable name can be accessed.

Local variable:
A variable declared inside a function or block is generally accessible only within that function or block.

Example:
void test(void) {
    int x = 10;
    printf("%d", x);
}

The variable x cannot be directly accessed outside its scope.

4. LIFETIME OF VARIABLES IN FUNCTIONS
Lifetime means the period during program execution for which a variable exists in memory.

The scope and lifetime of a variable are related but not identical concepts. A local automatic variable normally exists while execution is within its function/block. A static local variable has local scope but retains its stored value between calls to the function.

Example:
void counter(void) {
    static int count = 0;
    count++;
    printf("%d", count);
}

Repeated calls to counter() continue from the previous value of count.

5. TYPES OF FUNCTIONS
Functions can be discussed in different ways. For exam preparation, one common classification based on parameters and return value is:

• No arguments and no return value.
• Arguments but no return value.
• No arguments but a return value.
• Arguments and a return value.

Example with arguments and return value:
int square(int n) {
    return n * n;
}

6. CALL BY VALUE
In C, ordinary function arguments are passed by value: the function receives a copy of the argument's value. Changing the parameter inside the function does not directly change the caller's original variable.

Example:
void change(int x) {
    x = 100;
}

int a = 10;
change(a);

After the call, a remains 10.

7. CALL BY REFERENCE — C CONTEXT
C does not have a separate built-in "call by reference" parameter-passing mechanism like some other languages. In C, reference-like behavior is achieved by passing the address of a variable through a pointer and modifying the object through that pointer.

Example:
void change(int *x) {
    *x = 100;
}

int a = 10;
change(&a);

After the call, a becomes 100.

Exam point:
• Call by value → value is copied into the parameter.
• Reference-like passing in C → address is passed using a pointer, allowing the called function to modify the original object.

8. RECURSION
Recursion is a technique in which a function calls itself, directly or indirectly, to solve a problem by reducing it to smaller instances of the same problem.

A recursive function needs:
• A base case — stops further recursive calls.
• A recursive case — reduces the problem and calls the function again.

9. CHARACTERISTICS OF RECURSIVE FUNCTIONS
Important characteristics include:
• The function calls itself directly or indirectly.
• A base case is required to terminate recursion.
• Each recursive step should move toward the base case.
• Each call has its own set of automatic local variables and execution state.
• Recursion uses the program's call stack and therefore consumes stack space.

10. TYPES OF RECURSION
• Direct recursion — a function calls itself directly.
• Indirect recursion — one function calls another function, which eventually calls the first function again.

Direct recursion example:
int factorial(int n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

For factorial of 5:
5! = 5 × 4 × 3 × 2 × 1 = 120.

11. USES OF RECURSION
Recursion is useful for problems that naturally break into smaller similar subproblems, especially where a recursive structure is present.

Examples include:
• Factorial calculation.
• Traversing hierarchical structures.
• Divide-and-conquer style problem solving.
• Problems that can be expressed using repeated smaller instances.

Recursion should be used carefully because excessive recursive calls can consume stack memory.

12. FUNCTION VS RECURSIVE FUNCTION
• Function — performs a task and does not necessarily call itself.
• Recursive function — a function that uses self-calls directly or indirectly as part of its solution.
• Every recursive solution needs a suitable stopping condition.

13. QUICK EXAM REVISION
• Function = reusable block of code for a specific task.
• Declaration/prototype = tells the compiler the function interface.
• Definition = actual function body.
• Call = executes the function.
• Scope = where a variable name can be accessed.
• Lifetime = how long the variable exists during execution.
• C normally passes ordinary arguments by value.
• Reference-like behavior in C is achieved by passing addresses with pointers.
• Recursion = function calling itself directly or indirectly.
• Base case = stopping condition.
• Direct recursion = function calls itself.
• Indirect recursion = functions call each other in a cycle.

IMPORTANT EXAM QUESTIONS
1. What is a function? Explain function declaration, definition and function call.
2. Explain scope and lifetime of variables in functions.
3. Describe the common types of functions based on arguments and return value.
4. Explain call by value with an example.
5. Explain how reference-like parameter passing is achieved in C using pointers.
6. What is recursion? Explain its concept and uses.
7. Explain the characteristics of recursive functions.
8. Differentiate direct and indirect recursion.
9. Write a recursive function to calculate factorial.
10. Differentiate call by value and reference-like passing in C.

PRACTICAL PRACTICE
• Write a function to add two numbers.
• Write functions using different combinations of arguments and return values.
• Demonstrate the difference between a local variable's scope and its lifetime.
• Write a program showing call by value.
• Write a program that modifies a variable using a pointer parameter.
• Write a recursive program for factorial.
• Write another simple recursive program and identify its base and recursive cases.

SYLLABUS ALIGNMENT
This note covers exactly the Unit 5 topics listed in the uploaded Semester III CSE Computer Programming syllabus: Function declaration, scope and lifetime of variables in functions, types of function; call by value vs call by reference; and recursion including concept and uses, characteristics of recursive functions, types of recursion and examples.` },
    { subject:'Scripting Languages', code:'302', unit:'Unit 1', title:'Introduction, Variables and Data Types', desc:'Detailed Unit 1 notes covering Python history, versions, features, setup, syntax, errors, variables, basic data types, strings and basic operators.', type:'Detailed Notes',
    content:`Unit 1 — Introduction, Variables and Data Types

1. HISTORY, VERSIONS AND FEATURES OF PYTHON
Python is a high-level programming language used for many kinds of programming and scripting tasks.

The syllabus asks you to understand:
• History and development of Python.
• Different Python versions.
• Important features of Python.

Key features to remember:
• Simple and readable syntax.
• High-level language.
• Interpreted execution model.
• Dynamically typed variables.
• Large standard library.
• Supports modular and object-oriented programming.
• Portable across major operating systems.

Exam point: Learn the meaning of the features, not only their names.

2. PYTHON INSTALLATION AND ENVIRONMENT SETUP
To work with Python, you need a Python interpreter and a suitable environment for writing and running programs.

Basic setup flow:
1) Install a suitable Python version.
2) Check that Python runs correctly.
3) Open an editor or IDE.
4) Create a .py source file.
5) Write the program.
6) Run the program and inspect the output.

A terminal can also be used to check the Python installation and execute a Python file.

3. WORKING WITH PYTHON — WRITING AND RUNNING CODE
A Python program can be written in a source file and then executed by the Python interpreter.

Example:
print("Hello, Python!")

When the program runs, Python executes the statement and displays:
Hello, Python!

The basic learning cycle is:
Write code → Run code → Observe output → Find errors → Correct code → Run again.

4. BASIC SYNTAX
Syntax means the rules used to write valid Python code.

Important syntax points from the syllabus:
• Input and output.
• Comments.
• Indentation.

Python uses indentation to define blocks of code.

Example:
if marks >= 40:
    print("Pass")

The indented line belongs to the if block.

5. INPUT AND OUTPUT
The input() function is used to accept input from the user. The print() function is used to display output.

Example:
name = input("Enter your name: ")
print("Hello", name)

Important point:
input() returns the entered value as text (a string). Convert it when numeric input is required.

Example:
age = int(input("Enter age: "))

6. COMMENTS
Comments are notes written for the programmer and are not executed as program statements.

Single-line comment:
# This is a comment

Comments make code easier to read and understand.

7. INDENTATION
Indentation means spaces at the beginning of a line. In Python, indentation is significant because it defines the structure of code blocks.

Example:
if temperature > 30:
    print("Hot")
    print("Stay hydrated")

Both indented statements belong to the if block.

Incorrect or inconsistent indentation can cause an IndentationError or change the intended program structure.

8. TYPES OF ERRORS
The syllabus introduces types of errors. Three common categories are:

• Syntax error — the code does not follow the language's syntax rules.
Example: missing a colon after an if statement.

• Runtime error/exception — an error occurs while the program is running.
Example: attempting to divide by zero.

• Logical error — the program runs, but produces an incorrect result because the logic is wrong.

Exam tip:
Syntax error = code structure problem.
Runtime error = problem during execution.
Logical error = wrong result due to wrong logic.

9. VARIABLES
A variable is a name used to refer to a value in a program.

Example:
marks = 75
name = "Harsh"

The variable name can be used later:
print(marks)
print(name)

Python variables are dynamically typed, so a variable name can refer to values of different types at different times.

Example:
x = 10
x = "Hello"

10. BASIC DATA TYPES
The syllabus includes basic data types such as numeric, string and Boolean.

Numeric:
• int — whole numbers.
• float — numbers with a fractional part.
• complex — complex numbers.

String:
• str — sequence of characters.

Boolean:
• bool — True or False.

Examples:
age = 17
price = 99.5
name = "Harsh"
is_student = True

Use type() to inspect the type of a value:
print(type(age))

11. STRINGS
A string is a sequence of characters enclosed in quotes.

Examples:
name = "Harsh"
city = 'Seoni'

Basic string operations include:
• Concatenation using +.
• Repetition using *.
• Indexing.
• Slicing.

Examples:
first = "Hello"
second = "World"
message = first + " " + second

word = "Python"
print(word[0])
print(word[1:4])

Remember: Python string indexing starts at 0.

12. BASIC OPERATORS
Operators are symbols or keywords used to perform operations on values.

Common operator groups introduced in this unit include:

Arithmetic:
+  addition
-  subtraction
*  multiplication
/  division
// floor division
%  remainder
** power

Comparison:
== equal to
!= not equal to
< less than
> greater than
<= less than or equal to
>= greater than or equal to

Logical:
and
or
not

Assignment examples:
x = 10
x += 5
x *= 2

Membership:
in
not in

Identity:
is
is not

Example:
marks = 75
print(marks >= 40)

The expression produces a Boolean result.

13. VARIABLES, VALUES AND EXPRESSIONS
A variable stores or refers to a value, while an expression combines values, variables and operators to produce a result.

Example:
a = 10
b = 5
total = a + b

Here:
• a and b are variables.
• a + b is an expression.
• total refers to the resulting value.

14. QUICK EXAM REVISION
• Python = high-level scripting/programming language with readable syntax.
• Interpreter = software that executes Python code.
• input() = accepts user input.
• print() = displays output.
• # = starts a single-line comment.
• Indentation = defines code blocks in Python.
• Syntax error = invalid language structure.
• Runtime error/exception = problem during execution.
• Logical error = incorrect program logic/result.
• Variable = name referring to a value.
• int, float, complex = numeric types.
• str = string.
• bool = True or False.
• String indexing starts from 0.
• +, -, *, /, //, %, ** = common arithmetic operators.
• == and != compare values.
• and, or, not = logical operators.

IMPORTANT EXAM QUESTIONS
1. What is Python? Explain its important features.
2. Write a brief note on the history and versions of Python.
3. Explain how to install and set up a Python environment.
4. Explain how to write and run a Python program.
5. What is Python syntax? Explain the importance of indentation.
6. Explain input() and print() with examples.
7. What are comments? Why are they used?
8. Explain syntax, runtime and logical errors with examples.
9. What is a variable in Python?
10. Explain basic Python data types with examples.
11. What is a string? Explain indexing and basic string operations.
12. Explain basic operators in Python with examples.

PRACTICAL PRACTICE
• Write and run a program that prints your name and branch.
• Take a user's name and age as input and display them.
• Convert numeric input using int() or float().
• Write a program that demonstrates arithmetic operators.
• Compare two numbers using relational operators.
• Combine conditions using and, or and not.
• Create strings and demonstrate concatenation, indexing and slicing.
• Write one example each of a syntax error, runtime error and logical error, then identify the category.

SYLLABUS ALIGNMENT
This note follows the Unit 1 topics in the uploaded Semester III CSE Scripting Languages syllabus: history, versions and features of Python; installation and environment setup; writing and running code; basic syntax including input, output, comments and indentation; types of error; variables and basic data types including numeric, string and Boolean; string operations; and basic operators.` },
    { subject:'Scripting Languages', code:'302', unit:'Unit 2', title:'Advanced Data Types', desc:'Detailed Unit 2 notes covering lists, tuples, dictionaries, sets and Python arrays with creation, access, modification, slicing, iteration and operations.', type:'Detailed Notes',
    content:`Unit 2 — Advanced Data Types

1. INTRODUCTION TO ADVANCED DATA TYPES
Advanced data types help store collections of values in a structured way. This unit focuses on lists, tuples, dictionaries, sets and arrays in Python.

A quick idea:
• List — ordered, mutable collection.
• Tuple — ordered, immutable collection.
• Dictionary — collection of key-value pairs.
• Set — collection of unique elements.
• Array — sequence provided through Python's array module, with elements of a specified type.

2. LISTS
A list is an ordered and mutable collection. Lists can contain multiple values and can be changed after creation.

Creating a list:
numbers = [10, 20, 30, 40]

Accessing elements:
print(numbers[0])
print(numbers[2])

Python list indexing starts at 0.

3. MODIFYING LISTS
Lists can be modified by assigning a new value to an existing index.

Example:
numbers[1] = 25

Common operations:
• append(x) — adds an item at the end.
• insert(index, x) — inserts an item at a given position.
• remove(x) — removes the first matching item.
• pop() — removes and returns an item, normally the last item.
• clear() — removes all items.

Example:
numbers.append(50)
numbers.insert(1, 15)

4. LIST SLICING
Slicing extracts part of a list using a start, stop and optional step.

General form:
list[start:stop:step]

Example:
numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])

This gives the elements at indexes 1, 2 and 3. The stop position is not included.

5. ITERATING OVER A LIST
Iteration means processing list elements one by one.

Example:
for item in numbers:
    print(item)

A loop with range() can also be used when indexes are needed.

Example:
for i in range(len(numbers)):
    print(numbers[i])

6. TUPLES
A tuple is an ordered collection that is immutable after creation.

Creating a tuple:
values = (10, 20, 30)

Accessing elements:
print(values[0])

Tuple values cannot normally be changed after the tuple has been created.

7. TUPLE IMMUTABILITY
Immutability means the tuple structure cannot be modified by assigning a new value to one of its positions.

Example:
values = (10, 20, 30)

An assignment such as values[0] = 99 is not allowed.

Use a tuple when the collection is intended to remain unchanged.

8. TUPLE SLICING
Tuples support indexing and slicing just like lists.

Example:
values = (10, 20, 30, 40, 50)
print(values[1:4])

The result is a new tuple containing the selected elements.

9. TUPLE UNPACKING
Tuple unpacking assigns tuple elements to multiple variables.

Example:
student = ("Harsh", 17)
name, age = student

Now:
name refers to "Harsh"
age refers to 17

The number of variables normally needs to match the number of unpacked elements.

10. ITERATING OVER TUPLES
Tuples can be processed using a for loop.

Example:
values = (10, 20, 30)
for value in values:
    print(value)

11. DICTIONARIES
A dictionary stores data as key-value pairs. Each key is used to access its corresponding value.

Creating a dictionary:
student = {
    "name": "Harsh",
    "marks": 78
}

Accessing a value:
print(student["name"])

A dictionary is mutable, so entries can be added, changed or deleted.

12. ADDING AND MODIFYING KEY-VALUE PAIRS
Add a new key:
student["city"] = "Seoni"

Modify an existing key:
student["marks"] = 85

The key is used to identify the value.

13. DELETING ITEMS FROM A DICTIONARY
Items can be deleted using methods such as pop() or statements such as del.

Example:
student.pop("city")

Another form:
del student["marks"]

clear() can be used to remove all items from a dictionary.

14. ITERATING OVER DICTIONARIES
A dictionary can be iterated over its keys, values or key-value pairs.

Examples:
for key in student:
    print(key)

for key, value in student.items():
    print(key, value)

15. DICTIONARY KEY RULE
Dictionary keys must be suitable hashable objects. Common examples include strings, numbers and tuples containing hashable values.

Values can be of many different types, including lists or other dictionaries.

16. SETS
A set is a collection that stores unique elements. Duplicate values are removed.

Creating a set:
numbers = {1, 2, 3, 3, 4}

The resulting set contains each unique value once.

17. ADDING AND REMOVING SET ELEMENTS
add(x) adds an element.

Example:
numbers.add(5)

remove(x) removes an element and raises an error if the element is absent.

discard(x) removes an element if present and does not raise an error when it is absent.

Example:
numbers.discard(10)

18. IMPORTANT SET PROPERTY
Sets are useful when uniqueness is important. They are not used like lists for index-based access.

Example:
items = {"A", "B", "A"}
The repeated "A" is stored only once.

19. PYTHON ARRAYS
This unit introduces arrays using Python's standard array module.

Import:
from array import array

Creating an integer array:
numbers = array("i", [10, 20, 30])

The type code defines the kind of elements stored by the array.

20. ACCESSING AND MODIFYING ARRAYS
Array elements can be accessed by index.

Example:
print(numbers[0])

An array element can be modified:
numbers[1] = 25

Arrays support iteration and common sequence-style operations.

Example:
for value in numbers:
    print(value)

21. ARRAY OPERATIONS
Common array operations include:
• append(x) — add an item.
• insert(i, x) — insert at a position.
• remove(x) — remove the first matching value.
• pop([i]) — remove and return an item.

Always use a type code and values compatible with the array's declared element type.

22. LIST VS TUPLE VS DICTIONARY VS SET VS ARRAY
List:
• Ordered.
• Mutable.
• Accessed by index.
• Duplicate values allowed.

Tuple:
• Ordered.
• Immutable.
• Accessed by index.
• Duplicate values allowed.

Dictionary:
• Stores key-value pairs.
• Mutable.
• Accessed using keys.
• Keys must satisfy the dictionary's hashing requirements.

Set:
• Stores unique elements.
• Mutable.
• Not used as an index-based sequence.
• Useful for membership and uniqueness.

Array:
• Sequence from the array module.
• Stores elements using a specified array type code.
• Supports indexed access and modification.

23. QUICK EXAM REVISION
• List = ordered and mutable.
• Tuple = ordered and immutable.
• Dictionary = key-value pairs.
• Set = unique elements.
• Python array = array module with a specified type code.
• List slicing uses start:stop:step.
• Tuple unpacking assigns elements to variables.
• Dictionary items can be added, changed and deleted.
• Set add() inserts an element.
• Set remove() may raise an error if an item is absent.
• Set discard() does not raise an error when an item is absent.
• Array elements can be accessed and modified by index.

IMPORTANT EXAM QUESTIONS
1. What are advanced data types in Python?
2. Explain lists with creating, accessing, modifying, slicing and iterating operations.
3. What is a tuple? Explain immutability, slicing, unpacking and iteration.
4. What is a dictionary? Explain creation, access, adding, modifying, deleting and iteration.
5. What is a set? Explain creation and adding/removing elements.
6. Explain arrays in Python using the array module.
7. Differentiate list, tuple, dictionary, set and array.
8. Explain list slicing with an example.
9. Explain tuple unpacking with an example.
10. Differentiate remove() and discard() for sets.

PRACTICAL PRACTICE
• Create a list of marks, modify an element and print a slice.
• Iterate over a list using a for loop.
• Create a tuple and demonstrate indexing, slicing and unpacking.
• Create a dictionary for a student and add, modify and delete entries.
• Iterate over dictionary key-value pairs.
• Create a set containing duplicate values and observe uniqueness.
• Add and remove elements from a set.
• Create an integer array using the array module and modify its elements.

SYLLABUS ALIGNMENT
This note follows the Unit 2 topics in the uploaded Semester III CSE Scripting Languages syllabus: introduction to advanced data types; lists with creating, accessing, modifying, slicing and iterating; tuples with creating, accessing, immutability, slicing, unpacking and iteration; dictionaries with creation, access, adding/modifying key-value pairs, deletion and iteration; sets with creation and adding/removing elements; and arrays with the array module, creation, access, modification and operations.` },
    { subject:'Scripting Languages', code:'302', unit:'Unit 3', title:'Control Structures', desc:'Detailed Unit 3 notes covering coding blocks, if/else/elif, for and range, while, continue, break, loop else and conditional-loop programming.', type:'Detailed Notes',
    content:`Unit 3 — Control Structures

1. CODING BLOCKS
A coding block is a group of statements that belong together and execute as one logical unit. In Python, indentation is used to show the beginning and end of a block.

Example:
marks = 72
if marks >= 40:
    print("Pass")
    print("Result checked")

Both indented statements belong to the if block.

2. CONDITIONAL BLOCKS
Conditional blocks allow a Python program to choose which statements should run according to a condition.

The syllabus covers:
• if
• else
• elif

3. if STATEMENT
The if statement executes its block when the condition is true.

Syntax:
if condition:
    statement

Example:
marks = 75
if marks >= 40:
    print("Pass")

If marks is 40 or more, the indented statement runs.

4. if-else STATEMENT
The else block runs when the if condition is false.

Example:
marks = 35

if marks >= 40:
    print("Pass")
else:
    print("Fail")

Only one of the two blocks is selected for this condition.

5. elif STATEMENT
elif means "else if". It is used when there are multiple conditions to test.

Example:
marks = 82

if marks >= 75:
    print("Distinction")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

Python checks the conditions in order and executes the first matching block.

6. FOR LOOP
A for loop is used to iterate over the items of a sequence or another iterable object.

Basic form:
for item in sequence:
    statement

Example:
names = ["Harsh", "Aman", "Riya"]

for name in names:
    print(name)

The loop processes each item one by one.

7. ITERATING OVER SEQUENCES
A sequence can contain multiple values that can be processed one after another.

Example with a string:
word = "Python"

for ch in word:
    print(ch)

Each character is processed in sequence.

8. range() WITH FOR LOOP
The range() function is commonly used when a loop needs a sequence of numbers.

Example:
for i in range(1, 6):
    print(i)

This processes the numbers 1 through 5.

range() can also use a step:
for i in range(0, 10, 2):
    print(i)

This processes even numbers from 0 up to, but not including, 10.

9. WHILE LOOP
A while loop repeats its block as long as its condition remains true.

Syntax:
while condition:
    statement

Example:
i = 1

while i <= 5:
    print(i)
    i += 1

The condition is checked before each iteration. The loop variable or other state must change appropriately so that the loop can eventually finish.

10. continue STATEMENT
The continue statement skips the remaining statements in the current loop iteration and moves to the next iteration.

Example:
for i in range(1, 6):
    if i == 3:
        continue
    print(i)

The statement for printing is skipped when i is 3.

11. break STATEMENT
The break statement terminates the nearest enclosing loop immediately.

Example:
for i in range(1, 6):
    if i == 4:
        break
    print(i)

The loop stops when i becomes 4.

12. pass STATEMENT
The pass statement is a null operation: it does nothing when executed. It is useful as a placeholder when a statement is syntactically required but no action is needed yet.

Example:
if marks >= 40:
    pass
else:
    print("Needs improvement")

The pass statement is different from continue: pass does not skip an iteration or alter loop control; it simply performs no operation.

12. else WITH LOOPS
Python also allows an else block to be attached to a loop. The loop else block executes when the loop finishes normally without encountering break.

Example:
for i in range(3):
    print(i)
else:
    print("Loop completed")

If break is used before normal completion, the loop's else block is skipped.

13. BREAK VS CONTINUE
break:
• Stops the loop completely.
• Control moves outside the loop.

continue:
• Does not stop the loop completely.
• Skips the rest of the current iteration and continues with the next iteration.

14. CONDITIONAL AND LOOP COMBINATIONS
Conditional statements can be placed inside loops, and loops can be used inside conditional blocks. This allows a program to solve problems that require repeated processing together with decisions.

Example:
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "Even")

Here, the for loop provides repetition and the if statement provides the decision.

15. PROGRAMMING USING CONDITIONAL AND LOOP BLOCKS
A useful approach is:
1) Identify the condition or repeated task.
2) Choose if/else/elif for decisions.
3) Choose for when iterating through a sequence or range.
4) Choose while when repetition depends on a condition.
5) Use break when the loop must stop early.
6) Use continue when the current iteration should be skipped.
7) Keep indentation consistent.

16. QUICK EXAM REVISION
• Coding block = group of statements belonging to one logical block.
• if = executes when condition is true.
• else = executes when the if condition is false.
• elif = tests another condition.
• for = iterates over a sequence or range.
• range() = provides a sequence of numbers for iteration.
• while = repeats while a condition is true.
• continue = skips the current iteration.
• break = terminates the loop.
• loop else = runs when the loop completes normally without break.
• Indentation defines Python code blocks.

IMPORTANT EXAM QUESTIONS
1. What is a coding block in Python? Explain the role of indentation.
2. Explain if, else and elif with examples.
3. What is a for loop? Explain iteration over a sequence.
4. Explain the use of range() with a for loop.
5. What is a while loop? Give an example.
6. Explain continue and break statements.
7. Explain the use of else with a loop.
8. Differentiate break and continue.
9. Explain how conditional and loop blocks can be combined in a Python program.

PRACTICAL PRACTICE
• Write a program using if, else and elif to classify marks.
• Use a for loop to display elements of a list.
• Use a for loop with range() to print a number series.
• Write a while loop to print numbers from 1 to 10.
• Use continue to skip a chosen value.
• Use break to stop a loop when a condition is met.
• Write a loop with an else block and observe when the else part executes.
• Write a small program combining a loop and a conditional block.

SYLLABUS ALIGNMENT
This note follows the Unit 3 topics in the uploaded Semester III CSE Scripting Languages syllabus: understanding coding blocks; conditional blocks using if, else and elif; for loops and iteration over sequences and range; while loop; loop manipulation using continue, break, else and pass; and programming using conditional and loop blocks.` },
    { subject:'Scripting Languages', code:'302', unit:'Unit 4', title:'Functions, Modules and Packages', desc:'Detailed Unit 4 notes covering functions, parameter types, return values, scope, recursion, modules, namespaces, packages and PIP.', type:'Detailed Notes',
    content:`Unit 4 — Functions, Modules and Packages

1. FUNCTIONS IN PYTHON
A function is a reusable block of Python code designed to perform a particular task. Functions help organize a program into smaller parts and reduce repeated code.

The syllabus covers:
• Introduction to functions.
• Defining and calling functions.
• Function parameters.
• Return values.
• Variable scope and recursion.

2. DEFINING A FUNCTION
A function is defined with the def keyword followed by the function name and parameter list.

Syntax:
def function_name(parameters):
    statements

Example:
def greet():
    print("Hello, student")

The function body is indented.

3. CALLING A FUNCTION
Defining a function does not execute it. The function runs when it is called.

Example:
def greet():
    print("Hello, student")

greet()

The call greet() executes the statements inside the function.

4. FUNCTION PARAMETERS
Parameters are names written in a function definition that receive values when the function is called.

Example:
def add(a, b):
    return a + b

result = add(10, 20)

Here, a and b are parameters and 10 and 20 are arguments supplied to the call.

5. POSITIONAL PARAMETERS
With positional arguments, values are matched to parameters according to their position.

Example:
def student_info(name, age):
    print(name, age)

student_info("Harsh", 17)

"Harsh" is passed to name and 17 is passed to age because of their positions.

6. DEFAULT PARAMETERS
A default parameter has a value that is used when the caller does not provide an argument for that parameter.

Example:
def greet(name="Student"):
    print("Hello", name)

greet()
greet("Harsh")

The first call uses the default value.

7. KEYWORD ARGUMENTS
Keyword arguments are passed by writing the parameter name explicitly.

Example:
def student_info(name, age):
    print(name, age)

student_info(age=17, name="Harsh")

The arguments are matched using their parameter names rather than only their positions.

8. RETURN VALUES
A function can return a result using the return statement.

Example:
def square(number):
    return number * number

answer = square(5)

Here, square(5) returns 25 and the value is stored in answer.

A function can also perform an action without returning a useful value to the caller.

9. VARIABLE SCOPE
Scope describes where a variable name can be accessed.

Local variable:
A variable created inside a function is generally local to that function.

Example:
def demo():
    x = 10
    print(x)

The name x is available inside demo().

Global variable:
A variable created outside functions is in the global scope of the module and can be accessed from functions subject to Python's name-resolution rules.

Example:
college = "GP Seoni"

def show_college():
    print(college)

Scope helps prevent unrelated parts of a program from accidentally using the same local name.

10. RECURSION IN PYTHON
Recursion occurs when a function calls itself directly or through another function.

A recursive solution needs a condition that stops the recursive process and a step that moves the problem toward that stopping condition.

Example:
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

factorial(5) returns 120.

11. ORGANIZING PYTHON CODE USING MODULES
A module is a Python file containing code such as functions, variables or other definitions that can be imported and reused in another Python program.

The syllabus requires creating user-defined modules and understanding namespaces and scoping.

Suppose a file named calculator.py contains:
def add(a, b):
    return a + b

Another Python file can import it:
import calculator
print(calculator.add(10, 20))

This separates reusable code from the main program.

12. CREATE A USER-DEFINED MODULE
Basic steps:
1) Create a Python file with reusable definitions.
2) Save the file with a .py extension.
3) Keep it in a location from which Python can import it.
4) Import the module in another script.
5) Use the module's functions or variables.

Example module:
student_tools.py

def display_name(name):
    print(name)

Another script:
import student_tools
student_tools.display_name("Harsh")

13. NAMESPACE
A namespace is a mapping that connects names to their corresponding objects. It helps Python keep names organized and avoid unintended name conflicts.

When a module is imported, its names can be accessed through the module namespace.

Example:
import math
print(math.sqrt(25))

The name sqrt is accessed through the math namespace.

14. SCOPING
Python resolves names through different scopes. A simple exam-level understanding is:
• Local — inside the current function.
• Global — at the module level.
• Built-in — names provided by Python.

The important idea is that where a name is defined affects where it can be found.

15. IMPORTING YOUR OWN MODULE
A user-defined module can be imported using import.

Example:
import student_tools

A specific definition can also be imported:
from student_tools import display_name

Then:
display_name("Harsh")

16. IMPORTING EXTERNAL MODULES
External modules are modules that are not part of the current Python file. They can be imported when they are available in the Python environment.

Example:
import math
print(math.sqrt(16))

A module can be used through its namespace after importing it.

17. PACKAGES
A package is a way of organizing related Python modules into a larger project structure.

In this syllabus, package topics include:
• User-defined packages.
• Importing user-defined packages.
• Importing built-in packages.
• Installing packages using PIP.

18. CREATE A USER-DEFINED PACKAGE
A basic package structure can contain a directory with related Python modules.

Example structure:
student_package/
    __init__.py
    marks.py

Suppose marks.py contains:
def total(a, b):
    return a + b

The package can then be imported using its package/module path when the project is set up correctly.

19. IMPORTING A USER-DEFINED PACKAGE
Example:
from student_package import marks

print(marks.total(10, 20))

The exact import path depends on the package structure and where the project is run from.

20. BUILT-IN PACKAGES
Python provides many modules and packages as part of its standard library.

Example:
import math
print(math.sqrt(49))

Here math is available from the Python standard library.

21. INSTALLING PACKAGES USING PIP
PIP is a package-management tool commonly used to install Python packages from package indexes.

A common command is:
python -m pip install package_name

After installation, the package can be imported in a Python program when supported by the environment.

Example:
python -m pip install requests

Then, in code:
import requests

The exact package name and available version depend on the package and environment.

22. FUNCTION, MODULE AND PACKAGE — QUICK DIFFERENCE
Function:
• Reusable block of code.
• Usually performs one related task.

Module:
• Python file containing reusable definitions.

Package:
• Organized collection of related Python modules.

A practical organization can be:
Package → Modules → Functions

23. QUICK EXAM REVISION
• def = defines a function.
• Function call = executes a function.
• Parameter = name in a function definition.
• Positional arguments = matched by position.
• Default parameter = supplies a value when an argument is omitted.
• Keyword argument = matched by parameter name.
• return = sends a value back from a function.
• Scope = where a name can be accessed.
• Recursion = function calling itself directly or indirectly.
• Module = Python file containing reusable code.
• Namespace = mapping of names to objects.
• Package = organized collection of related modules.
• PIP = package-management tool used to install Python packages.

IMPORTANT EXAM QUESTIONS
1. What is a function? Explain defining and calling a function in Python.
2. Explain positional, default and keyword parameters with examples.
3. What is a return value?
4. Explain variable scope in Python.
5. What is recursion? Give an example.
6. What is a module? Explain how to create and import a user-defined module.
7. What is a namespace? Explain its role.
8. Explain importing your own module and an external module.
9. What is a package? Explain how a user-defined package is organized.
10. Explain how to install a Python package using PIP.
11. Differentiate function, module and package.

PRACTICAL PRACTICE
• Define and call a Python function.
• Use positional arguments in a function.
• Use a default parameter and observe its behavior.
• Call a function using keyword arguments.
• Write a function that returns a calculated value.
• Create a user-defined module and import it from another Python file.
• Use an imported module through its namespace.
• Create a simple user-defined package with one module.
• Install a package using PIP and import it in a script.

SYLLABUS ALIGNMENT
This note follows the Unit 4 topics in the uploaded Semester III CSE Scripting Languages syllabus: organizing Python code using functions; introduction, defining and calling functions; positional, default and keyword parameters; return values; variable scope and recursion; organizing Python projects into user-defined modules with namespaces and scoping; importing own and external modules; understanding packages; creating and importing user-defined and built-in packages; and installing packages using PIP.` },
    { subject:'Scripting Languages', code:'302', unit:'Unit 5', title:'File I/O, Text Processing and Regular Expressions', desc:'Detailed Unit 5 notes covering file modes and operations, exception handling, text processing, Python re pattern matching, searching and regex applications.', type:'Detailed Notes',
    content:`Unit 5 — File I/O, Text Processing, Regular Expressions

1. FILE HANDLING MODES
Python file handling starts with opening a file in an appropriate mode. The mode determines how the program will use the file.

Common modes:
• r — read an existing file.
• w — write to a file; creates it when needed and replaces existing contents.
• a — append data to the end of a file.
• x — create a new file and fail if it already exists.
• b — binary mode can be combined with a mode, such as rb or wb.
• t — text mode; this is the normal default mode.

Examples:
open("notes.txt", "r")
open("notes.txt", "w")
open("notes.txt", "a")

2. OPENING A FILE
The open() function opens a file and returns a file object.

Syntax:
open(file, mode)

Example:
file = open("notes.txt", "r")

After opening a file, the program can perform the required read or write operation.

3. READING FROM A FILE
The syllabus includes reading file contents.

Common methods:
• read() — reads content from the file.
• readline() — reads one line.
• readlines() — reads multiple lines and returns them as a list of lines.

Example:
file = open("notes.txt", "r")
data = file.read()
print(data)
file.close()

4. WRITING TO A FILE
The write() method writes text to an opened file.

Example:
file = open("notes.txt", "w")
file.write("Semester III Study Portal")
file.close()

When using w mode, existing file contents can be replaced.

5. APPENDING TO A FILE
The append mode a is used to add new content at the end of a file without intentionally replacing the existing contents.

Example:
file = open("notes.txt", "a")
file.write("\nNew study note")
file.close()

6. CLOSING A FILE
The close() method releases the file resource after file operations are complete.

Example:
file.close()

Closing a file is important after finishing direct file operations.

7. USING with FOR FILE HANDLING
The with statement provides a convenient way to work with files because the file is closed automatically when the block finishes.

Example:
with open("notes.txt", "r") as file:
    data = file.read()
    print(data)

For practical programs, using with is generally preferred over manually opening and closing the file.

8. FILE-RELATED OPERATIONS
The syllabus specifically mentions read, write, open, append, rename, delete and close.

Rename:
Python can rename a file using the os module.

Example:
import os
os.rename("old.txt", "new.txt")

Delete:
A file can be removed using os.remove().

Example:
import os
os.remove("old.txt")

Use care with rename and delete operations because they change the file system.

9. BASIC EXCEPTION HANDLING
Exception handling allows a program to respond to runtime problems instead of terminating unexpectedly.

The basic structure uses:
• try — contains code that may raise an exception.
• except — handles a matching exception.
• else — runs when the try block finishes without an exception.
• finally — runs after the try/except process for cleanup.

Example:
try:
    number = int(input("Enter a number: "))
    print(10 / number)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")

10. WHY EXCEPTION HANDLING IS USED
Exception handling improves program reliability by allowing expected runtime problems to be handled clearly.

Example:
If a user enters text where a number is expected, int() may raise ValueError. The except block can show a useful message and keep the program flow controlled.

11. TEXT PROCESSING
Text processing means working with textual data such as reading text files, searching for text, modifying text and checking whether text follows a required pattern.

Common tasks:
• Read text from a file.
• Process the text line by line.
• Search for words or patterns.
• Validate formatted text.
• Extract required information.

Example:
text = "Computer Programming"
print(text.lower())
print(text.upper())

12. REGULAR EXPRESSIONS
A regular expression, often called regex, is a pattern used to match, search for or validate text.

Python provides the re module for regular expressions.

Import:
import re

Basic operations commonly used with re include:
• search() — searches for a match anywhere in the string.
• match() — checks for a match at the beginning of the string.
• fullmatch() — checks whether the entire string matches the pattern.
• findall() — returns all non-overlapping matches.
• sub() — replaces matching text.

13. REGEX PATTERNS
A regex pattern describes the form of text that should be matched.

Common pattern elements:
• . — any character except a newline in the usual mode.
• \d — a digit.
• \w — a word character.
• \s — whitespace.
• ^ — beginning of the string/line.
• $ — end of the string/line.
• + — one or more repetitions.
• * — zero or more repetitions.
• ? — zero or one repetition.
• {m,n} — between m and n repetitions.

Example:
pattern = r"\d+"
text = "Roll 12345"
result = re.findall(pattern, text)

The result contains the digit sequence found in the text.

14. PATTERN MATCHING AND SEARCHING WITH re
Example:
import re

text = "Email: student@example.com"
pattern = r"[\w.-]+@[\w.-]+\.\w+"

match = re.search(pattern, text)

if match:
    print("Email found:", match.group())

This demonstrates searching for a text pattern using Python's re module.

15. VALIDATION USING REGEX
Regex can be used to check whether input follows a required pattern.

Examples of validation applications:
• Email addresses.
• Phone numbers.
• Roll numbers.
• Branch or college codes embedded in an identifier.

Validation means checking the input against an expected pattern. A regex alone does not prove that the underlying real-world value is valid; it checks the specified text format.

16. TEXT PROCESSING WITH FILES
File processing and text processing can be combined.

Example:
with open("notes.txt", "r") as file:
    for line in file:
        line = line.strip()
        if line:
            print(line)

This reads the file line by line and removes leading/trailing whitespace with strip().

17. QUICK EXAM REVISION
• open() = opens a file.
• r = read.
• w = write and may replace existing contents.
• a = append.
• read() = reads content.
• write() = writes text.
• close() = closes the file.
• with = convenient automatic file cleanup.
• os.rename() = renames a file.
• os.remove() = deletes a file.
• try = code that may raise an exception.
• except = handles an exception.
• else = runs when no exception occurs in try.
• finally = cleanup code that runs afterward.
• Text processing = working with textual data.
• re = Python regular-expression module.
• search() = search for a match.
• findall() = find all matches.
• sub() = replace matching text.

IMPORTANT EXAM QUESTIONS
1. Explain common Python file handling modes.
2. Explain open(), read(), write() and close() with examples.
3. What is append mode?
4. Explain how to read a file line by line.
5. Explain file rename and delete operations.
6. What is exception handling? Explain try, except, else and finally.
7. What is text processing?
8. What is a regular expression? Explain the role of Python's re module.
9. Explain common regex operators/patterns with examples.
10. Differentiate search(), match(), fullmatch() and findall().
11. Explain regex applications for validating email or phone-number formats.

PRACTICAL PRACTICE
• Create a text file and write study data into it.
• Read and display file contents.
• Append a new line to an existing file.
• Read a text file line by line.
• Rename a practice file using os.rename().
• Delete a practice file using os.remove().
• Handle invalid numeric input using try and except.
• Search for a pattern using re.search().
• Extract all matching numbers or words using re.findall().
• Replace matching text using re.sub().
• Build a simple regex validation for an email-like format.

SYLLABUS ALIGNMENT
This note follows the Unit 5 topics in the uploaded Semester III CSE Scripting Languages syllabus: file handling modes; file operations including read, write, open, append, rename, delete and close; basic exception handling; pattern matching and searching with the Python re module; and regex pattern searching.` },
    { subject:'Data Structures', code:'303', unit:'Unit 1', title:'Basics of Data Structure', desc:'Detailed Unit 1 notes covering classification, pointers, array-of-pointers, 2-D arrays, row-major/column-major layout, structures and core data-structure operations.', type:'Detailed Notes',
    content:`Unit 1 — Basics of Data Structure

1. INTRODUCTION TO DATA STRUCTURES
A data structure is a way of organizing and storing data so that it can be used efficiently by a program.

The purpose of a data structure is to make common operations such as storing, accessing, searching, inserting and deleting data easier to perform.

2. CLASSIFICATION OF DATA STRUCTURES
The syllabus asks for classification into:
• Linear and non-linear data structures.
• Primitive and non-primitive data structures.
• Other common classifications may also be discussed as part of the "etc." in the syllabus.

Linear data structure:
Elements are arranged in a sequential form. Examples include arrays, stacks, queues and linked lists.

Non-linear data structure:
Elements are organized in hierarchical or network-like relationships. Examples include trees and graphs.

Primitive data structure:
Basic data types provided by a programming language, such as int, char, float and similar types.

Non-primitive data structure:
Structures built to organize collections of data, such as arrays, linked lists, stacks, queues, trees and graphs.

3. POINTERS — INTRODUCTION
A pointer is a variable that stores the memory address of another variable or object.

Example:
int x = 10;
int *p = &x;

Here:
• x stores the value 10.
• &x gives the address of x.
• p stores that address.
• *p accesses the value stored at that address.

4. DECLARING AND INITIALIZING POINTERS
A pointer is declared using the * symbol with its data type.

Syntax:
data_type *pointer_name;

Example:
int *p;

A pointer can be initialized using the address-of operator &.

Example:
int x = 25;
int *p = &x;

A pointer should point to a valid object or be a null pointer before it is dereferenced.

5. ACCESSING VARIABLES USING POINTERS
The dereference operator * is used to access the value at the address stored in a pointer.

Example:
int x = 20;
int *p = &x;

printf("%d", *p);

The expression *p gives the value of x.

A pointer can also be used to modify the value of the pointed-to variable.

Example:
*p = 30;

Now x becomes 30.

6. POINTER ARITHMETIC
Pointer arithmetic allows a pointer to move through elements of an array.

If p is a pointer to an element of type int, then p + 1 points to the next int element. The actual address change depends on the size of the pointed-to type.

Example:
int a[3] = {10, 20, 30};
int *p = a;

• *p gives 10.
• *(p + 1) gives 20.
• *(p + 2) gives 30.

Common pointer arithmetic includes incrementing and decrementing pointers and adding or subtracting integer offsets.

7. ARRAY OF POINTERS
An array of pointers is an array in which each element stores an address.

Example:
char *names[3] = {"Harsh", "Aman", "Riya"};

Here names is an array of three character pointers.

An array of pointers is different from a pointer to an array. The first stores multiple addresses; the second points to an array object.

8. TWO-DIMENSIONAL ARRAYS
A two-dimensional array is commonly represented as rows and columns.

Example:
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

Access example:
matrix[1][2] gives 6.

Nested loops are commonly used to traverse a two-dimensional array.

9. ROW-MAJOR IMPLEMENTATION
In row-major order, all elements of one row are stored before the elements of the next row.

For:
A[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
}

The storage order is:
1, 2, 3, 4, 5, 6

For a zero-based two-dimensional array A[i][j], a common address calculation is:
Address = Base + ((i × number_of_columns) + j) × element_size

10. COLUMN-MAJOR IMPLEMENTATION
In column-major order, elements of one column are stored before the elements of the next column.

For the same matrix:
1, 2, 3
4, 5, 6

The conceptual column-major storage order is:
1, 4, 2, 5, 3, 6

For a zero-based A[i][j] with a fixed number of rows, a common address calculation is:
Address = Base + ((j × number_of_rows) + i) × element_size

Exam point:
C's native multidimensional array layout is row-major. Column-major is an important contrasting implementation concept included in the syllabus.

11. STRUCTURE
A structure is a user-defined C type that groups related variables, possibly of different data types, under one name.

Definition:
struct Student {
    int roll;
    char name[20];
    float marks;
};

12. DECLARING AND INITIALIZING A STRUCTURE
A structure variable can be declared after defining the structure type.

Example:
struct Student s1 = {101, "Harsh", 78.5f};

Members are accessed using the dot operator.

Example:
printf("%d", s1.roll);
printf("%s", s1.name);

13. OPERATIONS ON DATA STRUCTURES
The syllabus includes these basic operations:

Traversing:
Visiting or processing each element of a data structure.

Searching:
Finding whether a particular value or element exists and locating it.

Insertion:
Adding a new element at an appropriate position.

Deletion:
Removing an existing element.

Sorting:
Arranging elements according to a chosen order, such as ascending or descending order.

Merging:
Combining elements or two compatible data structures into a single collection.

Updating:
Changing the value of an existing element.

14. EXAMPLE OF BASIC OPERATIONS
Consider:
int a[4] = {10, 20, 30, 40};

Traversing:
Read elements from a[0] to a[3].

Searching:
Find whether 30 is present.

Insertion:
Add a new value at a selected position, while shifting elements if the representation requires it.

Deletion:
Remove a selected element and adjust the remaining elements.

Sorting:
Arrange the values from smallest to largest.

Merging:
Combine two ordered or unordered collections according to the required method.

Updating:
Change, for example, 20 to 25.

The exact implementation of each operation depends on the data structure being used.

15. QUICK EXAM REVISION
• Data structure = organized way to store/manage data.
• Linear = sequential arrangement.
• Non-linear = hierarchical/network arrangement.
• Primitive = basic data types.
• Non-primitive = structured collections of data.
• Pointer = stores an address.
• & = address-of operator.
• * = dereference operator in pointer expressions.
• Pointer arithmetic helps traverse arrays.
• Array of pointers = each array element stores an address.
• Two-dimensional arrays use row and column indexes.
• Row-major = row by row.
• Column-major = column by column.
• Structure = groups related variables, possibly of different types.
• Traversing = visiting elements.
• Searching = finding an element.
• Insertion = adding an element.
• Deletion = removing an element.
• Sorting = arranging elements.
• Merging = combining collections.
• Updating = modifying an existing value.

IMPORTANT EXAM QUESTIONS
1. Define a data structure. Explain its basic classification.
2. Differentiate linear and non-linear data structures.
3. Differentiate primitive and non-primitive data structures.
4. What is a pointer? Explain declaration, initialization and accessing variables using pointers.
5. Explain pointer arithmetic with an example.
6. What is an array of pointers?
7. Explain one-dimensional and two-dimensional arrays.
8. Explain row-major and column-major implementation of a two-dimensional array.
9. What is a structure in C? Explain definition, declaration and initialization.
10. Explain traversing, searching, insertion, deletion, sorting, merging and updating.

PRACTICAL PRACTICE
• Declare and initialize a pointer and access a variable through it.
• Traverse an array using pointer arithmetic.
• Create an array of pointers.
• Create and process a two-dimensional array.
• Demonstrate row-major and column-major order conceptually.
• Define and initialize a structure.
• Practice basic operations such as searching, insertion, deletion, sorting, merging and updating on an appropriate data collection.

SYLLABUS ALIGNMENT
This note follows Unit 1 of the uploaded Semester III CSE Data Structures syllabus: classification of data structures as linear/non-linear and primitive/non-primitive; pointers including declaration, initialization, accessing variables, pointer arithmetic and array of pointers; row-major and column-major implementation of 2-D arrays; structures including definition, declaration and initialization; and operations on data structures including traversing, searching, insertion, deletion, sorting, merging and updating.` },
    { subject:'Data Structures', code:'303', unit:'Unit 2', title:'Searching and Sorting Techniques', desc:'Detailed Unit 2 notes covering linear and binary search plus insertion, selection, bubble, quick and heap sort.', type:'Detailed Notes',
    content:`Unit 2 — Searching and Sorting Techniques

1. SEARCHING TECHNIQUES
Searching means finding whether a required element is present in a collection and, when applicable, identifying its position.

This unit covers two searching techniques:
• Linear search
• Binary search

2. LINEAR SEARCH — CONCEPT
Linear search checks elements one by one from the beginning of a list until the target is found or all elements have been checked.

Example:
List: 10, 25, 40, 55, 70
Target: 40

Check 10 → not equal
Check 25 → not equal
Check 40 → found

Linear search does not require the data to be sorted.

3. LINEAR SEARCH — PROCESS
Basic steps:
1) Start from the first element.
2) Compare the current element with the target.
3) If they match, report the position.
4) Otherwise move to the next element.
5) Continue until the target is found or the list ends.

Simple C-style logic:
for (int i = 0; i < n; i++) {
    if (a[i] == key) {
        /* found */
    }
}

4. LINEAR SEARCH — COMPLEXITY
In the best case, the target is found at the first position.
In the worst case, every element may be checked.
For n elements, the worst-case time grows linearly with n, commonly described as O(n).

5. BINARY SEARCH — CONCEPT
Binary search repeatedly divides a sorted collection into smaller parts.

Important condition:
The data must be arranged in sorted order before applying binary search.

Example:
List: 10, 20, 30, 40, 50, 60, 70
Target: 60

1) Check the middle value 40.
2) Since 60 is greater than 40, ignore the left half.
3) Check the middle of the remaining right half.
4) Continue until the target is found or the search interval becomes empty.

6. BINARY SEARCH — PROCESS
Basic steps:
1) Set low to the first index and high to the last index.
2) Find the middle index.
3) Compare the middle value with the target.
4) If equal, the target is found.
5) If the target is smaller, search the left half.
6) If the target is larger, search the right half.
7) Repeat while the search interval is valid.

Conceptual C-style logic:
while (low <= high) {
    mid = low + (high - low) / 2;
    if (a[mid] == key) {
        /* found */
    } else if (key < a[mid]) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}

7. BINARY SEARCH — COMPLEXITY
Each step removes roughly half of the remaining search space. For n elements, the worst-case time is commonly expressed as O(log n).

8. LINEAR SEARCH VS BINARY SEARCH
Linear search:
• Can be used on unsorted data.
• Checks elements sequentially.
• Worst-case time: O(n).

Binary search:
• Requires sorted data.
• Repeatedly halves the search range.
• Worst-case time: O(log n).

The choice depends on the data organization and whether the collection is already sorted.

9. SORTING TECHNIQUES
Sorting means arranging data according to an order, commonly ascending or descending.

This unit covers:
• Insertion sort
• Selection sort
• Bubble sort
• Quick sort
• Heap sort

10. INSERTION SORT — CONCEPT
Insertion sort builds the sorted part of the collection one element at a time. Each new element is inserted into its proper position among the elements already considered sorted.

Example:
4, 2, 5, 1

Start with 4 as sorted.
Insert 2 before 4 → 2, 4
Insert 5 after 4 → 2, 4, 5
Insert 1 at the beginning → 1, 2, 4, 5

11. INSERTION SORT — PROCESS
1) Treat the first element as the initially sorted portion.
2) Take the next element as the key.
3) Shift larger sorted elements one position to the right.
4) Insert the key in its correct position.
5) Repeat for the remaining elements.

For an array of n elements, the worst-case time is O(n²).

12. SELECTION SORT — CONCEPT
Selection sort repeatedly selects the smallest element from the unsorted portion and places it at the next correct position.

Example:
5, 3, 4, 1

Find minimum 1 and place it first:
1, 3, 4, 5

Then continue with the remaining unsorted portion.

13. SELECTION SORT — PROCESS
1) Start at the first position.
2) Find the minimum element in the unsorted part.
3) Swap it with the element at the current position.
4) Move the boundary of the sorted portion forward.
5) Repeat.

Selection sort has O(n²) comparisons in the typical analysis.

14. BUBBLE SORT — CONCEPT
Bubble sort repeatedly compares adjacent elements and swaps them when they are in the wrong order. Larger elements move toward the end of the list through repeated passes.

Example:
5, 1, 4

Compare 5 and 1 → swap:
1, 5, 4

Compare 5 and 4 → swap:
1, 4, 5

After another pass if needed, the list becomes sorted.

15. BUBBLE SORT — PROCESS
1) Compare adjacent elements.
2) Swap them if they are in the wrong order.
3) Continue through the collection.
4) Repeat passes until the collection is sorted.

A basic implementation has O(n²) worst-case time. An optimized version that stops when no swap occurs can be O(n) in the best case.

16. QUICK SORT — CONCEPT
Quick sort is a divide-and-conquer sorting method. It chooses a pivot, partitions the data around the pivot, and recursively sorts the resulting parts.

Main idea:
1) Choose a pivot.
2) Put smaller values on one side and larger values on the other according to the chosen partition rule.
3) Recursively sort the left and right parts.

17. QUICK SORT — COMPLEXITY
The average-case time is commonly O(n log n).
The worst-case time can become O(n²), for example when partitions are repeatedly very unbalanced.

The exact behavior depends on pivot selection and partitioning strategy.

18. HEAP SORT — CONCEPT
Heap sort uses a heap data structure to repeatedly select the next element for the sorted position.

A common approach for ascending order is:
1) Build a max-heap.
2) Move the maximum element to the end.
3) Reduce the heap size.
4) Restore the heap property.
5) Repeat until the collection is sorted.

19. HEAP SORT — COMPLEXITY
Building and maintaining the heap leads to an O(n log n) time bound for heap sort.

20. COMPARISON OF SORTING METHODS
Insertion sort:
• Simple and useful for small or nearly sorted data.
• Worst-case O(n²).

Selection sort:
• Repeatedly selects the minimum element.
• Typical comparison count is O(n²).

Bubble sort:
• Uses adjacent comparisons and swaps.
• Basic worst-case O(n²).
• Optimized best case can be O(n).

Quick sort:
• Divide-and-conquer approach.
• Average O(n log n).
• Worst O(n²).

Heap sort:
• Heap-based approach.
• O(n log n) time bound.

21. CHOOSING A SORTING METHOD
A sorting method is selected according to the data and the required performance.

Examples:
• Small or nearly sorted data can make insertion sort practical.
• Selection and bubble sort are simple for learning and small datasets.
• Quick sort is a widely used divide-and-conquer approach.
• Heap sort provides an O(n log n) time bound and uses a heap.

22. IMPORTANT DISTINCTION — SEARCHING VS SORTING
Searching:
Goal = find a required element.

Sorting:
Goal = arrange elements into an order.

Example:
Searching for roll number 25 asks whether 25 exists and where it is.
Sorting roll numbers arranges all roll numbers in ascending or descending order.

23. QUICK EXAM REVISION
• Linear search = sequential checking.
• Binary search = repeatedly halves the search space.
• Binary search requires sorted data.
• Linear search worst case = O(n).
• Binary search worst case = O(log n).
• Insertion sort = insert each new element into the sorted portion.
• Selection sort = select the minimum from the unsorted portion.
• Bubble sort = compare and swap adjacent elements.
• Quick sort = divide and conquer using a pivot.
• Heap sort = sorting using a heap.
• Basic insertion, selection and bubble sort analyses commonly involve O(n²) worst-case behavior.
• Quick sort average = O(n log n), worst = O(n²).
• Heap sort = O(n log n).

IMPORTANT EXAM QUESTIONS
1. What is searching? Explain linear search with its process and complexity.
2. Explain binary search and state the condition required before applying it.
3. Differentiate linear search and binary search.
4. What is sorting? Explain insertion sort.
5. Explain selection sort with its process.
6. Explain bubble sort with an example.
7. Explain quick sort and the divide-and-conquer idea.
8. Explain heap sort and the role of the heap.
9. Compare insertion, selection, bubble, quick and heap sort.
10. Write a C program to implement linear search.
11. Write a C program to implement binary search.
12. Write C programs for insertion, selection, bubble, quick and heap sorting.

PRACTICAL PRACTICE
• Implement linear search on a list of integers.
• Implement binary search on a sorted list of integers.
• Generate or use random data and implement insertion sort.
• Implement selection sort.
• Implement bubble sort.
• Implement quick sort.
• Implement heap sort.
• Compare the behavior of different search and sorting techniques on suitable input data.

SYLLABUS ALIGNMENT
This note follows Unit 2 of the uploaded Semester III CSE Data Structures syllabus: Searching Techniques — Linear search and Binary search; and Sorting Techniques — Insertion sort, Selection sort, Bubble sort, quick sort, and heap sort. The syllabus also assigns 14 hours and 14 marks to this unit.` },
    { subject:'Data Structures', code:'303', unit:'Unit 3', title:'Linear Data Structures', desc:'Detailed Unit 3 notes covering stacks, queues, array representations, applications, infix-to-postfix, postfix expressions, deque and circular queue.', type:'Detailed Notes',
    content:`Unit 3 — Linear Data Structures

1. LINEAR DATA STRUCTURES
A linear data structure stores elements in a sequential relationship. This unit focuses on two important linear data structures:
• Stack
• Queue

2. STACK — INTRODUCTION
A stack is a linear data structure in which insertion and deletion take place at one end called the top.

A stack follows the LIFO principle:
Last In, First Out.

Example:
Think of a stack of plates. The last plate placed on top is the first one removed.

3. STACK OPERATIONS
Common stack operations include:
• Push — insert an element at the top.
• Pop — remove the top element.
• Peek/Top — inspect the top element without removing it.

Example:
Start: [10, 20]
Push 30 → [10, 20, 30]
Pop → removes 30

4. ARRAY REPRESENTATION OF STACK
A stack can be implemented using an array and a variable such as top to indicate the current top position.

Conceptual form:
int stack[MAX];
int top = -1;

When top is -1, the stack is empty.

Push:
1) Check whether the stack is full.
2) Increase top.
3) Store the new value at stack[top].

Pop:
1) Check whether the stack is empty.
2) Read stack[top].
3) Decrease top.

5. STACK OVERFLOW AND UNDERFLOW
Overflow occurs when an insertion is attempted on a full stack.

Underflow occurs when a deletion is attempted from an empty stack.

For an array-based stack, checking these conditions prevents invalid operations.

6. APPLICATIONS OF STACKS
Stacks are useful when the most recently added item must be processed first.

Common applications:
• Expression processing.
• Infix-to-postfix conversion.
• Processing postfix expressions.
• Function-call and execution-stack behavior.
• Undo-like operations in suitable software systems.

7. INFIX, PREFIX AND POSTFIX
Expression notation can be described by operator position.

Infix:
Operator is written between operands.
Example:
A + B

Prefix:
Operator is written before operands.
Example:
+ A B

Postfix:
Operator is written after operands.
Example:
A B +

The syllabus specifically requires infix-to-postfix transformation and postfix expressions.

8. INFIX-TO-POSTFIX TRANSFORMATION
A stack can be used to convert an infix expression into postfix form.

Basic idea:
1) Read the expression from left to right.
2) If the symbol is an operand, add it to the output.
3) If it is an opening parenthesis, push it onto the stack.
4) For an operator, manage operators on the stack according to precedence and associativity.
5) When a closing parenthesis appears, pop until the matching opening parenthesis.
6) After the input ends, pop remaining operators into the output.

Example:
Infix:
A + B * C

Postfix:
A B C * +

Multiplication has higher precedence than addition, so B * C is placed before + in the postfix expression.

9. POSTFIX EXPRESSIONS
A postfix expression is evaluated from left to right using a stack.

Basic evaluation method:
1) Read the expression from left to right.
2) If an operand is found, push it.
3) If an operator is found, pop the required operands.
4) Apply the operator.
5) Push the result back.
6) At the end, the remaining stack value is the result.

Example:
Postfix:
2 3 + 4 *

Steps:
• Push 2
• Push 3
• + → 5
• Push 4
• * → 20

Result = 20.

10. QUEUE — INTRODUCTION
A queue is a linear data structure in which insertion is performed at the rear and deletion is performed at the front.

A queue follows FIFO:
First In, First Out.

Example:
In a waiting line, the person who joins first is normally served first.

11. QUEUE OPERATIONS
Common queue operations:
• Enqueue — insert an element at the rear.
• Dequeue — remove an element from the front.
• Front — inspect the front element.
• Rear — inspect the rear position.

Example:
Start: [10, 20]
Enqueue 30 → [10, 20, 30]
Dequeue → removes 10

12. ARRAY REPRESENTATION OF QUEUE
A queue can be implemented using an array with front and rear indexes.

Conceptual initialization:
int queue[MAX];
int front = -1;
int rear = -1;

The exact index update rules depend on the queue implementation.

For a simple linear array queue:
Enqueue adds at the rear.
Dequeue removes from the front.

The implementation must correctly handle empty and full conditions.

13. QUEUE OVERFLOW AND UNDERFLOW
Overflow occurs when an insertion is attempted on a full queue.

Underflow occurs when a deletion is attempted from an empty queue.

The implementation needs checks for these conditions.

14. TYPES OF QUEUES
The syllabus specifically includes:
• DeQueue (Deque)
• Circular Queue

15. DEQUEUE (DEQUE)
A deque, or double-ended queue, allows insertion and deletion at both ends.

Possible operations include:
• Insert at front.
• Insert at rear.
• Delete from front.
• Delete from rear.

Unlike an ordinary queue, a deque is not restricted to insertion only at the rear and deletion only at the front.

16. CIRCULAR QUEUE
A circular queue treats the queue positions as connected in a circle. After reaching the final array position, the next position can wrap around to the beginning when space is available.

This helps reuse positions that may have become free after deletions in an array-based queue.

Conceptual next position:
(rear + 1) % MAX

The exact full/empty conditions depend on the chosen circular-queue implementation.

17. ORDINARY QUEUE VS CIRCULAR QUEUE
Ordinary linear queue:
• Uses a linear range of array positions.
• Freed positions at the beginning may not be reused efficiently in a simple implementation.

Circular queue:
• Reuses positions by wrapping around.
• Uses modular movement through the array.

18. APPLICATIONS OF QUEUES
Queues are useful when processing should happen in arrival order.

Examples:
• Waiting-line systems.
• Printer/job scheduling.
• CPU or task scheduling concepts.
• Buffering and producer-consumer style situations.
• Breadth-oriented processing in algorithms.

19. STACK VS QUEUE
Stack:
• LIFO.
• Insertion and deletion at the same end, top.
• Main operations: push and pop.

Queue:
• FIFO.
• Insertion at rear and deletion at front.
• Main operations: enqueue and dequeue.

20. QUICK EXAM REVISION
• Linear data structure = sequential organization.
• Stack = LIFO.
• Queue = FIFO.
• Push = insert into stack.
• Pop = remove from stack.
• Peek/Top = inspect stack top.
• Stack overflow = push into full stack.
• Stack underflow = pop from empty stack.
• Infix = operator between operands.
• Postfix = operator after operands.
• Infix-to-postfix conversion uses a stack.
• Postfix evaluation uses a stack.
• Enqueue = insert into queue.
• Dequeue = remove from queue.
• Deque = insertion/deletion at both ends.
• Circular queue = queue with wrap-around positions.

IMPORTANT EXAM QUESTIONS
1. Define a stack and explain the LIFO principle.
2. Explain push, pop and peek operations.
3. Explain array representation of a stack.
4. What are stack overflow and underflow?
5. Explain applications of stacks.
6. What are infix and postfix expressions?
7. Explain infix-to-postfix transformation using a stack.
8. Explain evaluation of a postfix expression.
9. Define a queue and explain the FIFO principle.
10. Explain enqueue and dequeue operations.
11. Explain array representation of a queue.
12. What are overflow and underflow in a queue?
13. Explain deque and its operations.
14. Explain circular queue and why wrap-around is useful.
15. Differentiate stack and queue.

PRACTICAL PRACTICE
• Implement stack operations using an array.
• Practice push, pop and peek.
• Implement stack operations using a linked-list representation when applicable.
• Convert a simple infix expression to postfix.
• Evaluate a postfix expression using a stack.
• Implement queue operations using an array.
• Practice enqueue and dequeue.
• Implement a circular queue.
• Practice deque operations conceptually.

SYLLABUS ALIGNMENT
This note follows Unit 3 of the uploaded Semester III CSE Data Structures syllabus: Stacks — introduction, array representation, applications, infix-to-postfix transformation and postfix expressions; and Queues — introduction, array representation, DeQueue, circular queue and applications. The syllabus also lists practicals for stack and queue operations using arrays and linked lists.` },
  { subject:'Data Structures', code:'303', unit:'Unit 4', title:'Linked List', desc:'Singly, circular and doubly linked lists with core operations.', type:'Syllabus Unit',
    content:'Unit 4 — Linked List\n\n• Singly linked list and memory representation\n• Traversal, insertion, deletion and searching\n• Circular linked lists\n• Doubly linked lists' },
  { subject:'Data Structures', code:'303', unit:'Unit 5', title:'Non Linear Data Structure', desc:'Trees, binary-tree operations, tree types and graph representation and traversal.', type:'Syllabus Unit',
    content:'Unit 5 — Non Linear Data Structure\n\n• Tree terminology: root, node, edge, parent, child, sibling, leaf, subtree, degree, level and height\n• Binary trees and array representation\n• Insertion, deletion and traversals\n• Full, complete, perfect and balanced binary trees\n• Graphs: vertices, edges, degree, walks, paths and cycles\n• Set, linked and matrix representations\n• BFS and DFS' },

  { subject:'Computer System Organisation', code:'304', unit:'Unit 1', title:'Basic Computer Structure', desc:'Functional blocks, architectures, buses, number systems, registers, RTL, microoperations and data representation.', type:'Syllabus Unit',
    content:'Unit 1 — Basic Computer Structure\n\n• CPU, memory, input/output and control unit\n• Von Neumann vs Harvard architecture and bottleneck\n• Data, address and control buses\n• Decimal, binary, octal and hexadecimal systems and conversion\n• Registers and instruction cycle\n• Register transfer, bus and memory transfer, RTL\n• Arithmetic, logical and shift microoperations\n• ALU and arithmetic logical shift unit\n• Fixed-point, floating-point, sign bit, 1’s complement and 2’s complement\n• Addition and subtraction using 2’s complement' },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 2', title:'Instruction Set Architecture', desc:'Instruction code, addressing modes, instruction formats, interrupts, RISC/CISC and pipeline concepts.', type:'Syllabus Unit',
    content:'Unit 2 — Instruction Set Architecture\n\n• Instruction code and addressing modes\n• Assembly code vs machine code\n• Instruction cycle, timing and control\n• General register organization and stack architecture\n• Three-, two-, one- and zero-address instruction formats\n• Data transfer, data manipulation and program control instructions\n• Interrupts and interrupt handling\n• RISC and CISC\n• Pipeline, vector processing and array processing' },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 3', title:'Control Unit Organization', desc:'Control signals, hardwired and microprogrammed control, microinstructions and control memory.', type:'Syllabus Unit',
    content:'Unit 3 — Control Unit Organization\n\n• Role of control unit and control signals\n• Hardwired control unit: concept, advantages and limitations\n• Microprogrammed control unit and architecture\n• Microinstructions\n• Horizontal vs vertical microinstruction formats\n• Control memory and address sequencing\n• Hardwired vs microprogrammed control' },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 4', title:'Memory and I/O Organization', desc:'Memory hierarchy, RAM/ROM family, interfacing, interrupts, handshaking and DMA.', type:'Syllabus Unit',
    content:'Unit 4 — Memory and I/O Organization\n\n• Memory hierarchy, SRAM and DRAM\n• RAM, ROM and EPROM chips and CPU interfacing\n• I/O configuration and interfacing\n• Interrupt-driven I/O, handshaking and asynchronous transfer\n• DMA and I/O processors' },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 5', title:'8085 Case Study and Assembly Language Programming', desc:'8085 architecture, pins, instructions, addressing modes and sample GNUSim8085 programs.', type:'Syllabus Unit',
    content:'Unit 5 — 8085 Case Study and Assembly Language Programming\n\n• Introduction and architecture of 8085\n• Functional blocks: ALU, registers and control unit\n• Pin diagram and signal description\n• Instruction set overview and addressing modes\n• Applications of 8085\n• GNUSim8085 format, directives and flags\n• Sample programs: addition, data transfer, comparisons and loops' },

  { subject:'Algorithms', code:'305', unit:'Unit 1', title:'Fundamentals of Algorithms', desc:'Algorithm characteristics, design steps, pseudocode, flowcharts, complexity and asymptotic notation.', type:'Syllabus Unit',
    content:'Unit 1 — Fundamentals of Algorithms\n\n• Definition, characteristics and importance\n• Steps in algorithm design\n• Pseudocode, flowcharts and structured approach\n• Iterative vs recursive processes\n• Time and space complexity\n• Big-O, Omega and Theta\n• Best-case, worst-case and average-case analysis\n• Analysis of simple array algorithms' },
  { subject:'Algorithms', code:'305', unit:'Unit 2', title:'Sorting', desc:'Sorting importance and applications, elementary sorts, merge sort and quick sort.', type:'Syllabus Unit',
    content:'Unit 2 — Sorting\n\n• Importance and applications of sorting\n• Bubble sort\n• Selection sort\n• Insertion sort\n• Merge sort\n• Quick sort and divide-and-conquer idea\n• Complexity and comparison of sorting methods' },
  { subject:'Algorithms', code:'305', unit:'Unit 3', title:'Searching', desc:'Linear and binary search, BST, balancing and hashing concepts.', type:'Syllabus Unit',
    content:'Unit 3 — Searching\n\n• Linear search\n• Binary search and recurrence relation\n• Binary Search Trees: structure, insertion, deletion and search\n• Balanced search trees and height balancing\n• Hash tables and purpose of hashing\n• Hash functions\n• Collision handling: chaining and open addressing' },
  { subject:'Algorithms', code:'305', unit:'Unit 4', title:'Graphs', desc:'Graph types and representation, topological sorting, MST and shortest path algorithms.', type:'Syllabus Unit',
    content:'Unit 4 — Graphs\n\n• Directed and undirected graphs\n• Adjacency list and matrix\n• Paths, cycles and connected/disconnected graphs\n• Spanning trees\n• Topological sorting\n• Minimum spanning trees: Prim’s and Kruskal’s algorithms\n• Shortest path: Dijkstra’s algorithm' },
  { subject:'Algorithms', code:'305', unit:'Unit 5', title:'Strings and Data Compression', desc:'String sorting, substring search, regular expressions and Huffman coding.', type:'Syllabus Unit',
    content:'Unit 5 — Strings and Data Compression\n\n• String sorting and applications\n• Substring search\n• Regular expressions: meaning, patterns and validation applications\n• Need for data compression\n• Huffman coding and working\n• Applications in file storage and transmission' },

  { subject:'Summer Internship - I', code:'—', unit:'Internship', title:'Summer Internship - I', desc:'3–4 week practical internship after the second semester with report, viva and presentation evaluation.', type:'Activity',
    content:'Summer Internship — I\n\n• Duration: 3–4 weeks after the II Semester\n• Undertaken in an industry, Government or Private certified agency, social-sector agency, Government Skill Center or scheme\n• Evaluation based on work done, quality of report, viva-voce performance and presentation' },

  { subject:'Professional Development', code:'—', unit:'Unit I', title:'Professional and Social Ethics', desc:'Professional ethics, code of ethics and social skills for group performance.', type:'Syllabus Unit',
    content:'Unit I — Professional and Social Ethics\n\n• Professional ethics, need and importance\n• General code of ethics for engineers\n• Ethical issues for engineers\n• Need and importance of social skills\n• Social skills for better group performance\n• Social perceptiveness, coordination, negotiation and persuasion' },
  { subject:'Professional Development', code:'—', unit:'Unit II', title:'Lifelong Learning and Self-directed Learning', desc:'Lifelong learning, self-directed learning, planning and examples.', type:'Syllabus Unit',
    content:'Unit II — Lifelong Learning and Self-directed Learning\n\n• Lifelong learning and examples\n• Self-directed learning and examples\n• Important steps in lifelong learning\n• Need for planning self-directed learning\n• Planning a self-directed learning plan' },
  { subject:'Professional Development', code:'—', unit:'Unit III', title:'Career Planning', desc:'Career opportunities, qualification, skills, experience and a self-career plan.', type:'Syllabus Unit',
    content:'Unit III — Career Planning\n\n• Importance of career planning\n• Career opportunities related to the branch\n• Qualification, knowledge, skills and experience requirements\n• Personal lifestyle, interest areas, desires and preferences in career planning\n• Development of a self-career plan' },
  { subject:'Professional Development', code:'—', unit:'Unit IV', title:'Industrial Visits', desc:'Purpose and planning of industrial visits and learning by observing real systems.', type:'Syllabus Unit',
    content:'Unit IV — Industrial Visits\n\n• Exposure to industrial environment and practices\n• Lectures by industry experts\n• Importance of industrial visits\n• Learning through observation of real-life industrial systems\n• Planning and organizing industrial visits' },
  { subject:'Professional Development', code:'—', unit:'Unit V', title:'CV, Resume, Bio-data and Interview', desc:'Employment presentation, formats, covering letter, interview preparation and practice.', type:'Syllabus Unit',
    content:'Unit V — CV, Resume, Bio-data and Interview\n\n• Need for presenting self for employment\n• Features and formats of bio-data, CV and resume\n• Comparison, merits, limitations and uses\n• Covering letter\n• Interview purpose, dress code, body language and posture\n• Interview do’s and don’ts, checklist and practice' },
  { subject:'Professional Development', code:'—', unit:'Unit VI', title:'Group Discussion', desc:'Importance of group discussion, participation skills and practice.', type:'Syllabus Unit',
    content:'Unit VI — Group Discussion\n\n• Need and importance of group discussion in professional work\n• Ideal group discussion\n• Skills needed for effective participation\n• Practice of group discussion skills' },
];

const papers = [
  { semester: '3rd Semester', subject: 'Computer Networks', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Data Structures', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Database Management', year: 'Question Bank', status: 'Revision' },
];

const mcqs = [
  { q: 'Which layer of the OSI model is responsible for routing?', options: ['Transport', 'Network', 'Session', 'Presentation'], answer: 1, topic: 'Computer Networks' },
  { q: 'Which data structure follows LIFO?', options: ['Queue', 'Array', 'Stack', 'Linked List'], answer: 2, topic: 'Data Structures' },
  { q: 'What does CIA stand for in information security?', options: ['Control, Internet, Access', 'Confidentiality, Integrity, Availability', 'Cyber, Identity, Authentication', 'Code, Integrity, Access'], answer: 1, topic: 'Cyber Security Basics' },
  { q: 'Which SQL command is used to retrieve data?', options: ['SELECT', 'INSERT', 'DELETE', 'UPDATE'], answer: 0, topic: 'Database Management' },
  { q: 'Which component manages processes and hardware resources?', options: ['Compiler', 'Browser', 'Operating System', 'Database'], answer: 2, topic: 'Operating Systems' },
];

const initialTasks = [
  { id: 1, title: 'Revise OSI Model', subject: 'Computer Networks', done: true },
  { id: 2, title: 'Practice 10 MCQs', subject: 'Mixed Practice', done: false },
  { id: 3, title: 'Read SQL basics', subject: 'Database Management', done: false },
];

function App() {
  const [active, setActive] = useState('Dashboard');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const nav = ['Dashboard', 'Subjects', 'Notes', 'Question Papers', 'MCQ Practice', 'Study Planner', 'AI Study Assistant'];
  const query = search.trim().toLowerCase();
  const filteredSubjects = useMemo(() => subjects.filter((s) => `${s.name} ${s.code} ${s.topics.join(' ')}`.toLowerCase().includes(query)), [query]);

  const go = (page, subject = null) => { setActive(page); setSelectedSubject(subject); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const answerMcq = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === mcqs[mcqIndex].answer) setScore((s) => s + 1);
  };
  const nextMcq = () => { setSelected(null); setMcqIndex((i) => (i + 1) % mcqs.length); };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((items) => [...items, { id: Date.now(), title: newTask.trim(), subject: 'Personal target', done: false }]);
    setNewTask('');
  };
  const toggleTask = (id) => setTasks((items) => items.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  const askAI = async () => {
    const question = aiQuestion.trim();
    if (!question || aiLoading) return;
    setAiLoading(true); setAiAnswer('');
    try {
      const res = await fetch('/api/study-assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setAiAnswer(data.answer);
    } catch (err) {
      setAiAnswer(`AI assistant is not connected yet. You can still use the portal's notes and practice tools. (${err.message})`);
    } finally { setAiLoading(false); }
  };

  const pageTitle = active === 'Dashboard' ? 'Student Dashboard' : active;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand"><div className="brand-mark"><GraduationCap size={23}/></div><div><strong>GP Seoni</strong><span>Student Portal</span></div><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20}/></button></div>
        <div className="college-chip">Government Polytechnic College<br/>Seoni, Madhya Pradesh</div>
        <nav>{nav.map((item) => <button key={item} className={active === item ? 'nav-item active' : 'nav-item'} onClick={() => go(item)}><span>{item === 'Dashboard' ? <LayoutDashboard size={18}/> : item === 'Subjects' ? <BookOpen size={18}/> : item === 'Notes' ? <FileText size={18}/> : item === 'Question Papers' ? <FileText size={18}/> : item === 'MCQ Practice' ? <CircleHelp size={18}/> : item === 'Study Planner' ? <CalendarDays size={18}/> : <BrainCircuit size={18}/>}</span>{item}</button>)}</nav>
        <div className="sidebar-bottom"><div className="security-note"><ShieldCheck size={17}/><span>Learning resources<br/><b>Student-focused</b></span></div></div>
      </aside>

      <main className="main">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22}/></button><div className="crumb">Academic Portal <ChevronRight size={15}/> <b>{pageTitle}</b></div><div className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects, topics, notes..."/></div></header>

        <section className="content">
          {active === 'Dashboard' && <Dashboard go={go} filteredSubjects={filteredSubjects} />}
          {active === 'Subjects' && <Subjects filteredSubjects={filteredSubjects} go={go} />}
          {active === 'Notes' && <Notes search={query} subjectFilter={selectedSubject} />}
          {active === 'Question Papers' && <Papers />}
          {active === 'MCQ Practice' && <MCQPractice mcq={mcqs[mcqIndex]} index={mcqIndex} selected={selected} score={score} answer={answerMcq} next={nextMcq} />}
          {active === 'Study Planner' && <Planner tasks={tasks} newTask={newTask} setNewTask={setNewTask} addTask={addTask} toggleTask={toggleTask} />}
          {active === 'AI Study Assistant' && <AIAssistant question={aiQuestion} setQuestion={setAiQuestion} answer={aiAnswer} loading={aiLoading} ask={askAI} />}
          <footer><span>GP Seoni Student Portal</span><span>Learning platform • Built for students</span></footer>
        </section>
      </main>
    </div>
  );
}

function Dashboard({ go, filteredSubjects }) {
  return <>
    <div className="hero"><div><div className="eyebrow"><Sparkles size={15}/> STUDY SMART • BUILD YOUR FUTURE</div><h1>Learn. Practice. <span>Grow.</span></h1><p>A focused learning space for Polytechnic students — organize your subjects, practice exams, and build practical skills.</p><div className="hero-actions"><button className="primary" onClick={() => go('Subjects')}>Explore Subjects <ChevronRight size={17}/></button><button className="secondary" onClick={() => go('MCQ Practice')}><Target size={17}/> Start Practice</button></div></div><button className="hero-card" onClick={() => go('AI Study Assistant')}><div className="hero-icon"><BrainCircuit size={30}/></div><span>AI Study Assistant</span><strong>Learn with guidance</strong><small>Ask • Understand • Revise</small></button></div>
    <div className="section-heading"><div><span className="section-kicker">QUICK ACCESS</span><h2>Everything you need to study</h2></div><button className="text-button" onClick={() => go('Subjects')}>View all <ChevronRight size={16}/></button></div>
    <div className="quick-grid">{[
      ['Notes & Study Material','Subject-wise notes and resources',BookOpen,'Notes'],['Previous Year Papers','Practice with past exam papers',FileText,'Question Papers'],['MCQ Practice','Test yourself with objective questions',CircleHelp,'MCQ Practice'],['AI Study Assistant','Ask questions and learn faster',Sparkles,'AI Study Assistant']
    ].map(([title,desc,Icon,page]) => <button className="quick-card" key={title} onClick={() => go(page)}><div className="quick-icon"><Icon size={21}/></div><div><strong>{title}</strong><p>{desc}</p></div><ChevronRight size={18}/></button>)}</div>
    <div className="section-heading subjects-head"><div><span className="section-kicker">CURRENT STUDY</span><h2>Subjects & modules</h2></div><span className="semester-badge">3rd Semester</span></div>
    <div className="subject-grid">{filteredSubjects.map(({name,code,icon:Icon,tag},i) => <button className="subject-card" key={code} onClick={() => go('Notes')}><div className="subject-top"><div className="subject-icon"><Icon size={20}/></div><span>{tag}</span></div><strong>{name}</strong><small>{code} · Study material available</small><div className="progress"><i style={{width:`${52+i*8}%`}}/></div></button>)}</div>
    <div className="lower-grid"><section className="notice-card"><div className="card-title"><div><span className="section-kicker">STUDENT HUB</span><h2>Build your study routine</h2></div><CalendarDays size={21}/></div><div className="notice"><b>Study resources</b><span>Notes, question papers and revision material are organized into dedicated sections.</span></div><div className="notice"><b>Practice zone</b><span>Use MCQs to check your understanding before exams.</span></div></section><section className="planner-card"><div className="card-title"><div><span className="section-kicker">YOUR FOCUS</span><h2>One target at a time</h2></div><Target size={21}/></div><div className="focus-ring"><strong>01</strong><span>Set one small target<br/>for today.</span></div><button className="primary full" onClick={() => go('Study Planner')}>Open Study Planner <ChevronRight size={17}/></button></section></div>
  </>;
}

function Subjects({ filteredSubjects, go }) {
  const [selected, setSelected] = useState(filteredSubjects[0]?.code || null);
  const current = filteredSubjects.find((s) => s.code === selected);
  return <><div className="page-intro"><span className="section-kicker">ACADEMIC CONTENT</span><h1>Subjects & Modules</h1><p>Choose a subject to see its current module outline and jump into study material.</p></div><div className="subject-page-grid"><div className="subject-list">{filteredSubjects.map(({name,code,icon:Icon,tag}) => <button key={code} className={selected===code?'subject-row selected':'subject-row'} onClick={() => setSelected(code)}><span className="subject-icon"><Icon size={19}/></span><span><strong>{name}</strong><small>{code} · {tag}</small></span><ChevronRight size={17}/></button>)}</div>{current && <section className="module-panel"><div className="module-head"><div className="subject-icon">{React.createElement(current.icon,{size:21})}</div><div><span className="section-kicker">MODULE OUTLINE</span><h2>{current.name}</h2><small>{current.code}</small></div></div><div className="topic-list">{current.topics.map((topic,i)=><button key={topic} onClick={() => go('Notes', current.name)}><span>{String(i+1).padStart(2,'0')}</span><b>{topic}</b><ChevronRight size={16}/></button>)}</div><button className="primary full" onClick={() => go('Notes', current.name)}>Open Study Material <BookOpen size={16}/></button></section>}</div></>;
}

function Notes({ search, subjectFilter }) {
  const filtered = notes.filter((n) =>
    (!subjectFilter || n.subject === subjectFilter) &&
    `${n.subject} ${n.code} ${n.unit} ${n.title} ${n.desc}`.toLowerCase().includes(search)
  );
  const [selectedNote, setSelectedNote] = useState(null);

  return <>
    <div className="page-intro"><span className="section-kicker">SYLLABUS-WISE STUDY LIBRARY</span><h1>Notes & Study Material</h1><p>Semester III resources are organized subject-wise and unit-wise from the uploaded CSE syllabus.</p></div>
    <div className="resource-grid">
      {filtered.map((n)=><article className="resource-card" key={`${n.subject}-${n.unit}`}>
        <div className="resource-icon"><BookOpen size={20}/></div>
        <span className="resource-tag">{n.unit}</span>
        <h3>{n.title}</h3>
        <b>{n.subject} · {n.code}</b>
        <p>{n.desc}</p>
        <button className="text-button" onClick={() => setSelectedNote(n)}>Open unit <ChevronRight size={15}/></button>
      </article>)}
    </div>
    {filtered.length===0&&<div className="empty">No study resources match “{search}”.</div>}

    {selectedNote && <div
      role="dialog"
      aria-modal="true"
      aria-label={selectedNote.title}
      onClick={(e) => { if (e.target === e.currentTarget) setSelectedNote(null); }}
      style={{position:'fixed',inset:0,background:'rgba(6,20,46,.58)',display:'grid',placeItems:'center',padding:'20px',zIndex:50}}
    >
      <section style={{width:'min(760px,100%)',maxHeight:'85vh',overflow:'auto',background:'#fff',borderRadius:'16px',border:'1px solid #e2e8f0',padding:'24px',boxShadow:'0 24px 70px rgba(7,21,46,.25)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'16px'}}>
          <div>
            <span className="section-kicker">{selectedNote.unit}</span>
            <h2 style={{margin:'5px 0 4px',fontSize:'22px',color:'#14213d'}}>{selectedNote.title}</h2>
            <div style={{fontSize:'10px',fontWeight:700,color:'#5e7ba2'}}>{selectedNote.subject} · {selectedNote.code}</div>
          </div>
          <button className="text-button" onClick={() => setSelectedNote(null)} aria-label="Close resource"><X size={20}/></button>
        </div>
        <div className="note-content" aria-label="Study material">
          {selectedNote.content.split('\n').map((line, i) => {
            const text = line.trim();
            const isHeading =
              /^\d+\.\s+/.test(text) ||
              /^(IMPORTANT EXAM QUESTIONS|PRACTICAL PRACTICE|QUICK EXAM REVISION|SYLLABUS ALIGNMENT|PRACTICAL PRACTICE|FUNCTION VS RECURSIVE FUNCTION)$/.test(text);
            const isLabel = /^(Example:|Syntax:|General form:|Declaration:|Initialization:|Access example:)$/.test(text);

            if (!text) return <div key={i} className="note-blank" />;

            return (
              <div key={i} className={isHeading ? 'note-heading' : isLabel ? 'note-label' : 'note-line'}>
                {line}
              </div>
            );
          })}
        </div>
        <button className="primary full" style={{marginTop:'16px'}} onClick={() => setSelectedNote(null)}>Close Resource</button>
      </section>
    </div>}
  </>;
}

function Papers() { return <><div className="page-intro"><span className="section-kicker">EXAM PREPARATION</span><h1>Question Papers</h1><p>Practice sets are ready here; replace or extend them with verified college/university papers later.</p></div><div className="paper-list">{papers.map((p)=><article className="paper-row" key={p.subject}><div className="paper-icon"><FileText size={21}/></div><div><strong>{p.subject}</strong><small>{p.semester} · {p.year}</small></div><span>{p.status}</span><button className="secondary dark">Practice <ChevronRight size={15}/></button></article>)}</div></>;
}

function MCQPractice({ mcq,index,selected,score,answer,next }) { const correct=selected!==null&&selected===mcq.answer; return <><div className="page-intro"><span className="section-kicker">OBJECTIVE PRACTICE</span><h1>MCQ Practice</h1><p>Question {index+1} of {mcqs.length} · Score: {score}</p></div><section className="quiz-card"><div className="quiz-meta"><span>{mcq.topic}</span><span>Question {index+1}/{mcqs.length}</span></div><h2>{mcq.q}</h2><div className="option-grid">{mcq.options.map((option,i)=><button key={option} disabled={selected!==null} className={`option ${selected!==null?(i===mcq.answer?'correct':i===selected?'wrong':''):''}`} onClick={()=>answer(i)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{selected!==null&&<div className={correct?'answer-note good':'answer-note'}>{correct?'Correct! Nice work.':`Not quite. The correct answer is ${mcq.options[mcq.answer]}.`}<button className="primary" onClick={next}>Next Question <ChevronRight size={16}/></button></div>}</section></> }

function Planner({tasks,newTask,setNewTask,addTask,toggleTask}) { const done=tasks.filter(t=>t.done).length; return <><div className="page-intro"><span className="section-kicker">PERSONAL PRODUCTIVITY</span><h1>Study Planner</h1><p>Turn your study goals into small, trackable tasks.</p></div><section className="planner-board"><div className="planner-summary"><div><span className="section-kicker">TODAY</span><h2>{done}/{tasks.length} tasks complete</h2></div><div className="planner-progress"><i style={{width:`${tasks.length?done/tasks.length*100:0}%`}}/></div></div><div className="add-task"><input value={newTask} onChange={(e)=>setNewTask(e.target.value)} onKeyDown={(e)=>e.key==='Enter'&&addTask()} placeholder="Add a study target..."/><button className="primary" onClick={addTask}><Plus size={16}/> Add</button></div><div className="task-list">{tasks.map(t=><button className={t.done?'task done':'task'} key={t.id} onClick={()=>toggleTask(t.id)}><CheckCircle2 size={19}/><span><strong>{t.title}</strong><small>{t.subject}</small></span></button>)}</div></section></> }

function AIAssistant({question,setQuestion,answer,loading,ask}) { return <><div className="page-intro"><span className="section-kicker">AI LEARNING</span><h1>AI Study Assistant</h1><p>Ask for explanations, examples, revision plans or exam-style practice. The API key stays on the server.</p></div><section className="ai-card"><div className="ai-header"><div className="ai-avatar"><BrainCircuit size={25}/></div><div><h2>Study with AI</h2><span>Clear explanations • Step-by-step learning</span></div></div><div className="prompt-chips">{['Explain OSI model simply','Give me 10 SQL MCQs','Make a revision plan'].map((p)=><button key={p} onClick={()=>setQuestion(p)}>{p}</button>)}</div><textarea value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask a study question..." rows={5}/><button className="primary ask-button" onClick={ask} disabled={loading||!question.trim()}>{loading?'Thinking...':'Ask AI'} <Send size={16}/></button>{answer&&<div className="ai-answer"><span className="section-kicker">AI RESPONSE</span><div>{answer}</div></div>}</section></> }

createRoot(document.getElementById('root')).render(<App />);
