import React, { useEffect, useMemo, useState } from 'react';
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

13. else WITH LOOPS
Python also allows an else block to be attached to a loop. The loop else block executes when the loop finishes normally without encountering break.

Example:
for i in range(3):
    print(i)
else:
    print("Loop completed")

If break is used before normal completion, the loop's else block is skipped.

14. BREAK VS CONTINUE
break:
• Stops the loop completely.
• Control moves outside the loop.

continue:
• Does not stop the loop completely.
• Skips the rest of the current iteration and continues with the next iteration.

15. CONDITIONAL AND LOOP COMBINATIONS
Conditional statements can be placed inside loops, and loops can be used inside conditional blocks. This allows a program to solve problems that require repeated processing together with decisions.

Example:
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "Even")

Here, the for loop provides repetition and the if statement provides the decision.

16. PROGRAMMING USING CONDITIONAL AND LOOP BLOCKS
A useful approach is:
1) Identify the condition or repeated task.
2) Choose if/else/elif for decisions.
3) Choose for when iterating through a sequence or range.
4) Choose while when repetition depends on a condition.
5) Use break when the loop must stop early.
6) Use continue when the current iteration should be skipped.
7) Keep indentation consistent.

17. QUICK EXAM REVISION
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
college = "CSE Diploma Learning"

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
    { subject:'Data Structures', code:'303', unit:'Unit 4', title:'Linked List', desc:'Detailed Unit 4 notes covering singly linked lists, memory representation, traversal, insertion, deletion, searching, circular linked lists and doubly linked lists.', type:'Detailed Notes',
    content:`Unit 4 — Linked List

1. INTRODUCTION TO LINKED LIST
A linked list is a linear data structure made of nodes. Each node stores data and a link to another node.

Unlike an array, linked-list nodes do not need to occupy contiguous memory locations. Links connect the nodes into a sequence.

Basic idea:
Node → Node → Node → NULL

2. SINGLY LINKED LIST
In a singly linked list, each node has:
• Data field — stores the value.
• Next pointer — stores the address of the next node.

A simple C representation is:

struct Node {
    int data;
    struct Node *next;
};

The last node's next pointer is set to NULL to indicate the end of the list.

3. REPRESENTATION IN MEMORY
Linked-list nodes are dynamically allocated and can exist at different memory locations.

Conceptually:

head
 ↓
[data | next] → [data | next] → [data | NULL]

The head pointer stores the address of the first node.

Because nodes are connected using pointers, the list can grow or shrink by changing links and allocating or releasing nodes as required.

4. TRAVERSAL OF A SINGLY LINKED LIST
Traversal means visiting each node from the first node to the last node.

Basic process:
1) Start at head.
2) Process the current node's data.
3) Move to the next pointer.
4) Repeat until the pointer becomes NULL.

Conceptual C logic:

struct Node *temp = head;
while (temp != NULL) {
    printf("%d ", temp->data);
    temp = temp->next;
}

5. INSERTION IN A SINGLY LINKED LIST
Insertion means adding a new node to the list.

Common insertion positions:
• At the beginning.
• At the end.
• At a specified position or after a specified node.

Insertion at beginning:
1) Create a new node.
2) Store the required data.
3) Set newNode->next = head.
4) Move head to newNode.

Conceptually:
New Node → Old Head

6. INSERTION AT THE END
Basic process:
1) Create a new node and set its next pointer to NULL.
2) If the list is empty, make head point to the new node.
3) Otherwise traverse to the last node.
4) Set the last node's next pointer to the new node.

Conceptually:
Old Last → New Node → NULL

7. INSERTION AT A SPECIFIED POSITION
The basic idea is to reach the node before the required position and adjust the links.

Process:
1) Create the new node.
2) Traverse to the appropriate previous node.
3) Make the new node point to the next node.
4) Make the previous node point to the new node.

Correct link adjustment is important so that no existing node becomes disconnected accidentally.

8. DELETION FROM A SINGLY LINKED LIST
Deletion removes an existing node from the list.

Common cases:
• Delete the first node.
• Delete the last node.
• Delete a node at a specified position or matching a value.

Deletion at beginning:
1) Store the current head in a temporary pointer.
2) Move head to head->next.
3) Release the old first node.

Conceptually:
Before: head → A → B → C
After deleting A: head → B → C

9. DELETION OF A NODE IN THE MIDDLE
To delete a middle node:
1) Locate the node to delete and its previous node.
2) Change the previous node's next pointer so it skips the target node.
3) Release the removed node.

Conceptually:
A → B → C
Delete B
A → C

10. SEARCHING IN A SINGLY LINKED LIST
Searching checks nodes one by one until the required value is found or the end is reached.

Basic process:
1) Start at head.
2) Compare current node data with the target.
3) If equal, report the node/position.
4) Otherwise move to next.
5) Stop at a match or NULL.

Because nodes are followed sequentially, basic linked-list search is commonly O(n) in the worst case.

11. ADVANTAGES OF A LINKED LIST
• Dynamic size.
• Insertion and deletion can be efficient when the required node position is already known and links can be adjusted directly.
• Does not require contiguous memory for all nodes.

12. LIMITATIONS OF A LINKED LIST
• Extra memory is needed for link pointers.
• No direct index-based access like a normal array.
• Traversal is sequential.
• Pointer manipulation makes implementation more complex than simple arrays.

13. CIRCULAR LINKED LIST
In a circular linked list, the last node points back to the first node instead of pointing to NULL.

Conceptually:
head → A → B → C
       ↑       ↓
       └───────┘

This creates a cycle.

14. TRAVERSAL OF A CIRCULAR LINKED LIST
Because there is no NULL at the end, traversal must stop when the pointer reaches the starting node again.

Basic idea:
1) Start at head.
2) Process the current node.
3) Move to next.
4) Stop when the current pointer becomes head again.

A do-while style traversal is often convenient for this structure.

15. USES OF CIRCULAR LINKED LIST
A circular linked list is useful when processing should repeatedly move from the last element back to the first.

Typical examples include:
• Round-robin style processing.
• Repeated cyclic traversal.
• Applications where no natural last node is required.

16. DOUBLY LINKED LIST
A doubly linked list has two links in each node:
• Previous pointer.
• Next pointer.

Example structure:

struct DNode {
    int data;
    struct DNode *prev;
    struct DNode *next;
};

Conceptually:
NULL ← A ⇄ B ⇄ C → NULL

17. REPRESENTATION OF A DOUBLY LINKED LIST
Each node stores:
[data | prev | next]

The prev pointer connects to the previous node, while next connects to the next node.

The first node usually has prev = NULL.
The last node usually has next = NULL.

18. OPERATIONS ON A DOUBLY LINKED LIST
Typical operations include traversal, insertion and deletion.

Because each node has both previous and next links, movement can be performed in both directions.

When inserting or deleting a node, the surrounding prev and next pointers must be updated consistently.

19. SINGLY VS CIRCULAR VS DOUBLY LINKED LIST
Singly linked list:
• One next pointer per node.
• Last node points to NULL.
• Traversal is normally forward.

Circular linked list:
• Last node links back to the first node.
• No NULL at the end of the circular chain.
• Suitable for cyclic processing.

Doubly linked list:
• Two links per node: prev and next.
• Supports movement in both directions.
• Uses more memory than a singly linked list because of the extra pointer.

20. IMPORTANT POINTER IDEA
Linked-list operations work mainly by changing links rather than shifting an entire collection of elements.

For example, to insert B between A and C:
Before:
A → C

After:
A → B → C

Only the relevant links need to be adjusted.

21. QUICK EXAM REVISION
• Linked list = collection of connected nodes.
• Node = data + link(s).
• Head = pointer to the first node.
• Singly linked list = one next pointer.
• Last singly linked-list node points to NULL.
• Traversal = visit nodes one by one.
• Insertion = add a node and adjust links.
• Deletion = remove a node and reconnect links.
• Searching = compare nodes sequentially.
• Circular linked list = last node links to first.
• Doubly linked list = prev + next links.
• Linked lists use non-contiguous memory locations in general.
• Pointer manipulation is central to linked-list operations.

IMPORTANT EXAM QUESTIONS
1. What is a linked list? Explain its basic node structure.
2. Explain the memory representation of a singly linked list.
3. Explain traversal of a singly linked list with an example.
4. Explain insertion at the beginning and end of a singly linked list.
5. Explain insertion at a specified position.
6. Explain deletion from the beginning, end and middle of a singly linked list.
7. Explain searching in a singly linked list.
8. What is a circular linked list? Explain its representation and traversal.
9. What is a doubly linked list? Explain its node structure.
10. Differentiate singly, circular and doubly linked lists.
11. Why is pointer manipulation important in linked-list operations?

PRACTICAL PRACTICE
• Create a singly linked list with multiple nodes.
• Traverse and display all nodes.
• Insert a node at the beginning.
• Insert a node at the end.
• Insert a node at a specified position.
• Delete the first node.
• Delete the last node.
• Delete a selected node.
• Search for a value in the list.
• Create and traverse a circular linked list.
• Create and traverse a doubly linked list.

SYLLABUS ALIGNMENT
This note follows Unit 4 of the uploaded Semester III CSE Data Structures syllabus: Singly Linked List, representation in memory, traversal, insertion, deletion and searching operations on a singly linked list; Circular Linked Lists; and Doubly Linked Lists.` },
    { subject:'Data Structures', code:'303', unit:'Unit 5', title:'Non Linear Data Structure', desc:'Detailed Unit 5 notes covering trees, binary trees, tree terminology, traversals, binary-tree types, graphs, graph representations, BFS and DFS.', type:'Detailed Notes',
    content:`Unit 5 — Non Linear Data Structure

1. INTRODUCTION TO NON-LINEAR DATA STRUCTURES
A non-linear data structure does not arrange elements in one simple sequence. Instead, relationships can be hierarchical or network-like.

This unit focuses on:
• Trees
• Graphs

2. TREES
A tree is a hierarchical data structure made of nodes connected by edges. One node can be the starting/root node, and other nodes can appear at lower levels.

A simple example:
        A
       / \
      B   C

Here A is the root, B and C are below it.

3. BASIC TREE TERMINOLOGIES
The syllabus specifically includes these terms:

Root:
The top/start node of a tree. A tree normally has one root.

Node:
An individual element of a tree.

Edge:
A connection between two related nodes.

Parent:
A node that has one or more child nodes below it.

Child:
A node directly connected below a parent.

Sibling:
Nodes that have the same parent.

Leaf:
A node with no children.

Subtree:
A tree formed from a node and its descendants.

Degree:
The number of children of a node in a rooted tree.

Level:
The position of a node within the hierarchy. The exact numbering convention can vary; always follow the convention used by your teacher or question.

Height:
The length/depth of the longest downward path from a node to a leaf, measured according to the convention being used.

4. BINARY TREE
A binary tree is a tree in which each node has at most two children, commonly called the left child and right child.

Example:
        10
       /  \
      5    15
     / \
    2   7

Each node can have zero, one or two children.

5. REPRESENTATION OF A BINARY TREE USING ARRAYS
A binary tree can be represented in an array by assigning positions to nodes according to a chosen indexing scheme.

For a common zero-based scheme:
• Root at index 0.
• Left child of node at index i → 2i + 1.
• Right child of node at index i → 2i + 2.
• Parent of a non-root node at index i → floor((i - 1) / 2).

For:
        A
       / \
      B   C

The array can conceptually be:
index: 0  1  2
value: A  B  C

Array representation is especially convenient for complete or nearly complete binary trees.

6. BINARY TREE INSERTION
Insertion means adding a new node while preserving the required binary-tree structure.

The exact insertion process depends on the type of binary tree and the representation being used.

For a simple level-order style binary tree, a new node may be placed at the next available position.

Example:
Before:
    A
   / \
  B   C

Insert D:
    A
   / \
  B   C
 /
D

The important point is that the operation must preserve the rules of the particular binary tree being used.

7. BINARY TREE DELETION
Deletion means removing a node from a binary tree while maintaining the required structure.

The exact algorithm depends on the type of binary tree.

In exam questions, clearly identify the tree type and the deletion rule before performing the operation.

8. TREE TRAVERSALS
Traversal means visiting tree nodes in a particular order.

The three basic traversal orders are:

Preorder:
Root → Left subtree → Right subtree

Inorder:
Left subtree → Root → Right subtree

Postorder:
Left subtree → Right subtree → Root

Example:
        A
       / \
      B   C

Preorder = A, B, C
Inorder = B, A, C
Postorder = B, C, A

A level-order traversal visits nodes level by level from top to bottom.

9. TYPES OF BINARY TREES — FULL
A full binary tree is a binary tree in which every node has either 0 children or 2 children.

No node has exactly one child.

10. COMPLETE BINARY TREE
A complete binary tree has every level completely filled except possibly the last level, and the last level is filled from left to right.

This property makes array representation particularly useful.

11. PERFECT BINARY TREE
A perfect binary tree has all internal nodes with two children and all leaf nodes at the same level.

For a perfect binary tree with height h under the common root-at-height-0 convention:
Number of nodes = 2^(h+1) - 1.

12. BALANCED BINARY TREE
A balanced binary tree keeps its left and right subtree heights sufficiently close according to the balancing rule being used.

The purpose of balancing is to avoid excessive height and keep tree operations efficient.

13. FULL VS COMPLETE VS PERFECT VS BALANCED
Full:
Every node has either 0 or 2 children.

Complete:
All levels except possibly the last are full, and the last is filled from left to right.

Perfect:
All internal nodes have two children and all leaves are at the same level.

Balanced:
Tree height is kept under control so the subtrees remain suitably balanced according to the definition being used.

14. GRAPHS
A graph is a non-linear data structure consisting of vertices and edges that represent relationships between objects.

Conceptually:
A — B
|   |
C — D

The vertices are the objects and the edges represent relationships.

15. VERTICES
A vertex is an individual point or node in a graph.

Example:
In a graph with A, B and C, A, B and C are vertices.

16. EDGES
An edge is a connection between two vertices.

Example:
A — B

The line represents an edge connecting A and B.

17. DEGREE OF A VERTEX
The degree of a vertex is the number of edges incident on that vertex in an undirected graph.

Example:
A connected to B, C and D.
Degree of A = 3.

For directed graphs, indegree and outdegree are commonly distinguished.

18. WALKS, PATHS AND CYCLES
Walk:
A sequence of vertices where consecutive vertices are connected by edges. A walk may repeat vertices or edges.

Path:
A route through connected vertices; in common basic usage, a path does not repeat vertices.

Cycle:
A closed path that starts and ends at the same vertex.

These definitions may use slightly different conventions in advanced graph theory, so follow the terminology used in your class.

19. DIRECTED AND UNDIRECTED GRAPHS
Directed graph:
Edges have a direction.

Example:
A → B

Undirected graph:
Edges do not have a direction.

Example:
A — B

20. GRAPH REPRESENTATION — SET
The syllabus lists a Set representation. A set can describe the vertex and edge collections of a graph.

For example:
V = {A, B, C}
E = {{A,B}, {B,C}}

This records the vertices and edges as sets.

21. GRAPH REPRESENTATION — LINKED
A linked representation stores graph relationships using linked structures. A common implementation is an adjacency-list style structure where each vertex maintains a linked list of its neighboring vertices.

Conceptually:
A → B → C
B → A → C
C → A → B

The exact linked representation can vary with implementation.

22. GRAPH REPRESENTATION — MATRIX
An adjacency matrix uses a two-dimensional matrix to record whether an edge exists between two vertices.

For an undirected graph:
    A B C
A   0 1 0
B   1 0 1
C   0 1 0

A 1 means an edge is present and 0 means no edge under this simple unweighted representation.

23. BREADTH FIRST SEARCH — BFS
BFS visits graph vertices in breadth-wise order, exploring nearby vertices before moving to vertices farther away.

A queue is commonly used.

Basic process:
1) Choose a starting vertex.
2) Mark it visited and enqueue it.
3) Remove a vertex from the queue.
4) Visit each unvisited adjacent vertex and enqueue it.
5) Repeat until the queue is empty.

Example:
Graph:
A — B
|   |
C — D

Starting at A, one possible BFS order is:
A, B, C, D

The exact order can depend on the order in which adjacent vertices are stored.

24. DEPTH FIRST SEARCH — DFS
DFS explores as far as possible along one branch before backtracking.

A stack or recursion is commonly used.

Basic process:
1) Choose a starting vertex.
2) Mark it visited.
3) Visit an unvisited adjacent vertex.
4) Continue deeper while possible.
5) Backtrack when no unvisited adjacent vertex remains.

Using the same graph, one possible DFS order from A is:
A, B, D, C

Again, the exact traversal order depends on the adjacency order.

25. BFS VS DFS
BFS:
• Breadth-wise exploration.
• Commonly uses a queue.
• Visits closer layers before deeper layers.

DFS:
• Depth-wise exploration.
• Commonly uses a stack or recursion.
• Explores a branch before backtracking.

26. TREES VS GRAPHS
Tree:
• Hierarchical structure.
• A connected tree with n nodes has n - 1 edges.
• Has a root in the rooted-tree representation.
• No cycles in a tree.

Graph:
• General network structure.
• Can be directed or undirected.
• May contain cycles.
• Can have many different numbers of edges depending on the graph.

27. QUICK EXAM REVISION
• Tree = hierarchical non-linear structure.
• Root = top/start node.
• Node = individual tree element.
• Edge = connection.
• Parent = node above a child.
• Child = node directly below a parent.
• Sibling = nodes with the same parent.
• Leaf = node with no children.
• Subtree = tree formed by a node and descendants.
• Degree = number of children of a node in a rooted tree.
• Level = position in the hierarchy.
• Height = longest downward path/depth measure under the chosen convention.
• Binary tree = at most two children per node.
• Preorder = Root, Left, Right.
• Inorder = Left, Root, Right.
• Postorder = Left, Right, Root.
• Full = 0 or 2 children.
• Complete = last level filled left to right.
• Perfect = all internal nodes have 2 children and leaves are at same level.
• Balanced = height kept under control.
• Graph = vertices + edges.
• Degree = number of incident edges in an undirected graph.
• Walk may repeat vertices/edges.
• Path is a connected route, commonly without repeated vertices.
• Cycle = closed route back to starting vertex.
• BFS = queue-based breadth-wise traversal.
• DFS = stack/recursion-based depth-wise traversal.

IMPORTANT EXAM QUESTIONS
1. What is a non-linear data structure? Give examples.
2. Explain a tree and define root, node, edge, parent, child, sibling, leaf, subtree, degree, level and height.
3. What is a binary tree?
4. Explain array representation of a binary tree.
5. Explain insertion, deletion and traversal of a binary tree.
6. Explain preorder, inorder and postorder traversals with an example.
7. Differentiate full, complete, perfect and balanced binary trees.
8. Define a graph. Explain vertices, edges and degree.
9. Explain walk, path and cycle.
10. Differentiate directed and undirected graphs.
11. Explain graph representations using set, linked and matrix forms.
12. Explain BFS with an example.
13. Explain DFS with an example.
14. Differentiate BFS and DFS.
15. Differentiate trees and graphs.

PRACTICAL PRACTICE
• Implement a binary tree of integers.
• Perform preorder, inorder and postorder traversal.
• Practice binary-tree insertion and deletion according to the selected tree structure.
• Implement BFS for a graph.
• Implement DFS for a graph.
• Represent a graph using an adjacency-style matrix.
• Find the minimum depth of a binary tree.

SYLLABUS ALIGNMENT
This note follows Unit 5 of the uploaded Semester III CSE Data Structures syllabus: Trees with basic terminologies (root, nodes, edges, parent, child, sibling, leaf, subtree, degree, level and height); Binary Trees; array representation; insertion, deletion and traversals; full, complete, perfect and balanced binary trees; Graphs with vertices, edges, degree, walks, paths and cycles; graph representations listed as Set, Linked and Matrix; and graph traversals BFS and DFS. The syllabus also includes practicals for binary trees, BFS and DFS.` },
    { subject:'Computer System Organisation', code:'304', unit:'Unit 1', title:'Basic Computer Structure', desc:'Detailed Unit 1 notes covering computer functional blocks, architectures, buses, number systems, registers, instruction cycle, RTL, microoperations and data representation.', type:'Detailed Notes',
    content:`Unit 1 — Basic Computer Structure

1. FUNCTIONAL BLOCKS OF A DIGITAL COMPUTER
A digital computer can be understood as a set of functional blocks that work together to accept data, process it, store it and produce results.

Main functional blocks:
• CPU — performs processing and controls program execution.
• Memory — stores instructions and data.
• Input unit — supplies data and instructions to the computer.
• Output unit — presents processed information.
• Control unit — coordinates the activities of the computer and generates control signals.

The CPU mainly contains the control unit, arithmetic and logic circuitry, and registers.

2. CPU
The Central Processing Unit is the main processing section of a computer. It executes instructions and controls the sequence of operations.

Major CPU elements:
• ALU — performs arithmetic and logical operations.
• Control Unit — directs and coordinates instruction execution.
• Registers — very fast storage locations used during processing.

Basic instruction flow:
Fetch → Decode → Execute

3. MEMORY
Memory stores instructions, data and intermediate/final results.

A simple hierarchy is:
Registers → Cache → Main Memory → Secondary Storage

Higher levels are generally faster and smaller, while lower levels are generally slower and larger.

The syllabus specifically focuses on the basic computer structure and the role of memory as a functional block.

4. INPUT AND OUTPUT
Input devices provide data to the computer. Output devices present processed information to the user or another system.

Examples:
• Input — keyboard, mouse, sensors.
• Output — monitor, printer, display devices.

Input/Output operations allow the computer system to communicate with the outside world.

5. CONTROL UNIT
The Control Unit coordinates the activities of the processor. It interprets instructions and generates signals that control data movement and the sequence of operations.

It does not normally perform arithmetic calculations itself; that role is primarily handled by the ALU.

6. VON NEUMANN ARCHITECTURE
In the Von Neumann model, instructions and data share the same main memory and memory path.

Basic idea:
CPU ↔ Shared Memory ↔ Input/Output

Important feature:
• A common memory stores both instructions and data.

7. HARVARD ARCHITECTURE
In the Harvard model, instructions and data use separate memory arrangements and, conceptually, separate paths.

Basic idea:
Instruction Memory ↔ CPU ↔ Data Memory

Important feature:
• Instruction and data storage are separated.

8. VON NEUMANN VS HARVARD
Von Neumann:
• One shared memory for instructions and data.
• Shared path can become a communication bottleneck.
• Simpler unified memory model.

Harvard:
• Separate instruction and data memories/paths.
• Can allow instruction and data transfers to occur more independently.
• Uses a separate organization for instructions and data.

9. VON NEUMANN BOTTLENECK
The Von Neumann bottleneck refers to the limitation caused by the shared path between the processor and memory when instructions and data compete for access.

The effect is that processor speed can be greater than the rate at which instructions/data can be supplied from memory.

10. BUS STRUCTURES
A bus is a communication pathway used to transfer information between computer components.

The syllabus identifies three basic buses:

Data Bus:
Carries data between components.

Address Bus:
Carries the address that identifies the memory or I/O location involved in an operation.

Control Bus:
Carries control and timing signals that coordinate operations.

11. BASIC BUS OPERATION
When the CPU needs to read data from memory, an address is placed on the address bus and appropriate control signals are generated. The memory returns the requested data over the data bus.

A memory write operation similarly uses the address bus for the destination address, the data bus for the value and control signals to indicate a write.

12. NUMBER SYSTEMS
The syllabus includes:
• Decimal
• Binary
• Octal
• Hexadecimal

Decimal:
Base 10, digits 0–9.

Binary:
Base 2, digits 0 and 1.

Octal:
Base 8, digits 0–7.

Hexadecimal:
Base 16, digits 0–9 and A–F.

13. NUMBER SYSTEM CONVERSION
Conversion changes a number from one base to another while representing the same value.

Example:
Decimal 10 = Binary 1010
Decimal 10 = Octal 12
Decimal 10 = Hexadecimal A

For decimal-to-binary conversion, repeated division by 2 can be used and the remainders are read in reverse order.

14. REGISTERS
Registers are small, high-speed storage locations inside the CPU.

They temporarily hold data, addresses, instructions or intermediate results during instruction execution.

15. TYPES OF REGISTERS AND THEIR FUNCTIONS
Common examples include:
• Program Counter (PC) — holds the address of the next instruction to be fetched.
• Instruction Register (IR) — holds the instruction currently being decoded/executed.
• Memory Address Register (MAR) — holds a memory address involved in an operation.
• Memory Data Register (MDR) — holds data being transferred to/from memory.
• Accumulator — commonly used to hold intermediate arithmetic/logic results in suitable processor designs.
• General-purpose registers — hold temporary operands and intermediate values.

Register names and exact organization can vary between processor architectures.

16. INSTRUCTION CYCLE
The instruction cycle is the sequence of steps through which a processor processes an instruction.

At a basic level:
1) Fetch — obtain the instruction from memory.
2) Decode — determine what the instruction means.
3) Execute — perform the required operation.
4) Store/write back — place the result where required, when applicable.

The control unit coordinates these steps.

17. REGISTER TRANSFER
Register transfer means moving data from one register to another.

Conceptual notation:
R2 ← R1

This means the contents of R1 are transferred to R2.

18. BUS AND MEMORY TRANSFER
Register transfer can occur through internal buses, while memory transfer involves communication between CPU registers and memory.

Typical memory-read idea:
MAR ← address
Memory read
MDR ← memory data

The exact control signals and timing depend on the processor architecture.

19. RTL — REGISTER TRANSFER LANGUAGE
Register Transfer Language (RTL) is a symbolic notation used to describe data transfers and microoperations at the register level.

Examples:
R2 ← R1
R3 ← R1 + R2

RTL helps describe what happens during a processor operation without writing a complete program.

20. MICROOPERATIONS
A microoperation is a basic operation performed on data stored in registers.

The syllabus covers:
• Arithmetic microoperations.
• Logical microoperations.
• Shift microoperations.

21. ARITHMETIC MICROOPERATIONS
Arithmetic microoperations perform numerical operations on register contents.

Examples:
R3 ← R1 + R2
R1 ← R1 + 1
R2 ← R2 - 1

Typical arithmetic microoperations include addition, subtraction, increment and decrement.

22. LOGICAL MICROOPERATIONS
Logical microoperations perform bit-by-bit logical operations.

Examples:
R3 ← R1 AND R2
R3 ← R1 OR R2
R3 ← R1 XOR R2
R2 ← NOT R1

These are useful for manipulating individual bits or groups of bits.

23. SHIFT MICROOPERATIONS
Shift microoperations move the bits in a register left or right.

Types commonly discussed:
• Logical shift.
• Arithmetic shift.
• Circular shift.

Logical left shift:
Bits move toward the left and zeros are introduced at the vacated positions, under the chosen fixed-width representation.

Arithmetic right shift:
The sign bit is preserved in signed representations while bits shift right.

Circular shift:
Bits shifted out from one end are reintroduced at the other end.

24. ALU
The Arithmetic Logic Unit performs arithmetic and logical operations on data.

Typical operations include:
• Addition and subtraction.
• AND, OR and related logical operations.
• Comparisons and other processor-specific operations.

The ALU works with registers and control signals to complete processor operations.

25. ARITHMETIC LOGICAL SHIFT UNIT
An arithmetic logical shift unit combines arithmetic, logical and shift capabilities in a processor datapath.

It can perform selected operations on register data based on control inputs.

26. FIXED-POINT REPRESENTATION
Fixed-point representation stores numbers with an implied, fixed position for the radix point.

The syllabus includes fixed-point representation of:
• Integers.
• Decimal numbers.

The main idea is that the number of bits allocated to the integer and fractional parts is predetermined.

27. FLOATING-POINT REPRESENTATION
Floating-point representation stores a number using components that represent its sign, significand/fraction and exponent.

It is useful for representing a wide range of very small and very large values.

The exact bit layout depends on the floating-point format/architecture being used.

28. NEGATIVE NUMBER REPRESENTATION — SIGN BIT
A sign-bit representation uses one bit to indicate the sign of a number and the remaining bits for its magnitude.

A common conceptual form is:
0 → positive
1 → negative

The exact handling of zero and arithmetic behavior depends on the representation scheme.

29. 1’S COMPLEMENT
In 1’s complement representation, the bits of a binary number are inverted to form the complement representation.

Example:
Binary:     00001010
1’s comp:   11110101

For fixed-width representations, sign and arithmetic rules must be considered when using 1’s complement.

30. 2’S COMPLEMENT
In 2’s complement representation, the negative form of a number is obtained by taking the 1’s complement and adding 1.

Example using 8 bits:
+5 = 00000101
1’s complement = 11111010
Add 1 = 11111011

So -5 is represented as 11111011 in 8-bit 2’s complement.

31. 1’S COMPLEMENT VS 2’S COMPLEMENT
1’s complement:
• Inverts every bit.
• Has separate positive and negative zero representations in the conventional form.
• End-around carry is relevant in its arithmetic.

2’s complement:
• Inverts every bit and adds 1.
• Has a single zero representation.
• Makes binary addition/subtraction convenient for signed arithmetic.

32. ADDITION USING 2’S COMPLEMENT
To perform signed subtraction using 2’s complement:
1) Represent the numbers using the same fixed width.
2) Take the 2’s complement of the number being subtracted.
3) Add it to the first number.
4) Interpret the result according to the fixed-width signed representation.
5) Handle carry/overflow according to the representation.

Example:
7 - 3

7  = 00000111
3  = 00000011
2’s complement of 3:
11111100 + 1 = 11111101

Add:
00000111
11111101
---------
00000100

Result = 4.

33. SUBTRACTION USING 2’S COMPLEMENT
For A - B:
A - B = A + (2’s complement of B)

Example:
5 - 8

5 = 00000101
8 = 00001000
2’s complement of 8:
11111000

Add:
00000101
11111000
---------
11111101

In 8-bit 2’s complement, 11111101 represents -3.

34. OVERFLOW IN SIGNED ARITHMETIC
Overflow occurs when the mathematical result cannot be represented in the available number of signed bits.

For 2’s complement arithmetic, adding two positive numbers and getting a negative result, or adding two negative numbers and getting a positive result, is a common indication of signed overflow.

35. QUICK EXAM REVISION
• CPU = executes instructions and controls processing.
• ALU = arithmetic and logical operations.
• Control Unit = coordinates operations.
• Register = fast CPU storage.
• Von Neumann = shared instruction/data memory.
• Harvard = separate instruction/data memory organization.
• Von Neumann bottleneck = limitation from shared instruction/data path.
• Data bus = carries data.
• Address bus = carries addresses.
• Control bus = carries control signals.
• Decimal = base 10.
• Binary = base 2.
• Octal = base 8.
• Hexadecimal = base 16.
• PC = address of next instruction.
• IR = current instruction.
• MAR = memory address.
• MDR = memory data.
• RTL = notation for register-level transfers/microoperations.
• Arithmetic microoperations = arithmetic on register data.
• Logical microoperations = bitwise logical operations.
• Shift microoperations = move bits left/right/circularly.
• Fixed-point = fixed radix-point position.
• Floating-point = significand/fraction + exponent style representation.
• 1’s complement = invert bits.
• 2’s complement = invert bits + 1.
• 2’s complement can be used for signed addition and subtraction.

IMPORTANT EXAM QUESTIONS
1. Explain the functional blocks of a digital computer.
2. Explain Von Neumann and Harvard architectures and the Von Neumann bottleneck.
3. Explain data, address and control buses.
4. Explain decimal, binary, octal and hexadecimal number systems with conversions.
5. What are registers? Explain common register types and their functions.
6. Explain the instruction cycle.
7. What is register transfer? Explain RTL with examples.
8. Explain arithmetic, logical and shift microoperations.
9. Explain the functions of the ALU and arithmetic logical shift unit.
10. Explain fixed-point and floating-point representation.
11. Explain sign-bit, 1’s complement and 2’s complement representations of negative numbers.
12. Perform binary addition/subtraction using 2’s complement.
13. What is signed arithmetic overflow?

PRACTICAL / NUMERICAL PRACTICE
• Convert decimal numbers to binary, octal and hexadecimal and vice versa.
• Practice register-transfer and RTL expressions.
• Perform arithmetic, logical and shift microoperations on sample bit patterns.
• Represent positive and negative numbers using sign bit, 1’s complement and 2’s complement.
• Solve binary addition and subtraction using 2’s complement.
• Identify possible signed overflow cases.

SYLLABUS ALIGNMENT
This note follows Unit 1 of the uploaded Semester III CSE Computer System Organisation syllabus: functional blocks (CPU, Memory, Input/Output, Control Unit); Von Neumann vs Harvard architectures and bottleneck; Data, Address and Control buses; Decimal, Binary, Octal and Hexadecimal number systems and conversion; registers, types and functions, and instruction cycle; Register Transfer, Bus and Memory Transfer, RTL; Arithmetic, Logical and Shift microoperations; ALU and Arithmetic Logical Shift Unit; and data representation through fixed-point, floating-point, sign-bit, 1’s complement and 2’s complement methods, including arithmetic addition and subtraction using 2’s complement.` },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 2', title:'Instruction Set Architecture', desc:'Detailed Unit 2 notes covering instruction code, addressing modes, assembly and machine code, instruction cycle, register and stack organization, instruction formats, instruction categories, interrupts, RISC/CISC, pipeline, vector processing and array processing.', type:'Detailed Notes',
    content:`Unit 2 — Instruction Set Architecture

1. INSTRUCTION SET ARCHITECTURE (ISA)
Instruction Set Architecture (ISA) is the programmer-visible description of how a processor understands and executes instructions. It defines the instruction set, instruction formats, registers, addressing modes and rules for accessing data and memory.

The ISA acts as an interface between software and processor hardware. Programs use the instructions and rules defined by the target processor architecture.

2. INSTRUCTION CODE
An instruction code is the encoded information that tells the CPU what operation to perform and, when required, where the operands are located. An instruction generally contains an operation code (opcode) and operand/address information.

Opcode — specifies the operation, such as ADD, SUB, LOAD or STORE.
Operand/address fields — specify the data, register or memory location involved in the operation.

Conceptually:
Instruction = Opcode + Operand / Address information

3. ADDRESSING MODES
An addressing mode specifies how the operand of an instruction is located or obtained. Different modes provide different ways to access data.

Common addressing modes:
• Immediate — the operand value is included in the instruction. Example idea: MOV R1, #10
• Direct — the instruction contains the memory address of the operand.
• Register — the operand is stored in a register named in the instruction.
• Register indirect — a register contains the address of the operand.
• Indexed — an effective address is formed using an index value with a base address.

The exact addressing modes depend on the processor ISA. The key idea is that the addressing mode tells the CPU how to find the required operand.

4. ASSEMBLY CODE VS MACHINE CODE
Machine code is the encoded instruction representation executed directly by the processor. Assembly language uses human-readable mnemonics and symbols to represent machine instructions.

Example idea:
Assembly: ADD R1, R2
Machine code: the corresponding binary/encoded instruction for the target processor

An assembler translates assembly language into machine code.

5. INSTRUCTION CYCLE
The instruction cycle is the sequence of steps used by the CPU to process an instruction. A general instruction cycle includes fetching the instruction, decoding it, obtaining required operands, executing the operation and storing the result when needed.

Basic stages:
1) Fetch — obtain the instruction from memory.
2) Decode — determine the operation and required operands.
3) Operand access — obtain required data/register values when necessary.
4) Execute — perform the specified operation.
5) Store/Write back — place the result in the required destination when applicable.

6. TIMING AND CONTROL
Timing and control coordinate the sequence of operations inside the CPU. Control signals determine when registers are loaded, data is transferred, the ALU performs an operation, and memory or I/O operations occur.

A clock provides the timing reference. The control unit uses the instruction and timing information to generate the required control signals for each step of execution.

7. GENERAL REGISTER ORGANIZATION
General-purpose registers are fast storage locations inside the CPU used to hold operands, intermediate results and other working data. General register organization connects registers with selection/control logic and the ALU so data can be transferred and processed.

Typical parts:
• General-purpose registers
• Selection/control logic for source and destination registers
• ALU for arithmetic and logical operations
• Control signals for register transfers and ALU operations

Example concept:
R3 ← R1 + R2
Here R1 and R2 provide operands and the ALU produces a result stored in R3.

8. STACK ARCHITECTURE
A stack is a Last-In, First-Out (LIFO) storage structure. The most recently stored item is the first item removed.

Main operations:
• PUSH — places an item on the top of the stack.
• POP — removes an item from the top of the stack.

The Stack Pointer (SP) identifies the current top position of the stack. Stack architecture is useful for temporary storage, procedure/function calls, return addresses and expression evaluation.

9. INSTRUCTION SET
An instruction set is the collection of machine instructions supported by a processor. For this syllabus, important instruction categories are:
• Data Transfer Instructions
• Data Manipulation Instructions
• Program Control Instructions

10. INSTRUCTION FORMAT
Instruction format describes how instruction fields are arranged, especially the opcode and operand/address fields. Based on the number of explicit addresses/operands, the syllabus includes four formats.

THREE-ADDRESS INSTRUCTION
A three-address instruction explicitly specifies three operands/addresses, commonly two source operands and one destination.
Example idea:
ADD R1, R2, R3
Meaning: R1 ← R2 + R3

TWO-ADDRESS INSTRUCTION
A two-address instruction uses two explicitly specified operands, with one operand commonly serving as both source and destination.
Example idea:
ADD R1, R2
Meaning: R1 ← R1 + R2

ONE-ADDRESS INSTRUCTION
A one-address instruction uses one explicit address and commonly relies on an accumulator or another implicit operand.
Example idea:
ADD X
Meaning: ACC ← ACC + M[X]

ZERO-ADDRESS INSTRUCTION
A zero-address instruction uses implicit operands, typically the top elements of a stack.
Example idea:
ADD
Meaning: combine the required top stack operands and place the result back on the stack.

11. DATA TRANSFER INSTRUCTIONS
Data transfer instructions move data from one location to another without changing the meaning of the data. Depending on the ISA, transfers may occur between registers, memory and registers, or other supported locations.

Examples of operations:
• LOAD — move data from memory to a register.
• STORE — move data from a register to memory.
• MOVE — transfer data between supported registers/locations.

12. DATA MANIPULATION INSTRUCTIONS
Data manipulation instructions process or change data. They commonly include arithmetic, logical, shift and comparison operations supported by the instruction set.

Examples:
• ADD / SUB — arithmetic operations
• AND / OR / XOR — logical/bitwise operations
• SHIFT / ROTATE — bit-position operations
• COMPARE — compares operand values and updates relevant status information

13. PROGRAM CONTROL INSTRUCTIONS
Program control instructions change the normal sequence of instruction execution. They are used for decisions, repetition, procedure calls and returns.

Examples include:
• Branch / jump
• Conditional branch
• CALL
• RETURN

A branch instruction changes the next instruction address according to the instruction and, when applicable, its condition.

14. INTERRUPTS AND INTERRUPT HANDLING
An interrupt is a request for the CPU to temporarily stop its normal program sequence and service an event that needs attention. Depending on the system, interrupts may be generated by hardware or software.

Basic interrupt handling sequence:
1) Interrupt request occurs.
2) CPU recognizes and accepts the interrupt when permitted.
3) CPU saves the necessary program state.
4) Control transfers to an Interrupt Service Routine (ISR).
5) ISR services the event.
6) Saved state is restored and the interrupted program resumes.

Interrupts allow the processor to respond to events without continuously checking each device through polling.

15. RISC
RISC means Reduced Instruction Set Computer. RISC designs generally use a smaller, simpler instruction set with emphasis on simple instructions and efficient execution.

General characteristics:
• Relatively simple instruction formats
• Many operations designed to execute efficiently
• Strong use of registers
• Load/store approach is commonly associated with RISC designs

16. CISC
CISC means Complex Instruction Set Computer. CISC designs provide a larger and more varied instruction set, including instructions that may perform more complex operations.

General characteristics:
• Large instruction set
• More varied instruction formats and addressing possibilities
• Some instructions may perform multi-step or complex operations

17. RISC VS CISC
RISC and CISC are different instruction-set design approaches. The comparison focuses on instruction complexity, instruction format, addressing possibilities and how much work an individual instruction may perform.

RISC — simpler instructions and regular/simple formats are common; efficient execution is emphasized.
CISC — more complex and varied instructions are provided; some operations can be expressed in fewer instructions.

The exact implementation depends on the processor architecture, and modern processors may combine ideas from both approaches internally.

18. PIPELINE ARCHITECTURE
Pipeline architecture divides instruction processing into stages so that different instructions can be in different stages at the same time. This overlaps work on multiple instructions and can increase instruction throughput.

Simple conceptual pipeline:
Fetch → Decode → Execute → Memory → Write Back

Example:
While instruction 1 is in Execute, instruction 2 can be in Decode and instruction 3 can be in Fetch.

Pipelining improves throughput, but hazards and dependencies can reduce the ideal speedup.

19. VECTOR PROCESSING
Vector processing performs the same type of operation on multiple data elements treated as a vector. It is useful when the same operation must be repeated over a sequence of values.

Example idea:
C[i] = A[i] + B[i]
A vector-oriented processor can process multiple elements of A and B efficiently as part of vector operations.

20. ARRAY PROCESSING
Array processing is a method of processing multiple data elements arranged as an array using parallel or organized operations. It is useful for problems involving large collections of similar data.

Example applications include matrix and image-related computations where the same type of operation is performed on many array elements.

21. VECTOR PROCESSING VS ARRAY PROCESSING
Vector processing treats a sequence of data elements as a vector and applies operations across the elements. Array processing emphasizes processing many array elements, often using parallel processing resources. The exact implementation depends on the processor architecture.

22. QUICK EXAM REVISION
• ISA = programmer-visible rules and instruction set of a processor.
• Instruction code = encoded information specifying the operation and operand/address information.
• Addressing mode = method used to locate an operand.
• Assembly language = symbolic representation of machine instructions.
• Machine code = processor-executable encoded instructions.
• Instruction cycle = fetch → decode → operand access → execute → write back/store, as applicable.
• General registers = fast CPU storage for operands/intermediate results.
• Stack = LIFO structure using PUSH and POP.
• Three-address = three explicit operands/addresses.
• Two-address = two explicit operands/addresses.
• One-address = one explicit address with an implicit operand such as ACC.
• Zero-address = operands are implicit, typically stack-based.
• Data transfer = move data.
• Data manipulation = process/change data.
• Program control = change execution sequence.
• Interrupt = request for CPU attention and service routine execution.
• RISC = reduced, simpler instruction-set approach.
• CISC = complex, larger instruction-set approach.
• Pipeline = overlap instruction-processing stages.
• Vector processing = operate on multiple vector elements.
• Array processing = organized/parallel processing of array elements.

IMPORTANT EXAM QUESTIONS
1. Define Instruction Set Architecture (ISA).
2. What is an instruction code? Explain opcode and operand/address fields.
3. Explain addressing modes with suitable examples.
4. Differentiate assembly language and machine code.
5. Explain the instruction cycle, timing and control.
6. Explain general register organization.
7. What is stack architecture? Explain PUSH and POP.
8. Explain three-address, two-address, one-address and zero-address instruction formats with examples.
9. Explain data transfer, data manipulation and program control instructions.
10. What is an interrupt? Explain the basic interrupt handling sequence.
11. Differentiate RISC and CISC.
12. Explain pipeline architecture with a simple stage diagram.
13. Explain vector processing and array processing.
14. Compare vector processing and array processing.

PRACTICAL / CONCEPT PRACTICE
• Identify opcode and operand/address fields in sample instruction formats.
• Identify the addressing mode used by a sample instruction.
• Express a simple arithmetic statement in three-address, two-address, one-address and zero-address forms.
• Trace fetch-decode-execute for a simple instruction.
• Draw a stack and show PUSH/POP operations.
• Draw a simple five-stage pipeline and trace three instructions through it.
• Practice short-answer explanations for interrupts, RISC/CISC, vector processing and array processing.

SYLLABUS ALIGNMENT: This note follows Unit 2 of the uploaded Semester III CSE Computer System Organisation syllabus: instruction code and addressing modes; assembly vs machine code; instruction cycle, timing and control; general register organization and stack architecture; instruction set and three/two/one/zero-address instruction formats; data transfer, data manipulation and program control instructions; interrupts and interrupt handling; RISC and CISC; pipeline architecture; vector processing; and array processing.` },  { subject:'Computer System Organisation', code:'304', unit:'Unit 3', title:'Control Unit Organization', desc:'Detailed Unit 3 notes covering control signals, hardwired and microprogrammed control, microinstructions, horizontal and vertical formats, control memory, address sequencing and comparison with examples.', type:'Detailed Notes',
    content:`Unit 3 — Control Unit Organization

1. ROLE OF THE CONTROL UNIT
The Control Unit (CU) coordinates the activities of the processor during instruction execution. It interprets the instruction and generates control signals that tell different parts of the CPU when and how to perform their operations.

Main responsibilities:
• Control the sequence of instruction execution.
• Generate control signals for registers, ALU, memory and I/O operations.
• Control movement of data between CPU components.
• Coordinate the timing of processor operations.

The control unit does not normally perform arithmetic calculations itself. It controls the units that perform those operations.

2. CONTROL SIGNALS
Control signals are signals generated by the control unit to coordinate operations inside the computer.

Examples of actions controlled by control signals:
• Load a value into a register.
• Enable a register to place data on a bus.
• Select an ALU operation.
• Read from memory.
• Write to memory.
• Increment the Program Counter.
• Transfer control to another operation.

Conceptually:
Instruction + Timing information → Control Unit → Control signals → CPU operations

3. TYPES OF CONTROL UNIT
The two main approaches covered in this syllabus are:
• Hardwired Control Unit
• Microprogrammed Control Unit

Both generate control signals, but they use different methods to produce them.

4. HARDWIRED CONTROL UNIT — CONCEPT
In a hardwired control unit, control signals are generated by fixed hardware such as logic gates, decoders, counters and other sequential/combinational circuits.

The required control logic is built directly into the hardware.

Basic idea:
Instruction Register + Timing/State information → Control Logic → Control signals

5. HARDWIRED CONTROL UNIT — WORKING
The instruction opcode is decoded to determine the required operation. Timing/state signals indicate the current step of the instruction cycle. The hardwired logic combines these inputs and produces the control signals required for that step.

Example concept:
If an instruction requires a memory read, the control logic generates signals that:
1) place the required address on the address path,
2) activate the memory-read operation,
3) load the returned data into the appropriate register.

6. HARDWIRED CONTROL UNIT — ADVANTAGES
• Fast control-signal generation because signals are produced directly by hardware logic.
• Suitable when the instruction set and control requirements are stable.
• Can provide efficient operation for a fixed design.

7. HARDWIRED CONTROL UNIT — LIMITATIONS
• Design can become complex when the instruction set and control requirements are large.
• Modifying the control logic may require hardware redesign.
• Less flexible than a microprogrammed approach for changing control sequences.

8. MICROPROGRAMMED CONTROL UNIT — CONCEPT
In a microprogrammed control unit, control signals are generated using microinstructions stored in control memory.

Instead of implementing every control sequence only with fixed logic, the control unit uses a sequence of microinstructions. Each microinstruction specifies control actions for a particular step.

Basic idea:
Instruction → Microprogram / Microinstructions → Control signals

9. MICROPROGRAMMED CONTROL UNIT — ARCHITECTURE
A typical microprogrammed control organization contains:
• Control Memory — stores microinstructions.
• Control Address Register / sequencing mechanism — identifies the next microinstruction.
• Microinstruction Register — holds the current microinstruction.
• Microinstruction decoding/control logic — converts microinstruction fields into required control signals.
• Sequencing logic — determines the address of the next microinstruction.

The exact hardware organization depends on the processor design.

10. MICROINSTRUCTIONS
A microinstruction is a control word that specifies one or more microoperations/control signals to be performed during a processor step.

Example concept:
A microinstruction may specify:
• Load a register.
• Select an ALU operation.
• Enable a bus source.
• Read/write memory.
• Determine the next microinstruction address.

A sequence of microinstructions used to implement a machine instruction is called a microprogram.

11. MICROPROGRAM
A microprogram is an ordered sequence of microinstructions that generates the control signals needed to execute a machine-level instruction.

Conceptually:
Machine instruction → corresponding microprogram → sequence of control signals → execution

This approach makes control logic easier to modify in designs where the microprogram is stored in writable or replaceable control memory.

12. MICROINSTRUCTION FORMAT
A microinstruction format defines how the bits of a microinstruction are divided into fields that represent control operations and sequencing information.

Two formats required by the syllabus are:
• Horizontal microinstruction
• Vertical microinstruction

13. HORIZONTAL MICROINSTRUCTION
In a horizontal microinstruction, many control signals can be represented directly in separate bits/fields, allowing several microoperations to be specified in parallel.

General characteristics:
• Wide control word.
• High level of parallel control.
• Less decoding is required for directly represented control signals.
• Can support several simultaneous microoperations.
• Requires more control-memory bits.

Conceptual example:
| Load R1 | Load R2 | ALU Add | Memory Read | ...
Each field/bit can directly enable a control action.

14. VERTICAL MICROINSTRUCTION
In a vertical microinstruction, control information is encoded into fields. Decoding is used to translate the encoded fields into actual control signals.

General characteristics:
• Narrower control word compared with a highly horizontal format.
• More encoding and decoding is used.
• Less control-memory space may be required.
• Parallelism can be more limited than in a fully horizontal approach.

15. HORIZONTAL VS VERTICAL MICROINSTRUCTION
Horizontal:
• Wider control word.
• More direct control-signal representation.
• Greater potential for parallel microoperations.
• Larger control memory requirement.

Vertical:
• More encoded control information.
• Narrower control word.
• Requires decoding.
• Generally lower control-memory requirement.
• Parallelism may be more restricted.

16. CONTROL MEMORY
Control memory is the memory that stores the microinstructions of a microprogrammed control unit.

It contains the control information needed to generate the required sequence of control signals.

Important points:
• Stores microinstructions.
• Is accessed according to a control address.
• Supplies the current microinstruction to the control unit.
• Works with sequencing logic to obtain the next microinstruction.

17. ADDRESS SEQUENCING
Address sequencing is the process of determining the address of the next microinstruction in control memory.

Possible sources for the next address include:
• The next sequential microinstruction address.
• A branch or condition-based address.
• An address derived from the current machine instruction.
• A return address for a microprogram sequence.

The exact sequencing mechanism depends on the processor architecture.

18. MICROPROGRAMMED CONTROL — BASIC SEQUENCE
A simplified sequence is:
1) A machine instruction is decoded.
2) The starting address of its microprogram is selected.
3) The corresponding microinstruction is fetched from control memory.
4) Its control signals perform the required microoperations.
5) Sequencing logic determines the next microinstruction address.
6) The process continues until the machine instruction is completed.

19. HARDWIRED VS MICROPROGRAMMED CONTROL
Hardwired:
• Uses fixed hardware logic.
• Generally faster control generation.
• Hardware modification is difficult.
• Suitable for fixed and relatively stable control requirements.

Microprogrammed:
• Uses microinstructions stored in control memory.
• Usually easier to modify or extend the control sequence.
• Control memory and sequencing add an extra level of implementation.
• Useful when the control logic is complex and flexibility is important.

20. COMPARISON WITH EXAMPLE
Suppose a processor has an instruction that must perform:
Fetch operand → perform ALU operation → store result.

In a hardwired control unit, fixed logic generates the control signals for these steps.

In a microprogrammed control unit, a sequence of microinstructions can describe:
1) operand fetch controls,
2) ALU operation controls,
3) result-store controls.

This illustrates the difference in method while the required processor operations remain the same.

21. EXAM FOCUS — WHAT TO REMEMBER
• Control Unit = coordinates processor operations.
• Control signals = direct/control the actions of CPU components.
• Hardwired control = fixed hardware logic generates signals.
• Microprogrammed control = microinstructions in control memory generate signals.
• Microinstruction = control word specifying microoperations/control actions.
• Horizontal = wide, direct/more parallel control.
• Vertical = encoded, narrower control with decoding.
• Control memory = stores microinstructions.
• Address sequencing = determines the next microinstruction address.

IMPORTANT EXAM QUESTIONS
1. Explain the role of the Control Unit in a computer.
2. What are control signals? Give examples of operations controlled by them.
3. Explain the concept and working of a Hardwired Control Unit.
4. Write the advantages and limitations of a Hardwired Control Unit.
5. Explain the concept and architecture of a Microprogrammed Control Unit.
6. What is a microinstruction? Explain its purpose.
7. What is control memory?
8. Explain address sequencing in a microprogrammed control unit.
9. Differentiate horizontal and vertical microinstruction formats.
10. Compare Hardwired and Microprogrammed Control Units with an example.

PRACTICAL / CONCEPT PRACTICE
• Draw a basic block diagram of a hardwired control unit.
• Draw a basic block diagram of a microprogrammed control unit.
• Identify possible control signals for a simple register-transfer operation.
• Create a small sample microinstruction showing multiple control actions.
• Compare a simple instruction sequence under hardwired and microprogrammed control.
• Practice drawing horizontal and vertical microinstruction formats.

SYLLABUS ALIGNMENT
This note follows Unit 3 of the uploaded Semester III CSE Computer System Organisation syllabus: role of control unit and control signals; Hardwired Control Unit with concept, advantages and limitations; Microprogrammed Control Unit with architecture and microinstructions; Horizontal vs Vertical microinstruction formats; Control memory and address sequencing; and comparison of Hardwired vs Microprogrammed control with examples.` },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 4', title:'Memory and I/O Organization', desc:'Detailed Unit 4 notes covering memory hierarchy, SRAM and DRAM, RAM/ROM/EPROM and CPU interfacing, I/O configuration and interfacing, interrupt-driven I/O, handshaking, asynchronous transfer, DMA and I/O processors.', type:'Detailed Notes',
    content:`Unit 4 — Memory and I/O Organization

1. MEMORY AND I/O ORGANIZATION
Memory and Input/Output (I/O) organization describes how a computer stores information and communicates with external devices. This unit focuses on the memory hierarchy, semiconductor memory, CPU-memory interfacing, I/O organization, interrupt-driven I/O, handshaking, asynchronous transfer, DMA and I/O processors.

2. MEMORY HIERARCHY
Memory hierarchy arranges different types of storage according to characteristics such as speed, capacity and cost.

A simple hierarchy is:
Registers → Cache → Main Memory → Secondary Storage

General idea:
• Upper levels are faster, smaller and generally more expensive per bit.
• Lower levels are slower, larger and generally less expensive per bit.
• The hierarchy helps provide fast access to frequently needed information while retaining larger storage capacity.

The CPU normally works most directly with registers and main memory during instruction execution, while secondary storage provides larger long-term storage.

3. SRAM
SRAM stands for Static Random Access Memory.

Important characteristics:
• Stores each bit using a stable memory cell.
• Does not require periodic refresh while power is available.
• Faster than DRAM in typical memory-system use.
• More expensive and less dense than DRAM.
• Commonly used where high speed is important, such as cache memory.

Key point:
SRAM is fast, but its memory cell requires more hardware, so the amount of memory that can be provided economically is relatively smaller.

4. DRAM
DRAM stands for Dynamic Random Access Memory.

Important characteristics:
• Stores each bit using a memory cell that requires periodic refreshing.
• Higher density than SRAM.
• Lower cost per bit than SRAM.
• Commonly used for main memory.

Key point:
DRAM provides larger capacity economically, but refresh operations are required and its access characteristics differ from SRAM.

5. SRAM VS DRAM
SRAM:
• Faster.
• No periodic refresh required for data retention while powered.
• More expensive per bit.
• Lower density.
• Commonly used for cache.

DRAM:
• Requires periodic refresh.
• Higher density.
• Lower cost per bit.
• Commonly used for main memory.

6. RAM
RAM means Random Access Memory. It is memory from which locations can be accessed directly using their addresses.

In ordinary computer systems, RAM is used for working data and program information that the CPU needs during operation.

The unit syllabus specifically includes RAM along with ROM and EPROM and their interfacing with the CPU.

7. ROM
ROM means Read Only Memory. ROM is designed to retain stored information without requiring normal write operations during every use.

Characteristics:
• Used for information that should remain available even when normal working power is removed, depending on the memory technology.
• Traditionally used for fixed or firmware-type information.
• The exact writing capability depends on the type of ROM technology.

8. EPROM
EPROM stands for Erasable Programmable Read Only Memory.

EPROM is a non-volatile memory technology that can be programmed and later erased for reprogramming using the method associated with the device.

Important idea:
EPROM provides non-volatile storage while allowing the stored contents to be erased and programmed again under appropriate conditions.

9. RAM, ROM AND EPROM — BASIC COMPARISON
RAM:
• Used for working/program execution data.
• Read and write operations are generally supported.

ROM:
• Used for stored information that should be retained.
• Primarily used for read operations during normal use.

EPROM:
• Non-volatile memory.
• Can be programmed and later erased/reprogrammed using its specified method.

The exact behavior depends on the particular memory technology and system design.

10. MEMORY INTERFACING WITH CPU
Memory interfacing means connecting memory chips to the CPU so that the processor can correctly select a memory location and perform read or write operations.

A basic interface uses:
• Address lines — select the memory location.
• Data lines — carry data to or from the memory.
• Control signals — specify operations such as read or write.

Conceptual memory read:
1) CPU places the required address on the address bus.
2) CPU activates the memory-read control signal.
3) The selected memory location places data on the data bus.
4) CPU receives the data into the appropriate register.

Conceptual memory write:
1) CPU places the destination address on the address bus.
2) CPU places the data on the data bus.
3) CPU activates the memory-write control signal.
4) The memory stores the data at the selected location.

11. ADDRESS DECODING IN MEMORY INTERFACING
Address decoding is used to determine which memory chip or memory location should respond to a given address.

The CPU sends address bits to the memory system. Decoding logic uses those bits to enable the appropriate memory chip or region.

Basic idea:
CPU address → Decoder / selection logic → Selected memory chip

This prevents multiple memory devices from responding to the same address at the same time.

12. I/O ORGANIZATION
Input/Output organization deals with communication between the CPU and external devices such as keyboards, displays, storage devices and other peripherals.

An I/O interface provides the connection between the processor system and the external device.

Typical interface elements may include:
• Data register/buffer.
• Status information.
• Control information.
• Address or device-select logic.
• Control signals.

13. I/O CONFIGURATION
I/O configuration describes how I/O devices are connected and selected by the computer system.

The CPU needs a way to:
• Identify the required device.
• Send data to the device.
• Receive data from the device.
• Check the device status.
• Control the timing and direction of transfer.

An I/O interface provides the signals and registers needed for these operations.

14. I/O INTERFACING
I/O interfacing is the process of connecting an I/O device to the processor system through appropriate hardware and control signals.

A simplified data path is:
CPU ↔ I/O Interface ↔ Peripheral Device

The interface isolates differences between the CPU and the external device and provides a controlled method for data transfer.

15. INTERRUPT-DRIVEN I/O
In interrupt-driven I/O, an I/O device signals the CPU when it needs attention or when a transfer-related event occurs.

Basic sequence:
1) CPU starts or enables an I/O operation.
2) CPU continues executing other instructions.
3) Device generates an interrupt when service is required.
4) CPU recognizes the interrupt.
5) CPU saves necessary program state.
6) CPU executes the interrupt service routine.
7) The I/O event is serviced.
8) CPU restores the saved state and resumes the interrupted program.

Advantage:
The CPU does not need to continuously check the device status through polling.

16. POLLING VS INTERRUPT-DRIVEN I/O
Polling:
• CPU repeatedly checks device status.
• CPU time may be spent checking devices even when no service is needed.

Interrupt-driven I/O:
• Device notifies CPU when attention is needed.
• CPU can perform other work until an interrupt occurs.

17. HANDSHAKING
Handshaking is a method of coordinating data transfer between two devices when their timing is not guaranteed to be identical.

Control signals are exchanged to indicate conditions such as:
• Data is ready.
• Data has been accepted.
• The sender can continue.
• The receiver is ready.

Basic idea:
Sender indicates data ready → Receiver acknowledges/accepts → Transfer progresses according to control signals.

Handshaking helps prevent data loss when the sender and receiver operate at different speeds.

18. ASYNCHRONOUS DATA TRANSFER
Asynchronous transfer is used when two units do not share a common timing reference for every transfer.

Because the units may operate independently, control information is used to coordinate the transfer.

Handshaking is one common method for asynchronous transfer.

Conceptually:
Source → Control/handshake signals → Destination

The transfer occurs only when the required readiness and acceptance conditions are satisfied.

19. SYNCHRONOUS VS ASYNCHRONOUS TRANSFER
Synchronous transfer:
• Uses a common timing reference.
• Transfers occur according to agreed timing/clock relationships.

Asynchronous transfer:
• Does not rely on one common timing reference for each transfer.
• Uses control methods such as handshaking to coordinate the transfer.

20. DMA — DIRECT MEMORY ACCESS
DMA stands for Direct Memory Access.

DMA is a technique in which an I/O device can transfer data to or from main memory with reduced direct involvement of the CPU for every individual data item.

Basic idea:
I/O Device ↔ DMA Mechanism ↔ Main Memory

The CPU normally initializes/configures the DMA operation by providing information such as:
• Starting memory address.
• Direction of transfer.
• Amount of data to transfer.

After setup, the DMA mechanism controls the data movement between the device and memory for the transfer.

21. DMA OPERATION — BASIC STEPS
1) CPU configures the DMA transfer.
2) I/O device requests a transfer.
3) DMA mechanism obtains control of the required system resources according to the processor/system design.
4) Data is transferred between the I/O device and memory.
5) DMA updates address/count information as required.
6) Transfer completes.
7) CPU can be notified that the operation is complete, commonly through an interrupt.

22. ADVANTAGES OF DMA
• Reduces CPU involvement in moving large blocks of data.
• Can improve overall I/O throughput.
• Allows CPU processing and data-transfer activity to overlap more effectively, depending on the system.

23. I/O PROCESSORS
An I/O processor is a specialized processor or processing unit designed to handle I/O-related operations and reduce the workload on the main CPU.

It can manage I/O tasks, communication with devices and transfer operations according to the system architecture.

General idea:
Main CPU → Assigns/coordinates I/O work → I/O Processor → I/O Devices

This allows the main CPU to concentrate on program execution while I/O processing is handled by the specialized unit.

24. DMA VS I/O PROCESSOR
DMA:
• Focuses on efficient data transfer between I/O and memory.
• Reduces CPU involvement in individual data movements.

I/O Processor:
• Handles a broader set of I/O-related processing tasks.
• Can execute or manage more complex I/O operations depending on the architecture.

25. QUICK EXAM REVISION
• Memory hierarchy = organized levels of storage based on speed, capacity and cost.
• SRAM = fast, no periodic refresh, commonly used for cache.
• DRAM = higher density, requires refresh, commonly used for main memory.
• RAM = working read/write memory in typical systems.
• ROM = non-volatile memory for stored information.
• EPROM = programmable, erasable and reprogrammable non-volatile memory.
• Memory interfacing = connecting CPU and memory using address, data and control signals.
• Address decoding = selecting the correct memory chip/location.
• I/O interfacing = connecting CPU system with peripherals through an interface.
• Interrupt-driven I/O = device requests CPU attention through an interrupt.
• Handshaking = control-signal coordination between sender and receiver.
• Asynchronous transfer = transfer without a common timing reference for each operation.
• DMA = direct I/O-to-memory or memory-to-I/O transfer with reduced CPU involvement.
• I/O processor = specialized processing unit for I/O activities.

IMPORTANT EXAM QUESTIONS
1. Explain memory hierarchy.
2. Differentiate SRAM and DRAM.
3. Explain RAM, ROM and EPROM.
4. What is memory interfacing? Explain the role of address, data and control lines.
5. What is address decoding in memory interfacing?
6. Explain I/O configuration and I/O interfacing.
7. Explain interrupt-driven I/O with its sequence of operations.
8. What is handshaking? Why is it used in data transfer?
9. Explain asynchronous data transfer.
10. Differentiate synchronous and asynchronous transfer.
11. What is DMA? Explain its basic operation.
12. Write the advantages of DMA.
13. What is an I/O processor? Explain its role.
14. Differentiate DMA and an I/O processor.

PRACTICAL / CONCEPT PRACTICE
• Draw a memory hierarchy diagram and label the levels.
• Make a comparison table for SRAM and DRAM.
• Draw a simple CPU-memory interface showing address, data and control lines.
• Explain the steps of a memory read and memory write operation.
• Draw a basic I/O interface between CPU and a peripheral.
• Trace an interrupt-driven I/O sequence.
• Draw a handshaking sequence showing ready and acknowledge signals.
• Draw a basic DMA data-transfer path between an I/O device and memory.
• Compare the roles of CPU, DMA mechanism and I/O processor in data transfer.

SYLLABUS ALIGNMENT
This note follows Unit 4 of the uploaded Semester III CSE Computer System Organisation syllabus: memory hierarchy, SRAM and DRAM; RAM, ROM and EPROM chips and their interfacing with CPU; I/O configuration and interfacing; interrupt-driven I/O, handshaking and asynchronous transfer; and DMA (Direct Memory Access) and I/O processors.` },
  { subject:'Computer System Organisation', code:'304', unit:'Unit 5', title:'8085 Case Study and Assembly Language Programming', desc:'Detailed Unit 5 notes covering the 8085 microprocessor, architecture, functional blocks, pin diagram and signals, instruction set, addressing modes, applications, and GNUSim8085 assembly programming with sample programs.', type:'Detailed Notes',
    content:`Unit 5 — Microprocessor 8085 Case Study and Assembly Language Programming

1. INTRODUCTION TO 8085 MICROPROCESSOR
The Intel 8085 is an 8-bit microprocessor used as a classic processor for studying the basic organization and programming of microprocessors.

Important basic points:
• It is an 8-bit microprocessor, so its ALU and general data operations are based on 8-bit data.
• It has a 16-bit address bus, allowing it to address a 64 KB memory address space.
• It operates using registers, an ALU, a control unit and external buses/signals.
• It is commonly used for learning processor architecture, instruction execution and assembly programming.

2. ARCHITECTURE OF 8085
The architecture of 8085 consists of major functional sections that work together to fetch, decode and execute instructions.

Main parts include:
• Arithmetic Logic Unit (ALU)
• Register section
• Control Unit
• Program Counter
• Stack Pointer
• Instruction Register and Instruction Decoder
• Address bus and data bus
• Timing and control logic
• Interrupt control
• Serial I/O control

Basic instruction flow:
Memory → Instruction Register/Decoder → Control Unit → ALU/Register operations → Result

3. FUNCTIONAL BLOCK — ALU
The Arithmetic Logic Unit performs arithmetic and logical operations on data.

Typical functions include:
• Addition
• Subtraction
• AND
• OR
• XOR
• Comparison
• Increment and decrement
• Complement-related operations supported by the instruction set

The ALU works with the accumulator and other registers as required by the instruction.

4. FUNCTIONAL BLOCK — REGISTERS
Registers are fast storage locations inside the microprocessor used to hold data, addresses and intermediate information.

Important 8085 registers include:
• Accumulator — an 8-bit register closely associated with ALU operations.
• General-purpose registers B, C, D, E, H and L — used for temporary data storage and can also be combined as register pairs for suitable operations.
• Program Counter (PC) — 16-bit register that holds the address of the next instruction.
• Stack Pointer (SP) — 16-bit register that points to the current top of the stack.
• Instruction Register — holds the current instruction for decoding.
• Flag register — stores status flags produced by relevant operations.

5. 8085 FLAGS
The 8085 flag register contains status information about the result of operations.

Important flags:
• Sign (S) — indicates the sign of the result in the relevant 8-bit operation.
• Zero (Z) — set when the result is zero.
• Auxiliary Carry (AC) — indicates carry from bit 3 to bit 4 in applicable arithmetic operations.
• Parity (P) — indicates whether the result contains an even or odd number of 1 bits.
• Carry (CY) — indicates a carry out of the most significant bit in addition or a borrow-related condition in applicable subtraction operations.

Flags are used by conditional instructions and help the processor make decisions based on operation results.

6. FUNCTIONAL BLOCK — CONTROL UNIT
The control unit coordinates the execution of instructions.

It:
• Interprets decoded instructions.
• Generates timing and control signals.
• Controls data movement between registers, ALU and external memory/I/O.
• Coordinates the fetch, decode and execute sequence.

7. PROGRAM COUNTER AND STACK POINTER
Program Counter:
The Program Counter is a 16-bit register that contains the address of the next instruction to be fetched.

Stack Pointer:
The Stack Pointer is a 16-bit register that points to the current top position of the stack in memory.

The stack is used for temporary storage, subroutine calls, returns and related operations.

8. INSTRUCTION REGISTER AND INSTRUCTION DECODER
The Instruction Register holds the instruction opcode that has been fetched from memory.

The Instruction Decoder interprets the opcode and helps the control unit determine which sequence of control operations must be generated.

Basic flow:
Fetch instruction → Instruction Register → Decode → Control signals → Execute

9. PIN DIAGRAM AND SIGNAL DESCRIPTION
The 8085 is a 40-pin microprocessor. Its pins provide address, data, control, timing, interrupt, serial and power-related signals.

Major signal groups include:

Address/data-related signals:
• AD0–AD7 — multiplexed lower-order address and data lines.
• A8–A15 — higher-order address lines.

Control and status signals:
• ALE — Address Latch Enable; helps separate the lower address from multiplexed address/data lines.
• RD — indicates a read operation.
• WR — indicates a write operation.
• IO/M — distinguishes I/O and memory-related operations.

Interrupt-related signals:
• TRAP
• RST 7.5
• RST 6.5
• RST 5.5
• INTR
• INTA

Serial I/O:
• SID — Serial Input Data.
• SOD — Serial Output Data.

Clock/power and related signals:
• X1, X2 — clock generation connections.
• CLK OUT — clock output.
• RESET IN, RESET OUT — reset-related signals.
• VCC and VSS — power and ground connections.

The exact electrical behavior of each pin should be studied from the 8085 pin diagram when preparing diagrams-based exam questions.

10. 8085 INSTRUCTION SET — OVERVIEW
An instruction set is the collection of instructions supported by the 8085.

The major groups commonly used for study are:
• Data Transfer Instructions
• Arithmetic Instructions
• Logical Instructions
• Branching Instructions
• Machine Control Instructions

Examples include:
• MOV — move data between registers or supported locations.
• MVI — move immediate data.
• LXI — load a register pair with immediate 16-bit data.
• ADD — add data to the accumulator.
• SUB — subtract data from the accumulator.
• INR / DCR — increment / decrement.
• ANA / ORA / XRA — logical operations.
• JMP — unconditional jump.
• CALL / RET — subroutine call and return.
• HLT — halt processor operation.

The exact operands and legal combinations depend on the 8085 instruction set.

11. ADDRESSING MODES OF 8085
Addressing mode specifies how the operand required by an instruction is obtained.

The principal 8085 addressing modes are:

IMMEDIATE ADDRESSING
The data is given directly in the instruction.

Example:
MVI A, 25H

Here 25H is the immediate data.

REGISTER ADDRESSING
The operand is stored in a register.

Example:
MOV A, B

The contents of register B are copied to accumulator A.

DIRECT ADDRESSING
The memory address of the operand is explicitly specified in the instruction.

Example idea:
LDA 2050H

The accumulator loads data from the specified memory address.

REGISTER INDIRECT ADDRESSING
A register pair contains the memory address of the operand.

Example idea:
MOV A, M

Here M represents the memory location addressed by the HL register pair.

IMPLIED / IMPLICIT ADDRESSING
The operand is implied by the instruction itself.

Example:
CMA

The accumulator is implicitly used by the instruction.

12. APPLICATIONS OF 8085
The 8085 can be used in learning and basic embedded-control applications where a simple microprocessor is suitable.

Examples of application areas:
• Educational microprocessor systems.
• Basic control systems.
• Simple data acquisition and monitoring arrangements.
• Timing and sequencing tasks.
• Interfacing experiments with peripherals.
• Small embedded systems used for instruction and laboratory demonstrations.

These examples illustrate the type of tasks for which a simple 8-bit microprocessor can be studied and applied.

13. ASSEMBLY PROGRAMMING USING GNUSIM8085
GNUSim8085 is an educational simulator used to write, assemble, execute and observe 8085 assembly programs.

A student can use it to:
• Write 8085 assembly instructions.
• Assemble the program.
• Observe registers and flags.
• Execute instructions step by step.
• Check memory and program results.
• Debug basic assembly programs.

14. BASIC ASSEMBLY PROGRAM FORMAT
An 8085 assembly program contains instructions and, when required, labels/directives and data definitions according to the simulator/assembler syntax.

A simple program structure may contain:
• Label or starting address information.
• Instruction mnemonic.
• Operand(s).
• Comments for explanation.
• Program termination instruction or suitable simulator convention.

Example:
MVI A, 05H
MVI B, 03H
ADD B
HLT

This loads 5 into A, loads 3 into B, adds B to A and then halts.

15. ASSEMBLY LANGUAGE DIRECTIVES
Directives provide information to the assembler/simulator rather than representing ordinary processor operations.

Depending on the GNUSim8085 environment and program format, directives can be used for tasks such as:
• Specifying data or storage.
• Defining constants/locations.
• Controlling assembly placement or organization.

Students should follow the directive syntax supported by the GNUSim8085 version used in their practical work.

16. FLAGS DURING ASSEMBLY PROGRAMMING
8085 instructions can change relevant flags depending on the operation.

Important flags for practical observation:
• S — Sign
• Z — Zero
• AC — Auxiliary Carry
• P — Parity
• CY — Carry

Example:
If an arithmetic instruction produces a zero result, the Zero flag may become set according to the instruction's flag behavior.

17. SAMPLE PROGRAM — 8-BIT ADDITION
Goal: Add two 8-bit numbers.

Example program:
MVI A, 05H
MVI B, 03H
ADD B
HLT

Working:
1) A ← 05H
2) B ← 03H
3) ADD B performs A ← A + B
4) Result in A = 08H
5) HLT stops execution

This demonstrates immediate data loading and addition using a register operand.

18. SAMPLE PROGRAM — 16-BIT ADDITION
A 16-bit addition can be performed using register-pair operations and the 8085 instruction set.

Conceptual steps:
1) Load the first 16-bit number into one register pair.
2) Load the second 16-bit number into another suitable register pair.
3) Add the second pair to the first using the appropriate 16-bit instruction.
4) Observe the result and carry-related behavior.

Example form:
LXI H, 1234H
LXI D, 1111H
DAD D
HLT

Here the instruction adds the DE register pair to the HL register pair.

19. SAMPLE PROGRAM — DATA TRANSFER
Goal: Transfer data from one register to another.

Example:
MVI B, 25H
MOV A, B
HLT

Working:
1) B ← 25H
2) A ← B
3) A contains 25H

This demonstrates register-to-register data transfer.

20. SAMPLE PROGRAM — COMPARISON
The 8085 can compare a value with the accumulator using the CMP instruction.

Example:
MVI A, 05H
MVI B, 05H
CMP B
HLT

CMP B performs a comparison between A and B by internally carrying out the relevant subtraction condition without changing the accumulator value. The flags are used to interpret the comparison result.

For equal values, the Zero flag is set according to the instruction's flag behavior.

21. SAMPLE PROGRAM — LOOP
Loops can be created using a counter register and a conditional or unconditional jump.

Example:
MVI C, 05H
LOOP: DCR C
JNZ LOOP
HLT

Working:
1) C is initialized to 5.
2) DCR C decreases C by 1.
3) JNZ LOOP jumps back while the result is not zero.
4) The loop ends when C becomes zero.
5) HLT stops execution.

22. BASIC GNUSim8085 PRACTICE WORKFLOW
1) Open GNUSim8085.
2) Enter the 8085 assembly program in the editor.
3) Assemble the program using the simulator's assemble function.
4) Correct syntax errors if reported.
5) Execute the program.
6) Observe registers, flags and memory values.
7) Verify that the final result matches the expected result.
8) Practice step-by-step execution to understand each instruction.

23. QUICK EXAM REVISION
• 8085 = classic 8-bit microprocessor.
• Address bus = 16-bit.
• Main functional blocks = ALU, registers, control unit and supporting control/bus logic.
• PC = address of next instruction.
• SP = top of stack.
• Accumulator = central 8-bit register for many ALU operations.
• Flags = S, Z, AC, P, CY.
• AD0–AD7 = multiplexed lower address/data lines.
• A8–A15 = higher address lines.
• ALE = separates lower address from multiplexed address/data bus.
• RD = read control.
• WR = write control.
• 8085 addressing modes = immediate, register, direct, register indirect and implied.
• GNUSim8085 = simulator for 8085 assembly programming.
• Practical programs = 8-bit addition, 16-bit addition, data transfer, comparison and loops.

IMPORTANT EXAM QUESTIONS
1. Explain the architecture of the 8085 microprocessor with a neat block diagram.
2. Explain the functional blocks of 8085: ALU, registers and control unit.
3. Explain the Program Counter, Stack Pointer, Accumulator and flag register.
4. Explain the 8085 pin diagram and major signal groups.
5. Explain the major groups of the 8085 instruction set with examples.
6. Explain the addressing modes of 8085 with suitable examples.
7. Write the applications of the 8085 microprocessor.
8. What is GNUSim8085? Explain its use in assembly programming.
9. Explain the basic format of an 8085 assembly program and the role of directives.
10. Explain the 8085 flags.
11. Write an 8085 program for 8-bit addition.
12. Explain the steps for 16-bit addition in 8085.
13. Write an 8085 program for data transfer.
14. Explain how comparison is performed using CMP.
15. Write an 8085 program using a loop.

PRACTICAL PRACTICE
• Draw and label the 8085 architecture.
• Draw the 40-pin 8085 pin diagram and identify major signal groups.
• Practice identifying opcodes, operands and addressing modes.
• Run an 8-bit addition program in GNUSim8085.
• Run a 16-bit addition program and observe the register-pair result.
• Write and execute a data-transfer program.
• Write and execute a comparison program and observe flags.
• Write and execute a loop program using a counter and conditional jump.
• Observe registers, flags and memory step by step in GNUSim8085.

SYLLABUS ALIGNMENT
This note follows Unit 5 of the uploaded Semester III CSE Computer System Organisation syllabus: 8085 microprocessor introduction, architecture, functional blocks (ALU, registers, control unit), pin diagram and signal description, instruction set overview, addressing modes, applications of 8085; and assembly programming using GNUSim8085 covering format, directives, flags, and sample programs for 8-bit and 16-bit addition, data transfer, comparisons and loops.` },
  { subject:'Algorithms', code:'305', unit:'Unit 1', title:'Fundamentals of Algorithms', desc:'Detailed notes on algorithm definition, characteristics, importance, design steps, pseudocode, flowcharts, structured approach, iterative and recursive processes, time and space complexity, Big-O, Omega, Theta and basic array analysis.', type:'Detailed Notes',
    content:`Unit 1 — Fundamentals of Algorithms

1. INTRODUCTION TO ALGORITHMS
An algorithm is a finite and clearly defined sequence of steps used to solve a problem or perform a task.

Example: Add two numbers
1) Start
2) Read A and B
3) SUM = A + B
4) Display SUM
5) Stop

2. CHARACTERISTICS OF AN ALGORITHM
• Finiteness — it terminates after a finite number of steps.
• Definiteness — each step is clear and unambiguous.
• Input — it may accept zero or more inputs.
• Output — it produces the required result.
• Effectiveness — each step is practical to execute.

3. IMPORTANCE OF ALGORITHMS
Algorithms provide a logical plan before implementation. They help in systematic problem solving, program development, comparison of alternative solutions, complexity analysis, testing and debugging.

4. STEPS IN ALGORITHM DESIGN
1) Understand the problem.
2) Identify inputs and outputs.
3) Break the problem into smaller parts when needed.
4) Develop the logical sequence of steps.
5) Represent the solution using an algorithm, pseudocode or flowchart.
6) Test the logic with sample inputs.
7) Analyze time and space requirements.
8) Implement and test the program.

5. PSEUDOCODE
Pseudocode is a simple, language-independent representation of program logic.

Example: Find larger of A and B
START
Read A, B
IF A > B
    MAX = A
ELSE
    MAX = B
Display MAX
STOP

6. FLOWCHARTS
A flowchart represents an algorithm graphically.

Common symbols:
• Oval — Start/End
• Rectangle — Process
• Parallelogram — Input/Output
• Diamond — Decision
• Arrow — Flow direction

7. STRUCTURED APPROACH
A structured solution organizes logic using:
• Sequence — steps execute in order.
• Selection — a condition chooses among alternatives.
• Iteration — steps are repeated.

8. ITERATIVE PROCESS
An iterative process repeats steps using a loop until a condition is satisfied.

Example: Sum 1 to n
SUM = 0
Repeat for each value from 1 to n:
    SUM = SUM + current value
Output SUM

9. RECURSIVE PROCESS
A recursive process solves a problem by applying the same procedure to a smaller version of the problem.

A recursive solution needs:
• Base case — stops further calls.
• Recursive case — reduces the problem and calls the procedure again.

Example:
factorial(n) = n × factorial(n−1), for n > 1
factorial(1) = 1

10. ITERATIVE VS RECURSIVE
Iterative:
• Uses loops.
• Has explicit repetition control.
• Often uses less call-stack memory.

Recursive:
• A function/procedure calls itself.
• Needs a base case.
• Uses call-stack frames for the active calls.

11. ALGORITHM ANALYSIS
Algorithm analysis studies the resources required as input size increases.

The syllabus includes:
• Time complexity
• Space complexity
• Big-O, Omega and Theta
• Best-case, worst-case and average-case analysis
• Analysis of simple algorithms such as array addition and multiplication

12. TIME COMPLEXITY
Time complexity describes how the amount of computational work grows with input size.

Examples:
• One fixed operation → O(1)
• One pass through n elements → O(n)
• Two nested passes over n elements → O(n²)

13. SPACE COMPLEXITY
Space complexity describes how memory usage grows with input size.

It may include input storage and extra/auxiliary memory used during execution.

An algorithm using only a fixed number of extra variables can have auxiliary space O(1).

14. ASYMPTOTIC NOTATIONS
Asymptotic notation describes the growth of an algorithm for large input sizes.

Big-O:
• Asymptotic upper bound.

Omega (Ω):
• Asymptotic lower bound.

Theta (Θ):
• Tight asymptotic bound when matching upper and lower growth orders are established.

15. BEST-CASE ANALYSIS
Best-case analysis considers the minimum work required for an input of a given size.

16. WORST-CASE ANALYSIS
Worst-case analysis considers the maximum work required for an input of a given size.

17. AVERAGE-CASE ANALYSIS
Average-case analysis considers expected work under stated assumptions about the input distribution.

18. SIMPLE ARRAY ADDITION ANALYSIS
Suppose every element of an array is added to SUM.

For n elements, every element is processed once.
• Time complexity = O(n)
• Auxiliary space = O(1) when only a fixed number of extra variables are used

19. SIMPLE ARRAY MULTIPLICATION ANALYSIS
Suppose every element of an array is multiplied into PRODUCT.

For n elements, every element is processed once.
• Time complexity = O(n)
• Auxiliary space = O(1) when only a fixed number of extra variables are used

20. QUICK EXAM REVISION
• Algorithm = finite, clear sequence of steps.
• Pseudocode = language-independent logic representation.
• Flowchart = graphical representation of an algorithm.
• Structured approach = sequence, selection and iteration.
• Iterative = repetition using loops.
• Recursive = procedure calls itself on a smaller problem.
• Time complexity = growth of computational work.
• Space complexity = growth of memory requirement.
• O = upper bound.
• Ω = lower bound.
• Θ = tight bound.
• Best case = minimum work.
• Worst case = maximum work.
• Average case = expected work.
• Array addition and multiplication = linear time O(n).

IMPORTANT EXAM QUESTIONS
1. Define an algorithm. Explain its characteristics and importance.
2. Explain the steps involved in algorithm design.
3. What is pseudocode? Give an example.
4. What is a flowchart? Explain common symbols.
5. Explain the structured approach.
6. Differentiate iterative and recursive processes.
7. Define time complexity and space complexity.
8. Explain Big-O, Omega and Theta.
9. Differentiate best-case, worst-case and average-case analysis.
10. Analyze the time and auxiliary-space complexity of simple array addition.
11. Analyze the time and auxiliary-space complexity of simple array multiplication.
12. Explain O(1), O(n) and O(n²) with examples.

PRACTICAL / CONCEPT PRACTICE
• Write an algorithm to add two numbers.
• Write pseudocode to find the maximum of two numbers.
• Draw a flowchart for an even/odd check.
• Write iterative and recursive factorial solutions.
• Analyze array addition and multiplication.
• Classify simple algorithms as O(1), O(n) or O(n²).

SYLLABUS ALIGNMENT
This note follows Unit 1 of the uploaded Semester III CSE Algorithms syllabus: definition, characteristics and importance; steps in algorithm design; pseudocode; flowcharts and structured approach; iterative vs recursive processes; time and space complexity; Big-O, Omega and Theta; best-case, worst-case and average-case analysis; and analysis of simple algorithms such as addition and multiplication of an array.` },
  { subject:'Algorithms', code:'305', unit:'Unit 2', title:'Sorting', desc:'Detailed Unit 2 notes covering the importance and applications of sorting, Bubble, Selection, Insertion, Merge and Quick Sort, divide-and-conquer, recurrence-based complexity, and comparison of sorting methods.', type:'Detailed Notes',
    content:`Unit 2 — Sorting

1. INTRODUCTION TO SORTING
Sorting is the process of arranging data items in a specified order, such as ascending or descending order.

Example:
Unsorted:  40, 10, 30, 20
Ascending: 10, 20, 30, 40

Sorting is often used before searching, reporting or other data-processing tasks.

2. IMPORTANCE OF SORTING IN DATA ORGANIZATION
Sorting helps organize data so that it can be processed and understood more easily.

Importance:
• Makes data easier to read and analyze.
• Can make some searching tasks more efficient.
• Helps in creating ordered reports and records.
• Makes duplicate detection and related data-processing tasks easier.
• Provides a useful arrangement for many algorithms.

3. APPLICATIONS OF SORTING
Sorting is used in many computing tasks, for example:
• Arranging student records by roll number or marks.
• Ordering names or records alphabetically.
• Organizing numerical data.
• Preparing ranked lists.
• Arranging database or file records for processing.

The most suitable sorting method depends on factors such as input size, existing order of data, available memory and required performance.

4. BUBBLE SORT — CONCEPT
Bubble Sort repeatedly compares adjacent elements and exchanges them when they are in the wrong order.

For ascending order, if the left element is greater than the right element, they are swapped.

5. BUBBLE SORT — PROCESS
Example:
Array: 5, 3, 4, 1

Pass 1:
5 and 3 → swap → 3, 5, 4, 1
5 and 4 → swap → 3, 4, 5, 1
5 and 1 → swap → 3, 4, 1, 5

The largest unsorted value has moved toward the end.

Further passes continue until the array is sorted.

6. BUBBLE SORT — COMPLEXITY
For the usual basic implementation:
• Best case can be O(n) when the input is already sorted and an optimized swap check is used.
• Average case is O(n²).
• Worst case is O(n²).
• Auxiliary space is O(1) for an in-place implementation.

Bubble Sort is simple but can become slow for large unsorted inputs.

7. SELECTION SORT — CONCEPT
Selection Sort repeatedly selects the smallest element from the unsorted portion and places it in its correct position.

For ascending order:
1) Find the smallest element in the unsorted part.
2) Swap it with the first unsorted element.
3) Move the boundary of the sorted part forward.
4) Repeat.

8. SELECTION SORT — PROCESS
Example:
Array: 5, 3, 4, 1

Step 1:
Smallest = 1
Swap with first element:
1, 3, 4, 5

Now the first position is sorted.

Continue with the remaining unsorted positions until the array is sorted.

9. SELECTION SORT — COMPLEXITY
For the standard implementation:
• Best case = O(n²)
• Average case = O(n²)
• Worst case = O(n²)
• Auxiliary space = O(1)

Selection Sort performs a similar number of comparisons even when the input is already partly sorted.

10. INSERTION SORT — CONCEPT
Insertion Sort builds the sorted array one element at a time.

Each new element is inserted into its proper position within the already sorted portion.

11. INSERTION SORT — PROCESS
Example:
Array: 5, 3, 4, 1

Start with 5 as the sorted portion.

Insert 3:
3, 5, 4, 1

Insert 4:
3, 4, 5, 1

Insert 1:
1, 3, 4, 5

At each step, larger elements in the sorted portion are shifted to make space.

12. INSERTION SORT — COMPLEXITY
For the standard implementation:
• Best case = O(n) when the input is already sorted.
• Average case = O(n²)
• Worst case = O(n²)
• Auxiliary space = O(1)

Insertion Sort is useful for small inputs or data that is already nearly sorted.

13. MERGE SORT — CONCEPT
Merge Sort uses the divide-and-conquer approach.

Basic idea:
1) Divide the array into smaller parts.
2) Continue dividing until small subarrays are obtained.
3) Sort the small parts.
4) Merge the sorted parts to form the final sorted array.

14. MERGE SORT — DIVIDE AND CONQUER
The divide-and-conquer idea has three main stages:
• Divide — split the problem into smaller subproblems.
• Conquer — solve the smaller subproblems.
• Combine — combine their solutions.

15. MERGE SORT — EXAMPLE
Array:
8, 3, 6, 2

Divide:
[8, 3] and [6, 2]

Divide again:
[8] [3] [6] [2]

Merge sorted pairs:
[3, 8] and [2, 6]

Final merge:
[2, 3, 6, 8]

16. MERGE SORT — COMPLEXITY
Merge Sort has:
• Best case = O(n log n)
• Average case = O(n log n)
• Worst case = O(n log n)

Its recurrence is commonly represented as:
T(n) = 2T(n/2) + O(n)

The O(n) term represents the merging work at each level.

Merge Sort generally needs additional memory for merging, so its auxiliary space is O(n) in a typical array implementation.

17. QUICK SORT — CONCEPT
Quick Sort also uses divide-and-conquer.

It chooses a pivot, partitions the array so that elements are placed on the appropriate sides of the pivot, and then recursively sorts the resulting subarrays.

18. QUICK SORT — PROCESS
Basic steps:
1) Choose a pivot.
2) Partition the array around the pivot.
3) Elements smaller than the pivot are placed toward one side and larger elements toward the other side, according to the chosen partition scheme.
4) Recursively apply the same process to the subarrays.
5) The sorted result is obtained when the subarrays become small enough.

The exact sequence of swaps depends on the partition method and pivot selection.

19. QUICK SORT — COMPLEXITY
For a typical comparison:
• Best case = O(n log n)
• Average case = O(n log n)
• Worst case = O(n²) when partitions become highly unbalanced.

The recurrence depends on how the pivot divides the input.

Balanced partition:
T(n) = 2T(n/2) + O(n) → O(n log n)

Highly unbalanced partition:
T(n) = T(n−1) + O(n) → O(n²)

Quick Sort is often efficient in practice and can be implemented in-place, although its exact performance depends strongly on pivot selection and partitioning.

20. COMPARISON OF SORTING METHODS
Bubble Sort:
• Best: O(n) with an optimized implementation
• Average: O(n²)
• Worst: O(n²)
• Simple to understand
• Useful mainly for small or educational examples

Selection Sort:
• Best: O(n²)
• Average: O(n²)
• Worst: O(n²)
• Uses few swaps
• Simple and predictable

Insertion Sort:
• Best: O(n)
• Average: O(n²)
• Worst: O(n²)
• Good for small or nearly sorted data

Merge Sort:
• Best/Average/Worst: O(n log n)
• Predictable performance
• Needs additional memory in the usual array implementation
• Useful when consistent O(n log n) performance is required

Quick Sort:
• Best/Average: O(n log n)
• Worst: O(n²)
• Often fast in practice
• Performance depends on pivot/partition choices

21. RELATIVE PERFORMANCE
When comparing sorting methods, consider:
• Input size.
• Initial order of data.
• Best, average and worst-case complexity.
• Extra memory requirements.
• Number of comparisons and data movements.
• Whether stable or in-place behavior is important for the application.

No single sorting method is optimal for every situation.

22. SITUATIONS WHERE EACH METHOD IS USEFUL
Bubble Sort:
Useful for learning the basic idea of comparison and swapping, and for very small datasets.

Selection Sort:
Useful when a simple method with a small number of swaps is desired.

Insertion Sort:
Useful for small datasets and data that is already nearly sorted.

Merge Sort:
Useful when predictable O(n log n) performance is important and additional memory is acceptable.

Quick Sort:
Useful when fast average-case performance is desired and a suitable pivot strategy is available.

23. QUICK EXAM REVISION
• Sorting = arranging data in a required order.
• Bubble Sort = repeatedly swaps adjacent out-of-order elements.
• Selection Sort = repeatedly selects the smallest unsorted element.
• Insertion Sort = inserts each new element into the sorted portion.
• Merge Sort = divide, recursively sort, then merge.
• Quick Sort = choose pivot, partition, recursively sort.
• Merge Sort recurrence = T(n) = 2T(n/2) + O(n).
• Balanced Quick Sort recurrence = about 2T(n/2) + O(n).
• Quick Sort worst case = O(n²).
• Merge Sort = O(n log n) in best, average and worst cases.
• Insertion Sort = O(n) best, O(n²) average/worst.
• Selection Sort = O(n²) best/average/worst.
• Bubble Sort = O(n) best with optimized check, O(n²) average/worst.

IMPORTANT EXAM QUESTIONS
1. What is sorting? Explain its importance in data organization.
2. Write the applications of sorting.
3. Explain Bubble Sort with process and complexity.
4. Explain Selection Sort with process and complexity.
5. Explain Insertion Sort with process and complexity.
6. Explain Merge Sort and the divide-and-conquer approach.
7. Explain Quick Sort and the role of the pivot.
8. Write the recurrence relation for Merge Sort.
9. Explain the best, average and worst-case complexity of Quick Sort.
10. Compare Bubble, Selection and Insertion Sort.
11. Compare Merge Sort and Quick Sort.
12. Explain situations in which different sorting methods are useful.

PRACTICAL / CONCEPT PRACTICE
• Sort a small list using Bubble Sort and show every pass.
• Sort a list using Selection Sort and show the selected minimum at each step.
• Sort a list using Insertion Sort and show each insertion.
• Divide an array and show the merge process for Merge Sort.
• Choose a pivot and demonstrate one Quick Sort partition.
• Analyze the best, average and worst cases for each syllabus sorting method.
• Compare sorting methods for small, nearly sorted and larger inputs.

SYLLABUS ALIGNMENT
This note follows Unit 2 of the uploaded Semester III CSE Algorithms syllabus: importance of sorting in data organization; applications of sorting; Bubble Sort, Selection Sort and Insertion Sort with concept, process and complexity; Merge Sort and Quick Sort with divide-and-conquer and complexity by recurrence relation; and comparison of sorting methods using relative best, worst and average performance and situations where each method is useful.` },
  { subject:'Algorithms', code:'305', unit:'Unit 3', title:'Searching', desc:'Detailed Unit 3 notes covering linear search, binary search, recurrence-based complexity, binary search trees, balancing, hash tables, hash functions and collision handling through chaining and open addressing.', type:'Detailed Notes',
    content:`Unit 3 — Searching

1. INTRODUCTION TO SEARCHING
Searching is the process of locating a required element in a collection of data.

A search operation generally:
1) Takes a target value.
2) Examines data according to a search method.
3) Reports whether the target is present and, when appropriate, its location.

The efficiency of a search method depends on the data organization, input size and assumptions made by the method.

2. LINEAR SEARCH — CONCEPT
Linear Search checks elements one by one from the beginning of the list until the target is found or all elements have been examined.

It can be used on an unsorted list.

Example:
List: 10, 25, 7, 40
Target: 7

Check:
10 → not equal
25 → not equal
7 → found

3. LINEAR SEARCH — PROCESS
Basic steps:
1) Start from the first element.
2) Compare the current element with the target.
3) If equal, report the position and stop.
4) Otherwise move to the next element.
5) Continue until the target is found or the list ends.

Pseudocode:
LINEAR_SEARCH(A, n, target)
for i = 0 to n−1
    if A[i] == target
        return i
return NOT_FOUND

4. LINEAR SEARCH — COMPLEXITY
For n elements:
• Best case = O(1), when the target is the first element.
• Worst case = O(n), when the target is last or absent.
• Average case = O(n) under the usual assumptions.
• Auxiliary space = O(1) for an iterative implementation.

5. BINARY SEARCH — CONCEPT
Binary Search repeatedly divides a sorted search range into two parts.

Important requirement:
• The data must be arranged in sorted order for the standard binary-search method.

At each step:
• Compare the target with the middle element.
• If equal, the target is found.
• If the target is smaller, continue in the left half.
• If the target is larger, continue in the right half.

6. BINARY SEARCH — PROCESS
Example:
Sorted list: 10, 20, 30, 40, 50
Target: 40

Step 1:
Middle = 30
40 > 30 → search right half

Step 2:
Right-half middle = 40
Target found.

Basic pseudocode:
BINARY_SEARCH(A, low, high, target)
while low <= high
    mid = middle position of low and high
    if A[mid] == target
        return mid
    else if target < A[mid]
        high = mid − 1
    else
        low = mid + 1
return NOT_FOUND

7. BINARY SEARCH — COMPLEXITY
At each step, the searchable range is approximately divided by two.

The recurrence relation can be expressed as:
T(n) = T(n/2) + O(1)

Therefore:
• Best case = O(1)
• Average case = O(log n)
• Worst case = O(log n)
• Auxiliary space = O(1) for an iterative implementation

Binary Search is much more efficient than Linear Search for large sorted collections, but it requires the ordering condition.

8. LINEAR SEARCH VS BINARY SEARCH
Linear Search:
• Can work on unsorted data.
• Checks elements sequentially.
• Worst case = O(n).

Binary Search:
• Standard method requires sorted data.
• Repeatedly halves the search range.
• Worst case = O(log n).

9. BINARY SEARCH TREES — INTRODUCTION
A Binary Search Tree (BST) is a binary tree organized so that the keys follow an ordering property.

For a node containing key K:
• Keys in its left subtree are smaller than K.
• Keys in its right subtree are larger than K, under the standard distinct-key convention.

This ordering allows searching, insertion and deletion to be organized similarly to binary search.

10. BST — STRUCTURE AND PROPERTIES
A BST consists of nodes connected through parent-child relationships.

Important properties:
• Each node has at most two children.
• Left subtree contains smaller keys.
• Right subtree contains larger keys under the standard BST ordering rule.
• The shape of the tree affects operation efficiency.

Example:
      50
     /  \
   30    70
  /  \  /  \
20  40 60  80

Here values smaller than 50 are on the left and values larger than 50 are on the right.

11. BST — SEARCH OPERATION
To search for a key:
1) Start at the root.
2) Compare the target with the current node.
3) If equal, the key is found.
4) If the target is smaller, move to the left child.
5) If the target is larger, move to the right child.
6) Continue until found or a null/missing child is reached.

Example:
Search 60 in the example tree:
50 → go right
70 → go left
60 → found

12. BST — INSERTION
To insert a new key:
1) Start at the root.
2) Compare the new key with the current node.
3) Move left if the new key is smaller.
4) Move right if the new key is larger.
5) Insert at the appropriate empty child position.

Example:
Insert 65 into the example tree:
50 → 70 → 60 → right
So 65 becomes the right child of 60.

13. BST — DELETION
Deleting a node from a BST depends on the number of children.

CASE 1 — LEAF NODE
If the node has no children, simply remove it.

CASE 2 — ONE CHILD
If the node has one child, connect its parent directly to that child.

CASE 3 — TWO CHILDREN
If the node has two children, replace its key using an appropriate replacement such as:
• Inorder successor — smallest key in the right subtree.
or
• Inorder predecessor — largest key in the left subtree.

Then remove the replacement node from its original position.

14. BST OPERATION COMPLEXITY
The search, insertion and deletion cost depends on the height of the tree.

If the tree is reasonably balanced:
• Search, insertion and deletion can be O(log n) on average.

If the tree becomes highly skewed:
• Search, insertion and deletion can become O(n).

This is why balancing is important.

15. BALANCED SEARCH TREES — NEED FOR BALANCING
A BST can become unbalanced depending on the order in which keys are inserted.

Example of a skewed BST:
10
  \
   20
     \
      30
        \
         40

This behaves more like a linked list than a balanced tree.

Balancing helps keep the tree height relatively small so operations remain efficient.

16. CONCEPT OF HEIGHT BALANCING
Height balancing means controlling the height difference or overall shape of subtrees so that one side does not become disproportionately long.

The exact balancing rules depend on the particular balanced-tree technique.

The syllabus requires the need for balancing and the concept of height balancing; it does not specify a particular balancing algorithm.

17. HASH TABLES — DEFINITION
A hash table is a data structure that stores data using a key and a hash function to determine a storage position, commonly called a bucket or slot.

Basic idea:
Key → Hash Function → Table Index

Hash tables are designed to support efficient average-case insertion, search and deletion when the table and hash function are suitably designed.

18. PURPOSE OF HASHING
Hashing is used to map keys to positions in a table so that data can be located quickly.

Applications include:
• Symbol tables.
• Record lookup.
• Caches and dictionaries.
• Fast key-based data retrieval.

19. HASH FUNCTIONS — CONCEPT
A hash function converts a key into an index or hash value used to determine where the key should be stored or searched for.

Example:
For a table of size 10, a simple illustrative function could be:
h(k) = k mod 10

For k = 47:
h(47) = 7

So slot 7 is selected by this simple function.

A useful hash function should distribute keys reasonably well across the table to reduce collisions.

20. COLLISION
A collision occurs when two different keys produce the same hash-table index.

Example using h(k) = k mod 10:
h(27) = 7
h(47) = 7

Both keys map to slot 7, so a collision must be handled.

21. COLLISION HANDLING — CHAINING
In chaining, each table slot can maintain a collection of entries that share the same hash value.

Conceptual structure:
Slot 7 → [27] → [47] → [67]

When searching for a key, the hash function selects the slot and the entries in that chain are examined.

Advantages:
• Simple collision-handling concept.
• Multiple colliding keys can be stored at the same table index.

22. COLLISION HANDLING — OPEN ADDRESSING
In open addressing, all entries are stored within the hash table itself. When a collision occurs, another available slot is searched according to a probing rule.

Common probing ideas include:
• Linear probing.
• Quadratic probing.
• Double hashing.

The syllabus specifically requires an overview of open addressing; the exact probing strategy depends on the implementation.

23. CHAINING VS OPEN ADDRESSING
Chaining:
• Uses a separate collection/chain for collided entries at a slot.
• Can store multiple entries associated with the same hash index.

Open addressing:
• Stores entries in the table itself.
• Searches for another available slot after a collision.

24. SEARCHING METHODS — COMPARISON
Linear Search:
• Works without sorted data.
• Simple implementation.
• O(n) worst case.

Binary Search:
• Standard method requires sorted data.
• Repeatedly halves search range.
• O(log n) worst case.

BST Search:
• Uses tree ordering.
• Depends on tree height.
• Can be O(log n) when height is well controlled.
• Can degrade to O(n) in a skewed tree.

Hash Table Search:
• Uses a hash function.
• Average performance can be efficient with good distribution.
• Collision handling and table load affect performance.

25. QUICK EXAM REVISION
• Linear Search = check items one by one.
• Linear Search worst case = O(n).
• Binary Search = repeatedly divide a sorted search range by two.
• Binary Search recurrence = T(n) = T(n/2) + O(1).
• Binary Search worst case = O(log n).
• BST = left keys smaller, right keys larger under standard ordering.
• BST operations depend on tree height.
• Balanced tree = controls height to avoid severe skewing.
• Hash Table = key mapped to table slot using a hash function.
• Collision = different keys map to the same slot.
• Chaining = store collided items in a chain/collection.
• Open addressing = find another free table slot using probing.

IMPORTANT EXAM QUESTIONS
1. Explain Linear Search with its process and complexity.
2. Explain Binary Search with its process and complexity.
3. Write the recurrence relation for Binary Search.
4. Compare Linear Search and Binary Search.
5. Define a Binary Search Tree and explain its properties.
6. Explain search operation in a BST.
7. Explain insertion in a BST.
8. Explain deletion from a BST for zero, one and two children.
9. Explain why balancing is required in search trees.
10. What is height balancing?
11. Define a hash table and explain the purpose of hashing.
12. What is a hash function? Give an example.
13. What is a collision in hashing?
14. Explain collision handling by chaining.
15. Explain the concept of open addressing.
16. Compare chaining and open addressing.
17. Compare Linear Search, Binary Search, BST Search and Hash Table Search.

PRACTICAL / CONCEPT PRACTICE
• Trace Linear Search on a sample list and count comparisons.
• Trace Binary Search on a sorted list.
• Build a small BST by inserting a sequence of keys.
• Search for a value in a BST.
• Demonstrate BST deletion for a leaf, one-child and two-child node.
• Show a skewed BST and explain why balancing is needed.
• Calculate hash values using a simple hash function.
• Demonstrate a collision using two different keys with the same hash value.
• Show collision handling using chaining.
• Demonstrate open addressing with a simple probing sequence.

SYLLABUS ALIGNMENT
This note follows Unit 3 of the uploaded Semester III CSE Algorithms syllabus: Linear Search (concept, process and complexity); Binary Search (concept, process and complexity by recurrence relation); Binary Search Trees including structure/properties and insertion, deletion and search; Balanced Search Trees including need for balancing and concept of height balancing; and Hash Tables including definition/purpose, hash functions and collision handling through chaining and open addressing.` },
  { subject:'Algorithms', code:'305', unit:'Unit 4', title:'Graphs', desc:'Detailed Unit 4 notes covering directed and undirected graphs, adjacency list and matrix representations, paths, cycles, connected/disconnected graphs, spanning trees, topological sorting, Prim’s and Kruskal’s minimum spanning tree algorithms, and Dijkstra’s shortest-path algorithm.', type:'Detailed Notes',
    content:`Unit 4 — Graphs

1. INTRODUCTION TO GRAPHS
A graph is a data structure used to represent relationships or connections between objects.

A graph is commonly described using:
• Vertices (or nodes) — the objects being represented.
• Edges — the connections between vertices.

Example:
For cities connected by roads:
• Each city can be a vertex.
• Each road can be an edge.

Graphs are useful when relationships between items are more important than a simple linear arrangement.

2. DIRECTED GRAPH
A directed graph has edges with a direction.

An edge from A to B means:
A → B

The connection from A to B does not automatically mean that B connects back to A.

Example:
A → B → C

This can represent a one-way relationship.

3. UNDIRECTED GRAPH
An undirected graph has edges without direction.

An edge between A and B means:
A — B

The relationship is represented in both directions.

Example:
A — B — C

This can represent a two-way connection.

4. DIRECTED VS UNDIRECTED GRAPHS
Directed:
• Edges have a direction.
• A → B is different from B → A.

Undirected:
• Edges do not have a direction.
• A — B represents a connection between A and B.

5. GRAPH REPRESENTATION
The syllabus includes two important graph representations:
• Adjacency List
• Adjacency Matrix

The choice of representation depends on the type and density of the graph and the operations required.

6. ADJACENCY LIST
An adjacency list stores, for each vertex, a list of the vertices connected to it.

Example for an undirected graph:
A — B
A — C
B — D

Adjacency list:
A → B, C
B → A, D
C → A
D → B

Advantages:
• Stores only the connections that actually exist.
• Can be useful for graphs with relatively few edges.

7. ADJACENCY MATRIX
An adjacency matrix uses a two-dimensional matrix.

For a graph with n vertices, the matrix has n × n positions.

For a simple unweighted graph:
• 1 can indicate an edge.
• 0 can indicate no edge.

Example:
Vertices: A, B, C

Matrix idea:
    A B C
A   0 1 1
B   1 0 0
C   1 0 0

The exact values depend on the graph.

8. ADJACENCY LIST VS MATRIX
Adjacency List:
• Represents each vertex with its connected neighbors.
• Avoids storing every possible vertex pair when many pairs have no edge.

Adjacency Matrix:
• Uses a fixed n × n table.
• Makes the presence/absence of a direct edge easy to represent.

9. PATHS
A path is a sequence of vertices connected by edges.

Example:
A → B → C → D

A to D is a path through B and C.

A path may contain several edges and vertices.

10. CYCLES
A cycle is a path that starts and ends at the same vertex, with the required connections forming a closed route.

Example:
A → B → C → A

This forms a cycle.

11. CONNECTED GRAPH
For an undirected graph, a graph is connected when every vertex can be reached from every other vertex through one or more paths.

Example:
A — B — C — D

All vertices are connected through the graph.

12. DISCONNECTED GRAPH
A graph is disconnected when at least one vertex or group of vertices has no path to another part of the graph.

Example:
A — B     C — D

There is no path from A to C.

13. SPANNING TREE
A spanning tree of a connected undirected graph is a tree that:
• Contains all vertices of the graph.
• Uses only edges from the original graph.
• Contains no cycle.

For a graph with n vertices, a spanning tree contains n − 1 edges.

A graph can have more than one possible spanning tree.

14. WHY SPANNING TREES ARE USEFUL
Spanning trees provide a way to connect all vertices without unnecessary cycles.

They are useful when designing connection structures where every required vertex must remain connected while redundant cycles are avoided.

15. TOPOLOGICAL SORTING — CONCEPT
Topological sorting produces a linear ordering of vertices in a directed graph such that for every directed edge:

A → B

A appears before B in the ordering.

It is applicable to directed graphs where such an ordering is possible.

Conceptual example:
A → C
B → C

Possible topological ordering:
A, B, C

The order may not be unique.

16. TOPOLOGICAL SORTING — EXAMPLE
Suppose:
Design → Code → Test

A valid topological order is:
Design, Code, Test

The dependency is respected because each prerequisite appears before the task that depends on it.

17. MINIMUM SPANNING TREE
For a connected weighted undirected graph, a Minimum Spanning Tree (MST) is a spanning tree whose total edge weight is minimum among the possible spanning trees.

The syllabus includes two MST algorithms:
• Prim’s algorithm
• Kruskal’s algorithm

18. PRIM’S ALGORITHM — CONCEPT
Prim’s algorithm builds an MST by growing one connected tree.

Basic idea:
1) Start from a chosen vertex.
2) Among edges that connect the current tree to a vertex outside the tree, choose the minimum-weight edge.
3) Add that edge and the new vertex to the tree.
4) Repeat until all vertices are included.

The selected edges remain connected to the growing tree.

19. PRIM’S ALGORITHM — SIMPLE EXAMPLE
Suppose a starting vertex is A.

If the currently connected vertices are:
A, B

and the available edges to outside vertices have weights:
B — C = 2
A — D = 5
B — D = 3

Choose B — C because weight 2 is the smallest available connecting edge.

Continue selecting the minimum suitable edge until all vertices are included.

20. KRUSKAL’S ALGORITHM — CONCEPT
Kruskal’s algorithm builds an MST by considering edges in increasing order of weight.

Basic idea:
1) Sort all graph edges by increasing weight.
2) Consider the smallest edge.
3) Add it if adding it does not create a cycle.
4) Continue with the next smallest edge.
5) Stop when the spanning tree has enough edges to connect all vertices.

21. KRUSKAL’S ALGORITHM — SIMPLE EXAMPLE
Suppose the sorted edge weights are:
A—B = 1
B—C = 2
A—C = 3
C—D = 4

Select:
A—B
B—C

Skip A—C if it would create a cycle among A, B and C.

Then select:
C—D

The selected edges connect all vertices without creating a cycle.

22. PRIM VS KRUSKAL
Prim’s:
• Starts from a vertex.
• Grows one connected tree.
• Chooses the minimum edge connecting the current tree to an outside vertex.

Kruskal’s:
• Starts with edges considered in sorted order.
• Adds the next smallest edge when it does not create a cycle.
• Builds the spanning forest and gradually joins components.

Both are used to find a Minimum Spanning Tree.

23. SHORTEST PATH
A shortest-path problem asks for a path between vertices with minimum total path cost.

The cost can represent distance, time or another non-negative measure, depending on the application.

The syllabus includes Dijkstra’s algorithm for finding shortest paths.

24. DIJKSTRA’S ALGORITHM — CONCEPT
Dijkstra’s algorithm finds shortest paths from a chosen source vertex to other vertices in a weighted graph when the edge weights satisfy the algorithm’s non-negative-weight requirement.

Basic idea:
1) Set the source distance to 0.
2) Set other tentative distances to infinity.
3) Select the unprocessed vertex with the smallest tentative distance.
4) Check its outgoing edges and update neighboring distances when a shorter route is found.
5) Mark the selected vertex as processed.
6) Repeat until the required shortest paths are determined.

25. DIJKSTRA’S RELAXATION IDEA
Suppose:
Current shortest distance to A = 5
Edge A → B = 3

Then the route through A gives:
5 + 3 = 8

If B currently has a tentative distance greater than 8, update it to 8.

This repeated improvement of tentative distances is the key idea behind the algorithm.

26. SIMPLE DIJKSTRA EXAMPLE
Suppose:
A —1— B
A —4— C
B —2— C

Starting at A:
• Distance(A) = 0
• Distance(B) = 1
• Distance(C) initially = 4

Through B:
Distance(B) + weight(B,C) = 1 + 2 = 3

Since 3 is less than 4, update:
Distance(C) = 3

So the shortest path from A to C is:
A → B → C
with total cost 3.

27. GRAPH TOPICS — QUICK COMPARISON
Directed graph:
• Edges have direction.

Undirected graph:
• Edges have no direction.

Adjacency list:
• Stores connected neighbors for each vertex.

Adjacency matrix:
• Uses an n × n matrix.

Path:
• Sequence of connected vertices.

Cycle:
• Closed path returning to the starting vertex.

Connected graph:
• Vertices are reachable through paths in the relevant graph sense.

Disconnected graph:
• At least one part is not reachable from another.

Spanning tree:
• Includes all vertices without cycles.

MST:
• Spanning tree with minimum total edge weight.

Topological sorting:
• Linear ordering that respects directed dependencies.

Prim:
• Grows an MST from a chosen starting vertex.

Kruskal:
• Adds smallest suitable edges while avoiding cycles.

Dijkstra:
• Finds shortest paths from a source under its non-negative edge-weight requirement.

28. QUICK EXAM REVISION
• Graph = vertices + edges.
• Directed graph = edges have direction.
• Undirected graph = edges have no direction.
• Adjacency list = neighbor lists.
• Adjacency matrix = n × n representation.
• Path = sequence of connected vertices.
• Cycle = closed path.
• Connected graph = vertices can reach one another through paths in an undirected graph.
• Disconnected graph = graph has separated parts.
• Spanning tree = all vertices, no cycles.
• MST = minimum-weight spanning tree.
• Topological sorting = ordering that respects directed dependencies.
• Prim’s = grows MST from a starting vertex.
• Kruskal’s = chooses edges in increasing weight while avoiding cycles.
• Dijkstra = shortest paths from a source for graphs satisfying its non-negative-weight requirement.

IMPORTANT EXAM QUESTIONS
1. Define a graph. Explain directed and undirected graphs.
2. Explain adjacency list and adjacency matrix with examples.
3. Differentiate adjacency list and adjacency matrix.
4. Define path and cycle in a graph.
5. Differentiate connected and disconnected graphs.
6. What is a spanning tree? Explain its properties.
7. Explain topological sorting with an example.
8. What is a Minimum Spanning Tree?
9. Explain Prim’s algorithm with an example.
10. Explain Kruskal’s algorithm with an example.
11. Compare Prim’s and Kruskal’s algorithms.
12. What is the shortest-path problem?
13. Explain Dijkstra’s algorithm with an example.
14. Explain the relaxation/update step in Dijkstra’s algorithm.

PRACTICAL / CONCEPT PRACTICE
• Draw directed and undirected graphs for a small set of vertices.
• Represent the same graph using an adjacency list and adjacency matrix.
• Identify paths and cycles in a sample graph.
• Determine whether a sample graph is connected or disconnected.
• Construct a spanning tree from a connected graph.
• Perform a topological ordering for a simple directed dependency graph.
• Construct an MST using Prim’s algorithm.
• Construct an MST using Kruskal’s algorithm.
• Trace Dijkstra’s algorithm from a chosen source and update tentative distances step by step.

SYLLABUS ALIGNMENT
This note follows Unit 4 of the uploaded Semester III CSE Algorithms syllabus: directed and undirected graphs; adjacency list and matrix; paths, cycles and connected/disconnected graphs; spanning trees; topological sorting; Minimum Spanning Trees using Prim’s and Kruskal’s algorithms; and shortest path using Dijkstra’s algorithm.` },
  { subject:'Algorithms', code:'305', unit:'Unit 5', title:'Strings and Data Compression', desc:'Detailed Unit 5 notes covering string sorting, substring search, regular expressions, validation applications, data-compression need, Huffman coding and its applications.', type:'Detailed Notes',
    content:`Unit 5 — Strings and Data Compression

1. INTRODUCTION TO STRINGS
A string is a sequence of characters.

Examples:
• "HELLO"
• "COMPUTER"
• "ALGORITHM"

String processing includes operations for organizing, searching and analyzing text.

2. STRING SORTING — CONCEPT
String sorting means arranging strings in a specified order, commonly lexicographic or dictionary order.

Example:
Unsorted:
"banana", "apple", "cat"

Sorted:
"apple", "banana", "cat"

For correct string sorting, character comparison rules and the chosen ordering method must be consistent.

3. STRING SORTING — PROCESS
A general string-sorting process is:
1) Store the strings to be sorted.
2) Compare strings according to the selected ordering rule.
3) Reorder strings that are out of order.
4) Continue until the collection is correctly ordered.

The exact sorting technique can vary depending on the application and data.

4. STRING SORTING — SIMPLE EXAMPLE
Suppose the strings are:
"dog", "cat", "ant"

Compare according to alphabetical order:
"cat" comes before "dog".
"ant" comes before both.

Final order:
"ant", "cat", "dog"

5. APPLICATIONS OF STRING SORTING
String sorting is useful in text processing applications such as:
• Alphabetically arranging names or words.
• Organizing dictionary or word lists.
• Sorting text records.
• Preparing ordered search results.
• Organizing textual data for further processing.

6. SUBSTRING SEARCH — CONCEPT
A substring is a smaller sequence of characters occurring within a larger string.

Example:
Text: "COMPUTER"
Pattern: "PUT"

The pattern "PUT" occurs inside "COMPUTER".

Substring search is the process of finding whether a pattern occurs in a larger text and, when applicable, locating its position.

7. SUBSTRING SEARCH — PROCESS
A basic substring-search process is:
1) Take the text and the pattern.
2) Compare the pattern with possible positions in the text.
3) Move to the next position when the current comparison does not match.
4) Report the matching position when the complete pattern is found.
5) Continue when multiple occurrences need to be located.

8. SUBSTRING SEARCH — SIMPLE EXAMPLE
Text:
"DATA STRUCTURES"

Pattern:
"STRUCT"

The pattern begins at the position where the characters "STRUCT" occur consecutively in the text.

Substring search is commonly used in text editors, document search and other text-processing systems.

9. REGULAR EXPRESSIONS — MEANING
A Regular Expression (regex) is a pattern used to describe and search for text that follows a specified structure.

Regex is useful when simple exact string matching is not enough and we need to describe a class of possible strings.

10. IMPORTANCE OF REGULAR EXPRESSIONS
Regular expressions are important because they can:
• Search for text patterns.
• Validate whether input follows a required format.
• Extract matching parts of text.
• Replace matching text patterns.
• Help automate common text-processing tasks.

11. BASIC REGEX OPERATORS AND PATTERNS
Common regex symbols include:

• . — matches a character in many regex implementations.
• ^ — beginning of a string/line.
• $ — end of a string/line.
• * — zero or more repetitions of the preceding element.
• + — one or more repetitions.
• ? — zero or one occurrence in common regex syntax.
• [abc] — matches one character from the specified set.
• [0-9] — matches a digit from 0 to 9.
• [A-Za-z] — matches a letter from the specified ranges.
• \\d — commonly represents a digit.
• \\w — commonly represents a word character.
• {m,n} — specifies a permitted repetition range in common regex syntax.

Exact regex syntax can vary slightly between tools and programming languages.

12. REGEX PATTERN EXAMPLE — PHONE NUMBER
A regex can be used to check whether a phone-number input follows a specified format.

Example conceptual pattern for a 10-digit numeric input:
^[0-9]{10}$

Meaning:
• ^ = start of input.
• [0-9] = a digit.
• {10} = exactly ten occurrences.
• $ = end of input.

This checks the format; it does not prove that the number actually belongs to a person.

13. REGEX PATTERN EXAMPLE — EMAIL
Regular expressions can be used for basic email-format validation.

A conceptual pattern can check for:
• Some characters before @.
• An @ symbol.
• A domain name.
• A dot and domain extension where required by the chosen validation rule.

Example of a simple illustrative pattern:
^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$

This is a format check. Real-world email validation can involve rules beyond a simple regex.

14. DATA COMPRESSION — NEED
Data compression reduces the amount of space needed to represent data.

Why compression is useful:
• Reduces storage requirements.
• Can reduce transmission size.
• Can improve transfer efficiency when less data needs to be sent.
• Helps manage large collections of files and textual data.

15. ELEMENTARY DATA COMPRESSION
Compression methods generally try to represent the same information using fewer bits than the original representation.

There are two broad ideas:
• Lossless compression — original data can be reconstructed exactly.
• Lossy compression — some information may be discarded to achieve greater size reduction.

For this syllabus, the main named technique is Huffman coding, which is a lossless coding method.

16. HUFFMAN CODING — CONCEPT
Huffman coding is a lossless data-compression technique that assigns shorter binary codes to more frequent symbols and longer codes to less frequent symbols.

The goal is to reduce the average number of bits required to represent the data.

17. HUFFMAN CODING — BASIC IDEA
Suppose symbols have frequencies:

A → high frequency
B → medium frequency
C → low frequency
D → very low frequency

Huffman coding builds a binary tree based on symbol frequencies so that frequent symbols receive shorter codes and less frequent symbols receive longer codes.

The resulting codes are prefix-free, meaning one complete symbol code is not the prefix of another symbol code.

18. HUFFMAN CODING — WORKING
Basic procedure:
1) Count the frequency of each symbol.
2) Create one node for each symbol with its frequency.
3) Select the two nodes with the smallest frequencies.
4) Combine them into a new node whose frequency is their sum.
5) Put the new node back into the collection.
6) Repeat until one tree remains.
7) Assign binary digits along the tree branches.
8) The path from the root to each symbol gives its Huffman code.

19. SIMPLE HUFFMAN EXAMPLE
Suppose the frequencies are:

A = 5
B = 3
C = 2
D = 1

The two smallest frequencies are combined first:
1 + 2 = 3

Then the smallest available nodes are combined again, continuing until one tree is formed.

The exact binary codes depend on the final tree and the chosen left/right bit assignment, but the high-frequency symbols receive shorter codes than very low-frequency symbols.

20. WHY HUFFMAN CODING SAVES SPACE
If frequently occurring symbols receive shorter codes and less frequent symbols receive longer codes, the total number of bits needed for the complete message can be reduced compared with a fixed-length representation.

This is the basic compression principle behind Huffman coding.

21. HUFFMAN CODING — LOSSLESS PROPERTY
Huffman coding is lossless.

After decoding a correctly encoded message using the corresponding Huffman tree, the original symbol sequence can be recovered without loss of information.

22. APPLICATIONS OF HUFFMAN CODING
Huffman coding can be used in:
• File storage.
• Data transmission.
• Text compression.
• Compression systems that need exact recovery of the original data.

23. STRING PROCESSING AND COMPRESSION — CONNECTION
String sorting and substring search help organize and find information in text.

Regular expressions help identify and validate text patterns.

Data compression reduces the storage or transmission size of data.

These concepts are therefore closely related to practical text-processing systems.

24. QUICK EXAM REVISION
• String sorting = arranging strings in a selected order.
• Substring = smaller character sequence within a larger string.
• Substring search = finding a pattern within text.
• Regex = pattern used to describe/search structured text.
• ^ = start; $ = end in common regex syntax.
• * = zero or more; + = one or more.
• [0-9] = digit range.
• {10} = exactly ten repetitions.
• Data compression = represent data with fewer bits.
• Lossless = original data can be recovered exactly.
• Huffman coding = lossless coding based on symbol frequency.
• Huffman idea = frequent symbols generally get shorter codes.
• Huffman working = frequency count → combine two least frequencies repeatedly → form tree → assign codes.
• Applications = text processing, file storage and transmission.

IMPORTANT EXAM QUESTIONS
1. What is string sorting? Explain its process.
2. Write the applications of string sorting in text processing.
3. What is substring search? Explain its process with an example.
4. Define regular expressions and explain their importance.
5. Explain basic regex operators and patterns.
6. Explain the use of regex for phone-number validation.
7. Explain the use of regex for basic email-format validation.
8. Why is data compression needed?
9. Differentiate lossless and lossy compression.
10. What is Huffman coding?
11. Explain the working steps of Huffman coding.
12. Why does Huffman coding give shorter codes to frequent symbols?
13. Write applications of Huffman coding in file storage and transmission.

PRACTICAL / CONCEPT PRACTICE
• Sort a small list of strings alphabetically.
• Find a substring inside a sample text.
• Write simple regex patterns for digits and fixed-length numbers.
• Write a regex for basic email-format validation.
• Create a small frequency table for characters.
• Build a simple Huffman tree from a small set of symbol frequencies.
• Assign binary codes from the Huffman tree.
• Explain how the resulting codes reduce the average number of bits.

SYLLABUS ALIGNMENT
This note follows Unit 5 of the uploaded Semester III CSE Algorithms syllabus: String Sorting (concept, process and applications in text processing); Substring Search (concept and process); Regular Expressions (meaning and importance, basic operators and patterns, applications for email and phone-number validation); and Elementary Data Compression (need, Huffman coding concept and working, and applications in file storage and transmission).` },
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



const hindiNotes = {
  "301|Unit 1": {
    "title": "कम्प्यूटेशनल थिंकिंग, वेरिएबल और डेटा निरूपण",
    "desc": "विस्तृत हिंदी नोट्स: समस्या समाधान, computational thinking के चार घटक, एल्गोरिदम, फ्लोचार्ट, variables, constants, C data types और memory representation; साथ में exam questions और अभ्यास।",
    "content": "इकाई 1 — कम्प्यूटेशनल थिंकिंग, वेरिएबल और डेटा निरूपण\n\n1. समस्या समाधान (Problem Solving)\nसमस्या समाधान वह प्रक्रिया है जिसमें किसी समस्या को समझा जाता है, उसके लिए तार्किक हल तैयार किया जाता है, हल को लागू किया जाता है और परिणाम की जाँच की जाती है। Programming में समस्या को स्पष्ट चरणों में बदला जाता है जिन्हें computer execute कर सकता है।\n\nसमस्या समाधान के मुख्य चरण:\n1) समस्या को समझकर स्पष्ट रूप से परिभाषित करना।\n2) आवश्यक inputs और अपेक्षित outputs पहचानना।\n3) बड़ी समस्या को छोटे भागों में बाँटना।\n4) algorithm और/या flowchart बनाकर समाधान की योजना तैयार करना।\n5) C जैसी programming language में program लिखना।\n6) उपयुक्त inputs देकर program का परीक्षण करना।\n7) errors पहचानकर सुधारना और समाधान को बेहतर बनाना।\n\n2. कम्प्यूटेशनल थिंकिंग (Computational Thinking)\nComputational thinking समस्याओं को व्यवस्थित और तार्किक तरीके से हल करने की सोच है। इसमें समाधान को ऐसे स्पष्ट चरणों में तैयार किया जाता है जिन्हें computer द्वारा execute किया जा सके।\n\nइसके मुख्य घटक:\n• Decomposition: बड़ी और कठिन समस्या को छोटे, आसानी से हल किए जा सकने वाले भागों में बाँटना।\n• Pattern Recognition: समस्या में समानताओं या बार-बार आने वाले तरीकों को पहचानना।\n• Abstraction: अनावश्यक विवरण हटाकर समस्या की जरूरी जानकारी पर ध्यान देना।\n• Algorithmic Thinking: समाधान के लिए स्पष्ट और क्रमबद्ध steps तैयार करना।\n\nउदाहरण: कई विद्यार्थियों के कुल marks निकालने के लिए पहले marks लेना, फिर उन्हें जोड़ना और अंत में total दिखाना अलग-अलग छोटे कार्य हैं।\n\n3. एल्गोरिदम (Algorithm)\nAlgorithm किसी समस्या को हल करने या कार्य पूरा करने के लिए स्पष्ट, सीमित और क्रमबद्ध steps का समूह है। एक अच्छे algorithm के steps स्पष्ट होने चाहिए, आवश्यक input और output परिभाषित होने चाहिए तथा प्रक्रिया सीमित चरणों के बाद समाप्त होनी चाहिए।\n\nदो संख्याओं को जोड़ने का algorithm:\nStep 1: Start\nStep 2: A और B पढ़ें।\nStep 3: SUM = A + B की गणना करें।\nStep 4: SUM प्रदर्शित करें।\nStep 5: Stop\n\n4. फ्लोचार्ट (Flowchart)\nFlowchart algorithm का चित्रात्मक रूप है। इसमें standard symbols और arrows का उपयोग करके operations, decisions तथा उनके क्रम को दिखाया जाता है।\n\nसामान्य symbols:\n• Oval: Start या End दिखाने के लिए।\n• Rectangle: Processing या calculation के लिए।\n• Parallelogram: Input या Output के लिए।\n• Diamond: Decision या condition के लिए।\n• Arrow: Program flow की दिशा दिखाने के लिए।\n\nदो संख्याओं को जोड़ने वाले flowchart का क्रम:\nStart → A और B का Input → SUM = A + B → SUM का Output → Stop\n\n5. वेरिएबल (Variable)\nVariable memory में नाम दिया गया ऐसा स्थान है जिसका value program चलते समय बदल सकता है। C में variable के साथ data type जुड़ा होता है, जो बताता है कि उसमें किस प्रकार का data रखा जाएगा और उसे कैसे interpret किया जाएगा।\n\nउदाहरण:\nint marks;\nmarks = 75;\n\nयहाँ marks variable का नाम है और 75 उसका वर्तमान value है।\n\n6. कॉन्स्टेंट (Constant)\nConstant ऐसा value है जिसे program execution के दौरान बदलने के लिए नहीं रखा जाता। इसे सीधे literal value के रूप में या symbolic constant के माध्यम से दर्शाया जा सकता है।\n\nउदाहरण:\nconst int DAYS = 7;\n\nयहाँ DAYS एक constant है। इसे program में सप्ताह के दिनों की संख्या दर्शाने के लिए उपयोग किया जा सकता है।\n\n7. C में डेटा टाइप (Data Types)\nData type बताता है कि variable में किस प्रकार का value रखा जाएगा। यह compiler को stored value को interpret करने में मदद करता है और memory requirement को प्रभावित करता है।\n\n• int: पूर्णांक, जैसे 10 या -4।\n• char: एक character, जैसे 'A'।\n• float: सामान्य single-precision floating-point संख्या, जैसे 3.5।\n• double: अधिक precision वाली floating-point संख्या।\n• void: ऐसे संदर्भों में उपयोग होता है जहाँ value या type की अनुपस्थिति दर्शानी हो।\n\nकिसी data type का exact memory size compiler और system implementation पर निर्भर कर सकता है।\n\n8. वेरिएबल का मेमोरी निरूपण (Memory Representation)\nComputer data को binary bits (0 और 1) के रूप में store करता है। सामान्यतः 8 bits मिलकर 1 byte बनाते हैं। Variable declare किए जाने पर उसके data type के अनुसार memory में स्थान reserve किया जाता है। Program में variable का नाम उस stored value को refer करने के लिए उपयोग होता है।\n\nइसे इस तरह समझें:\nVariable name → Memory location/address → Stored binary value\n\nइसलिए variable की एक value और memory में एक location/address होती है। Data type बताता है कि stored bits को किस तरह interpret किया जाए।\n\n9. Worked example (WORKED EXAMPLE)\nसरल worked example (WORKED EXAMPLE)\nमान लीजिए तीन marks 60, 70 और 80 हैं। Algorithm होगा: marks का input लेना → total = 60 + 70 + 80 = 210 निकालना → average = total / 3 = 70 निकालना → total और average दिखाना। Variable total का value program में बदल सकता है; यदि किसी नाम का value स्थिर रखना है तो constant का उपयोग किया जा सकता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Problem solving के चरण: define → analyze → design → implement → test → improve।\n• Computational thinking समस्याओं को व्यवस्थित ढंग से हल करने की approach है।\n• Algorithm किसी कार्य को हल करने वाले स्पष्ट, क्रमबद्ध और सीमित steps का समूह है।\n• Flowchart algorithm का चित्रात्मक निरूपण है।\n• Variable का value बदल सकता है; constant का value बदलने के लिए नहीं रखा जाता।\n• Data type value के प्रकार और उसकी interpretation को निर्धारित करता है।\n• Computer memory में data binary रूप में store होता है।\n• 8 bits = 1 byte; variable name memory में stored value को refer करता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Problem solving की परिभाषा दीजिए और इसके चरण लिखिए।\n2. Computational thinking क्या है? इसके घटकों को समझाइए।\n3. Algorithm की परिभाषा दीजिए और दो संख्याओं को जोड़ने का algorithm लिखिए।\n4. Flowchart क्या है? इसके सामान्य symbols समझाइए।\n5. C में variable और constant को उदाहरण सहित परिभाषित कीजिए।\n6. C के सामान्य data types समझाइए।\n7. Variables के memory representation को समझाइए।\n\nप्रैक्टिकल अभ्यास (PRACTICAL PRACTICE)\n• दो संख्याओं को जोड़ने का algorithm और flowchart बनाइए।\n• तीन संख्याओं का औसत निकालने के steps लिखिए।\n• Rectangle का area निकालने के लिए algorithm/flowchart बनाइए।\n\nपाठ्यक्रम अनुरूपता (SYLLABUS ALIGNMENT)\nयह इकाई Semester III CSE syllabus के इन topics को cover करती है: problem solving और computational thinking; उनके चरण एवं घटक; algorithm और flowchart; variables, constants, C data types और memory representation।"
  },
  "301|Unit 2": {
    "title": "ऑपरेटर और इनपुट-आउटपुट",
    "desc": "विस्तृत हिंदी नोट्स: arithmetic, relational, logical, bitwise operators, precedence, associativity, formatted I/O, printf/scanf और file I/O; exam questions व practical examples सहित।",
    "content": "इकाई 2 — ऑपरेटर और इनपुट-आउटपुट\n\n1. Operators\nOperator वह symbol है जो operands पर calculation, comparison या logical operation करता है। उदाहरण: 5 + 3 में + operator और 5, 3 operands हैं।\n\n2. Arithmetic Operators\n+ addition, - subtraction, * multiplication, / division और % remainder देता है।\nउदाहरण: 10 % 3 का परिणाम 1 है। यदि दोनों operands int हों, तो 10 / 3 का परिणाम 3 होगा क्योंकि integer division fractional part हटा देता है।\nIncrement/decrement operators ++ और -- मान को एक बढ़ाते/घटाते हैं।\n\n3. Relational Operators\n<, >, <=, >=, == और != तुलना करते हैं। उदाहरण: marks >= 40 यह जाँचता है कि marks कम-से-कम 40 हैं या नहीं।\nध्यान दें: = assignment है जबकि == equality comparison है।\n\n4. Logical Operators\n&& (AND): दोनों conditions true हों तो true।\n|| (OR): कम-से-कम एक condition true हो तो true।\n! (NOT): condition का truth value उलटता है।\nउदाहरण: (age >= 18 && citizen == 1) दोनों शर्तें सही होने पर true होगा।\n\n5. Bitwise Operators\n&, |, ^, ~, << और >> integer के individual bits पर काम करते हैं।\n5 = 0101 और 3 = 0011 (4-bit रूप); 5 & 3 = 0001 = 1।\nLogical AND (&&) conditions पर काम करता है, जबकि bitwise AND (&) bits पर।\n\n6. Precedence और Associativity\nPrecedence operator की priority बताता है। Associativity समान precedence वाले operators के समूह की evaluation direction बताती है।\nउदाहरण: 2 + 3 * 4 = 14, क्योंकि * पहले होता है। Parentheses लगाने से intended order स्पष्ट हो जाता है।\n\n7. Input और Output Functions\nC में सामान्य input/output functions के लिए #include <stdio.h> उपयोग करते हैं।\nprintf() output दिखाता है। scanf() keyboard से formatted input लेता है।\nउदाहरण:\nint age;\nscanf(\"%d\", &age);\nprintf(\"Age = %d\", age);\nscanf() में सामान्यतः variable का address देने के लिए & उपयोग होता है।\n\n8. Format Specifiers\n%d int, %c char, %f floating-point value, %lf scanf में double पढ़ने के लिए और %s character string के लिए सामान्य specifiers हैं। सही specifier type के अनुसार चुनें।\n\\n नई line शुरू करता है।\n\n9. Basic File I/O\nFILE *fp; से file pointer घोषित होता है। fopen() file खोलता है, fprintf()/fscanf() data लिखने/पढ़ने में सहायक हैं और fclose() file बंद करता है।\nModes: \"r\" पढ़ना, \"w\" लिखना/पुरानी सामग्री बदलना, \"a\" अंत में जोड़ना।\nसामान्य क्रम: pointer घोषित करें → file खोलें और जाँचें → read/write करें → file बंद करें।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n10. Operators के उदाहरण और सावधानियाँ\nArithmetic में +, -, *, / और % उपयोग होते हैं। Integer operands पर 10 / 3 का परिणाम 3 होता है, क्योंकि fractional part हट जाता है; 10 % 3 का परिणाम 1 है। Relational operators <, >, <=, >=, == और != true/false condition बनाने में उपयोग होते हैं। Assignment operator = value store करता है, जबकि == equality compare करता है।\n\nLogical operators && (AND), || (OR) और ! (NOT) conditions को combine या reverse करते हैं। Bitwise &, |, ^, ~, << और >> integer की individual bits पर काम करते हैं। उदाहरण के लिए 5 का binary 0101 और 3 का 0011 लें: 5 & 3 = 0001 यानी 1।\n\n11. Precedence और Associativity का उदाहरण\nint x = 2 + 3 * 4; में multiplication पहले होता है, इसलिए x = 14। int y = (2 + 3) * 4; में brackets पहले evaluate होते हैं, इसलिए y = 20। समान precedence वाले कई arithmetic operators जैसे / और * सामान्यतः left-to-right evaluate होते हैं: 20 / 5 * 2 = 8। अस्पष्टता से बचने के लिए parentheses उपयोग करें।\n\n12. C में Input/Output और Format Specifiers\nprintf() formatted output दिखाता है और scanf() formatted input लेता है। %d integer, %c character, %f floating-point value और %s string के लिए सामान्य specifiers हैं। उदाहरण:\nint age;\nprintf(\"Age enter करें: \");\nscanf(\"%d\", &age);\nprintf(\"Age = %d\\n\", age);\nसामान्य variables के लिए scanf() में & address operator दिया जाता है ताकि entered value सही variable में store हो सके। \\n अगली line पर ले जाता है।\n\n13. File I/O के चरण और Modes\nFile pointer FILE * से declare किया जाता है। fopen(\"data.txt\", \"r\") reading के लिए, \"w\" writing के लिए और \"a\" existing content के अंत में data जोड़ने के लिए उपयोग होता है। \"w\" existing file content को replace कर सकता है। File खोलने के बाद pointer NULL तो नहीं है, यह check करें; फिर fscanf()/fgets() से पढ़ें या fprintf()/fputs() से लिखें और अंत में fclose() करें। File का उपयोग खत्म होने पर उसे बंद करना जरूरी है।\n\n14. Worked example (WORKED EXAMPLE)\nWorked example: Bitwise और operator order\n5 = 0101 और 3 = 0011 (4-bit representation)। इसलिए 5 & 3 = 0001 = 1। दूसरी ओर 5 && 3 logical AND है और C में दोनों non-zero values को true माना जाता है, इसलिए इसका result 1 होगा। दोनों operators दिखने में मिलते-जुलते हैं लेकिन अर्थ अलग है।\nFile mode याद रखें: \"r\" पढ़ने, \"w\" लिखने (पुरानी सामग्री replace हो सकती है), और \"a\" अंत में जोड़ने के लिए। fopen() असफल होने पर NULL लौट सकता है, इसलिए file pointer जाँचे बिना read/write न करें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Arithmetic operators गणितीय गणनाओं के लिए होते हैं।\n• Relational operators values की तुलना करते हैं।\n• Logical operators conditions को जोड़ते या उनका उलटा परिणाम देते हैं।\n• Bitwise operators integer की individual bits पर कार्य करते हैं।\n• Precedence तय करता है कि कौन-सा operator पहले evaluate होगा।\n• समान precedence वाले operators के evaluation की दिशा associativity से तय होती है।\n• printf() formatted output दिखाता है।\n• scanf() formatted input लेता है।\n• fopen() file खोलता है और fclose() file बंद करता है।\n• File modes में \"r\" पढ़ने, \"w\" लिखने और \"a\" जोड़कर लिखने के लिए है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Arithmetic, relational, logical और bitwise operators को उदाहरण सहित समझाइए।\n2. Operator precedence क्या है? उदाहरण दीजिए।\n3. Associativity क्या है? किसी expression से समझाइए।\n4. C में = और == के बीच अंतर बताइए।\n5. printf() और scanf() को उपयुक्त उदाहरणों सहित समझाइए।\n6. Formatted output क्या होता है?\n7. Basic file I/O और सामान्य file modes समझाइए।\n8. C में file खोलने, उपयोग करने और बंद करने के मुख्य चरण लिखिए।\n\nप्रैक्टिस:\nदो integers पढ़कर sum, difference, product और remainder print करने का program लिखें।"
  },
  "301|Unit 3": {
    "title": "कंडीशनल और लूपिंग कंस्ट्रक्ट्स",
    "desc": "विस्तृत हिंदी नोट्स: if, if-else, nested if, ?:, for/while/do-while, nested loops, switch, break और continue; code examples, comparisons, exam questions और practical tasks सहित।",
    "content": "इकाई 3 — Conditional और Looping Constructs\n\n1. Conditional Statements\nConditional statements program को condition के आधार पर निर्णय लेने देते हैं। Condition का परिणाम true या false होता है।\n\n2. if Statement\nif block तभी execute होता है जब condition true हो।\nSyntax:\nif (condition) {\n    statement;\n}\nउदाहरण:\nif (marks >= 40) {\n    printf(\"Pass\");\n}\n\n3. if-else Statement\nCondition true होने पर if और false होने पर else block execute होता है।\nif (number % 2 == 0) {\n    printf(\"Even\");\n} else {\n    printf(\"Odd\");\n}\n\n4. Nested if\nएक if के अंदर दूसरा if हो तो उसे nested if कहते हैं। जब दूसरा निर्णय पहले condition के सही होने पर निर्भर करता है, तब यह उपयोगी है।\nउदाहरण: पहले pass marks जाँचें, फिर उसी block में distinction के marks जाँचें।\n\n5. Conditional Operator ?:\nयह condition के आधार पर दो expressions में से एक चुनता है।\nSyntax: condition ? expression1 : expression2;\nउदाहरण: max = (a > b) ? a : b;\n\n6. for Loop\nजब repetitions की संख्या ज्ञात हो, for loop सुविधाजनक है।\nfor (int i = 1; i <= 5; i++) {\n    printf(\"%d\\n\", i);\n}\nHeader में initialization, condition और update होते हैं। Condition प्रत्येक iteration से पहले जाँची जाती है।\n\n7. while Loop\nwhile condition पहले जाँचता है और true रहने तक body चलाता है। यदि शुरुआत में condition false हो, तो body शून्य बार चल सकती है।\nint i = 1;\nwhile (i <= 5) {\n    printf(\"%d\\n\", i);\n    i++;\n}\n\n8. do-while Loop\nइसमें body पहले चलती है और condition बाद में जाँची जाती है, इसलिए body कम-से-कम एक बार execute होती है।\ndo {\n    printf(\"Hello\\n\");\n    choice++;\n} while (choice < 3);\nwhile(condition) के बाद semicolon लगाना न भूलें।\n\n9. Nested Loops\nएक loop के अंदर दूसरा loop nested loop कहलाता है। Outer loop की प्रत्येक iteration के लिए inner loop सामान्यतः अपनी सभी iterations पूरी करता है। इसका उपयोग patterns, tables और 2-D arrays में होता है।\n\n10. switch-case\nswitch किसी expression के मान के आधार पर कई विकल्पों में से एक चुनता है।\nswitch (choice) {\n    case 1: printf(\"Add\"); break;\n    case 2: printf(\"Exit\"); break;\n    default: printf(\"Invalid choice\");\n}\nbreak अगले case में अनचाहे fall-through से बचाता है। कोई case match न होने पर default चलता है।\n\n11. break और continue\nbreak निकटतम loop या switch से बाहर निकलता है। continue वर्तमान loop iteration का बचा हुआ भाग छोड़कर अगली iteration की ओर जाता है।\n\n12. Loops की तुलना\n• for: initialization, condition और update एक header में; ज्ञात repetitions में उपयोगी।\n• while: condition पहले जाँची जाती है।\n• do-while: body पहले चलती है, condition बाद में जाँची जाती है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n13. Conditional statements की syntax\nif (condition) के अंदर का block condition true होने पर चलता है। if-else true और false में से एक path चुनता है। Nested if तब उपयोगी होता है जब दूसरी condition पहली decision के परिणाम पर निर्भर हो। उदाहरण:\nif (marks >= 40) {\n    printf(\"Pass\");\n} else {\n    printf(\"Try again\");\n}\nC में condition के आसपास parentheses और statements की सही syntax ध्यान रखें।\n\n14. Conditional operator और switch-case\nConditional operator का रूप condition ? value1 : value2 है। उदाहरण: max = (a > b) ? a : b;। switch(expression) अलग-अलग case values के आधार पर block चुनता है। प्रत्येक case के बाद break आमतौर पर अगले case में अनचाहा fall-through रोकता है। default तब चलता है जब कोई case match नहीं करता।\n\n15. for, while और do-while की कार्यप्रणाली\nfor loop में initialization, condition और update साथ लिखे जाते हैं। while loop पहले condition जाँचता है, इसलिए condition शुरू से false होने पर body नहीं चलती। do-while body पहले चलाता है और condition बाद में जाँचता है, इसलिए body कम-से-कम एक बार चलती है। do-while syntax के अंत में semicolon जरूरी है।\n\n16. Nested loops, break और continue\nएक loop के अंदर दूसरा loop nested loop कहलाता है। Outer loop की हर iteration पर inner loop अपनी iterations चलाता है; tables और patterns में इसका उपयोग होता है। break nearest loop या switch से तुरंत बाहर निकलता है। continue current iteration के शेष statements छोड़कर अगली iteration शुरू करता है। इन दोनों का उद्देश्य अलग है, इसलिए program flow trace करके समझें।\n\n17. Worked example (WORKED EXAMPLE)\nWorked example: Loop और condition\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    printf(\"%d \", i);\n}\nOutput: 1 2 4 5\nयहाँ continue केवल i = 3 वाली iteration का बाकी भाग छोड़ता है; loop समाप्त नहीं करता। यदि उसी जगह break होता, तो loop i = 3 पर रुक जाता और output 1 2 होता।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• if condition true होने पर statement चलाता है।\n• if-else true और false के लिए दो blocks में से एक चुनता है।\n• Nested if में एक if के अंदर दूसरा if होता है।\n• ?: conditional operator condition के आधार पर दो expressions में से एक चुनता है।\n• for loop में initialization, condition और update एक साथ लिखे जाते हैं।\n• while loop हर iteration से पहले condition जाँचता है।\n• do-while loop पहले body चलाता है और बाद में condition जाँचता है, इसलिए कम-से-कम एक बार चलता है।\n• switch-case कई विकल्पों में से एक चुनता है।\n• break निकटतम loop या switch से बाहर निकलता है।\n• continue current iteration के शेष statements छोड़कर अगली iteration पर जाता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. if और if-else statements को उदाहरण सहित समझाइए।\n2. Nested if statement क्या है?\n3. Conditional operator को उदाहरण सहित समझाइए।\n4. for, while और do-while loops समझाइए तथा उनकी तुलना कीजिए।\n5. Nested loop क्या है? उदाहरण दीजिए।\n6. break और default के साथ switch-case समझाइए।\n7. break और continue में अंतर बताइए।\n8. Loop और conditional statement प्रदर्शित करने वाला C program लिखिए।\n\nप्रैक्टिस:\nसंख्या even/odd जाँचें, positive/negative/zero पहचानें, 1 से n तक sum निकालें, switch-case menu बनाएँ और nested loop से pattern print करें।"
  },
  "301|Unit 4": {
    "title": "ऐरे और पॉइंटर",
    "desc": "विस्तृत हिंदी नोट्स: arrays, one-dimensional/two-dimensional arrays, memory layout, C strings, string functions, pointers, pointer arithmetic और dynamic memory allocation; exam questions व अभ्यास सहित।",
    "content": "इकाई 4 — Arrays और Pointers\n\n1. Array\nArray समान data type के कई elements को लगातार memory locations में रखता है। C में indexing 0 से शुरू होती है।\nउदाहरण: int marks[5] = {72, 65, 81, 90, 76}; यहाँ marks[0] पहला और marks[4] पाँचवाँ element है।\n\n2. One-dimensional Array\nSyntax: data_type array_name[size];\nउदाहरण: int numbers[5];\nElements पढ़ने या print करने के लिए index-based loop उपयोग किया जा सकता है। Valid index सामान्यतः 0 से size-1 तक होता है।\n\n3. Multidimensional Array\nTwo-dimensional array rows और columns में data रखता है।\nउदाहरण: int matrix[2][3] = {{1,2,3},{4,5,6}};\nmatrix[1][2] का मान 6 है। Nested loops से rows और columns process किए जा सकते हैं।\n\n4. Memory Organization\nArray elements लगातार memory में रखे जाते हैं।\n1-D array में element address का विचार: Base Address + (index × element size)।\nC के 2-D arrays row-major order में store होते हैं यानी एक row के elements क्रम से रखे जाते हैं, फिर अगली row।\n\n5. Strings\nC string character array है जिसके अंत में null character '\\0' होता है।\nउदाहरण: char name[] = \"Aman\";\nMemory में characters के बाद null terminator भी होता है।\n\n6. String Functions\n<string.h> में सामान्य functions:\n• strlen(): null character को छोड़कर length।\n• strcpy(): string copy।\n• strcat(): strings जोड़ना।\n• strcmp(): strings compare करना।\nDestination array में पर्याप्त space सुनिश्चित करें; वरना memory overwrite का खतरा रहता है।\n\n7. Pointer\nPointer ऐसा variable है जो किसी दूसरे object का memory address रखता है।\nउदाहरण:\nint x = 10;\nint *p = &x;\n&x, x का address देता है; *p उस address पर stored value तक पहुँचता है। Dereference करने से पहले pointer का valid address होना चाहिए।\n\n8. Pointers और Arrays\nकई expressions में array name पहले element के address की तरह उपयोग होता है।\nint a[3] = {10,20,30};\nint *p = a;\n*p का मान 10 और *(p+1) का मान 20 है।\n\n9. Pointer Arithmetic\nPointer में +1 करने पर वह अगले element की ओर बढ़ता है, केवल एक byte आगे नहीं। यह movement pointed-to data type के size के अनुसार होता है।\n\n10. Dynamic Memory Allocation\nmalloc() memory allocate करता है, calloc() allocate करके bytes zero-initialize करता है, realloc() allocated block का आकार बदल सकता है और free() memory मुक्त करता है। Allocation failure जाँचें और उपयोग के बाद memory free करें।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n11. Array declaration, indexing और dimensions\nArray एक ही data type के कई values को एक नाम के अंतर्गत रखता है। उदाहरण: int marks[5];। C में indexing 0 से शुरू होती है, इसलिए पाँच elements के valid indexes 0 से 4 हैं। Two-dimensional array को int matrix[2][3]; की तरह rows और columns से दर्शाया जा सकता है। Index की सीमा से बाहर access करना गलत व्यवहार का कारण बन सकता है।\n\n12. Array memory और strings\nC में two-dimensional arrays row-major order में store होते हैं: एक row के elements memory में साथ रखे जाते हैं, फिर अगली row आती है। C string character array है जिसके अंत में NUL character \\0 होता है, जो string का अंत बताता है। Character array को ठीक जगह NUL से terminate करना चाहिए ताकि string functions सही काम करें।\n\n13. String functions\nstring.h में उपलब्ध सामान्य functions: strlen(s) length लौटाता है; strcpy(dest, src) source को destination में copy करता है; strcat(dest, src) destination के अंत में source जोड़ता है; strcmp(a, b) strings compare करता है। Destination buffer में पर्याप्त memory होना जरूरी है। इन functions का उपयोग करते समय null terminator और array size का ध्यान रखें।\n\n14. Pointer declaration, access और arithmetic\nPointer किसी variable या object का memory address store करता है। उदाहरण: int n = 10; int *p = &n;। यहाँ &n, n का address देता है और *p उस address पर रखी value 10 access करता है। Pointer arithmetic में p++ अगले int element के address की ओर बढ़ता है, केवल एक byte आगे नहीं। इसे किसी array के elements के बीच उपयोग करें; array के अंत से आगे वाले one-past address को dereference नहीं करना चाहिए। Invalid या uninitialized pointer को भी dereference न करें।\n\n15. Dynamic memory allocation\nmalloc(bytes) memory allocate करता है पर values initialize नहीं करता; calloc(count, size) allocated bytes को zero-initialize करता है; realloc(ptr, size) allocated block का size बदलने का प्रयास करता है; free(ptr) memory release करता है। Allocation असफल हो तो NULL मिल सकता है, इसलिए pointer जाँचें। free() के बाद pointer को दोबारा dereference न करें। Array और pointer संबंधित हैं, पर array object और pointer variable समान चीजें नहीं हैं।\n\n16. Worked example (WORKED EXAMPLE)\nWorked example: Pointer और array\nint values[3] = {10, 20, 30};\nint *p = values;\nprintf(\"%d\", *p);       /* 10 */\nprintf(\"%d\", *(p + 1)); /* 20 */\nArray के valid elements के अंदर pointer arithmetic करें। values के तीन elements के बाद का one-past pointer केवल boundary identify करने के लिए है; उसे dereference नहीं करें। Dynamic memory allocate करते समय allocation failure जाँचें और अंत में free() करें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Array समान data type के elements का collection है जिन्हें index से access किया जाता है।\n• C में array का पहला index 0 होता है।\n• Two-dimensional array data को rows और columns में रखता है।\n• C में multidimensional arrays row-major order में store होते हैं।\n• C string, NUL character ('\\0') से समाप्त होने वाला character array है।\n• strlen() string की length, strcpy() copy, strcat() जोड़ने और strcmp() compare करने के लिए है।\n• Pointer memory address store करता है।\n• & address-of operator और * pointer को dereference करने के लिए उपयोग होता है।\n• malloc() और calloc() memory allocate करते हैं; realloc() size बदल सकता है।\n• free() dynamically allocated memory release करता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Array को परिभाषित कीजिए और one-dimensional तथा multidimensional arrays समझाइए।\n2. Array की memory organization समझाइए।\n3. C में string क्या है? NUL character समझाइए।\n4. सामान्य string functions को उदाहरण सहित समझाइए।\n5. Pointer की परिभाषा दीजिए। उसका declaration, initialization और dereferencing समझाइए।\n6. Array और pointer के बीच संबंध समझाइए।\n7. Pointer arithmetic क्या है?\n8. Dynamic memory allocation और malloc(), calloc(), realloc() तथा free() functions समझाइए।\n9. Array और pointer में अंतर बताइए।\n\nप्रैक्टिस:\n5 elements का array input लेकर sum और average निकालें; matrix के सभी elements display करें; pointer से variable का मान print करें।"
  },
  "301|Unit 5": {
    "title": "फंक्शन और रिकर्शन",
    "desc": "विस्तृत हिंदी नोट्स: functions, prototype/definition/call, parameters, return values, scope, storage lifetime, recursion और recursive examples; exam questions व practice सहित।",
    "content": "इकाई 5 — Functions और Recursion\n\n1. Function क्या है?\nFunction code का नामित block है जो कोई निश्चित काम करता है। Functions program को छोटे हिस्सों में बाँटते हैं, reuse बढ़ाते हैं और testing आसान बनाते हैं।\n\n2. Function के भाग\n• Declaration/Prototype: compiler को function name, return type और parameter types बताता है।\n• Definition: function body और उसका कार्य बताती है।\n• Call: function को execute करने के लिए invoke करता है।\nउदाहरण:\nint add(int a, int b);\nint add(int a, int b) { return a + b; }\nint sum = add(3, 4);\n\n3. Parameters और Arguments\nFunction call में भेजे गए values actual arguments हैं। Function definition में लिखे inputs formal parameters हैं। C सामान्यतः arguments की value की copy pass करता है। Pointer/address pass करके function को caller के data पर काम कराया जा सकता है।\n\n4. Return Value\nreturn statement function से result वापस देता है। void function कोई value return नहीं करता। Return type और return value का मेल होना चाहिए।\n\n5. Scope और Lifetime\nLocal variable अपने block/function के अंदर access होता है। Global variable functions के बाहर घोषित होता है और कई functions से accessible हो सकता है। Scope बताता है variable कहाँ दिखाई देता है; lifetime बताती है memory/object कितनी देर उपलब्ध रहता है।\n\n6. Recursion\nजब function स्वयं को call करता है तो recursion होता है। हर recursive function में base case होना चाहिए और recursive step को उस base case की ओर बढ़ना चाहिए।\nउदाहरण:\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nfactorial(4) = 4 × 3 × 2 × 1 = 24।\n\n7. Recursion के फायदे और सावधानियाँ\nRecursive approach tree traversal और divide-and-conquer जैसी समस्याओं में स्पष्ट हो सकती है। बहुत अधिक recursive calls stack memory बढ़ा सकती हैं। Base case गलत या अनुपस्थित होने पर recursion रुक नहीं सकती।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Function declaration, definition और call\nDeclaration या prototype compiler को function name, return type और parameters की जानकारी देता है। Definition में function body होती है और call से function execute होता है। उदाहरण:\nint add(int a, int b);  /* declaration */\nint add(int a, int b) { return a + b; }  /* definition */\nint result = add(2, 3);  /* call */\nFunction से code reuse, readability और testing आसान होती है।\n\n9. Return type और functions के प्रकार\nArguments और return value के आधार पर सामान्य प्रकार हैं: बिना arguments और बिना return value; arguments के साथ परंतु return value के बिना; बिना arguments पर return value के साथ; arguments और return value दोनों के साथ। void का अर्थ होता है कि function value return नहीं करता। सही prototype, argument types और return type चुनना जरूरी है।\n\n10. Scope और lifetime\nScope बताता है कि variable का नाम program के किस भाग में access किया जा सकता है। Local variable सामान्यतः function या block में accessible होता है; global variable संबंधित file-level scope में declared हो सकता है। Lifetime वह समय है जब variable का storage अस्तित्व में रहता है। Local automatic variable की lifetime block execution से जुड़ी होती है; static variable program execution के दौरान बना रहता है।\n\n11. Call by value, pointers और recursion\nC में ordinary arguments की value copy होकर parameter में जाती है, इसलिए parameter बदलने से caller का original variable नहीं बदलता। Reference-जैसा प्रभाव पाने के लिए variable का address pointer के माध्यम से pass किया जा सकता है। Recursion में function खुद को call करता है; base case recursion रोकता है और recursive case problem को छोटे रूप में हल करता है। Direct recursion में वही function खुद को call करता है; indirect recursion में functions एक-दूसरे को call करते हैं। Factorial के लिए n = 0 या n = 1 का base case result 1 देता है।\n\n12. Worked example (WORKED EXAMPLE)\nWorked example: Recursion\nfactorial(4) = 4 × factorial(3) = 4 × 3 × factorial(2) = 4 × 3 × 2 × factorial(1) = 24। Base case factorial(1) = 1 recursion को रोकता है; हर recursive call में n घटने से प्रक्रिया base case की ओर जाती है। यदि base case न हो या input उसे न पहुँचे, तो calls stack भर सकती हैं।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Function किसी विशेष कार्य के लिए code का reusable block है।\n• Declaration/prototype compiler को function interface बताता है; definition में function body होती है।\n• Function call function को execute करता है।\n• Scope बताता है कि variable कहाँ access हो सकता है; lifetime बताता है कि वह कितनी देर मौजूद रहता है।\n• C में सामान्य arguments by value pass होते हैं।\n• Pointer के माध्यम से address pass करके reference-जैसा व्यवहार प्राप्त किया जा सकता है।\n• Recursion में function स्वयं को direct या indirect रूप से call करता है।\n• Base case recursion को रोकने की condition है।\n• Direct recursion में function खुद को call करता है।\n• Indirect recursion में functions एक-दूसरे को call करते हैं।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Function क्या है? Function declaration, definition और function call समझाइए।\n2. Functions में variables का scope और lifetime समझाइए।\n3. Arguments और return value के आधार पर functions के सामान्य प्रकार बताइए।\n4. उदाहरण सहित call by value समझाइए।\n5. C में pointers की सहायता से reference-जैसा parameter passing कैसे किया जाता है?\n6. Recursion क्या है? इसकी अवधारणा और उपयोग समझाइए।\n7. Recursive functions की विशेषताएँ समझाइए।\n8. Direct और indirect recursion में अंतर बताइए।\n9. Factorial निकालने वाला recursive function लिखिए।\n10. C में call by value और reference-जैसे passing की तुलना कीजिए।\n\nप्रैक्टिस:\nदो numbers जोड़ने का function, maximum लौटाने वाला function और factorial का recursive function लिखिए।"
  },
  "302|Unit 1": {
    "title": "परिचय, वेरिएबल और डेटा टाइप",
    "desc": "विस्तृत हिंदी नोट्स: Python का परिचय, features, versions/setup, syntax, errors, variables, data types, strings और operators; examples तथा प्रश्न-अभ्यास सहित।",
    "content": "इकाई 1 — Introduction, Variables और Data Types\n\n1. Python का इतिहास, versions और विशेषताएँ (History, Versions and Features)\nPython एक high-level programming language है जिसका उपयोग general programming और scripting दोनों में होता है। इसे Guido van Rossum ने विकसित किया; इसका पहला public release 1991 में आया। Python 2 और Python 3 अलग version series हैं; आधुनिक development में सामान्यतः Python 3 उपयोग किया जाता है।\nमुख्य विशेषताएँ:\n• सरल और readable syntax — code पढ़ना और समझना अपेक्षाकृत आसान है।\n• High-level language — programmer को low-level machine details से कम काम करना पड़ता है।\n• Interpreted execution — interpreter code को execute करता है।\n• Dynamically typed — variable का type अलग से declare करने के बजाय value के अनुसार निर्धारित होता है।\n• Standard library — बहुत-से सामान्य कार्यों के लिए built-in modules उपलब्ध हैं।\n• Modular और object-oriented programming का support।\n• Portability — Python उपलब्ध होने पर code कई operating systems पर चल सकता है।\n\n2. Python installation और environment setup\nPython program चलाने के लिए Python interpreter और code लिखने हेतु editor/IDE की जरूरत होती है।\nBasic steps:\n1) उपयुक्त Python 3 version install करें।\n2) Terminal में python --version या python3 --version चलाकर installation जाँचें।\n3) Editor/IDE खोलें।\n4) .py extension वाली file बनाएँ।\n5) Python code लिखें और save करें।\n6) Terminal में python3 filename.py जैसे command से run करें।\nInteractive shell में commands एक-एक करके भी चलाए जा सकते हैं।\n\n3. Python में code लिखना और run करना\nPython source file में statements लिखे जाते हैं और interpreter उन्हें execute करता है।\nउदाहरण:\nprint(\"Hello, Python!\")\nOutput:\nHello, Python!\nसीखने का सामान्य cycle है: code लिखना → run करना → output देखना → error पहचानना → correction करना → फिर से run करना।\n\n4. Basic syntax\nSyntax, valid Python program लिखने के नियम हैं। Python में statement के अंत में हर बार semicolon लगाना जरूरी नहीं है। if, for, while या function जैसे block की शुरुआत में colon (:) लगाया जाता है और उसके अंदर की statements indent की जाती हैं।\nउदाहरण:\nmarks = 72\nif marks >= 40:\n    print(\"Pass\")\nयहाँ print() वाली line if block का भाग है।\n\n5. Input और Output\ninput() user से input लेता है और print() output दिखाता है।\nउदाहरण:\nname = input(\"अपना नाम लिखें: \")\nprint(\"नमस्ते\", name)\nध्यान दें: input() entered value को string (text) के रूप में लौटाता है। Numeric calculation के लिए conversion करें:\nage = int(input(\"Age लिखें: \"))\nprice = float(input(\"Price लिखें: \"))\n\n6. Comments\nComment programmer के लिए लिखी गई note है; इसे सामान्य code statement की तरह execute नहीं किया जाता।\nउदाहरण:\n# यह single-line comment है\nComments code का उद्देश्य समझाने और बाद में code पढ़ने में मदद करते हैं।\n\n7. Indentation\nIndentation line की शुरुआत में spaces देना है। Python में indentation code block की सीमा बताती है, इसलिए यह syntax का हिस्सा है।\nउदाहरण:\ntemperature = 35\nif temperature > 30:\n    print(\"Hot\")\n    print(\"पानी पीते रहें\")\nदोनों indented statements if block में हैं। गलत या inconsistent indentation से IndentationError आ सकता है या program का intended structure बदल सकता है।\n\n8. Errors के प्रकार\n• Syntax error — code language के grammar नियम तोड़ता है। उदाहरण: if के बाद colon भूल जाना।\n• Runtime error/exception — program चलने के समय error आती है। उदाहरण: किसी संख्या को zero से divide करना।\n• Logical error — program run होता है, लेकिन logic गलत होने से result गलत आता है।\nयाद रखें: syntax error = code structure की समस्या; runtime error = execution के दौरान समस्या; logical error = गलत result देने वाला logic।\n\n9. Variables\nVariable किसी value/object को refer करने वाला नाम है।\nउदाहरण:\nmarks = 75\nname = \"Aman\"\nprint(marks)\nprint(name)\nPython dynamically typed है; इसलिए एक ही variable नाम अलग-अलग समय पर अलग type की value refer कर सकता है:\nx = 10\nx = \"Hello\"\nयहाँ x पहले integer और बाद में string value refer करता है।\n\n10. Basic data types\nइस unit के मुख्य data types:\n• int — पूर्णांक, जैसे 17 या -4।\n• float — fractional/decimal value, जैसे 99.5।\n• complex — complex number, जैसे 2 + 3j।\n• str — characters/text की sequence, जैसे \"Hello\"।\n• bool — True या False।\nउदाहरण:\nage = 17\nprice = 99.5\nname = \"Aman\"\nis_student = True\ntype(age) से value का type देखा जा सकता है। List, tuple, dictionary और set अगले unit में advanced data types के रूप में पढ़ें।\n\n11. Strings\nString quotes में लिखे characters का sequence है। Single और double quotes दोनों उपयोग हो सकते हैं।\nउदाहरण:\nfirst = \"Hello\"\nsecond = \"World\"\nmessage = first + \" \" + second\nयहाँ + concatenation यानी strings जोड़ता है और * repetition के लिए उपयोग हो सकता है।\nword = \"Python\"\nprint(word[0])    # P\nprint(word[1:4])  # yth\nPython में indexing 0 से शुरू होती है। Slicing में stop index शामिल नहीं होता। Strings immutable होती हैं; किसी character को सीधे बदलने के बजाय नया string बनाना पड़ता है।\n\n12. Basic operators\nOperators values पर operations करते हैं।\nArithmetic: + जोड़, - घटाव, * गुणा, / division, // floor division, % remainder और ** power।\nComparison: == बराबर, != बराबर नहीं, <, >, <= और >=।\nLogical: and, or, not — conditions को combine या reverse करते हैं।\nAssignment: = value assign करता है; += और *= जैसे operators update कर सकते हैं।\nMembership: in और not in किसी collection/string में value की मौजूदगी जाँचते हैं।\nIdentity: is और is not जाँचते हैं कि दो references वही object refer करते हैं या नहीं।\nउदाहरण:\nmarks = 75\nprint(marks >= 40)\nयह expression Boolean result True देता है। == values की equality compare करता है; is object identity जाँचता है—दोनों को एक जैसा न समझें।\n\n13. Variables, values और expressions\nVariable किसी value को refer करता है; expression variables, values और operators को मिलाकर नया result देता है।\nउदाहरण:\na = 10\nb = 5\ntotal = a + b\nयहाँ a और b variables हैं, a + b expression है और total में result 15 store/refer होता है।\n\n14. Worked example (WORKED EXAMPLE)\nname = input(\"Name: \")\nmarks = int(input(\"Marks: \"))\nprint(\"Hello\", name)\nprint(\"Marks =\", marks)\nयह program नाम लेता है, marks को text से integer में बदलता है और दोनों print करता है। Conversion न करें तो \"2\" + \"3\" का result \"23\" होगा; int(\"2\") + int(\"3\") का result 5 होगा।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Python readable syntax वाली high-level scripting/programming language है।\n• Interpreter Python code को execute करता है।\n• input() user से input लेता है और print() output दिखाता है।\n• # single-line comment शुरू करता है।\n• Python में indentation code blocks को define करती है।\n• Syntax error गलत language structure के कारण होता है; runtime error execution के समय और logical error गलत logic से होता है।\n• Variable किसी value को refer करने वाला नाम है।\n• int, float और complex numeric types हैं; str string और bool True/False values के लिए है।\n• String indexing 0 से शुरू होती है।\n• +, -, *, /, //, %, ** सामान्य arithmetic operators हैं।\n• == और != तुलना करते हैं; and, or, not logical operators हैं।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Python क्या है? इसकी प्रमुख विशेषताएँ समझाइए।\n2. Python के इतिहास और इसके versions पर संक्षिप्त टिप्पणी लिखिए।\n3. Python environment install और set up करने की प्रक्रिया समझाइए।\n4. Python program कैसे लिखा और run किया जाता है?\n5. Python syntax क्या है? Indentation का महत्व समझाइए।\n6. उदाहरण सहित input() और print() समझाइए।\n7. Comments क्या हैं? इनका उपयोग क्यों किया जाता है?\n8. उदाहरण सहित syntax, runtime और logical errors समझाइए।\n9. Python में variable क्या है?\n10. उदाहरण सहित Python के basic data types समझाइए।\n11. String क्या है? Indexing और basic string operations समझाइए।\n12. Python के basic operators को उदाहरण सहित समझाइए।\n\nप्रैक्टिस:\nनाम और marks store करके print करें, दो numbers का sum निकालें और किसी number के even/odd होने की जाँच करें।"
  },
  "302|Unit 2": {
    "title": "उन्नत डेटा टाइप",
    "desc": "विस्तृत हिंदी नोट्स: Python lists, tuples, dictionaries, sets, arrays, indexing, slicing, modification, iteration और प्रमुख operations; exam questions व अभ्यास सहित।",
    "content": "इकाई 2 — Advanced Data Types (उन्नत डेटा टाइप)\n\n1. Advanced data types का परिचय\nAdvanced data types कई values को व्यवस्थित रूप से store करने में मदद करते हैं।\n• List — ordered और mutable collection।\n• Tuple — ordered लेकिन immutable collection।\n• Dictionary — key-value pairs।\n• Set — unique elements का collection।\n• Array — Python के array module से बनी sequence, जिसमें elements एक निर्धारित type code के अनुरूप होते हैं।\n\n2. Lists बनाना और elements access करना\nList ordered और mutable होती है, यानी elements का क्रम बना रहता है और values बदली जा सकती हैं।\nnumbers = [10, 20, 30, 40]\nprint(numbers[0])  # 10\nprint(numbers[2])  # 30\nIndexing 0 से शुरू होती है; इसलिए चौथे element का index 3 है।\n\n3. Lists को modify करना\nकिसी index पर नई value assign करके element बदला जा सकता है:\nnumbers[1] = 25\nमुख्य operations:\n• append(x) — अंत में item जोड़ता है।\n• insert(index, x) — दिए गए स्थान पर item जोड़ता है।\n• remove(x) — पहली matching value हटाता है।\n• pop() — item हटाकर लौटाता है; बिना index के सामान्यतः आखिरी item।\n• clear() — सभी items हटाता है।\nउदाहरण: numbers.append(50); numbers.insert(1, 15)।\n\n4. List slicing\nSlicing list का एक हिस्सा निकालती है। सामान्य रूप list[start:stop:step] है।\nnumbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])\nOutput: [20, 30, 40]\nStart index शामिल होता है लेकिन stop index शामिल नहीं होता। Step न दें तो सामान्यतः 1 माना जाता है।\n\n5. List पर iteration\nIteration में list के elements को एक-एक करके process किया जाता है।\nfor item in numbers:\n    print(item)\nIndex भी जरूरी हो तो:\nfor i in range(len(numbers)):\n    print(numbers[i])\nपहला तरीका सीधे element देता है; दूसरा index के आधार पर access करता है।\n\n6. Tuple\nTuple ordered collection है जिसे बनाने के बाद उसके elements सामान्य assignment से बदले नहीं जा सकते।\nvalues = (10, 20, 30)\nprint(values[0])\nTuple के elements को index से access और slice किया जा सकता है।\n\n7. Tuple immutability\nImmutable होने का अर्थ है tuple के position पर नई value assign नहीं कर सकते।\nvalues = (10, 20, 30)\nvalues[0] = 99  # TypeError\nजहाँ collection बदलना नहीं है, वहाँ tuple उपयोगी है। Tuple में mutable object रखा हो तो उस object की अपनी contents बदल सकती हैं; tuple की item binding नहीं बदलती।\n\n8. Tuple slicing\nvalues = (10, 20, 30, 40, 50)\nprint(values[1:4])\nResult नया tuple (20, 30, 40) है। Stop position 4 शामिल नहीं है।\n\n9. Tuple unpacking\nTuple unpacking में tuple के elements को कई variables में assign किया जाता है।\nstudent = (\"Aman\", 17)\nname, age = student\nअब name \"Aman\" और age 17 को refer करता है। सामान्य unpacking में variables की संख्या elements के बराबर होनी चाहिए।\n\n10. Tuple पर iteration\nvalues = (10, 20, 30)\nfor value in values:\n    print(value)\nLoop tuple के elements को क्रम से process करता है।\n\n11. Dictionary\nDictionary data को key-value pairs में रखती है। Key से संबंधित value मिलती है।\nstudent = {\"name\": \"Aman\", \"marks\": 78}\nprint(student[\"name\"])\nDictionary mutable होती है; items जोड़े, बदले या हटाए जा सकते हैं।\n\n12. Key-value pairs जोड़ना और बदलना\nनया item:\nstudent[\"city\"] = \"Seoni\"\nमौजूदा item बदलना:\nstudent[\"marks\"] = 85\nएक ही key के लिए assignment करने से उसकी value update होती है।\n\n13. Dictionary से items हटाना\nstudent.pop(\"city\") किसी key को हटाकर उसकी value लौटाता है। del student[\"marks\"] भी item हटा सकता है। clear() सभी items हटाता है। ऐसी key को access करने पर जो मौजूद नहीं है, KeyError आ सकता है; जरूरत हो तो get() उपयोग करें।\n\n14. Dictionary पर iteration\nfor key in student:\n    print(key)\nयह keys पर iterate करता है। Key-value pairs के लिए:\nfor key, value in student.items():\n    print(key, value)\nvalues() से केवल values मिल सकती हैं।\n\n15. Dictionary keys का नियम\nKeys hashable होनी चाहिए, जैसे strings, numbers और ऐसे tuples जिनके elements hashable हों। List और dictionary जैसी mutable collections सामान्यतः keys नहीं बन सकतीं। Values अलग-अलग types की हो सकती हैं, जिसमें list या दूसरी dictionary भी शामिल हो सकती है।\n\n16. Sets\nSet unique elements रखता है; duplicate values केवल एक बार रहती हैं।\nnumbers = {1, 2, 3, 3, 4}\nइस set में 3 एक ही बार रहेगा। Set membership और uniqueness के काम में उपयोगी है, लेकिन इसे list की तरह index से access नहीं करते।\n\n17. Set elements जोड़ना और हटाना\nnumbers.add(5) नया element जोड़ता है।\nnumbers.remove(3) element हटाता है, पर absent element होने पर KeyError दे सकता है।\nnumbers.discard(10) element हो तो हटाता है; absent होने पर error नहीं देता।\nSet में insertion order के आधार पर indexing पर निर्भर न रहें।\n\n18. Set की मुख्य विशेषता\nitems = {\"A\", \"B\", \"A\"}\nयहाँ duplicate \"A\" एक ही बार रखा जाएगा। Membership check के लिए \"A\" in items उपयोग कर सकते हैं। Set elements hashable होने चाहिए।\n\n19. Python arrays\nPython का standard array module typed arrays बनाता है:\nfrom array import array\nnumbers = array(\"i\", [10, 20, 30])\nयहाँ \"i\" integer type code है। Type code array में रखे जाने वाले elements का प्रकार बताता है।\n\n20. Arrays access और modify करना\nprint(numbers[0])\nnumbers[1] = 25\nArray में index से access और modification किया जा सकता है। Array पर loop चलाकर हर element process कर सकते हैं:\nfor value in numbers:\n    print(value)\n\n21. Array operations\nसामान्य operations में append(x) item जोड़ना, insert(i, x) position पर जोड़ना, remove(x) matching value हटाना और pop([i]) item हटाकर लौटाना शामिल हैं। Value array के type code के अनुरूप होनी चाहिए।\n\n22. List, tuple, dictionary, set और array में अंतर\n• List: ordered, mutable, index से access, duplicates allowed।\n• Tuple: ordered, immutable, index से access, duplicates allowed।\n• Dictionary: key-value pairs, mutable, keys के द्वारा access।\n• Set: unique elements, membership/uniqueness के लिए, index-based sequence नहीं।\n• Array: array module की typed sequence, indexed access और modification।\nCollection चुनते समय यह देखें कि order, mutability, unique items, key-value mapping या एक-जैसे typed elements की जरूरत है।\n\n23. Worked example (WORKED EXAMPLE)\nmarks = [70, 85, 90]\npoint = (4, 7)\nstudent = {\"name\": \"Aman\"}\nunique_marks = {70, 85, 90}\nprint(marks[1])       # 85\nprint(marks[1:3])     # [85, 90]\nmarks[1] = 88\nEmpty set बनाने के लिए set() लिखें; {} खाली dictionary बनाता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• List ordered और mutable होती है।\n• Tuple ordered होती है, लेकिन immutable होती है।\n• Dictionary data को key-value pairs के रूप में रखती है।\n• Set unique elements रखता है।\n• Python का array module निर्धारित type code वाले elements का array बनाता है।\n• List slicing का format start:stop:step है।\n• Tuple unpacking tuple के elements को अलग-अलग variables में assign करती है।\n• Dictionary में items जोड़े, बदले और हटाए जा सकते हैं।\n• Set का add() element जोड़ता है।\n• remove() absent element पर error दे सकता है; discard() ऐसा error नहीं देता।\n• Array elements को index से access और modify किया जा सकता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Python में advanced data types क्या हैं?\n2. Lists बनाने, access करने, modify करने, slicing और iteration की प्रक्रिया समझाइए।\n3. Tuple क्या है? Immutability, slicing, unpacking और iteration समझाइए।\n4. Dictionary क्या है? इसे बनाना, access करना, items जोड़ना/बदलना/हटाना और iteration समझाइए।\n5. Set क्या है? Set बनाना तथा elements जोड़ना और हटाना समझाइए।\n6. Python के array module का उपयोग करके arrays समझाइए।\n7. List, tuple, dictionary, set और array में अंतर बताइए।\n8. उदाहरण सहित list slicing समझाइए।\n9. उदाहरण सहित tuple unpacking समझाइए।\n10. Set में remove() और discard() के बीच अंतर बताइए।\n\nप्रैक्टिस:\nएक list में पाँच marks रखकर maximum निकालें, dictionary में student का record रखें और दो sets का intersection निकालें।"
  },
  "302|Unit 3": {
    "title": "कंट्रोल स्ट्रक्चर्स",
    "desc": "विस्तृत हिंदी नोट्स: Python blocks/indentation, if/elif/else, for/range, while, break, continue, loop else और control-flow programs; प्रश्न और अभ्यास सहित।",
    "content": "इकाई 3 — Control Structures (कंट्रोल स्ट्रक्चर्स)\n\n1. Coding blocks\nCoding block संबंधित statements का समूह है जो एक logical unit के रूप में execute होता है। Python में indentation बताता है कि block कहाँ शुरू और कहाँ समाप्त होता है।\nmarks = 72\nif marks >= 40:\n    print(\"Pass\")\n    print(\"Result checked\")\nदोनों indented statements if block का हिस्सा हैं।\n\n2. Conditional blocks\nConditional blocks condition के आधार पर तय करते हैं कि कौन-सा code चलेगा। इस unit में if, else और elif आते हैं। Python condition के result को True या False के रूप में evaluate करता है।\n\n3. if statement\nif condition True होने पर उसका indented block execute करता है।\nif condition:\n    statement\nउदाहरण:\nmarks = 75\nif marks >= 40:\n    print(\"Pass\")\nMarks 40 या अधिक होने पर Pass print होगा।\n\n4. if-else statement\nCondition True होने पर if block और False होने पर else block चलता है।\nmarks = 35\nif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\nइस example में दो blocks में से एक ही चुना जाएगा।\n\n5. elif statement\nelif का अर्थ else if है। कई conditions क्रम से जाँचनी हों तो इसका उपयोग होता है।\nmarks = 82\nif marks >= 75:\n    print(\"Distinction\")\nelif marks >= 40:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")\nPython ऊपर से नीचे conditions जाँचता है और पहली True condition का block चलाता है।\n\n6. for loop\nfor loop sequence या iterable के elements को एक-एक करके process करता है।\nnames = [\"Aman\", \"Riya\", \"Neha\"]\nfor name in names:\n    print(name)\nहर iteration में name को अगला element मिलता है।\n\n7. Sequences पर iteration\nString भी sequence है:\nword = \"Python\"\nfor ch in word:\n    print(ch)\nLoop में P, y, t, h, o और n क्रमशः process होंगे।\n\n8. for loop के साथ range()\nrange() loop के लिए numbers की sequence देता है।\nfor i in range(1, 6):\n    print(i)\nOutput में 1 से 5 तक numbers आएँगे; stop value 6 शामिल नहीं होती।\nStep भी दे सकते हैं:\nfor i in range(0, 10, 2):\n    print(i)\nयह 0, 2, 4, 6, 8 print करेगा।\n\n9. while loop\nwhile condition True रहने तक block दोहराता है।\ni = 1\nwhile i <= 5:\n    print(i)\n    i += 1\nCondition हर iteration से पहले जाँची जाती है। i को update करना जरूरी है, वरना condition हमेशा True रहने पर infinite loop बन सकता है।\n\n10. continue statement\ncontinue वर्तमान iteration के बाकी statements छोड़कर अगली iteration शुरू करता है।\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)\nजब i = 3 होगा, print नहीं होगा लेकिन loop जारी रहेगा।\n\n11. break statement\nbreak सबसे नजदीकी enclosing loop को तुरंत समाप्त करता है।\nfor i in range(1, 6):\n    if i == 4:\n        break\n    print(i)\nLoop i = 4 पर रुकता है; 4 print नहीं होता।\n\n12. pass statement\npass एक null operation है—execute होने पर कोई काम नहीं करता। जब syntax के लिए block जरूरी हो लेकिन अभी code न लिखना हो, तब placeholder की तरह उपयोग कर सकते हैं।\nif marks >= 40:\n    pass\nelse:\n    print(\"Needs improvement\")\npass loop को रोकता या अगली iteration पर नहीं ले जाता; यह continue से अलग है।\n\n13. Loops के साथ else\nPython में loop के साथ else block भी हो सकता है। Loop बिना break के normal रूप से खत्म हो तो else चलता है।\nfor i in range(3):\n    print(i)\nelse:\n    print(\"Loop completed\")\nयदि loop को break से पहले ही समाप्त किया जाए, तो loop का else block नहीं चलता।\n\n14. break और continue में अंतर\nbreak loop पूरी तरह समाप्त कर देता है और control loop के बाहर चला जाता है। continue सिर्फ current iteration का बाकी हिस्सा छोड़ता है और अगली iteration से loop जारी रखता है।\n\n15. Conditions और loops को मिलाकर उपयोग करना\nLoop के अंदर conditional statement या condition के अंदर loop रखा जा सकता है।\nfor i in range(1, 6):\n    if i % 2 == 0:\n        print(i, \"Even\")\nयहाँ for repetition करता है और if निर्णय लेता है कि even number print करना है या नहीं।\n\n16. Conditional और loop blocks से program बनाना\n1) समस्या और input पहचानें।\n2) Decision के लिए if/else/elif चुनें।\n3) Sequence पर चलने के लिए for loop चुनें।\n4) Condition पर आधारित repetition के लिए while चुनें।\n5) जरूरत पर break से loop रोकें।\n6) continue से current iteration छोड़ें।\n7) हर block में indentation consistent रखें।\n\n17. Worked example (WORKED EXAMPLE)\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)\nOutput: 1, 2, 4, 5। यदि continue की जगह break हो, तो output 1, 2 होगा और loop समाप्त हो जाएगा।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Coding block संबंधित statements का समूह है; Python में indentation block तय करती है।\n• if condition true होने पर block चलाता है।\n• else, if condition false होने पर चलता है; elif दूसरी condition जाँचता है।\n• for loop sequence या range पर iterate करता है।\n• range() iteration के लिए numbers की sequence देता है।\n• while loop condition true रहने तक चलता है।\n• continue current iteration का शेष भाग छोड़ता है।\n• break loop को समाप्त करता है।\n• Loop का else block तब चलता है जब loop बिना break के सामान्य रूप से पूरा हो।\n• एक program में conditional और loop blocks को मिलाकर complex logic बनाया जा सकता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Python में coding block क्या है? Indentation की भूमिका समझाइए।\n2. उदाहरण सहित if, else और elif समझाइए।\n3. for loop क्या है? Sequence पर iteration समझाइए।\n4. for loop के साथ range() का उपयोग समझाइए।\n5. while loop क्या है? उदाहरण दीजिए।\n6. continue और break statements का उपयोग समझाइए।\n7. Loop के साथ else का उपयोग समझाइए।\n8. break और continue में अंतर बताइए।\n9. Python program में conditional और loop blocks को एक साथ कैसे उपयोग किया जा सकता है?\n\nप्रैक्टिस:\n1 से 10 तक numbers print करें, सभी even numbers print करें, 1 से n तक sum निकालें और list में दिए item को खोजें।"
  },
  "302|Unit 4": {
    "title": "फंक्शन, मॉड्यूल और पैकेज",
    "desc": "विस्तृत हिंदी नोट्स: Python functions, parameters, return values, scope, recursion, modules, namespaces, packages और pip; examples व exam practice सहित।",
    "content": "इकाई 4 — Functions, Modules और Packages\n\n1. Python functions\nFunction reusable code block है जो किसी खास task को पूरा करता है। Functions program को छोटे हिस्सों में बाँटते हैं, repeated code घटाते हैं और testing/debugging आसान बनाते हैं। इस unit में function definition/call, parameters, return value, scope, recursion, modules, namespaces, packages और PIP शामिल हैं।\n\n2. Function define करना\nFunction को def keyword से define किया जाता है:\ndef function_name(parameters):\n    statements\nउदाहरण:\ndef greet():\n    print(\"Hello, student\")\nFunction body की statements indent की जाती हैं। Define करना और execute करना अलग-अलग बातें हैं; definition से function अपने-आप नहीं चलता।\n\n3. Function call करना\nFunction को execute करने के लिए उसका नाम parentheses के साथ call करते हैं:\ndef greet():\n    print(\"Hello, student\")\ngreet()\nयहाँ greet() call body का code चलाता है। Call के समय arguments भेजे जा सकते हैं।\n\n4. Function parameters\nParameters function definition में लिखे नाम हैं जो call के values प्राप्त करते हैं।\ndef add(a, b):\n    return a + b\nresult = add(10, 20)\nयहाँ a, b parameters और 10, 20 arguments हैं। result में 30 मिलेगा।\n\n5. Positional parameters\nPositional arguments parameter order के अनुसार match होते हैं:\ndef student_info(name, age):\n    print(name, age)\nstudent_info(\"Aman\", 17)\nपहली argument name और दूसरी age को assign होती है। गलत order से values गलत parameters में जा सकती हैं।\n\n6. Default parameters\nDefault parameter को definition में पहले से value दी जाती है:\ndef greet(name=\"Student\"):\n    print(\"Hello\", name)\ngreet()\ngreet(\"Aman\")\nपहला call default value उपयोग करता है; दूसरा अपनी दी हुई value। Default parameter सामान्यतः non-default parameters के बाद रखा जाता है।\n\n7. Keyword arguments\nKeyword arguments में parameter का नाम देकर value भेजते हैं:\ndef student_info(name, age):\n    print(name, age)\nstudent_info(age=17, name=\"Aman\")\nयहाँ order बदलने पर भी names के कारण values सही parameters में जाती हैं। किसी call में positional arguments के बाद keyword arguments देना सामान्य नियम है।\n\n8. Return values\nreturn function से result caller को वापस देता है:\ndef square(number):\n    return number * number\nanswer = square(5)\nanswer का value 25 होगा। print() केवल screen पर value दिखाता है; return value function के result को calling code में उपलब्ध कराता है। यदि function explicit value return नहीं करता, तो result None होता है।\n\n9. Variable scope\nScope बताता है कि variable name कहाँ access किया जा सकता है। Function के भीतर बनाया गया local name सामान्यतः उसी function में उपलब्ध होता है:\ndef demo():\n    x = 10\n    print(x)\nFunction के बाहर module level पर बनाया गया name global scope में होता है:\ncollege = \"CSE Diploma Learning\"\ndef show_college():\n    print(college)\nPython name resolution rules से तय होता है कि name कहाँ खोजा जाएगा। Function में किसी global name को assign करना हो तो global declaration की जरूरत पड़ सकती है।\n\n10. Python में recursion\nRecursion में function खुद को direct या indirect तरीके से call करता है। Base case calls को रोकता है और recursive case problem को छोटा करके आगे बढ़ाता है:\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\nfactorial(5) का result 120 है। Base case न हो या problem base case की ओर न बढ़े तो recursion depth limit तक पहुँच सकती है।\n\n11. Modules द्वारा code organize करना\nModule सामान्यतः .py file है जिसमें functions, variables और definitions रखी जाती हैं जिन्हें दूसरे programs में import करके reuse किया जा सकता है।\ncalculator.py:\ndef add(a, b):\n    return a + b\nदूसरी file:\nimport calculator\nprint(calculator.add(10, 20))\nइससे reusable logic main program से अलग रहता है।\n\n12. User-defined module बनाना\n1) Reusable code वाली file बनाएँ।\n2) उसे .py extension से save करें।\n3) File को ऐसे folder में रखें जहाँ Python import कर सके।\n4) दूसरी script में import करें।\n5) Module की definitions use करें।\nउदाहरण student_tools.py:\ndef display_name(name):\n    print(name)\nदूसरी script:\nimport student_tools\nstudent_tools.display_name(\"Aman\")\n\n13. Namespace\nNamespace names और objects के बीच mapping है। यह names को व्यवस्थित रखता है और दूसरे modules के समान नामों से टकराव घटाता है।\nimport math\nprint(math.sqrt(25))\nयहाँ sqrt को math namespace से access किया गया है।\n\n14. Scoping\nPython में प्रमुख scopes का basic परिचय:\n• Local — current function के अंदर।\n• Global — current module के स्तर पर।\n• Built-in — Python द्वारा उपलब्ध names।\nकिसी name की definition और assignment उसके resolution को प्रभावित करते हैं। Scope समझने से यह स्पष्ट होता है कि कोई variable कहाँ उपलब्ध है।\n\n15. अपना module import करना\nपूरे module को import कर सकते हैं:\nimport student_tools\nstudent_tools.display_name(\"Aman\")\nया selected definition:\nfrom student_tools import display_name\ndisplay_name(\"Aman\")\nImport तभी सफल होगा जब Python को module सही path पर मिले।\n\n16. External modules import करना\nExternal का अर्थ current file से अलग module है; यह standard library का या separately installed package का हिस्सा हो सकता है।\nimport math\nprint(math.sqrt(16))\nImport के बाद module namespace से functions access किए जाते हैं।\n\n17. Packages\nPackage related modules को directory structure में organize करने का तरीका है। इस unit में user-defined package बनाना, import करना, built-in/standard-library packages का उपयोग और PIP से installation शामिल है।\n\n18. User-defined package बनाना\nउदाहरण folder structure:\nstudent_package/\n    __init__.py\n    marks.py\nmarks.py:\ndef total(a, b):\n    return a + b\n__init__.py traditional package structure में package initialization और package पहचानने में मदद कर सकता है। Import path project layout और current working directory पर निर्भर करता है।\n\n19. User-defined package import करना\nfrom student_package import marks\nprint(marks.total(10, 20))\nयहाँ पहले package से marks module import होता है, फिर उसका total function call होता है।\n\n20. Built-in/standard-library modules\nPython standard library में कई modules पहले से उपलब्ध होते हैं:\nimport math\nprint(math.sqrt(49))\nmath के लिए अलग PIP installation की जरूरत नहीं होती। Standard library और external third-party packages के बीच यह अंतर याद रखें।\n\n21. PIP से packages install करना\nPIP Python package-management tool है।\nसामान्य command:\npython -m pip install package_name\nउदाहरण:\npython -m pip install requests\nफिर program में:\nimport requests\nPackage install करते समय सही environment/virtual environment का ध्यान रखें; install किए गए package को उसी Python environment में import किया जा सकता है।\n\n22. Function, module और package में अंतर\n• Function — किसी task के लिए reusable code block।\n• Module — Python file जिसमें reusable definitions हों।\n• Package — related modules को organize करने वाला collection।\nइसे ऐसे याद रखें: Package → Modules → Functions।\n\n23. Worked example (WORKED EXAMPLE)\ndef add(a, b=0):\n    return a + b\nprint(add(3, 4))  # 7\nprint(add(3))     # 3\nयह positional argument, default parameter और return value दिखाता है। इसी function को module में रखकर दूसरी script से import किया जा सकता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• def keyword function define करता है; function call उसे execute करता है।\n• Parameter function definition में लिखा नाम है।\n• Positional arguments position के आधार पर match होते हैं।\n• Default parameter argument न मिलने पर तय value देता है।\n• Keyword argument parameter name के आधार पर match होता है।\n• return function से value वापस भेजता है।\n• Scope बताता है कि कोई name कहाँ access हो सकता है।\n• Recursion में function स्वयं को direct या indirect रूप से call करता है।\n• Module reusable code वाली Python file है।\n• Namespace names को objects से map करता है।\n• Package संबंधित modules का व्यवस्थित collection है।\n• PIP Python packages install/manage करने का tool है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Function क्या है? Python में function define करने और call करने की प्रक्रिया समझाइए।\n2. उदाहरण सहित positional, default और keyword parameters समझाइए।\n3. Return value क्या होती है?\n4. Python में variable scope समझाइए।\n5. Recursion क्या है? उदाहरण दीजिए।\n6. Module क्या है? User-defined module बनाने और import करने की प्रक्रिया समझाइए।\n7. Namespace क्या है? इसकी भूमिका समझाइए।\n8. अपने module और external module को import करने की प्रक्रिया समझाइए।\n9. Package क्या है? User-defined package की संरचना समझाइए।\n10. PIP द्वारा Python package install करने की प्रक्रिया समझाइए।\n11. Function, module और package में अंतर बताइए।\n\nप्रैक्टिस:\nदो numbers का sum लौटाने वाला function, factorial function और math module का उपयोग करने वाला program बनाएँ।"
  },
  "302|Unit 5": {
    "title": "फाइल I/O, टेक्स्ट प्रोसेसिंग और रेगुलर एक्सप्रेशन",
    "desc": "विस्तृत हिंदी नोट्स: file modes, open/read/write, context manager, exceptions, text processing और regular expressions; examples, प्रश्न और अभ्यास सहित।",
    "content": "इकाई 5 — File I/O, Text Processing और Regular Expressions\n\n1. File handling modes\nFile खोलते समय mode बताता है कि program file पर क्या operation करेगा।\n• r — existing file पढ़ना; file मौजूद न हो तो error आ सकती है।\n• w — लिखना; file न हो तो create कर सकता है और पुराना content replace कर सकता है।\n• a — end में नया content जोड़ना।\n• x — नई file create करना; file पहले से हो तो fail।\n• b — binary mode, जैसे rb/wb।\n• t — text mode; सामान्यतः default।\nउदाहरण: open(\"notes.txt\", \"r\")।\n\n2. File खोलना\nopen() function file object लौटाता है:\nfile = open(\"notes.txt\", \"r\")\nइसके बाद mode के अनुसार content पढ़ या लिख सकते हैं। File path और permission सही होनी चाहिए।\n\n3. File से पढ़ना\n• read() — content पढ़ता है।\n• readline() — एक line पढ़ता है।\n• readlines() — lines की list लौटाता है।\nउदाहरण:\nfile = open(\"notes.txt\", \"r\")\ndata = file.read()\nprint(data)\nfile.close()\nबहुत बड़ी file के लिए line-by-line iteration memory बचा सकती है।\n\n4. File में लिखना\nwrite() opened file में text लिखता है:\nfile = open(\"notes.txt\", \"w\")\nfile.write(\"Semester III Study Portal\")\nfile.close()\nw mode existing contents replace कर सकता है, इसलिए जरूरी data पर इसे सावधानी से उपयोग करें।\n\n5. Append करना\n\"a\" mode file के अंत में content जोड़ता है:\nfile = open(\"notes.txt\", \"a\")\nfile.write(\"\\nNew study note\")\nfile.close()\nयह पुरानी contents को पूरा replace किए बिना अतिरिक्त text जोड़ने के लिए उपयोग होता है।\n\n6. File बंद करना\nclose() file resource को release करता है:\nfile.close()\nOperations पूरे होने के बाद file बंद करना जरूरी है। इसे भूलने से resources अनावश्यक समय तक खुले रह सकते हैं।\n\n7. File handling में with\nwith statement block पूरा होने पर file को automatically close करता है:\nwith open(\"notes.txt\", \"r\") as file:\n    data = file.read()\n    print(data)\nसामान्य file work में with open(...) का उपयोग सुविधाजनक है, क्योंकि cleanup अपने-आप हो जाता है।\n\n8. File-related operations: rename और delete\nइस unit में open/read/write/append/close के अलावा rename और delete भी हैं।\nRename:\nimport os\nos.rename(\"old.txt\", \"new.txt\")\nDelete:\nimport os\nos.remove(\"old.txt\")\nये operations file system बदलते हैं। गलत path, absent file या permission problem होने पर exception आ सकती है।\n\n9. Basic exception handling\nException runtime problem है जिसे program में संभाला जा सकता है।\n• try — संभावित error वाला code।\n• except — चुनी हुई exception handle करता है।\n• else — try में exception न आने पर चलता है।\n• finally — cleanup के लिए; exception आए या न आए, चलता है।\nउदाहरण:\ntry:\n    number = int(input(\"Number: \"))\n    print(10 / number)\nexcept ValueError:\n    print(\"कृपया सही संख्या लिखें।\")\nexcept ZeroDivisionError:\n    print(\"Zero से divide नहीं कर सकते।\")\n\n10. Exception handling क्यों उपयोग होती है?\nयदि user number के स्थान पर text लिखे, तो int() में ValueError आ सकती है। यदि input 0 हो, तो division में ZeroDivisionError आ सकती है। Exception handling useful message देकर program flow को नियंत्रित करती है। जरूरत के अनुसार विशिष्ट exceptions handle करें; बिना कारण सभी errors को चुपचाप ignore न करें।\n\n11. Text processing\nText processing textual data पर कार्य करना है—उसे पढ़ना, खोजना, बदलना, validate करना या उसमें से जानकारी निकालना।\ntext = \"Computer Programming\"\nprint(text.lower())\nprint(text.upper())\nअन्य काम: file की lines process करना, शब्द ढूँढना, pattern देखना और आवश्यक text extract करना।\n\n12. Regular expressions\nRegular expression (regex) text को match/search/validate करने का pattern है। Python में re module regex operations देता है:\nimport re\n• search() — string में कहीं भी पहला match खोजता है।\n• match() — string की शुरुआत से match जाँचता है।\n• fullmatch() — पूरी string pattern से match होनी चाहिए।\n• findall() — सभी non-overlapping matches की list लौटाता है।\n• sub() — matched text replace करता है।\n\n13. Regex patterns\n• . — सामान्यतः newline छोड़कर कोई एक character।\n• \\d — digit।\n• \\w — word character।\n• \\s — whitespace।\n• ^ — शुरुआत।\n• $ — अंत।\n• + — one-or-more repetitions।\n• * — zero-or-more repetitions।\n• ? — zero-or-one repetition।\n• {m,n} — m से n repetitions।\nउदाहरण:\npattern = r\"\\d+\"\ntext = \"Roll 12345\"\nresult = re.findall(pattern, text)\nResult: [\"12345\"]। Raw string r\"...\" backslashes वाले patterns लिखना आसान बनाती है।\n\n14. re से pattern searching\nउदाहरण:\nimport re\ntext = \"Email: student@example.com\"\npattern = r\"[\\w.-]+@[\\w.-]+\\.\\w+\"\nmatch = re.search(pattern, text)\nif match:\n    print(\"Email found:\", match.group())\nयह basic pattern matching दिखाता है; यह हर possible valid email address की पूर्ण पुष्टि नहीं है।\n\n15. Regex द्वारा validation\nRegex से text का format check कर सकते हैं, जैसे phone number, email, roll number या code. Validation का अर्थ expected pattern से input मिलाना है। केवल regex match होने से यह साबित नहीं होता कि phone/email वास्तविक या active है। सही और गलत examples से pattern test करें।\n\n16. Files के साथ text processing\nFile reading और text processing एक साथ हो सकते हैं:\nwith open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    for line in file:\n        line = line.strip()\n        if line:\n            print(line)\nयह file line-by-line पढ़ता है, strip() शुरुआत/अंत की whitespace हटाता है और if line blank lines को skip करता है।\n\n17. Worked example (WORKED EXAMPLE)\nimport re\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as file:\n    text = file.read()\nmatches = re.findall(r\"\\d+\", text)\nprint(matches)\nयह file पढ़कर सभी digit sequences की list निकालता है। File मौजूद न हो तो FileNotFoundError आ सकती है; जरूरत पर इसे संभालें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• open() file खोलता है; read() content पढ़ता है; write() text लिखता है और close() file बंद करता है।\n• \"r\" read, \"w\" write (पुराना content replace हो सकता है) और \"a\" append mode है।\n• with statement file cleanup को automatic और convenient बनाता है।\n• os.rename() file का नाम बदलता है और os.remove() file हटाता है।\n• try में संभावित exception वाला code, except में error handling, else में no-exception code और finally में cleanup लिखा जाता है।\n• Text processing का अर्थ textual data पर कार्य करना है।\n• re Python का regular-expression module है।\n• search() match खोजता है; findall() सभी matches देता है; sub() matching text replace करता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Python में file handling के सामान्य modes समझाइए।\n2. उदाहरण सहित open(), read(), write() और close() समझाइए।\n3. Append mode क्या है?\n4. File को line-by-line पढ़ने की प्रक्रिया समझाइए।\n5. File rename और delete करने की प्रक्रिया समझाइए।\n6. Exception handling क्या है? try, except, else और finally समझाइए।\n7. Text processing क्या है?\n8. Regular expression क्या है? Python के re module की भूमिका समझाइए।\n9. उदाहरण सहित सामान्य regex operators/patterns समझाइए।\n10. search(), match(), fullmatch() और findall() में अंतर बताइए।\n11. Email या phone-number format validate करने में regex के उपयोग समझाइए।\n\nप्रैक्टिस:\nएक text file पढ़कर lines की गिनती करें, text से अतिरिक्त spaces हटाएँ और sentence में numbers खोजने के लिए regex उपयोग करें।"
  },
  "303|Unit 1": {
    "title": "डेटा स्ट्रक्चर की मूल बातें",
    "desc": "विस्तृत हिंदी नोट्स: data structure की परिभाषा/वर्गीकरण, operations, pointers, arrays, 2-D layout, structures और row-major/column-major concepts; प्रश्न एवं अभ्यास सहित।",
    "content": "इकाई 1 — Basics of Data Structure (डेटा स्ट्रक्चर की मूल बातें)\n\n1. Data Structure का परिचय\nData Structure data को memory में व्यवस्थित रखने का तरीका है, ताकि उसे access, search, insert, delete, update और process किया जा सके। सही structure चुनने से program की speed, memory use और logic पर असर पड़ता है। उदाहरण के लिए students के marks की indexed list के लिए array उपयोगी है, जबकि बार-बार insertion/deletion के लिए linked list मदद कर सकती है।\n\n2. Data Structures का वर्गीकरण\nPrimitive structures basic built-in data values जैसे int, char आदि से संबंधित हैं। Non-primitive structures कई values या relationships को organize करते हैं, जैसे array, structure, linked list, stack, queue, tree और graph।\n• Linear data structure: elements एक logical sequence में होते हैं, जैसे array, stack, queue और linked list।\n• Non-linear data structure: elements hierarchical या network रूप में जुड़े होते हैं, जैसे tree और graph।\nPrimitive/non-primitive और linear/non-linear अलग-अलग आधार पर classification हैं।\n\n3. Pointer का परिचय\nPointer ऐसा variable है जो किसी object/variable का memory address रखता है। C में & address-of operator है और * dereference operator है।\nint x = 10;\nint *p = &x;\nयहाँ p में x का address है और *p से x की value 10 मिलती है।\n\n4. Pointer declare और initialize करना\nPointer का type बताता है कि वह किस type के object को point करता है।\nint *p;\nint x = 25;\np = &x;\nPointer को dereference करने से पहले उसे valid address या NULL से initialize करना चाहिए। Uninitialized pointer को *p की तरह पढ़ना unsafe है।\n\n5. Pointer से variable access करना\nयदि p = &x है, तो *p का अर्थ है “उस address पर रखा object”।\nint x = 7;\nint *p = &x;\n*p = 12;\nअब x की value 12 है, क्योंकि assignment ने उसी object को बदला जिसे p point करता है।\n\n6. Pointer arithmetic\nPointer arithmetic element के type के हिसाब से आगे बढ़ती है। यदि int *p है तो p + 1 अगले int element की ओर जाता है; यह आवश्यक नहीं कि केवल एक byte आगे हो। इसे उसी array के elements में traverse करने के लिए उपयोग करें।\nint a[3] = {10, 20, 30};\nint *p = a;\nprintf(\"%d\", *(p + 1)); /* 20 */\nArray के one-past-the-end pointer को boundary के रूप में compare किया जा सकता है, लेकिन dereference नहीं करना चाहिए।\n\n7. Array of pointers\nArray of pointers ऐसा array है जिसके प्रत्येक element में pointer/address रखा जाता है।\nchar *names[3] = {\"Aman\", \"Riya\", \"Neha\"};\nयह तीन character pointers का array है। Array of pointers और pointer to array अलग declarations हैं; star और brackets की position अर्थ बदलती है।\n\n8. Two-dimensional arrays\nTwo-dimensional array rows और columns में data रखता है, जैसे matrix:\nint a[2][3] = {{1,2,3}, {4,5,6}};\na[0][1] का मान 2 और a[1][2] का मान 6 है। इसे rows और columns के nested loops से traverse किया जा सकता है।\n\n9. Row-major implementation\nC में two-dimensional arrays row-major order में store होते हैं: पहले row 0 के elements, फिर row 1 और इसी तरह। यदि int a[2][3] है, तो memory में logical क्रम a[0][0], a[0][1], a[0][2], a[1][0] ... होगा।\n\n10. Column-major implementation\nColumn-major order में पहले column के सभी elements, फिर अगले column के elements रखे जाते हैं। यह कई mathematical/scientific systems में उपयोग हो सकता है, लेकिन C के built-in multidimensional arrays row-major order का उपयोग करते हैं। Question में representation का convention स्पष्ट देखें।\n\n11. Structure\nStructure related fields को एक record में group करता है, भले उनके data types अलग हों।\nstruct Student {\n    int roll;\n    float marks;\n};\nयह Student record में roll और marks को साथ रखता है। Structure और array में मुख्य अंतर यह है कि array के elements एक ही type के होते हैं, जबकि structure fields अलग-अलग types के हो सकते हैं।\n\n12. Structure declare और initialize करना\nstruct Student s1 = {101, 86.5};\nprintf(\"%d\", s1.roll);\nStructure member को dot operator से access करते हैं। Pointer-to-structure होने पर arrow operator -> आम तौर पर उपयोग होता है। Actual structure padding के कारण size fields के sizes का सीधा जोड़ होना जरूरी नहीं है।\n\n13. Data structures पर सामान्य operations\n• Traversing — प्रत्येक element/node को क्रम से visit करना।\n• Searching — target value ढूँढना।\n• Insertion — नया element जोड़ना।\n• Deletion — element हटाना।\n• Sorting — data को चुने हुए order में लगाना।\n• Merging — दो collections को मिलाना।\n• Updating — existing value बदलना।\nOperation की complexity इस पर निर्भर करती है कि कौन-सा structure इस्तेमाल हो रहा है और किस location पर operation किया जा रहा है।\n\n14. Worked example (WORKED EXAMPLE)\nमान लें array values = [10, 20, 30] है। Traversal सभी values 10, 20, 30 visit करेगा। Search में target 20 दूसरे index पर मिलता है। Update values[1] = 25 करने पर array [10, 25, 30] होगा। Array के बीच में insert करने पर elements shift करने पड़ सकते हैं, जबकि linked list में links बदलने पड़ सकते हैं।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Data structure data को store और manage करने का व्यवस्थित तरीका है।\n• Linear structure में data क्रम से होता है; non-linear structure में hierarchical या network arrangement होता है।\n• Primitive data structures basic types हैं; non-primitive structured collections हैं।\n• Pointer memory address store करता है।\n• & address-of operator और * pointer dereference करने के लिए उपयोग होता है।\n• Pointer arithmetic arrays को traverse करने में मदद करती है।\n• Array of pointers में हर element एक address रखता है।\n• Two-dimensional array में row और column indexes होते हैं।\n• Row-major में data row-by-row, column-major में column-by-column व्यवस्थित माना जाता है।\n• Structure अलग-अलग types के related variables को group करता है।\n• Traversing elements को एक-एक करके visit करना है; searching element ढूँढना है।\n• Insertion element जोड़ना, deletion हटाना, sorting क्रम में लगाना और merging collections को जोड़ना है।\n• Updating किसी existing value को बदलना है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Data structure को परिभाषित कीजिए और इसका basic classification समझाइए।\n2. Linear और non-linear data structures में अंतर बताइए।\n3. Primitive और non-primitive data structures में अंतर बताइए।\n4. Pointer क्या है? Pointer से variables को declare, initialize और access करना समझाइए।\n5. Pointer arithmetic को उदाहरण सहित समझाइए।\n6. Array of pointers क्या होता है?\n7. One-dimensional और two-dimensional arrays समझाइए।\n8. Two-dimensional array के row-major और column-major implementation को समझाइए।\n9. C में structure क्या है? इसकी definition, declaration और initialization समझाइए।\n10. Traversing, searching, insertion, deletion, sorting, merging और updating समझाइए।\n\nप्रैक्टिस:\nStudent structure बनाएँ, array में marks का sum निकालें और linear तथा non-linear structure के उदाहरणों को वर्गीकृत करें।"
  },
  "303|Unit 2": {
    "title": "सर्चिंग और सॉर्टिंग तकनीक",
    "desc": "विस्तृत हिंदी नोट्स: linear/binary search, bubble/selection/insertion/quick/heap sort, assumptions, steps, complexity और comparison; exam questions व अभ्यास सहित।",
    "content": "इकाई 2 — Searching and Sorting Techniques\n\n1. Searching का परिचय\nSearching वह प्रक्रिया है जिसमें collection में किसी target value की location या मौजूदगी ढूँढी जाती है। इस unit में Linear Search और Binary Search हैं। Binary Search के लिए data sorted होना जरूरी है।\n\n2. Linear Search — concept\nLinear Search शुरुआत से elements को एक-एक करके target से compare करती है। यह sorted और unsorted दोनों arrays पर काम करती है।\nAlgorithm:\n1) पहले element से शुरू करें।\n2) current element को target से compare करें।\n3) Match मिले तो index return करें।\n4) नहीं तो अगले element पर जाएँ।\n5) सभी elements जाँचने के बाद match न मिले तो “not found” बताएँ।\n\n3. Linear Search — example और complexity\nArray [8, 3, 12, 5] में target 12 खोजें: पहले 8, फिर 3, फिर 12 compare होगा और match तीसरे element (index 2) पर मिलेगा। Worst case में n elements जाँचना पड़ सकता है, इसलिए time complexity O(n) है। अतिरिक्त storage constant हो तो auxiliary space O(1) है।\n\n4. Binary Search — concept\nBinary Search sorted array के middle element से तुलना करती है। Target छोटा हो तो left half और बड़ा हो तो right half चुना जाता है। हर चरण में search interval लगभग आधा हो जाता है; unsorted data पर इसे सीधे लागू न करें।\n\n5. Binary Search — process\nSorted array [2, 5, 8, 12, 16] में target 12:\n1) Middle value 8 देखें।\n2) 12 > 8, इसलिए left half छोड़कर right portion देखें।\n3) बचे हिस्से में 12 की तुलना करें और match मिलने पर उसकी location लौटाएँ।\nयह approach हर step में search range को घटाती है।\n\n6. Binary Search — complexity\nहर comparison के बाद लगभग आधा data बचता है, इसलिए worst-case time O(log n) है। Iterative version fixed extra variables इस्तेमाल करे तो auxiliary space O(1) होती है; recursive implementation call-stack memory भी उपयोग करती है।\n\n7. Linear Search और Binary Search में अंतर\n• Linear Search sorted data की मांग नहीं करती; Binary Search के लिए sorted order जरूरी है।\n• Linear Search एक-एक element जाँचती है; Binary Search middle से range आधी करती है।\n• Worst-case time: Linear O(n), Binary O(log n)।\n• छोटे या unsorted collection पर Linear सरल है; large sorted array पर Binary अधिक efficient हो सकती है।\n\n8. Sorting का परिचय\nSorting data को ascending या descending order में व्यवस्थित करती है। इससे reports, duplicate detection, ordered display और searching आसान हो सकती है।\n\n9. Insertion Sort — concept और process\nInsertion Sort में शुरुआत का छोटा हिस्सा sorted माना जाता है। अगला element key बनता है, sorted हिस्से के बड़े elements एक स्थान right shift किए जाते हैं और key सही जगह insert होती है।\nउदाहरण [4, 2, 3]:\n• 2 को 4 से पहले रखें → [2, 4, 3]\n• 3 को 4 से पहले और 2 के बाद रखें → [2, 3, 4]\nBest-case O(n), average/worst O(n²) है।\n\n10. Selection Sort — concept और process\nSelection Sort प्रत्येक pass में unsorted हिस्से का minimum element खोजता है और उसे शुरुआत के सही स्थान से swap करता है। [4, 2, 3] में पहले minimum 2 को 4 से swap कर [2, 4, 3], फिर शेष भाग में 3 को 4 से पहले रखकर [2, 3, 4] होगा। Comparisons सामान्यतः O(n²) होते हैं।\n\n11. Bubble Sort — concept और process\nBubble Sort adjacent pair compare करता है और क्रम गलत होने पर swap करता है। [4, 2, 3] में 4 और 2 swap होकर [2, 4, 3]; फिर 4 और 3 swap होकर [2, 3, 4] मिलता है। Standard/average/worst time O(n²) है; optimized implementation sorted input पर no-swap pass के बाद O(n) में रुक सकती है।\n\n12. Quick Sort — concept और process\nQuick Sort pivot चुनता है, elements को pivot से छोटे/बराबर और बड़े हिस्सों में partition करता है, फिर sub-arrays recursively sort करता है। Balanced partitions पर average time O(n log n) होता है, लेकिन repeatedly unbalanced partitions worst-case O(n²) बना सकते हैं।\n\n13. Heap Sort — concept\nHeap Sort heap data structure की मदद से sorting करता है। Max-heap में parent key अपने children से बड़ी या बराबर होती है। Max element को end में रखकर heap का आकार घटाया जाता है और heap property दोबारा restore की जाती है। Repeated steps से array sorted हो जाता है।\n\n14. Heap Sort — complexity और comparison\nHeap Sort की standard time complexity best/average/worst cases में O(n log n) होती है। आम तौर पर in-place sorting मानी जाती है और उसका worst-case भी O(n log n) है। Sorting methods की तुलना में time complexity, auxiliary space, stability, in-place behavior और input का शुरुआती क्रम देखें।\n\n15. Worked example (WORKED EXAMPLE)\nSorted array [2, 5, 8, 12, 16] में Binary Search द्वारा 12 ढूँढें: middle 8, फिर right portion [12,16], फिर 12 match। Insertion Sort से [4,2,3] को [2,4,3] और फिर [2,3,4] बनाएँ। दोनों examples से searching और sorting के अलग उद्देश्य स्पष्ट होते हैं।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Linear search elements को एक-एक करके जाँचता है।\n• Binary search हर चरण में search space को लगभग आधा करता है और sorted data आवश्यक है।\n• Linear search की worst-case complexity O(n); binary search की O(log n) है।\n• Insertion sort नया element sorted हिस्से में उचित जगह रखता है।\n• Selection sort unsorted हिस्से से minimum चुनता है।\n• Bubble sort adjacent elements compare करके आवश्यक होने पर swap करता है।\n• Quick sort pivot और divide-and-conquer का उपयोग करता है।\n• Heap sort heap structure की सहायता से sorting करता है।\n• Insertion, selection और bubble sort की सामान्य worst-case complexity O(n²) है।\n• Quick sort की average complexity O(n log n), जबकि worst case O(n²) हो सकती है।\n• Heap sort की time complexity O(n log n) होती है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Searching क्या है? Linear search की प्रक्रिया और complexity समझाइए।\n2. Binary search समझाइए और इसे लागू करने से पहले आवश्यक condition लिखिए।\n3. Linear search और binary search में अंतर बताइए।\n4. Sorting क्या है? Insertion sort समझाइए।\n5. Selection sort की प्रक्रिया समझाइए।\n6. Bubble sort को उदाहरण सहित समझाइए।\n7. Quick sort तथा divide-and-conquer की अवधारणा समझाइए।\n8. Heap sort और heap की भूमिका समझाइए।\n9. Insertion, selection, bubble, quick और heap sort की तुलना कीजिए।\n10. Linear search लागू करने वाला C program लिखिए।\n11. Binary search लागू करने वाला C program लिखिए।\n12. Insertion, selection, bubble, quick और heap sort के C programs लिखिए।\n\nप्रैक्टिस:\nएक array में linear और binary search चलाएँ; पाँच numbers को bubble sort और insertion sort से ascending order में रखें।"
  },
  "303|Unit 3": {
    "title": "लीनियर डेटा स्ट्रक्चर्स",
    "desc": "विस्तृत हिंदी नोट्स: stack/queue, LIFO/FIFO, push/pop/enqueue/dequeue, circular queue, deque और infix/postfix expressions; examples व प्रश्न सहित।",
    "content": "इकाई 3 — Linear Data Structures\n\n1. Linear data structures\nLinear structure में elements एक क्रम में organize होते हैं। इस unit में Stack और Queue मुख्य structures हैं। इनके insertion/deletion points और processing rules अलग होते हैं।\n\n2. Stack — परिचय\nStack LIFO (Last In, First Out) principle पर काम करता है: जो item सबसे आखिर में डाला जाता है, वही पहले निकलता है। Plates के stack जैसी कल्पना करें; operations एक end यानी top पर होते हैं।\n\n3. Stack operations\n• push(x) — top पर नया element डालना।\n• pop() — top element हटाकर लौटाना।\n• peek()/top() — top element को हटाए बिना देखना।\nArray implementation में top index से current top item track किया जाता है। Push/pop सामान्यतः O(1) time में किए जा सकते हैं।\n\n4. Stack की array representation\nएक array और top variable stack रख सकते हैं। Empty stack के लिए implementation अक्सर top = -1 रखती है। Push करने से पहले full condition, pop करने से पहले empty condition जाँचना जरूरी है। Array size fixed हो तो maximum capacity पहले से सीमित होती है।\n\n5. Stack overflow और underflow\n• Overflow — full stack में नया element push करने की कोशिश।\n• Underflow — empty stack से pop/peek करने की कोशिश।\nइन conditions को check करने से invalid access और incorrect results से बच सकते हैं।\n\n6. Stack के applications\nStack function calls, recursion, undo operations, expression conversion और expression evaluation में उपयोग होता है। Function call stack return addresses और local execution state रखने में भी मदद करता है।\n\n7. Infix, prefix और postfix\nExpression में operator की position notation बताती है:\n• Infix: operator operands के बीच, जैसे A + B।\n• Prefix: operator operands से पहले, जैसे + A B।\n• Postfix: operator operands के बाद, जैसे A B +।\nPrefix/postfix में parentheses पर निर्भरता घट सकती है क्योंकि order notation से स्पष्ट होता है।\n\n8. Infix-to-postfix transformation\nOperator precedence और parentheses को संभालने के लिए stack उपयोग होता है। Operands output में जोड़ते हैं; opening parenthesis stack में push होती है; operator मिलने पर higher/equal-precedence operators को नियम के अनुसार output में निकालते हैं; closing parenthesis पर opening parenthesis तक pop करते हैं। अंत में stack के बचे operators output में निकालें।\n\n9. Postfix expression evaluation\nPostfix expression में operand मिलने पर stack पर push करें। Operator मिलने पर आवश्यक operands pop करें, operation करें और result push करें। उदाहरण: 2 3 * 4 + में पहले 2 और 3 से 6, फिर 4 जोड़कर 10 मिलता है। Binary operator में पहला pop right operand और दूसरा pop left operand होता है।\n\n10. Queue — परिचय\nQueue FIFO (First In, First Out) principle पर काम करती है: जो element पहले आया, वह पहले निकलेगा। Queue में rear से insertion और front से deletion किया जाता है।\n\n11. Queue operations\n• enqueue(x) — rear पर element जोड़ना।\n• dequeue() — front से element हटाना और लौटाना।\n• front/peek — अगले element को बिना हटाए देखना।\nArray implementation में front और rear indexes रखे जाते हैं। Empty/full conditions implementation के अनुसार जाँची जाती हैं।\n\n12. Queue की array representation\nQueue के लिए array के साथ front और rear maintain किए जाते हैं। एक simple linear queue में dequeue के बाद front आगे बढ़ता है; इससे शुरुआती खाली slots बेकार रह सकते हैं। Circular queue इस समस्या को wrap-around indexing से कम करती है।\n\n13. Queue overflow और underflow\nOverflow तब होता है जब fixed-capacity queue full होने पर enqueue किया जाए। Underflow empty queue से dequeue करने पर होता है। Operations से पहले conditions जाँचें और empty/full state सही रखें।\n\n14. Queue के प्रकार\nमुख्य प्रकार में simple/linear queue, circular queue, priority queue और deque शामिल हो सकते हैं। इनकी insertion/deletion policies अलग होती हैं; इस unit में खास तौर पर circular queue और deque पर ध्यान दें।\n\n15. Deque (Double-ended queue)\nDeque में दोनों ends से insertion और deletion संभव है। इसे double-ended queue कहते हैं। Operations front और rear दोनों sides पर element जोड़ने/हटाने की अनुमति देते हैं।\n\n16. Circular queue\nCircular queue में rear या front array के अंत पर पहुँचने के बाद शुरुआत पर wrap कर सकते हैं। Capacity N के लिए wrap-around index का एक सामान्य रूप (index + 1) % N है। इससे dequeue के बाद खाली हुई slots दोबारा उपयोग की जा सकती हैं।\n\n17. Ordinary queue और circular queue में अंतर\nLinear array queue में front आगे जाने के बाद पुरानी positions आसानी से reuse नहीं होतीं, जब तक shifting या reset न हो। Circular queue modulo/wrap-around से उन positions को फिर इस्तेमाल करती है। दोनों में FIFO principle बना रहता है।\n\n18. Queue के applications\nQueue printer scheduling, task scheduling, buffering, requests के क्रमबद्ध processing और breadth-first search जैसे कामों में उपयोगी है।\n\n19. Stack और Queue की तुलना\n• Stack: LIFO; push/pop एक ही end पर।\n• Queue: FIFO; enqueue rear पर, dequeue front से।\nApplications और processing order के आधार पर सही structure चुनें।\n\n20. Worked example (WORKED EXAMPLE)\nStack में push(2), push(3), push(4) के बाद pop() से 4 निकलेगा। Queue में enqueue(2), enqueue(3), enqueue(4) के बाद dequeue() से 2 निकलेगा। इससे LIFO और FIFO का अंतर स्पष्ट होता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Linear data structure elements को क्रम में organize करता है।\n• Stack का सिद्धांत LIFO (Last In, First Out) है।\n• Queue का सिद्धांत FIFO (First In, First Out) है।\n• Push stack में element डालता है; pop निकालता है; peek/top सबसे ऊपर वाला element दिखाता है।\n• Full stack में push करना overflow और empty stack से pop करना underflow है।\n• Infix में operator operands के बीच, postfix में operands के बाद आता है।\n• Infix-to-postfix conversion और postfix evaluation में stack उपयोग होता है।\n• Enqueue queue में element जोड़ता है; dequeue element निकालता है।\n• Deque में दोनों ends पर insertion/deletion किया जा सकता है।\n• Circular queue positions को wrap-around करके खाली slots दोबारा इस्तेमाल करती है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Stack को परिभाषित कीजिए और LIFO principle समझाइए।\n2. Push, pop और peek operations समझाइए।\n3. Stack की array representation समझाइए।\n4. Stack overflow और underflow क्या हैं?\n5. Stack के applications समझाइए।\n6. Infix और postfix expressions क्या हैं?\n7. Stack का उपयोग करके infix expression को postfix में बदलना समझाइए।\n8. Postfix expression का evaluation समझाइए।\n9. Queue को परिभाषित कीजिए और FIFO principle समझाइए।\n10. Enqueue और dequeue operations समझाइए।\n11. Queue की array representation समझाइए।\n12. Queue में overflow और underflow क्या हैं?\n13. Deque और इसके operations समझाइए।\n14. Circular queue और wrap-around के लाभ समझाइए।\n15. Stack और queue में अंतर बताइए।\n\nप्रैक्टिस:\nStack में push/pop, queue में enqueue/dequeue के operations trace करें और A+B*C को postfix में बदलने का अभ्यास करें।"
  },
  "303|Unit 4": {
    "title": "लिंक्ड लिस्ट",
    "desc": "विस्तृत हिंदी नोट्स: linked list node, singly/circular/doubly lists, traversal, search, insertion/deletion और memory representation; प्रश्न व अभ्यास सहित।",
    "content": "इकाई 4 — Linked List\n\n1. Linked List का परिचय\nLinked list nodes का collection है जो links/pointers से जुड़े होते हैं। प्रत्येक node में data और अगली node का address होता है; doubly linked list में पिछली node का link भी होता है। Nodes का memory में contiguous होना जरूरी नहीं है।\n\n2. Singly linked list\nSingly linked list के node में data और next pointer होता है। Head पहली node को point करता है और आखिरी node का next सामान्यतः NULL होता है।\n10 → 20 → 30 → NULL\nEmpty list में head = NULL हो सकता है।\n\n3. Memory representation\nArray elements अक्सर contiguous memory में रहते हैं, लेकिन linked-list nodes memory में अलग-अलग locations पर हो सकते हैं। प्रत्येक node का next link आगे की node तक पहुँचाता है। इसलिए element तक पहुँचने के लिए शुरुआत से links follow करने पड़ सकते हैं।\n\n4. Singly linked list traversal\nTraversal में head से शुरू करके current node को process करें और current = current->next करते जाएँ जब तक current NULL न हो जाए। यदि list में n nodes हैं, तो पूरा traversal O(n) time लेता है।\n\n5. Beginning में insertion\n1) नया node allocate करें।\n2) उसमें data डालें।\n3) newNode->next को current head पर set करें।\n4) head को newNode पर set करें।\nBeginning insertion सामान्यतः O(1) है, बशर्ते node allocation उपलब्ध हो।\n\n6. End में insertion\nयदि list खाली है तो head नए node को point करेगा। अन्यथा last node तक traverse करें, फिर last->next = newNode और newNode->next = NULL करें। Last pointer maintain न हो तो end insertion में O(n) traversal लग सकता है।\n\n7. Specified position पर insertion\nपहले उस node तक पहुँचें जिसके बाद नया node डालना है। New node का next पुराने next link पर set करें, फिर previous node का next नए node पर करें। Links बदलने का क्रम महत्वपूर्ण है; पहले पुराना next सुरक्षित न रखने से list का बाकी भाग खो सकता है।\n\n8. Singly linked list deletion\nBeginning से deletion में head को head->next पर move करें और पुरानी node की memory release करें। End से deletion के लिए second-last node तक पहुँचना और उसका next NULL करना होता है। Empty list और one-node list के special cases संभालें।\n\n9. Middle node deletion\nTarget node के previous node को ढूँढें। Previous->next को target->next पर set करें, फिर target की memory free करें। यदि target पहला node है तो head update करना होगा; यदि target नहीं मिला, तो गलत pointer को dereference न करें।\n\n10. Searching\nHead से शुरू करके प्रत्येक node का data target से compare करें। Match मिलने पर node/index information लौटाएँ; NULL तक पहुँचने पर value नहीं मिली। Unsorted linked list में linear search worst-case O(n) होती है।\n\n11. Linked list के फायदे\n• Size fixed array की तरह पहले से तय होना जरूरी नहीं।\n• Known node के आसपास insertion/deletion links बदलकर किया जा सकता है।\n• Nodes memory में अलग-अलग स्थान पर हो सकते हैं।\nInsertion/deletion के लिए सही node locate करना फिर भी time ले सकता है।\n\n12. Linked list की सीमाएँ\n• Index से direct random access नहीं; traversal आवश्यक हो सकता है।\n• प्रत्येक node में pointer storage overhead होता है।\n• Pointer bugs और memory leaks की संभावना।\n• Array की तुलना में cache locality कमजोर हो सकती है।\n\n13. Circular linked list\nCircular singly linked list में last node का next NULL के बजाय head को point करता है। इससे list cycle बनाती है। Empty list और traversal termination को सावधानी से handle करें ताकि अनंत loop न बने।\n\n14. Circular linked list traversal\nHead से शुरू करें, node process करें, next पर जाएँ और तब रुकें जब फिर head पर लौट आएँ। सामान्य while (current != NULL) condition यहाँ सही नहीं होगी, क्योंकि circular list में current NULL नहीं बनेगा।\n\n15. Circular list के उपयोग\nCircular linked list round-robin scheduling, repeated cyclic navigation और ऐसे tasks में काम आ सकती है जहाँ अंतिम node के बाद फिर पहली node पर जाना होता है।\n\n16. Doubly linked list\nDoubly linked list में प्रत्येक node के data के साथ prev और next pointers होते हैं। इससे forward और backward दोनों directions में traversal संभव है।\n\n17. Doubly linked list का representation\nNULL ← 10 ⇄ 20 ⇄ 30 → NULL\nपहली node का prev और आखिरी node का next NULL हो सकता है। Head/tail pointers implementation के अनुसार रखे जाते हैं।\n\n18. Doubly linked list operations\nInsertion/deletion में next के साथ prev links भी update करना होता है। इससे known node को हटाना या backwards traverse करना आसान है, लेकिन दो links को सही रखना जरूरी और memory overhead अधिक है।\n\n19. Singly, circular और doubly lists में अंतर\n• Singly: केवल next link; forward traversal।\n• Circular: last node फिर head से जुड़ती है; cycle traversal।\n• Doubly: prev और next links; forward/backward traversal।\nSelection required traversal direction, memory और operations पर निर्भर करती है।\n\n20. Worked example (WORKED EXAMPLE)\nशुरुआत: 10 → 20 → 30 → NULL। Beginning में 5 insert करने पर नया node पहले पुराने head (10) को point करेगा और head 5 पर बदलेगा: 5 → 10 → 20 → 30 → NULL। यदि 20 delete करना हो तो 10 का next, 30 पर set करके node 20 की memory free करें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Linked list आपस में links से जुड़े nodes का collection है।\n• Node में data और एक या अधिक link fields होते हैं।\n• Head पहले node को point करता है।\n• Singly linked list में next pointer होता है; अंतिम node का next NULL होता है।\n• Traversal nodes को एक-एक करके visit करना है।\n• Insertion में node जोड़कर links ठीक किए जाते हैं; deletion में node हटाकर links जोड़े जाते हैं।\n• Searching में nodes के data को क्रम से compare किया जाता है।\n• Circular linked list में last node, first node से जुड़ता है।\n• Doubly linked list में prev और next links होते हैं।\n• Linked-list nodes सामान्यतः memory में contiguous locations पर होना आवश्यक नहीं है।\n• Linked-list operations में pointer manipulation बहुत महत्वपूर्ण है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Linked list क्या है? इसकी basic node structure समझाइए।\n2. Singly linked list का memory representation समझाइए।\n3. उदाहरण सहित singly linked list का traversal समझाइए।\n4. Singly linked list के beginning और end पर insertion समझाइए।\n5. निर्दिष्ट position पर insertion समझाइए।\n6. Singly linked list के beginning, end और middle से deletion समझाइए।\n7. Singly linked list में searching समझाइए।\n8. Circular linked list क्या है? इसका representation और traversal समझाइए।\n9. Doubly linked list क्या है? इसकी node structure समझाइए।\n10. Singly, circular और doubly linked lists में अंतर बताइए।\n11. Linked-list operations में pointer manipulation महत्वपूर्ण क्यों है?\n\nप्रैक्टिस:\nSingly linked list traverse करें, beginning पर node insert करें और किसी key वाले node को delete करने के steps लिखें।"
  },
  "303|Unit 5": {
    "title": "नॉन-लीनियर डेटा स्ट्रक्चर",
    "desc": "विस्तृत हिंदी नोट्स: trees, binary trees, terminology, traversals, BST, graph representation, BFS और DFS; exam questions व practice सहित।",
    "content": "इकाई 5 — Non-linear Data Structures (नॉन-लीनियर डेटा स्ट्रक्चर)\n\n1. Non-linear data structures\nNon-linear structures में elements सिर्फ एक straight sequence में नहीं होते; connections hierarchy या network बना सकते हैं। Tree और graph इसके मुख्य उदाहरण हैं।\n\n2. Trees का परिचय\nTree nodes और edges से बनी hierarchical structure है। एक सामान्य rooted tree में root सबसे ऊपर होता है और child nodes parent से जुड़े होते हैं। Tree में parent-child relationships data को hierarchical रूप से व्यवस्थित करती हैं।\n\n3. Tree की basic terminology\n• Root — top node जिसका parent नहीं होता।\n• Parent/Child — सीधे जुड़े ऊपर/नीचे के nodes।\n• Siblings — जिनका parent समान होता है।\n• Leaf — ऐसा node जिसके children नहीं होते।\n• Subtree — किसी node और उसके descendants से बना tree।\n• Degree — node के children की संख्या; graph के degree की परिभाषा अलग हो सकती है।\n• Level — root से node की स्थिति/दूरी दर्शाने का convention।\n• Height — node से सबसे दूर leaf तक के longest path की लंबाई; कुछ texts edges और कुछ nodes count कर सकते हैं, इसलिए convention स्पष्ट रखें।\n\n4. Binary tree\nBinary tree में प्रत्येक node के अधिकतम दो children होते हैं: left और right। Node में data और left/right links हो सकते हैं। Zero, one या two children होना संभव है।\n\n5. Binary tree की array representation\nComplete binary tree की array representation में index relationships उपयोग होते हैं। 0-based indexing वाले array में node index i का left child 2*i + 1 और right child 2*i + 2 पर हो सकता है; 1-based indexing वाले conventions में formulas अलग होते हैं। खाली positions हों तो array representation में जगह व्यर्थ हो सकती है; linked representation left/right pointers रखती है।\n\n6. Binary tree insertion\nInsertion method tree के प्रकार पर निर्भर करता है। Complete binary tree में सामान्य रूप से level-order traversal करके पहली खाली child position ढूँढी जा सकती है। किसी भी binary tree में insertion का नियम question में दिए हुए convention के अनुसार follow करें।\n\n7. Binary tree deletion\nDeletion में हटाने वाले node को locate करना और tree structure सही रखना जरूरी है। Complete binary tree की एक सामान्य strategy में last node का data target node में लाकर last node remove किया जाता है। यह हर arbitrary binary tree या BST के deletion rule के समान नहीं है—tree type के अनुसार method बदलती है।\n\n8. Tree traversals\nTraversal nodes को निश्चित क्रम में visit करने की प्रक्रिया है:\n• Preorder = Root, Left, Right।\n• Inorder = Left, Root, Right।\n• Postorder = Left, Right, Root।\n• Level-order = level-by-level; सामान्यतः queue का उपयोग।\nTraversal से tree के data को अलग-अलग orders में process किया जा सकता है।\n\n9. Full binary tree\nFull binary tree में हर node के या तो 0 या 2 children होते हैं। किसी node का केवल एक child नहीं होता।\n\n10. Complete binary tree\nComplete binary tree में अंतिम level को छोड़कर बाकी levels पूरी तरह भरे होते हैं, और अंतिम level के nodes बाएँ से दाएँ भरे जाते हैं।\n\n11. Perfect binary tree\nPerfect binary tree में हर internal node के दो children होते हैं और सभी leaves समान level पर होते हैं। ऐसे tree में सभी levels पूरी तरह भरे होते हैं।\n\n12. Balanced binary tree\nBalanced tree में subtrees की heights संतुलित रखने का नियम होता है; exact definition tree type के अनुसार बदल सकती है। Height नियंत्रित रखने से कुछ operations ज्यादा efficient हो सकते हैं।\n\n13. Full, complete, perfect और balanced trees\nइन terms को interchangeable न समझें। Full: 0 या 2 children; Complete: अंतिम level left-to-right filled; Perfect: सभी internal nodes के दो children और सभी leaves समान level पर; Balanced: height-balance condition satisfy होती है। एक tree एक से अधिक properties रख सकता है।\n\n14. Graph का परिचय\nGraph vertices (nodes) और edges (connections) से बनता है। Graph road network, social network और communication links जैसे connections represent कर सकता है।\n\n15. Vertices और edges\nVertex graph का node है और edge दो vertices के बीच connection है। Edge के साथ weight भी हो सकता है। Weighted edge distance/cost जैसी value रखती है।\n\n16. Vertex की degree\nUndirected graph में degree किसी vertex से जुड़ी edges की संख्या है। Directed graph में indegree आने वाली edges और outdegree बाहर जाने वाली edges गिनते हैं। Loops और multiedges हों तो convention के अनुसार counting बदल सकती है।\n\n17. Walks, paths और cycles\nWalk में vertices/edges दोहराए जा सकते हैं। Path आम तौर पर repeated vertices के बिना route माना जाता है, जबकि cycle starting vertex पर वापस लौटता है। अलग textbooks path की formal definition में थोड़ा फर्क रख सकते हैं।\n\n18. Directed और undirected graphs\nDirected edge की direction होती है, जैसे A → B; इसका अर्थ जरूरी नहीं कि B → A भी उपलब्ध हो। Undirected edge A—B दो vertices को बिना direction जोड़ती है।\n\n19. Graph representation — Set/edge set\nSet representation में vertices का set V और edges का set E अलग से लिखा जाता है। उदाहरण V = {A,B,C}, E = {(A,B),(B,C)}। Ordered pair directed edge की दिशा बता सकता है; undirected edge notation में direction नहीं होती।\n\n20. Graph representation — Linked/adjacency list\nAdjacency list में प्रत्येक vertex के साथ उसके neighbours की list रखी जाती है। Sparse graph में यह memory-efficient हो सकती है क्योंकि केवल मौजूद edges के neighbours store होते हैं।\n\n21. Graph representation — Matrix\nAdjacency matrix n × n table होती है, जहाँ row और column vertices को represent करते हैं। Entry 1/0 से edge की presence या weight से connection cost दिख सकती है। Matrix edge lookup को सरल बनाती है, लेकिन O(V²) memory लेती है।\n\n22. Breadth First Search (BFS)\nBFS शुरुआत के vertex से पहले उसके neighbours, फिर उनके neighbours visit करता है। यह queue का उपयोग करता है और visited marker से repeated visits रोकता है। Unweighted graph में BFS shortest path in number of edges खोजने के लिए उपयोगी है।\n\n23. Depth First Search (DFS)\nDFS किसी path में गहराई तक जाता है, फिर backtrack करता है। इसे recursion या explicit stack से implement कर सकते हैं। Cycles वाले graph में visited tracking जरूरी है।\n\n24. BFS और DFS में अंतर\n• BFS breadth/level-wise explore करता है और queue use करता है।\n• DFS depth-wise explore करता है और recursion/stack use करता है।\n• दोनों traversal techniques हैं; visitation order neighbouring-node order पर depend कर सकता है, इसलिए question में दिया order follow करें।\n\n25. Trees और Graphs में अंतर\nTree एक connected acyclic hierarchical structure होता है। General graph में cycles, multiple routes और disconnected components हो सकते हैं। Rooted tree में parent-child relationship परिभाषित होती है, जबकि general graph में ऐसा hierarchy rule जरूरी नहीं है।\n\n26. Worked example (WORKED EXAMPLE)\nTree:\n    A\n   / \\\n  B   C\nPreorder: A, B, C; Inorder: B, A, C; Postorder: B, C, A। यदि graph edges A-B, A-C और B-D हों, तो A से BFS neighbour order के अनुसार B, C visit करके फिर D तक पहुँचेगा। DFS पहले B की branch में D तक जा सकता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Tree hierarchical non-linear structure है; graph vertices और edges से बनता है।\n• Root सबसे ऊपर का node; parent के नीचे child; समान parent वाले nodes siblings कहलाते हैं।\n• बिना children वाला node leaf और node के descendants सहित हिस्सा subtree है।\n• Binary tree के प्रत्येक node के अधिकतम दो children होते हैं।\n• Preorder = Root, Left, Right; Inorder = Left, Root, Right; Postorder = Left, Right, Root।\n• Full binary tree में हर node के 0 या 2 children होते हैं।\n• Complete binary tree में अंतिम level बाएँ से दाएँ भरता है; perfect tree में सभी leaves समान level पर होते हैं।\n• Balanced tree की height नियंत्रित रहती है।\n• Graph में vertices (nodes) और edges (connections) होते हैं।\n• Walk में vertices/edges दोहराए जा सकते हैं; path सामान्यतः ऐसा route है जिसमें vertex दोहराए नहीं जाते; cycle शुरू हुए vertex पर वापस लौटता है। अलग पाठ्यपुस्तकों में path की औपचारिक परिभाषा थोड़ी भिन्न हो सकती है।\n• BFS breadth-wise traversal के लिए queue का उपयोग करता है।\n• DFS depth-wise traversal के लिए stack या recursion का उपयोग करता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Non-linear data structure क्या है? उदाहरण दीजिए।\n2. Tree समझाइए और root, node, edge, parent, child, sibling, leaf, subtree, degree, level तथा height परिभाषित कीजिए।\n3. Binary tree क्या है?\n4. Binary tree की array representation समझाइए।\n5. Binary tree में insertion, deletion और traversal समझाइए।\n6. उदाहरण सहित preorder, inorder और postorder traversals समझाइए।\n7. Full, complete, perfect और balanced binary trees में अंतर बताइए।\n8. Graph परिभाषित कीजिए तथा vertices, edges और degree समझाइए।\n9. Walk, path और cycle समझाइए।\n10. Directed और undirected graphs में अंतर बताइए।\n11. Set, linked और matrix forms द्वारा graph representation समझाइए।\n12. BFS को उदाहरण सहित समझाइए।\n13. DFS को उदाहरण सहित समझाइए।\n14. BFS और DFS में अंतर बताइए।\n15. Tree और graph में अंतर बताइए।\n\nप्रैक्टिस:\nदिए गए छोटे tree का तीनों तरीके से traversal लिखें और छोटा graph बनाकर BFS/DFS order निकालें।"
  },
  "304|Unit 1": {
    "title": "कंप्यूटर की मूल संरचना",
    "desc": "विस्तृत हिंदी नोट्स: computer functional units, CPU/ALU/control unit, buses, number systems, registers, instruction cycle, RTL और microoperations; प्रश्न व अभ्यास सहित।",
    "content": "इकाई 1 — Basic Computer Structure (कंप्यूटर की मूल संरचना)\n\n1. Digital computer के functional blocks\nकंप्यूटर के मुख्य functional blocks Input Unit, Memory, CPU और Output Unit हैं। Input data/instructions लेता है; Memory instructions और data store करती है; CPU instructions execute करता है; Output results दिखाता या भेजता है। CPU में ALU, Control Unit और registers शामिल होते हैं।\n\n2. CPU\nCPU (Central Processing Unit) program instructions execute करता है और computer के operations coordinate करता है।\n• ALU (Arithmetic Logic Unit) arithmetic और logical operations करती है।\n• Control Unit timing/control signals के द्वारा operations का क्रम तय करती है।\n• Registers CPU के भीतर तेज, छोटी storage locations हैं जो data, address और intermediate results रखती हैं।\n\n3. Memory\nMemory instructions, input data, intermediate results और output store करती है। CPU memory location को address से access करता है। अलग memory types की speed, capacity और persistence अलग हो सकती है।\n\n4. Input और Output\nInput units data/instructions system में देती हैं; output units processed results प्रस्तुत करती हैं। Keyboard, sensors, display और printer peripheral devices के उदाहरण हैं। I/O interface CPU/memory system और device के बीच data तथा control signals coordinate करता है।\n\n5. Control Unit\nControl Unit instruction decode करके बताती है कि कौन-सा register data दे, ALU कौन-सा operation करे, memory read/write कब हो और result कहाँ store हो। उदाहरण के लिए addition में operands लेना, ALU को add signal देना और result register में रखना सही क्रम से होना चाहिए।\n\n6. Von Neumann architecture\nVon Neumann architecture में instructions और data सामान्यतः shared memory और common path का उपयोग करते हैं। इससे design सरल हो सकता है, लेकिन instruction fetch और data access एक ही resource के लिए compete कर सकते हैं।\n\n7. Harvard architecture\nHarvard architecture instructions और data के लिए अलग memory/path organization रखती है। इससे instruction fetch और data access अलग-अलग चल पाने की संभावना होती है। Modern processors mixed designs भी अपना सकते हैं।\n\n8. Von Neumann और Harvard में अंतर\n• Von Neumann: instructions/data के लिए shared memory/path।\n• Harvard: instructions/data के लिए separate memory/path।\nकिस architecture की performance बेहतर होगी, यह processor, cache और bus implementation पर निर्भर करता है।\n\n9. Von Neumann bottleneck\nजब instruction और data access shared path/bandwidth के लिए compete करते हैं, तो data transfer limitation बन सकती है। इसे Von Neumann bottleneck कहते हैं।\n\n10. Bus structures\nBus components के बीच signals ले जाने वाले paths का समूह है।\n• Data bus — data transfer।\n• Address bus — memory/I/O location का address।\n• Control bus — read/write, interrupt और timing जैसी signals।\nBus width और design data transfer capacity तथा addressable range को प्रभावित करते हैं।\n\n11. Basic bus operation\nRead में CPU address देता है और read signal activate करता है; selected device data bus पर value रखता है। Write में CPU address और data देता है तथा write signal से destination को store करने का संकेत देता है। Actual timing design पर निर्भर करती है।\n\n12. Number systems\n• Decimal: base 10, digits 0–9।\n• Binary: base 2, digits 0 और 1।\n• Octal: base 8, digits 0–7।\n• Hexadecimal: base 16, digits 0–9 और A–F।\nBinary digital logic की मूल representation है; hexadecimal binary values को compact रूप में लिखने में मदद करता है।\n\n13. Number system conversion\nBinary 1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 10₁₀।\nDecimal integer को binary में बदलने के लिए बार-बार 2 से divide कर remainders को उलटे क्रम में पढ़ें। उदाहरण: 13 को binary में बदलने पर 1101₂ मिलता है। एक hexadecimal digit चार binary bits से represent किया जा सकता है।\n\n14. Registers\nRegisters CPU के भीतर तेज storage हैं। कुछ data, कुछ addresses, कुछ current instruction और कुछ control/status information रखते हैं।\n\n15. Register types और functions\n• General-purpose register — data/intermediate results।\n• Accumulator — ALU operations में महत्वपूर्ण operand/result register।\n• Program Counter (PC) — अगली instruction का address।\n• Instruction Register (IR) — current instruction।\n• Memory Address Register (MAR) — memory access का address।\n• Memory Data Register (MDR) — memory से आया या memory में भेजा जाने वाला data।\n• Stack Pointer (SP) — stack top को locate करने में मदद करता है।\nSpecific processor में register names/roles अलग हो सकते हैं।\n\n16. Instruction cycle\nInstruction cycle में CPU instruction fetch, decode और execute करता है:\n1) PC से instruction address लें।\n2) Memory से instruction fetch करें।\n3) IR में instruction रखें और decode करें।\n4) आवश्यक operands प्राप्त करें।\n5) Operation execute करें।\n6) Result/flags update करें और next instruction के लिए PC बदलें।\nArchitecture के अनुसार stages में अतिरिक्त detail हो सकती है।\n\n17. Register transfer\nRegister transfer में एक register का data दूसरे register में copy होता है। RTL notation R1 ← R2 का मतलब R2 की value R1 में transfer करना है।\n\n18. Bus और memory transfer\nMemory read में address देकर memory से data प्राप्त करते हैं; memory write में address और data देकर value store करते हैं। कौन bus पर data भेजेगा/लेगा, यह control signals और timing से तय होता है।\n\n19. RTL — Register Transfer Language\nRTL register transfers और micro-operations को symbolic रूप में दिखाती है। R1 ← R2 + R3 का अर्थ R2 और R3 को जोड़कर result R1 में रखना है। यह hardware-level action की notation है, high-level program code नहीं।\n\n20. Microoperations\nMicrooperation register data पर किया जाने वाला छोटा operation है। मुख्य categories Arithmetic, Logical और Shift microoperations हैं। कई microoperations मिलकर किसी instruction का execution पूरा कर सकते हैं।\n\n21. Arithmetic microoperations\nAddition, subtraction, increment और decrement arithmetic microoperations हैं। उदाहरण: R1 ← R1 + R2 या R1 ← R1 + 1। Result register में आता है और status flags प्रभावित हो सकते हैं।\n\n22. Logical microoperations\nBitwise AND, OR, XOR और complement individual bits पर काम करते हैं। उदाहरण: 1010 AND 1100 = 1000। ये hardware-level bitwise operations हैं।\n\n23. Shift microoperations\nShift में bits को left/right move किया जाता है। Logical shift में खाली जगह पर zero आ सकता है; arithmetic right shift sign bit preserve कर सकता है। Signed/unsigned representation का ध्यान रखें।\n\n24. ALU\nALU arithmetic और logical operations करती है। इसे operands, operation-select signals और result path की जरूरत होती है। Comparison operations status flags set कर सकती हैं।\n\n25. Arithmetic Logic Shift Unit (ALSU)\nALSU arithmetic, logical और shift operations को combine/coordinate करने वाली unit या datapath organization को refer कर सकती है। यह addition/subtraction, bitwise operations और shifting जैसी operations support करती है।\n\n26. Fixed-point representation\nFixed-point में binary point की position एक तय convention से रखी जाती है। उदाहरण: 101.01₂ = 4 + 1 + 0.25 = 5.25₁₀। Range और precision chosen format पर निर्भर करते हैं।\n\n27. Floating-point representation\nFloating-point values को significand/fraction और exponent के रूप में represent करता है। उदाहरण: 101.01₂ को 1.0101₂ × 2² लिखा जा सकता है। इससे wide range represent होती है, लेकिन finite precision के कारण rounding हो सकती है।\n\n28. Negative numbers — sign bit\nSign-bit representation में एक bit sign बताती है और बाकी bits magnitude रख सकती हैं। अलग signed representations की range और zero representations अलग हो सकती हैं। 1’s और 2’s complement महत्वपूर्ण हैं।\n\n29. 1’s complement\n1’s complement में हर 0 को 1 और हर 1 को 0 करें। उदाहरण: 00000101 का 1’s complement 11111010 है।\n\n30. 2’s complement\n2’s complement के लिए bits invert करके 1 जोड़ें। 8-bit +5 = 00000101; invert = 11111010; plus 1 = 11111011, जो −5 को represent करता है। Fixed width बताना जरूरी है।\n\n31. 1’s complement और 2’s complement\n1’s complement केवल bits invert करता है और इसमें positive/negative zero के अलग representations हो सकते हैं। 2’s complement invert करके 1 जोड़ता है और सामान्यतः एक zero representation देता है; modern integer arithmetic में व्यापक है।\n\n32. 2’s complement से addition और subtraction\nA − B को fixed width में A + (B का 2’s complement) के रूप में किया जा सकता है।\n5 = 00000101\n3 = 00000011; invert और 1 जोड़ने पर 11111101 मिलता है।\n00000101 + 11111101 = 1 00000010\n8-bit result में बाहर का carry छोड़ने पर 00000010 = 2 मिलता है। Signed overflow और carry एक ही बात नहीं हैं।\n\n33. Worked example (WORKED EXAMPLE)\nBinary 1010₂ = decimal 10; decimal 13 = binary 1101₂। 8-bit 2’s complement में −5 = 11111011। Conversions में base, bit width और signed representation अलग-अलग ध्यान से identify करें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• CPU instructions execute करता है और processing control करता है।\n• ALU arithmetic और logical operations करती है; Control Unit operations coordinate करती है।\n• Register CPU के अंदर fast storage है।\n• Von Neumann architecture instruction और data के लिए shared memory उपयोग करती है; Harvard में दोनों के लिए अलग organization होती है।\n• Shared instruction/data path से उत्पन्न सीमा को Von Neumann bottleneck कहते हैं।\n• Data bus data, address bus addresses और control bus control signals ले जाती है।\n• Decimal base 10, binary base 2, octal base 8 और hexadecimal base 16 है।\n• PC अगली instruction का address; IR current instruction रखता है।\n• MAR memory address और MDR memory data रखता है।\n• RTL register transfers/microoperations को दिखाने की notation है।\n• Arithmetic microoperations register data पर गणना; logical microoperations bitwise logic और shift microoperations bits को shift करते हैं।\n• Fixed-point में radix point की position निश्चित होती है; floating-point में significand और exponent उपयोग होते हैं।\n• 1’s complement bits invert करता है; 2’s complement bits invert करके 1 जोड़ता है।\n• 2’s complement signed addition/subtraction में काम आता है; overflow तब हो सकता है जब signed result representable range से बाहर हो।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Digital computer के functional blocks समझाइए।\n2. Von Neumann और Harvard architectures तथा Von Neumann bottleneck समझाइए।\n3. Data, address और control buses समझाइए।\n4. Conversion सहित decimal, binary, octal और hexadecimal number systems समझाइए।\n5. Registers क्या हैं? सामान्य register types और उनके functions समझाइए।\n6. Instruction cycle समझाइए।\n7. Register transfer क्या है? उदाहरण सहित RTL समझाइए।\n8. Arithmetic, logical और shift microoperations समझाइए।\n9. ALU और arithmetic logical shift unit के functions समझाइए।\n10. Fixed-point और floating-point representation समझाइए।\n11. Negative numbers के sign-bit, 1’s complement और 2’s complement representations समझाइए।\n12. 2’s complement का उपयोग करके binary addition/subtraction कीजिए।\n13. Signed arithmetic overflow क्या है?\n\nप्रैक्टिस:\nBinary 1010 और 1111 को decimal में बदलिए; decimal 13 को binary में बदलिए; और fetch-decode-execute cycle का flowchart बनाइए।"
  },
  "304|Unit 2": {
    "title": "इंस्ट्रक्शन सेट आर्किटेक्चर",
    "desc": "विस्तृत हिंदी नोट्स: ISA, opcode/operand, instruction formats, addressing modes, assembly/machine code, interrupts, RISC/CISC, pipeline और vector processing; प्रश्न सहित।",
    "content": "इकाई 2 — Instruction Set Architecture\n\n1. ISA\nInstruction Set Architecture वह programmer-visible specification है जो processor instructions, registers, data types, memory access और addressing के नियम बताती है।\n\n2. Instruction Format\nInstruction में opcode operation बताता है और operand fields data या locations का संकेत देते हैं। Format में register numbers, immediate value या address जैसी fields हो सकती हैं।\n\n3. Addressing Modes\n• Immediate: operand value instruction में होती है।\n• Register: operand register में होता है।\n• Direct: instruction में effective address दिया होता है।\n• Indirect: address किसी अन्य location/register के जरिए मिलता है।\n• Indexed/Base-relative: base या index के साथ offset से address निकाला जाता है।\nसटीक modes ISA पर निर्भर करते हैं।\n\n4. Machine और Assembly Language\nMachine code binary instructions हैं जिन्हें CPU execute कर सकता है। Assembly language mnemonics जैसे MOV, ADD आदि का उपयोग करती है और assembler उसे machine code में बदलता है।\n\n5. Instructions और Stack\nInstructions data transfer, arithmetic, logic, branching और control के कार्य कर सकती हैं। Stack last-in-first-out structure है; Stack Pointer stack top को track करता है।\n\n6. Interrupts\nInterrupt CPU का ध्यान किसी event की ओर ले जाता है। CPU current work को निर्धारित नियमों के अनुसार रोककर interrupt service routine चलाता है और फिर वापस लौट सकता है।\n\n7. RISC और CISC\nRISC design सरल और अक्सर नियमित instructions पर जोर देता है; CISC अधिक जटिल instructions का समर्थन कर सकता है। वास्तविक performance केवल इस label से तय नहीं होती।\n\n8. Pipeline और Vector Processing\nPipeline instruction processing के stages overlap करती है, जिससे throughput बढ़ सकता है। Vector processing एक instruction द्वारा कई data elements पर operation करने से संबंधित है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n9. Instruction format और addressing\nInstruction code में opcode operation बताता है और operand/address fields data या उसका स्थान बताते हैं। Immediate addressing में value instruction में होती है; direct addressing में memory address दिया होता है; indirect में address किसी location/register के माध्यम से मिलता है; register mode में operand register में होता है; implied mode में operand स्पष्ट नहीं लिखा जा सकता। अलग architectures के exact mode names/details अलग हो सकते हैं।\n\n10. Instruction cycle, registers और stack\nFetch में instruction memory से आती है, decode में control logic operation पहचानती है और execute में operation होता है। General-purpose registers fast operands/results रखते हैं। Stack LIFO है; PUSH data जोड़ता है और POP निकालता है। Three-address instruction में तीन explicit operand/address fields, two-address में दो, one-address format में प्रायः accumulator implicit operand और zero-address format में stack operands implicit हो सकते हैं।\n\n11. Instruction groups, interrupts और performance\nData transfer instructions values move करती हैं; data manipulation arithmetic/logic operations करती हैं; program-control instructions jump/branch या sequence बदलती हैं। Interrupt device/event से CPU service माँगता है; CPU state preserve कर handler चलाता है और फिर वापस आ सकता है। RISC design relatively simple instructions और efficient pipeline पर जोर देता है; CISC अधिक complex instructions दे सकता है। Pipeline stages को overlap करती है, vector processing एक instruction से multiple data elements पर operation और array processing structured/parallel elements पर काम दर्शाती है।\n\n12. Worked example (WORKED EXAMPLE)\nWorked example: Addressing modes (generic illustrative notation)\n• Immediate: LOAD R1, #25 — value 25 instruction में ही दी गई है।\n• Register: ADD R1, R2 — operands registers R1 और R2 में रखे हैं।\n• Direct: LOAD R1, [2050] — instruction में memory address 2050 दिया है।\n• Register-indirect: LOAD R1, [R2] — R2 में उस memory location का address है जहाँ operand रखा है।\nये समझाने के लिए generic/pseudocode-style examples हैं, किसी एक processor के exact machine instructions नहीं। हर वास्तविक ISA में syntax और उपलब्ध addressing modes अलग हो सकते हैं। 8085-specific instructions और उनका अभ्यास Unit 5 में पढ़ें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• ISA processor की programmer-visible instructions और rules का set है।\n• Instruction code operation तथा operand/address की जानकारी encode करता है।\n• Addressing mode बताता है कि operand कहाँ मिलेगा।\n• Assembly language instructions के symbolic names उपयोग करती है; machine code encoded instructions हैं जिन्हें processor execute करता है।\n• Instruction cycle में सामान्यतः fetch, decode, operand access, execute और जरूरत के अनुसार write-back शामिल होते हैं।\n• General registers operands और intermediate results रखते हैं।\n• Stack LIFO organization है; PUSH item जोड़ता है और POP item निकालता है।\n• Three-, two-, one- और zero-address formats में explicit operand/address fields की संख्या अलग होती है।\n• Data transfer data move करता है; data manipulation उसे process करता है; program-control instruction execution sequence बदलता है।\n• Interrupt CPU से service की माँग करता है।\n• RISC relatively simple/reduced instruction set approach और CISC अधिक complex instruction set approach है।\n• Pipeline instruction-processing stages को overlap करती है।\n• Vector processing vector elements पर operations और array processing array elements की organized/parallel processing है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Instruction Set Architecture (ISA) को परिभाषित कीजिए।\n2. Instruction code क्या है? Opcode और operand/address fields समझाइए।\n3. उपयुक्त उदाहरणों सहित addressing modes समझाइए।\n4. Assembly language और machine code में अंतर बताइए।\n5. Instruction cycle, timing और control समझाइए।\n6. General register organization समझाइए।\n7. Stack architecture क्या है? PUSH और POP समझाइए।\n8. उदाहरणों सहित three-address, two-address, one-address और zero-address instruction formats समझाइए।\n9. Data transfer, data manipulation और program control instructions समझाइए।\n10. Interrupt क्या है? Interrupt handling का basic sequence समझाइए।\n11. RISC और CISC में अंतर बताइए।\n12. Simple stage diagram के साथ pipeline architecture समझाइए।\n13. Vector processing और array processing समझाइए।\n14. Vector processing और array processing की तुलना कीजिए।\n\nप्रैक्टिस:\nएक instruction के opcode/operand fields पहचानें और दिए गए operands के लिए addressing mode classify करें।"
  },
  "304|Unit 3": {
    "title": "कंट्रोल यूनिट संगठन",
    "desc": "विस्तृत हिंदी नोट्स: control signals, hardwired/microprogrammed control, microinstructions, horizontal/vertical formats, control memory और sequencing; प्रश्न सहित।",
    "content": "इकाई 3 — Control Unit Organization\n\n1. Control Unit का कार्य\nControl Unit instruction execution के दौरान ALU, registers, memory और I/O के कार्यों को coordinate करने वाले control signals बनाती है। सही timing और sequence जरूरी हैं।\n\n2. Control Signals\nControl signals register load, data selection, memory read/write और ALU operation जैसे actions को नियंत्रित कर सकते हैं। Signals का सही संयोजन microoperation शुरू करता है।\n\n3. Hardwired Control\nHardwired control logic gates, decoders और sequential circuits से control signals बनाती है। यह तेज हो सकती है, लेकिन design बदलना जटिल हो सकता है।\n\n4. Microprogrammed Control\nMicroprogrammed control control memory में stored microinstructions से signals बनाती है। इसकी design या modification कुछ स्थितियों में अधिक flexible हो सकती है।\n\n5. Microinstruction\nMicroinstruction microoperations या control signals का समूह दर्शाती है। Microprogram ऐसे microinstructions का क्रम है जो instruction execution को लागू करता है।\n\n6. Horizontal और Vertical Formats\nHorizontal microinstruction में control bits अधिक direct हो सकते हैं, जिससे parallel control actions व्यक्त किए जा सकते हैं। Vertical format encoded fields का उपयोग कर सकता है और अधिक compact हो सकता है, पर decoding चाहिए।\n\n7. Control Memory और Address Sequencing\nControl memory microprogram रखती है। Address sequencer अगली microinstruction का address तय करता है: sequential order, branch condition या current opcode जैसी जानकारी के आधार पर।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Hardwired Control Unit\nHardwired control fixed logic circuits, decoders और timing signals की मदद से control signals बनाती है। Instruction opcode और current timing/state के आधार पर कौन-सा register load होगा, ALU कौन-सा operation करेगी या memory read/write होगा, यह तय होता है। इसकी response तेज हो सकती है लेकिन design बदलना कठिन हो सकता है और circuit complexity बढ़ सकती है।\n\n9. Microprogrammed Control Unit\nMicroprogrammed control microinstructions को control memory में रखती है। एक microinstruction control actions specify करती है और next microinstruction चुनने में मदद कर सकती है। इससे complex instruction control को छोटे micro-operations के sequence में व्यवस्थित किया जा सकता है। बदलाव hardwired logic के मुकाबले आसान हो सकते हैं, पर sequencing और microinstruction fetch में अतिरिक्त overhead आ सकता है।\n\n10. Address sequencing और instruction formats\nControl Address Register या equivalent sequencing logic अगली microinstruction का address चुनती है। अगला address sequential next step, branch condition, opcode mapping या subroutine flow से आ सकता है। Horizontal microinstruction में direct control bits अधिक हो सकते हैं और parallel signals specify करना आसान हो सकता है; vertical format encoded fields का उपयोग करता है, जिससे format compact हो सकता है लेकिन decoding आवश्यक होती है। Hardwired बनाम microprogrammed चयन speed, complexity और flexibility के trade-off पर निर्भर है।\n\n11. Worked example (WORKED EXAMPLE)\nWorked example: Control sequence\nकिसी instruction में यदि memory से data पढ़कर ALU में जोड़ना है, तो control unit क्रम में memory read, register load और ALU operation के signals दे सकती है। Hardwired design ये signals logic/timing circuits से बनाती है; microprogrammed design control memory में stored microinstructions के क्रम से बनाती है। दोनों का लक्ष्य सही समय और क्रम में microoperations चलाना है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Control Unit processor के operations को coordinate करती है और control signals देती है।\n• Control signals registers, ALU, buses तथा memory/I/O actions को control कर सकते हैं।\n• Hardwired Control Unit fixed logic circuits से control signals बनाती है; यह तेज हो सकती है, लेकिन बदलाव कठिन हो सकते हैं।\n• Microprogrammed Control Unit control memory में stored microinstructions से control signals बनाती है।\n• Microinstruction control signals या control actions को specify करने वाली low-level instruction है।\n• Control memory microprograms store करती है।\n• Address sequencing अगली microinstruction का address चुनने की प्रक्रिया है।\n• Horizontal microinstructions में अधिक direct control bits हो सकते हैं; vertical formats encoded fields का अधिक उपयोग कर सकते हैं।\n• Hardwired design generally fast but less flexible; microprogrammed design can be easier to modify but adds microinstruction sequencing/interpretation overhead।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Computer में Control Unit की भूमिका समझाइए।\n2. Control signals क्या हैं? इनके द्वारा controlled operations के उदाहरण दीजिए।\n3. Hardwired Control Unit की अवधारणा और working समझाइए।\n4. Hardwired Control Unit के advantages और limitations लिखिए।\n5. Microprogrammed Control Unit की अवधारणा और architecture समझाइए।\n6. Microinstruction क्या है? इसका purpose समझाइए।\n7. Control memory क्या है?\n8. Microprogrammed Control Unit में address sequencing समझाइए।\n9. Horizontal और vertical microinstruction formats में अंतर बताइए।\n10. उदाहरण सहित Hardwired और Microprogrammed Control Units की तुलना कीजिए।\n\nप्रैक्टिस:\nInstruction execution के control steps का flowchart बनाइए और hardwired/microprogrammed control की तुलना तालिका तैयार कीजिए।"
  },
  "304|Unit 4": {
    "title": "मेमोरी और I/O संगठन",
    "desc": "विस्तृत हिंदी नोट्स: memory hierarchy, SRAM/DRAM, RAM/ROM, memory interfacing, I/O configuration, handshaking, interrupts, DMA और I/O processors; exam questions सहित।",
    "content": "इकाई 4 — Memory और I/O Organization\n\n1. Memory Hierarchy\nRegisters सबसे तेज और बहुत कम capacity वाले होते हैं; cache CPU के पास तेज memory है; main memory active programs/data रखती है; secondary storage अधिक capacity और स्थायी storage देती है। सामान्यतः तेज memory प्रति bit महँगी होती है।\n\n2. RAM और ROM\nRAM read/write memory है और सामान्यतः volatile होती है। SRAM को refresh नहीं चाहिए और cache में उपयोग होती है। DRAM को refresh चाहिए और main memory में सामान्य है। ROM और उसके variants non-volatile program/data store कर सकते हैं।\n\n3. Memory Interfacing\nCPU memory से address, data और control signals द्वारा संवाद करता है। Address decoding से चुनी हुई memory chip/region पहचानी जाती है; timing और bus width सही होना जरूरी है।\n\n4. I/O Organization\nI/O devices CPU से registers/ports और control logic द्वारा जुड़ते हैं। Programmed I/O में CPU बार-बार device status जाँच सकता है। Interrupt-driven I/O में device जरूरत पड़ने पर interrupt देता है।\n\n5. Handshaking और Asynchronous Transfer\nHandshaking sender और receiver के बीच control signals के जरिए बताती है कि data ready है या receive हो गया है। Asynchronous transfer में अलग clock timing वाले devices के बीच coordination जरूरी है।\n\n6. DMA\nDirect Memory Access (DMA) device और main memory के बीच बड़े data block transfer करने में मदद करता है, बिना CPU को हर byte की transfer operation स्वयं करने के लिए मजबूर किए। CPU setup और completion में फिर भी भूमिका निभा सकता है।\n\n7. I/O Processor\nI/O processor या channel I/O tasks का कुछ काम CPU से अलग संभाल सकता है, जिससे main CPU दूसरे कार्य कर सके।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Memory hierarchy और memory chips\nRegisters और cache बहुत तेज लेकिन छोटे storage levels हैं; main memory की capacity अधिक और access सामान्यतः धीमा होता है; secondary storage बड़ी capacity देता है। SRAM को refresh नहीं चाहिए और इसका उपयोग cache में होता है। DRAM अधिक density के कारण main memory में सामान्य है लेकिन stored charge बनाए रखने के लिए refresh चाहिए। RAM सामान्य read/write working memory है; ROM non-volatile है; EPROM को विशेष प्रक्रिया से erase करके फिर program किया जा सकता है।\n\n9. Memory interfacing और address decoding\nCPU memory को address lines से location बताकर, data lines से value transfer करके और control lines से read/write operation चुनकर access करता है। Address decoding address range के आधार पर appropriate chip enable signal चुनती है। Chip interfacing में memory size, address range, data width और timing signals मेल खाने चाहिए।\n\n10. I/O organization और transfer methods\nI/O interface CPU system और peripheral के बीच data, status और control signals coordinate करता है। Programmed I/O में CPU status check करके transfer manage करता है। Interrupt-driven I/O में device service माँगने के लिए interrupt देता है। Handshaking sender और receiver के request/acknowledge जैसे signals से transfer synchronize करता है। Synchronous transfer shared timing reference use कर सकता है; asynchronous transfer handshaking/control signals पर निर्भर कर सकता है।\n\n11. DMA और I/O processor\nDMA controller data block को I/O device और memory के बीच transfer कर सकता है, जिससे CPU को हर byte/word move करने की जरूरत कम होती है। Basic flow में CPU transfer parameters सेट करता है, DMA bus access लेकर data transfer करता है और completion पर interrupt दे सकता है। I/O processor specialized instructions/control के साथ broader I/O tasks संभाल सकता है। DMA मुख्यतः transfer mechanism है; I/O processor अधिक complex I/O coordination कर सकता है।\n\n12. Worked example (WORKED EXAMPLE)\nWorked example: I/O methods में अंतर\n• Programmed I/O: CPU device status बार-बार check कर सकता है और transfer खुद control करता है।\n• Interrupt-driven I/O: device ready होने पर interrupt देता है; CPU service routine चला सकता है।\n• DMA: controller data block को device और memory के बीच transfer करता है और CPU का per-item work कम होता है।\nयाद रखें: DMA transfer mechanism है; I/O processor व्यापक I/O control tasks भी कर सकता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Memory hierarchy speed, capacity और cost के आधार पर storage levels को व्यवस्थित करती है।\n• SRAM तेज होती है और सामान्यतः cache में उपयोग होती है; DRAM को refresh करना पड़ता है और यह main memory में सामान्य है।\n• RAM read/write working memory; ROM non-volatile storage; EPROM erasable programmable non-volatile memory है।\n• Memory interfacing CPU को address, data और control lines के माध्यम से memory से जोड़ता है।\n• Address decoding सही memory chip/location चुनने में मदद करता है।\n• I/O interfacing CPU system और peripherals के बीच communication कराता है।\n• Interrupt-driven I/O में device interrupt के माध्यम से CPU का ध्यान आकर्षित करता है।\n• Handshaking sender और receiver के control signals coordinate करती है।\n• Asynchronous transfer में हर transfer के लिए common timing reference आवश्यक नहीं होता।\n• DMA CPU के लगातार data movement work को कम करते हुए I/O और memory के बीच transfer कर सकता है।\n• I/O processor I/O activities को संभालने के लिए specialized processing unit है।\n• DMA data transfer mechanism है; I/O processor व्यापक I/O कार्यों का management भी कर सकता है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Memory hierarchy समझाइए।\n2. SRAM और DRAM में अंतर बताइए।\n3. RAM, ROM और EPROM समझाइए।\n4. Memory interfacing क्या है? Address, data और control lines की भूमिका समझाइए।\n5. Memory interfacing में address decoding क्या है?\n6. I/O configuration और I/O interfacing समझाइए।\n7. Operations के sequence सहित interrupt-driven I/O समझाइए।\n8. Handshaking क्या है? Data transfer में इसका उपयोग क्यों होता है?\n9. Asynchronous data transfer समझाइए।\n10. Synchronous और asynchronous transfer में अंतर बताइए।\n11. DMA क्या है? इसका basic operation समझाइए।\n12. DMA के advantages लिखिए।\n13. I/O processor क्या है? इसकी भूमिका समझाइए।\n14. DMA और I/O processor में अंतर बताइए।\n\nप्रैक्टिस:\nMemory hierarchy का diagram बनाइए तथा programmed I/O, interrupt-driven I/O और DMA की comparison table बनाएँ।"
  },
  "304|Unit 5": {
    "title": "8085 केस स्टडी और असेंबली प्रोग्रामिंग",
    "desc": "विस्तृत हिंदी नोट्स: 8085 architecture, registers, ALU, program counter, stack pointer, pins/signals, instruction groups, addressing modes और assembly-programming workflow; प्रश्न व अभ्यास सहित।",
    "content": "इकाई 5 — 8085 Microprocessor और Assembly Programming\n\n1. परिचय\n8085 एक 8-bit microprocessor है। यह 8-bit data पर processing करता है और इसकी architecture में ALU, accumulator, registers, Program Counter, Stack Pointer तथा control/timing logic शामिल हैं।\n\n2. Functional Blocks\nALU arithmetic/logic operations करती है। Accumulator प्रमुख arithmetic results और operands में भाग लेता है। General-purpose registers data रखने में मदद करते हैं। Program Counter अगली instruction का address रखता है और Stack Pointer stack को refer करता है।\n\n3. Address/Data और Control Signals\nAddress lines memory location चुनने में मदद करती हैं। Multiplexed lines कुछ pins पर अलग-अलग समय में address और data से संबंधित कार्य कर सकती हैं। Control signals read/write और bus operations coordinate करते हैं। Pin diagram को official syllabus/reference diagram से verify करके पढ़ना चाहिए।\n\n4. Instruction Set\nInstructions को data transfer, arithmetic, logical, branching और machine-control groups में समझा जा सकता है। उदाहरणों में MOV, MVI, ADD, SUB, JMP और HLT शामिल हो सकते हैं। सटीक behavior instruction और addressing पर निर्भर है।\n\n5. Addressing Modes\nImmediate mode में data instruction के साथ दिया होता है; register mode में operand register में; direct mode में memory address instruction में होता है; indirect mode में address register pair आदि से मिलता है।\n\n6. Assembly Programming\nAssembly mnemonics में program लिखा जाता है और assembler/simulator से machine code में बदला या test किया जा सकता है। Program लिखते समय input, processing, output और expected result समझना जरूरी है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n7. 8085 architecture और functional blocks\n8085 8-bit data operations के लिए प्रसिद्ध microprocessor है; इसकी 16-bit address lines अधिकतम 64 KB address space दर्शा सकती हैं। ALU arithmetic/logical operations करती है। Accumulator ALU operations में भाग लेता है; general registers temporary data रखते हैं; Program Counter अगली instruction का address और Stack Pointer stack location को दर्शाता है। Control/timing logic machine cycles और external signals coordinate करती है।\n\n8. Pin signals और instruction groups\nAD0–AD7 lower address और data के लिए multiplexed हैं; ALE lower address को latch करने में मदद करता है। A8–A15 higher address lines हैं; RD और WR read/write controls हैं। Flags में Sign, Zero, Auxiliary Carry, Parity और Carry शामिल हैं। Instructions को data transfer (MOV, MVI), arithmetic (ADD, SUB), logical, branching (JMP आदि) और machine control (HLT) groups में समझा जा सकता है।\n\n9. Addressing और assembly programs\nImmediate mode data को instruction के साथ रखता है; register mode register में operand रखता है; direct mode memory address देता है; register-indirect mode register pair में address रख सकता है; implied mode operand को instruction से समझाता है। GNUSim8085 में source instructions लिखकर assemble/run किया जा सकता है और registers, flags व memory observe किए जा सकते हैं। Assembly program में label, mnemonic, operands और comments हो सकते हैं। Directives assembler को program organization/address जैसी जानकारी देते हैं, जबकि flags arithmetic/logic results की conditions दर्शाते हैं।\n\n10. Sample-program logic\n8-bit addition में दो operands जोड़कर result store करें और carry flag जाँचें। 16-bit addition में low bytes जोड़कर carry को high-byte addition में include करना पड़ सकता है। Data transfer program source location/register से destination पर value copy करता है। CMP instruction compare flags update करता है; उसके बाद conditional jump से decision लिया जा सकता है। Loop program counter या register घटाकर/बढ़ाकर condition के आधार पर repeat करता है। Simulator में हर program का expected result और flags verify करें।\n\n11. Worked example (WORKED EXAMPLE)\nWorked examples: 8085 assembly programs\n1) 8-bit addition (05H + 03H = 08H):\nMVI A, 05H\nMVI B, 03H\nADD B\nHLT\nA में अंतिम result 08H आता है।\n\n2) 16-bit addition (1234H + 1111H = 2345H):\nLXI H, 1234H\nLXI D, 1111H\nDAD D\nHLT\nDAD D, DE register pair को HL में जोड़ता है; final result HL = 2345H है।\n\n3) Data transfer:\nMVI B, 25H\nMOV A, B\nHLT\nअब A में 25H है।\n\n4) Comparison:\nMVI A, 05H\nMVI B, 05H\nCMP B\nHLT\nCMP B, A को B से compare करता है और flags update करता है; A की value नहीं बदलती। दोनों बराबर हों तो Zero flag set होता है।\n\n5) Loop:\nMVI C, 05H\nLOOP: DCR C\nJNZ LOOP\nHLT\nC को 5 से शुरू करके हर चक्र में 1 घटाया जाता है। C zero होने पर JNZ jump नहीं करता और program HLT पर पहुँचता है। GNUSim8085 में registers और flags देखकर हर result verify करें।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• 8085 एक classic 8-bit microprocessor है और इसका address bus 16-bit है।\n• मुख्य blocks में ALU, registers, control unit और bus/control logic शामिल हैं।\n• PC अगली instruction का address रखता है; SP stack के top को refer करता है।\n• Accumulator ALU operations में महत्वपूर्ण 8-bit register है।\n• Flags: Sign (S), Zero (Z), Auxiliary Carry (AC), Parity (P) और Carry (CY)।\n• AD0–AD7 multiplexed lower address/data lines और A8–A15 higher address lines हैं।\n• ALE lower address को multiplexed bus से latch करने में सहायता करता है; RD read और WR write control signals हैं।\n• Addressing modes में immediate, register, direct, register-indirect और implied शामिल हैं।\n• GNUSim8085, 8085 assembly programs के लिए simulator है।\n• Common practice programs: 8-bit addition, 16-bit addition, data transfer, comparison और loops।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Neat block diagram सहित 8085 microprocessor की architecture समझाइए।\n2. 8085 के functional blocks: ALU, registers और control unit समझाइए।\n3. Program Counter, Stack Pointer, Accumulator और flag register समझाइए।\n4. 8085 pin diagram और प्रमुख signal groups समझाइए।\n5. उदाहरण सहित 8085 instruction set के प्रमुख groups समझाइए।\n6. उपयुक्त उदाहरणों सहित 8085 के addressing modes समझाइए।\n7. 8085 microprocessor के applications लिखिए।\n8. GNUSim8085 क्या है? Assembly programming में इसका उपयोग समझाइए।\n9. 8085 assembly program का basic format और directives की भूमिका समझाइए।\n10. 8085 flags समझाइए।\n11. 8-bit addition के लिए 8085 program लिखिए।\n12. 8085 में 16-bit addition के चरण समझाइए।\n13. Data transfer के लिए 8085 program लिखिए।\n14. CMP instruction का उपयोग करके comparison कैसे किया जाता है?\n15. Loop का उपयोग करने वाला 8085 program लिखिए।\n\nप्रैक्टिस:\nदो 8-bit numbers के जोड़ की algorithm बनाइए; register और memory operands वाले instructions को पहचानने का अभ्यास कीजिए।"
  },
  "305|Unit 1": {
    "title": "एल्गोरिदम की मूल बातें",
    "desc": "विस्तृत हिंदी नोट्स: algorithm definition/characteristics, design steps, pseudocode, flowcharts, iterative/recursive algorithms, time/space complexity, Big-O, Omega, Theta और array analysis; exam practice सहित।",
    "content": "इकाई 1 — Fundamentals of Algorithms\n\n1. Algorithm\nAlgorithm किसी समस्या को हल करने के स्पष्ट और सीमित steps का क्रम है। इसकी हर step स्पष्ट होनी चाहिए, inputs/outputs समझने योग्य होने चाहिए और प्रक्रिया अंत में terminate होनी चाहिए।\n\n2. Algorithm Design Steps\nसमस्या समझें, inputs और outputs तय करें, उपयुक्त algorithm बनाएं, pseudocode/flowchart तैयार करें, correctness के examples जाँचें और time/space complexity का अनुमान करें।\n\n3. Pseudocode और Flowchart\nPseudocode सामान्य भाषा जैसे structured statements में logic बताता है। Flowchart symbols और arrows से control flow दिखाता है। दोनों programming से पहले योजना बनाने में मदद करते हैं।\n\n4. Iterative और Recursive Processes\nIterative algorithm loops का उपयोग करता है। Recursive algorithm problem के छोटे रूप को solve करने के लिए function/process को दोबारा call करता है। Recursion में base case होना चाहिए।\n\n5. Time और Space Complexity\nTime complexity input size बढ़ने पर operation count के बढ़ने का अनुमान है; space complexity अतिरिक्त memory आवश्यकता से संबंधित है। यह वास्तविक seconds/bytes का सटीक माप नहीं, बल्कि growth का विश्लेषण है।\n\n6. Asymptotic Notations\n• Big-O: upper asymptotic bound\n• Omega Ω: lower asymptotic bound\n• Theta Θ: tight bound\nउदाहरण: एक array के n elements को एक बार जोड़ने वाला algorithm O(n) time लेता है। n elements पर nested loops से हर pair compare करने पर O(n²) तक काम हो सकता है।\n\n7. Array Addition और Product का Analysis\nयदि n elements का sum या product निकालने के लिए हर element को एक बार process किया जाए, तो time complexity O(n) होती है। यदि केवल SUM/PRODUCT और loop index जैसे fixed extra variables रखें, तो auxiliary space O(1) रहती है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Algorithm की विशेषताएँ और design steps\nएक अच्छा algorithm finite, clear और unambiguous steps वाला होता है; उसके inputs, outputs और termination समझ में आने चाहिए। Design से पहले problem और constraints पहचानें, input/output तय करें, solution को steps में बाँटें, pseudocode/flowchart बनाएं और correctness test करें। अलग inputs, boundary cases तथा unusual values से परीक्षण करना उपयोगी है।\n\n9. Pseudocode, flowchart और structured approach\nPseudocode programming language की exact syntax के बिना logic बताता है। Flowchart में oval Start/End, parallelogram Input/Output, rectangle Process, diamond Decision और arrows flow दर्शाते हैं। Structured programming sequence (statements क्रम से चलाना), selection (condition के आधार पर चयन) और iteration (steps दोहराना) पर आधारित है।\n\n10. Iteration, recursion और complexity\nIteration loops के माध्यम से repeated work करती है; recursion function को छोटा subproblem देकर दोबारा call करती है। Recursion में base case आवश्यक है, अन्यथा calls समाप्त न हों। Time complexity input size के साथ work की growth और space complexity extra memory की growth बताती है। Big-O upper bound, Ω lower bound और Θ tight bound का संकेत करते हैं। ये exact seconds नहीं बताते, बल्कि growth pattern का विश्लेषण करते हैं।\n\n11. Best, worst और average case\nBest case input की वह स्थिति है जिसमें न्यूनतम work होता है; worst case में सबसे अधिक और average case में अपेक्षित/औसत work देखा जाता है। Array में n elements को एक बार जोड़ने के लिए n के अनुपात में operations होते हैं, इसलिए time O(n) हो सकता है। यदि केवल few variables extra रखे जाएँ तो auxiliary space O(1) हो सकती है। एक array के सभी elements को PRODUCT में एक-एक बार multiply करने में n के अनुपात में work होता है, इसलिए time O(n) है। यदि केवल PRODUCT और index जैसे fixed extra variables रखे जाएँ, तो auxiliary space O(1) है।\n\n12. Worked example (WORKED EXAMPLE)\nWorked example: Array addition और product की complexity\nint sum = 0;\nint product = 1;\nfor (int i = 0; i < n; i++) {\n    sum += values[i];\n    product *= values[i];\n}\nयदि values = [2, 3, 4] हों, तो sum = 9 और product = 24 मिलता है। Loop हर element को एक बार process करता है, इसलिए sum और product दोनों निकालने का time O(n) है। केवल sum, product और index जैसे fixed extra variables उपयोग करने पर auxiliary space O(1) है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Algorithm स्पष्ट और सीमित steps का क्रम है।\n• Pseudocode programming language से स्वतंत्र तरीके से logic बताता है; flowchart symbols से algorithm दिखाता है।\n• Structured approach में sequence, selection और iteration शामिल हैं।\n• Iterative process loops से दोहराता है; recursive process छोटे problem के लिए स्वयं को call करता है।\n• Time complexity computational work की growth और space complexity memory requirement की growth बताती है।\n• Big-O upper bound, Omega (Ω) lower bound और Theta (Θ) tight bound दर्शाता है।\n• Best case न्यूनतम, worst case अधिकतम और average case expected work का विश्लेषण है।\n• Array के सभी elements पर एक linear pass करना सामान्यतः O(n) time लेता है।\n• Constant extra storage O(1) और input के साथ बढ़ने वाली storage O(n) हो सकती है।\n• एक array के सभी elements को जोड़ने (SUM) या एक product में multiply करने (PRODUCT) का time O(n) हो सकता है; fixed extra variables से auxiliary space O(1) रहती है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Algorithm को परिभाषित कीजिए। इसकी characteristics और importance समझाइए।\n2. Algorithm design में शामिल steps समझाइए।\n3. Pseudocode क्या है? उदाहरण दीजिए।\n4. Flowchart क्या है? सामान्य symbols समझाइए।\n5. Structured approach समझाइए।\n6. Iterative और recursive processes में अंतर बताइए।\n7. Time complexity और space complexity परिभाषित कीजिए।\n8. Big-O, Omega और Theta समझाइए।\n9. Best-case, worst-case और average-case analysis में अंतर बताइए।\n10. Simple array addition की time और auxiliary-space complexity का विश्लेषण कीजिए।\n11. एक array के सभी elements का product निकालने वाले simple algorithm की time और auxiliary-space complexity का विश्लेषण कीजिए।\n12. उदाहरण सहित O(1), O(n) और O(n²) समझाइए।\n\nप्रैक्टिस:\nकिसी छोटे algorithm के operations गिनें और बताएँ कि input size दोगुना होने पर अनुमानित work कैसे बदलता है।"
  },
  "305|Unit 2": {
    "title": "सॉर्टिंग",
    "desc": "विस्तृत हिंदी नोट्स: sorting का महत्व, bubble/selection/insertion/merge/quick sort, divide-and-conquer, recurrence और time/space/stability comparison; प्रश्न सहित।",
    "content": "इकाई 2 — Sorting\n\n1. Sorting का महत्व\nSorting data को ascending या descending order में व्यवस्थित करती है। इससे searching, reporting और data analysis आसान हो सकते हैं।\n\n2. Bubble Sort\nAdjacent elements compare होते हैं और गलत क्रम होने पर swap किए जाते हैं। हर pass में एक बड़ा element अंत की ओर जा सकता है। सामान्य average/worst time O(n²) है।\n\n3. Selection Sort\nहर pass में unsorted भाग से minimum element खोजकर सही position पर रखा जाता है। Comparisons सामान्यतः O(n²) होते हैं, swaps अपेक्षाकृत कम हो सकते हैं।\n\n4. Insertion Sort\nहर element को पहले से sorted हिस्से में उचित position पर insert किया जाता है। लगभग sorted या छोटे data पर उपयोगी हो सकता है; worst-case O(n²) है।\n\n5. Merge Sort\nDivide-and-conquer approach data को halves में बाँटती है, उन्हें sort करती है और फिर merge करती है। सामान्य time O(n log n), लेकिन extra memory की जरूरत पड़ सकती है।\n\n6. Quick Sort\nPivot चुनकर elements को pivot के दोनों ओर partition किया जाता है और sub-arrays sort होते हैं। Average time O(n log n), worst case O(n²) हो सकता है, जैसे खराब pivot choices की स्थिति में।\n\n7. Recurrence और Comparison\nRecursive sorting की complexity recurrence relation से निकाली जा सकती है। तुलना में time, auxiliary space, stability, in-place behavior और input distribution पर विचार करें।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Bubble, Selection और Insertion Sort का pass\nBubble Sort में हर pass adjacent out-of-order elements swap करता है; बड़े elements धीरे-धीरे अंत की ओर पहुँचते हैं। Selection Sort हर pass में unsorted हिस्से का minimum चुनकर आगे रखता है। Insertion Sort sorted हिस्से में अगला element उचित जगह insert करता है। उदाहरण: [4, 2, 3] में insertion sort पहले 2 को 4 से पहले रखेगा, फिर 3 को 2 और 4 के बीच रखेगा।\n\n9. Merge Sort और Quick Sort\nMerge Sort array को छोटे हिस्सों में divide करता है, प्रत्येक हिस्से को recursively sort करता है और फिर दो sorted हिस्सों को merge करता है। Recurrence T(n) = 2T(n/2) + O(n) से सामान्य complexity O(n log n) मिलती है। Quick Sort pivot चुनकर items को pivot से छोटे/बड़े भागों में partition करता है, फिर दोनों हिस्सों पर काम करता है। Balanced partition होने पर average O(n log n), लेकिन अत्यधिक unbalanced partitions से worst case O(n²) हो सकता है।\n\n10. Complexity और sorting method selection\nOptimized Bubble Sort पहले से sorted input को एक pass में पहचान सकता है और best case O(n) हो सकता है; average/worst O(n²) हैं। Selection Sort सामान्यतः O(n²) comparisons करता है। Insertion Sort best case O(n), average/worst O(n²) हो सकता है। Merge Sort का time O(n log n) है लेकिन auxiliary memory की जरूरत हो सकती है; Quick Sort average में तेज हो सकता है पर worst case pivot selection पर निर्भर है। Selection में time, memory, stability, in-place behavior और input arrangement को देखें।\n\n11. Worked example (WORKED EXAMPLE)\nWorked example: Bubble Sort के passes\nशुरुआती array: [4, 2, 3]\nPass 1: 4 और 2 swap → [2, 4, 3]; फिर 4 और 3 swap → [2, 3, 4]\nPass 2: array पहले से sorted है। Optimized version no-swap pass देखकर रुक सकता है।\nMerge Sort sorted halves को merge करता है; Quick Sort pivot के आसपास partition करता है। दोनों का average performance अच्छा हो सकता है, पर Quick Sort का worst case O(n²) हो सकता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Sorting data को आवश्यक order में arrange करना है।\n• Bubble Sort adjacent out-of-order elements swap करता है।\n• Selection Sort unsorted हिस्से से minimum चुनता है।\n• Insertion Sort element को sorted हिस्से में insert करता है।\n• Merge Sort divide, recursively sort और merge करता है।\n• Quick Sort pivot चुनकर partition करता है और sub-arrays sort करता है।\n• Merge Sort recurrence: T(n) = 2T(n/2) + O(n)।\n• Balanced partitions के लिए Quick Sort लगभग T(n) = 2T(n/2) + O(n) हो सकता है।\n• Quick Sort का worst case O(n²) है; Merge Sort सामान्यतः O(n log n) है।\n• Insertion Sort best case O(n), average/worst O(n²) है; Selection Sort सामान्यतः O(n²) है।\n• Optimized Bubble Sort best case O(n) और average/worst O(n²) हो सकता है।\n• अलग sorting methods की suitability data size, order, memory और performance needs पर निर्भर करती है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Sorting क्या है? Data organization में इसका महत्व समझाइए।\n2. Sorting के applications लिखिए।\n3. Process और complexity सहित Bubble Sort समझाइए।\n4. Process और complexity सहित Selection Sort समझाइए।\n5. Process और complexity सहित Insertion Sort समझाइए।\n6. Merge Sort और divide-and-conquer approach समझाइए।\n7. Quick Sort और pivot की भूमिका समझाइए।\n8. Merge Sort की recurrence relation लिखिए।\n9. Quick Sort की best, average और worst-case complexity समझाइए।\n10. Bubble, Selection और Insertion Sort की तुलना कीजिए।\n11. Merge Sort और Quick Sort की तुलना कीजिए।\n12. वे परिस्थितियाँ समझाइए जिनमें अलग-अलग sorting methods उपयोगी होती हैं।\n\nप्रैक्टिस:\nदिए गए array को प्रत्येक method से manually sort करें और हर pass के बाद array लिखें।"
  },
  "305|Unit 3": {
    "title": "सर्चिंग",
    "desc": "विस्तृत हिंदी नोट्स: linear search, binary search, recurrence-based complexity, BST, balancing, hash functions, collision handling, chaining और open addressing; exam questions सहित।",
    "content": "इकाई 3 — Searching\n\n1. Searching\nSearching collection में key या target item ढूँढती है। परिणाम में item का index/स्थान या item न मिलने की सूचना दी जा सकती है।\n\n2. Linear Search\nपहले element से शुरुआत करके एक-एक element compare किया जाता है। Sorted होना जरूरी नहीं। Worst-case time O(n) है क्योंकि सभी elements देखने पड़ सकते हैं।\n\n3. Binary Search\nBinary search sorted collection पर काम करता है। Middle element से तुलना करके search region का आधा हिस्सा छोड़ता है। Worst-case time O(log n) है। Unsorted array पर पहले sort किए बिना यह लागू नहीं करना चाहिए।\n\n4. Binary Search Tree\nBST में सामान्यतः node से छोटे keys left subtree और बड़े keys right subtree में होते हैं। Search/insert/delete की efficiency tree height पर निर्भर करती है। Skewed BST में worst-case O(n) हो सकता है।\n\n5. Balancing\nBalanced trees height को नियंत्रित रखते हैं, जिससे operations logarithmic time के करीब रह सकते हैं। Balancing rotations या restructure steps द्वारा हो सकती है, जो tree type पर निर्भर करती है।\n\n6. Hash Table और Hash Function\nHash function key को table index में बदलता है। अच्छे hash function से keys का distribution उपयोगी रहता है। अलग keys का एक slot पर आना collision कहलाता है।\n\n7. Collision Handling\nChaining में slot से linked list/bucket जोड़ा जाता है। Open addressing में collision होने पर दूसरे slot खोजे जाते हैं, जैसे linear probing या quadratic probing। Load factor table के उपयोग का अनुपात बताता है और performance पर असर डालता है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Linear और Binary Search\nLinear search target को one-by-one compare करती है और input sorted होना आवश्यक नहीं; worst-case O(n) है। Binary search केवल sorted data पर सीधे लागू होती है। हर step में middle element से तुलना कर आधा search range छोड़ा जाता है। Recurrence T(n) = T(n/2) + O(1) और worst-case O(log n) है।\n\n9. Binary Search Tree operations\nBST में ordering rule के अनुसार छोटे keys left और बड़े keys right subtree में होते हैं। Search current node से compare करके एक subtree चुनती है; insertion missing position पर नया node जोड़ता है। Deletion में leaf node सीधे हट सकता है; one-child node को उसके child से replace किया जा सकता है; two-child node के लिए inorder successor/predecessor से value लेकर उचित node हटाया जा सकता है। Operations tree height h के अनुपात में हो सकते हैं: balanced tree में logarithmic के करीब, skewed tree में O(n)।\n\n10. Balancing, hash functions और collisions\nHeight balancing tree की height को नियंत्रित करके search/insert/delete को efficient रखती है। Hash table key को index/slot में map करती है। सरल hash function numeric key पर modulo operation कर सकता है, जैसे table size 10 और key 22 होने पर h(22) = 22 mod 10 = 2। यदि key 12 या 32 हो, तो वे भी slot 2 पर जा सकते हैं; इसे collision कहते हैं, जिसे chaining या open addressing से handle किया जा सकता है। अलग keys का एक slot पर map होना collision है। Chaining एक slot से linked collection जोड़ती है। Open addressing collision होने पर दूसरे slots probe करती है, जैसे linear probing; probing scheme और load factor performance को प्रभावित करते हैं। Hash table search average-case में तेज हो सकती है, लेकिन worst-case में कई entries जाँचनी पड़ सकती हैं।\n\n11. Worked example (WORKED EXAMPLE)\nWorked example: Binary search और hashing\nSorted array [2, 5, 8, 12, 16] में target 12 है। Middle index 2 पर value 8 है; 12 > 8 होने से right half देखें, फिर 12 मिल जाता है।\nयदि hash function h(k) = k mod 10 हो, तो h(22) = 2 और h(12) = 2। दोनों keys एक slot पर आईं, इसलिए collision हुआ। Chaining या open addressing इसकी handling के तरीके हैं।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Linear Search items को एक-एक करके जाँचती है; worst-case O(n)।\n• Binary Search sorted data में search range को आधा करता है; worst-case O(log n)।\n• Binary Search recurrence: T(n) = T(n/2) + O(1)।\n• BST में सामान्य ordering के अनुसार छोटे keys left और बड़े keys right subtree में होते हैं।\n• BST operations का समय tree height पर निर्भर करता है; unbalanced BST में worst case O(n) हो सकता है।\n• Height balancing tree को बहुत skewed होने से बचाती है।\n• Hash table key को hash function से table slot में map करती है।\n• अलग keys के समान slot पर map होने को collision कहते हैं।\n• Chaining collided entries को chain/collection में रखता है।\n• Open addressing probing द्वारा table में दूसरा slot ढूँढता है।\n• Search methods की तुलना समय, assumptions और data organization के आधार पर करनी चाहिए।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Process और complexity सहित Linear Search समझाइए।\n2. Process और complexity सहित Binary Search समझाइए।\n3. Binary Search की recurrence relation लिखिए।\n4. Linear Search और Binary Search की तुलना कीजिए।\n5. Binary Search Tree परिभाषित कीजिए और इसकी properties समझाइए।\n6. BST में search operation समझाइए।\n7. BST में insertion समझाइए।\n8. Zero, one और two children वाले node को BST से delete करना समझाइए।\n9. Search trees में balancing आवश्यक क्यों है?\n10. Height balancing क्या है?\n11. Hash table परिभाषित कीजिए और hashing का purpose समझाइए।\n12. Hash function क्या है? उदाहरण दीजिए।\n13. Hashing में collision क्या है?\n14. Chaining द्वारा collision handling समझाइए।\n15. Open addressing की अवधारणा समझाइए।\n16. Chaining और open addressing में अंतर बताइए।\n17. Linear Search, Binary Search, BST Search और Hash Table Search की तुलना कीजिए।\n\nप्रैक्टिस:\nएक sorted array में binary search के mid-values trace करें और 2, 12, 22, 32 keys के लिए एक सरल hash table बनाइए।"
  },
  "305|Unit 4": {
    "title": "ग्राफ",
    "desc": "विस्तृत हिंदी नोट्स: directed/undirected graphs, adjacency matrix/list, paths/cycles, connectivity, spanning trees, topological sort, Prim, Kruskal और Dijkstra; exam questions सहित।",
    "content": "इकाई 4 — Graphs\n\n1. Graph\nGraph G=(V,E) vertices (V) और edges (E) का समूह है। Directed graph में edges की दिशा होती है; undirected graph में edge बिना दिशा के दो vertices जोड़ती है। Weighted graph में edge cost/weight रख सकती है।\n\n2. Basic Terms\nPath connected edges के जरिए vertices का क्रम है। Cycle ऐसा path है जो किसी vertex पर वापस लौटे। Undirected graph में connected का अर्थ हर vertex से हर दूसरे vertex तक path होना है। Degree vertex से जुड़ी edges की संख्या है।\n\n3. Graph Representation\nAdjacency matrix में हर vertex-pair के लिए matrix entry होती है; यह edge check को आसान पर dense memory ले सकती है। Adjacency list प्रत्येक vertex के neighbours रखती है और sparse graph में अक्सर कम memory लेती है।\n\n4. Spanning Tree और Minimum Spanning Tree\nSpanning tree connected undirected graph के सभी vertices को बिना cycle जोड़ता है। Minimum spanning tree (MST) edge weights का कुल योग न्यूनतम करता है।\n\n5. Prim और Kruskal\nPrim एक starting vertex से tree बढ़ाता है और उपयुक्त minimum-weight edge चुनता है। Kruskal edges को weight के क्रम में देखता है और cycle न बनाने वाली edges चुनता है। दोनों MST के लिए उपयोग होते हैं, पर step-by-step approach अलग है।\n\n6. Dijkstra\nDijkstra non-negative edge weights वाले graph में source से shortest distance निकालता है। Negative weights के लिए इसे सीधे सही मानना उचित नहीं है।\n\n7. Topological Sorting\nDirected acyclic graph (DAG) के vertices को ऐसी linear ordering में रखा जाता है कि प्रत्येक directed edge के source से पहले उसका destination आए। यह dependencies/scheduling में उपयोगी है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. Graph की terms और representations\nGraph G = (V, E) vertices और edges का set है। Directed graph में edge (u, v) की दिशा u से v होती है; undirected graph की edge दो vertices को बिना दिशा जोड़ती है। Path एक vertex से दूसरे तक connected edges का क्रम है; cycle starting vertex पर वापस आता है। Undirected graph connected है यदि प्रत्येक vertex pair के बीच path हो; नहीं तो अलग components हो सकते हैं।\n\n9. Adjacency list और matrix\nAdjacency list प्रत्येक vertex के neighbouring vertices रखती है; sparse graphs में memory-efficient हो सकती है। Adjacency matrix n × n table होती है, जिसमें entry edge की presence/weight दर्शाती है; edge-check आसान है पर memory O(V²) लगती है। Graph के dense या sparse होने के अनुसार representation चुनें।\n\n10. Spanning tree, topological sort और MST\nSpanning tree connected undirected graph के सभी vertices जोड़ता है और cycle नहीं रखता। Topological ordering directed acyclic graph (DAG) में dependencies का ऐसा क्रम है जहाँ edge u → v हो तो u, v से पहले आता है। Minimum Spanning Tree (MST) सभी vertices को जोड़ते हुए total edge weight minimum करता है। Prim किसी starting vertex से connected tree को बढ़ाता है; Kruskal edges को ascending weight में examine करके cycle बनाने वाली edges छोड़ता है।\n\n11. Dijkstra और relaxation\nDijkstra source से shortest distances निकालने के लिए tentative minimum distance वाले vertex को चुनता है और उसके outgoing edges relax करता है। Relaxation में यदि dist[u] + weight(u,v) < dist[v] है, तो dist[v] update होती है। Dijkstra को सामान्यतः non-negative edge weights पर लागू किया जाता है; negative weights के लिए यह सही method नहीं है। Prim/Kruskal MST निकालते हैं, जबकि Dijkstra shortest paths निकालता है—दोनों उद्देश्यों में अंतर याद रखें।\n\n12. Worked example (WORKED EXAMPLE)\nWorked example: MST और shortest path अलग हैं\nमान लें edges A–B का weight 2, B–C का 3 और A–C का 10 है। MST के लिए A–B और B–C चुनकर सभी vertices 5 total weight में जोड़े जा सकते हैं; A–C अकेली edge shortest route नहीं बताती। Dijkstra source A से shortest distances निकालता है और A से C तक shortest route A–B–C का weight 5 होगा। Prim/Kruskal MST निकालते हैं; Dijkstra shortest paths निकालता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• Graph vertices और edges का समूह है; directed edges की दिशा होती है, undirected edges की नहीं।\n• Adjacency list प्रत्येक vertex के neighbours रखती है; adjacency matrix n × n representation है।\n• Path connected vertices का क्रम और cycle बंद route है।\n• Undirected connected graph में प्रत्येक vertex से दूसरे तक path होता है; disconnected graph में अलग components हो सकते हैं।\n• Spanning tree सभी vertices को बिना cycle जोड़ता है।\n• Minimum Spanning Tree (MST) कुल edge weight को न्यूनतम करता है।\n• Topological sorting directed dependencies को ध्यान में रखकर ordering करती है और DAG पर लागू होती है।\n• Prim starting vertex से MST बढ़ाता है।\n• Kruskal edges को increasing weight में लेकर cycle बनाने वाली edge छोड़ता है।\n• Dijkstra source से shortest paths निकालता है और non-negative edge weights की शर्त में उपयोग किया जाता है।\n• Relaxation step मिलने वाली नई distance को current distance से compare करके बेहतर होने पर update करती है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. Graph परिभाषित कीजिए और directed तथा undirected graphs समझाइए।\n2. उदाहरण सहित adjacency list और adjacency matrix समझाइए।\n3. Adjacency list और adjacency matrix में अंतर बताइए।\n4. Graph में path और cycle परिभाषित कीजिए।\n5. Connected और disconnected graphs में अंतर बताइए।\n6. Spanning tree क्या है? इसकी properties समझाइए।\n7. उदाहरण सहित topological sorting समझाइए।\n8. Minimum Spanning Tree क्या है?\n9. उदाहरण सहित Prim’s algorithm समझाइए।\n10. उदाहरण सहित Kruskal’s algorithm समझाइए।\n11. Prim’s और Kruskal’s algorithms की तुलना कीजिए।\n12. Shortest-path problem क्या है?\n13. उदाहरण सहित Dijkstra’s algorithm समझाइए।\n14. Dijkstra’s algorithm में relaxation/update step समझाइए।\n\nप्रैक्टिस:\nएक छोटा weighted graph बनाकर MST निकालें और non-negative weights पर shortest paths का अभ्यास करें।"
  },
  "305|Unit 5": {
    "title": "स्ट्रिंग और डेटा कम्प्रेशन",
    "desc": "विस्तृत हिंदी नोट्स: strings, sorting/searching, substring matching, regular expressions, validation, lossless/lossy compression और Huffman coding; exam practice सहित।",
    "content": "इकाई 5 — Strings और Data Compression\n\n1. String\nString characters का क्रम है। String operations में length निकालना, compare करना, concatenate करना, sorting और substring search शामिल हैं।\n\n2. String Sorting\nStrings को alphabetically/lexicographically compare करके sort किया जा सकता है। Character encoding और case sensitivity परिणाम पर असर डाल सकते हैं; comparison rule स्पष्ट रखना चाहिए।\n\n3. Substring Search\nSubstring search बड़े text में pattern ढूँढती है। Simple approach हर संभावित starting position पर characters compare करती है; अधिक advanced algorithms repeated comparisons कम कर सकते हैं।\n\n4. Regular Expressions\nRegular expressions (regex) text patterns वर्णित करते हैं। इनका उपयोग input format जाँचने, text खोजने और extraction में हो सकता है। Regex validation को जरूरत के अनुरूप test करना चाहिए, क्योंकि बहुत permissive या strict pattern errors दे सकता है।\n\n5. Data Compression\nCompression data को कम bits या storage में represent करने का तरीका है। Lossless compression में original data पूरी तरह reconstruct हो सकता है। Lossy compression कुछ information छोड़ सकती है, जैसे कुछ image/audio formats में।\n\n6. Huffman Coding\nHuffman coding variable-length prefix codes बनाती है। सामान्यतः अधिक frequent symbols को छोटे codes और कम frequent symbols को लंबे codes मिलते हैं। Prefix-free property decoding में ambiguity रोकती है।\n\n7. Applications\nCompression storage, network transfer और multimedia में उपयोगी है। सही method file type, quality needs और decoding cost पर निर्भर करती है।\n\n\nविस्तृत विषय-वस्तु (DETAILED TOPIC COVERAGE)\n\n8. String sorting और substring search\nString sorting strings को chosen ordering, जैसे lexicographic/alphabetical order में रखती है। Character encoding, uppercase/lowercase rules और comparison convention परिणाम को प्रभावित कर सकते हैं। Substring search बड़े text में pattern खोजती है। Basic approach हर possible start position से pattern के characters compare करती है; text length n और pattern length m होने पर simple method में worst-case comparisons O(nm) तक हो सकते हैं।\n\n9. Regular expressions\nRegex text pattern define करने वाली expression है। Common regex symbols: . सामान्यतः newline को छोड़कर किसी एक character से match करता है; * preceding item के zero or more occurrences, + one or more और ? zero or one occurrence दर्शाता है; [0-9] digit range और [A-Za-z] letters दर्शाता है; ^ शुरुआत और $ अंत से जुड़ी condition दर्शा सकते हैं। Backslash special character को literal match करने के लिए escape करता है, जैसे \\. dot। re.search() कहीं भी match ढूँढता है; re.match() शुरुआत से match करता है; re.fullmatch() पूरी string match चाहता है; re.findall() matches की list देता है; re.sub() match को replace करता है। Validation pattern को test cases के साथ जाँचना चाहिए।\n\n10. Data compression और Huffman coding\nCompression storage या transmission के लिए bits की मात्रा कम करती है। Lossless compression में decoding के बाद original data exactly वापस मिलता है; lossy compression कुछ information छोड़ सकती है। Huffman coding frequency-based variable-length prefix codes बनाती है। प्रक्रिया: हर symbol की frequency गिनें, दो minimum-frequency nodes combine करें, combined node को बार-बार जोड़ते हुए tree बनाएँ और root-to-leaf paths को code दें। Frequent symbols को सामान्यतः छोटे codes मिलते हैं। उदाहरण के लिए frequencies A=5, B=2, C=1 हों, तो एक valid Huffman tree A को 1, B को 01 और C को 00 दे सकता है (0/1 branches उलटने पर codes बदल सकते हैं)। Prefix-free property ambiguity के बिना decode करने में मदद करती है; Huffman coding text/file compression में उपयोगी है।\n\n11. Worked example (WORKED EXAMPLE)\nWorked example: Regex\nPython pattern r\"\\d+\" string \"Room 27, block 4\" में numeric matches [\"27\", \"4\"] दे सकता है। re.search() पहला match और re.findall() सभी matches देता है। Regex में ^ और $ पूरी string की boundaries जाँचने में मदद करते हैं; phone/email validation के लिए multiple valid और invalid samples से test करें।\nHuffman में symbols की frequencies के आधार पर बार-बार दो कम frequency nodes combine किए जाते हैं; tree बनने के बाद root से leaf तक के paths codes देते हैं। 0/1 branch choices उलटने पर valid code assignments बदल सकते हैं, पर code lengths का principle बना रहता है।\n\nत्वरित परीक्षा पुनरावृत्ति (QUICK EXAM REVISION)\n• String sorting strings को चुने गए क्रम में arrange करती है।\n• Substring, बड़े string के भीतर characters का छोटा sequence है; substring search text में pattern खोजती है।\n• Regular expression text pattern को describe या search करने का तरीका है।\n• Common regex syntax में ^ start, $ end, * zero-or-more, + one-or-more दिखाते हैं।\n• [0-9] digits की range और {10} ठीक दस repetitions दिखा सकता है।\n• Data compression data को कम bits में represent करती है।\n• Lossless compression से original data ठीक-ठीक recover हो सकता है; lossy compression कुछ information हटा सकती है।\n• Huffman coding symbol frequencies के आधार पर lossless variable-length prefix codes बनाती है।\n• सामान्यतः frequent symbols को छोटे codes मिलते हैं।\n• Huffman steps: frequencies गिनना → दो न्यूनतम frequencies बार-बार combine करना → tree बनाना → codes assign करना।\n• Compression file storage और data transmission में उपयोगी है।\n\nमहत्वपूर्ण परीक्षा प्रश्न (IMPORTANT EXAM QUESTIONS)\n1. String sorting क्या है? इसकी प्रक्रिया समझाइए।\n2. Text processing में string sorting के applications लिखिए।\n3. Substring search क्या है? उदाहरण सहित इसकी प्रक्रिया समझाइए।\n4. Regular expressions परिभाषित कीजिए और उनका महत्व समझाइए।\n5. Basic regex operators और patterns समझाइए।\n6. Phone-number validation में regex का उपयोग समझाइए।\n7. Basic email-format validation में regex का उपयोग समझाइए।\n8. Data compression की आवश्यकता क्यों है?\n9. Lossless और lossy compression में अंतर बताइए।\n10. Huffman coding क्या है?\n11. Huffman coding के working steps समझाइए।\n12. Huffman coding frequent symbols को छोटे codes क्यों देती है?\n13. File storage और transmission में Huffman coding के applications लिखिए।\n\nप्रैक्टिस:\nएक sentence में किसी word की occurrences गिनने का तरीका सोचें और छोटे symbol-frequency table से Huffman tree बनाने का अभ्यास करें।"
  },
  "—|Internship": {
    "title": "समर इंटर्नशिप — I",
    "desc": "द्वितीय सेमेस्टर के बाद 3–4 सप्ताह की व्यावहारिक इंटर्नशिप, रिपोर्ट, viva और प्रस्तुति।",
    "content": "समर इंटर्नशिप — I\n\nइंटर्नशिप में छात्र वास्तविक कार्यस्थल या मान्यता प्राप्त संस्था में व्यावहारिक अनुभव लेते हैं। इसका उद्देश्य कक्षा में सीखी बातों को वास्तविक कार्यों से जोड़ना है।\n\nमुख्य गतिविधियाँ:\n1. संस्था और कार्य-क्षेत्र का परिचय।\n2. दिए गए कार्य/प्रोजेक्ट का उद्देश्य समझना।\n3. नियमित कार्य-डायरी और तकनीकी नोट्स बनाना।\n4. किए गए कार्य, सीखी गई skills और परिणामों की रिपोर्ट बनाना।\n5. Viva और presentation के लिए अपने योगदान और सीख को स्पष्ट रूप से समझाना।\n\nरिपोर्ट में वास्तविक कार्य ही लिखें, काल्पनिक अनुभव या परिणाम नहीं।"
  },
  "—|Unit I": {
    "title": "व्यावसायिक और सामाजिक नैतिकता",
    "desc": "Professional ethics, code of ethics और समूह में काम करने के सामाजिक कौशल।",
    "content": "इकाई I — Professional and Social Ethics\n\nProfessional ethics कार्यस्थल में ईमानदारी, जिम्मेदारी, गोपनीयता, निष्पक्षता और दूसरों के सम्मान से जुड़े सिद्धांत हैं।\n\nमुख्य बातें:\n• सही और सत्य जानकारी देना।\n• समय, नियम और जिम्मेदारियों का पालन करना।\n• निजी या संस्थागत डेटा की सुरक्षा करना।\n• गलती होने पर उसे स्वीकार कर सुधारना।\n• टीम में दूसरों की राय सुनना और भेदभाव से बचना।\n\nCode of ethics किसी संस्था या पेशे में अपेक्षित व्यवहार के नियमों का लिखित समूह है।"
  },
  "—|Unit II": {
    "title": "आजीवन और स्व-निर्देशित शिक्षा",
    "desc": "Lifelong learning, self-directed learning, planning और उदाहरण।",
    "content": "इकाई II — Lifelong Learning और Self-directed Learning\n\nLifelong learning जीवन भर ज्ञान और कौशल विकसित करते रहने की प्रक्रिया है। तकनीक और उद्योग बदलते रहते हैं, इसलिए नई चीजें सीखना आवश्यक है।\n\nSelf-directed learning में विद्यार्थी अपनी learning need पहचानता है, लक्ष्य तय करता है, संसाधन चुनता है, अभ्यास करता है और प्रगति की समीक्षा करता है।\n\nएक प्रभावी योजना में स्पष्ट लक्ष्य, समय-सारणी, विश्वसनीय संसाधन, अभ्यास और नियमित self-assessment होना चाहिए।"
  },
  "—|Unit III": {
    "title": "करियर योजना",
    "desc": "Career opportunities, qualifications, skills, experience और व्यक्तिगत career plan।",
    "content": "इकाई III — Career Planning\n\nCareer planning अपनी रुचि, ताकत, योग्यता और अवसरों के आधार पर करियर लक्ष्य तय करने और उन्हें पाने के कदम बनाने की प्रक्रिया है।\n\nचरण:\n1. अपनी रुचियों और कौशल का आकलन करें।\n2. संबंधित career paths और आवश्यक qualifications की जानकारी लें।\n3. तकनीकी तथा communication skills विकसित करें।\n4. छोटे लक्ष्यों, projects, training या internship से अनुभव बनाएँ।\n5. समय-समय पर योजना की समीक्षा करें।\n\nएक अच्छा career plan वास्तविक, लचीला और मापने योग्य होना चाहिए।"
  },
  "—|Unit IV": {
    "title": "औद्योगिक भ्रमण",
    "desc": "Industrial visit का उद्देश्य, planning और वास्तविक प्रणालियों का अवलोकन।",
    "content": "इकाई IV — Industrial Visits\n\nIndustrial visit छात्रों को उद्योग, कार्यालय या तकनीकी संस्था में काम करने की वास्तविक प्रक्रिया देखने का अवसर देता है।\n\nतैयारी:\n• भ्रमण का उद्देश्य और संस्था का परिचय पढ़ें।\n• अनुमति, सुरक्षा नियम और समय-सारणी का पालन करें।\n• विशेषज्ञों से उचित प्रश्न पूछें।\n• देखी गई प्रक्रिया और सीखी गई बातों के नोट्स बनाएँ।\n• बाद में संक्षिप्त रिपोर्ट या प्रस्तुति तैयार करें।\n\nIndustrial visit का उद्देश्य केवल घूमना नहीं, बल्कि वास्तविक काम और classroom concepts के संबंध को समझना है।"
  },
  "—|Unit V": {
    "title": "CV, Resume, बायोडाटा और इंटरव्यू",
    "desc": "Resume formats, covering letter, interview preparation और practice।",
    "content": "इकाई V — CV, Resume, Bio-data और Interview\n\nResume नौकरी या internship के लिए संबंधित योग्यता, कौशल, शिक्षा, projects और अनुभव का संक्षिप्त विवरण है। CV अधिक विस्तृत हो सकता है; Bio-data में व्यक्तिगत विवरण पर अधिक जोर हो सकता है।\n\nएक उपयोगी resume में contact details, objective/summary (जहाँ उचित हो), education, skills, projects, training और उपलब्ध अनुभव शामिल किए जा सकते हैं। जानकारी सत्य और स्पष्ट रखें।\n\nInterview तैयारी:\n1. संस्था और role के बारे में पढ़ें।\n2. अपने projects और उनमें किए गए योगदान को समझें।\n3. सामान्य तकनीकी तथा व्यवहारिक प्रश्नों का अभ्यास करें।\n4. स्पष्ट, सम्मानपूर्ण और ईमानदार उत्तर दें।"
  },
  "—|Unit VI": {
    "title": "समूह चर्चा",
    "desc": "Group discussion का महत्व, सहभागिता कौशल और अभ्यास।",
    "content": "इकाई VI — Group Discussion\n\nGroup discussion किसी विषय पर अनेक लोगों के विचार सुनने, तर्क रखने और मिलकर निष्कर्ष तक पहुँचने का अभ्यास है।\n\nअच्छी सहभागिता के गुण:\n• विषय को समझकर बोलें।\n• संक्षिप्त, स्पष्ट और तथ्य-आधारित बात रखें।\n• दूसरों को बीच में काटने से बचें।\n• असहमति होने पर व्यक्ति नहीं, विचार पर चर्चा करें।\n• शांत और सम्मानपूर्ण भाषा अपनाएँ।\n• समय के अनुसार मुख्य बिंदुओं का सार दें।\n\nकेवल अधिक बोलना नेतृत्व नहीं है; सही समय पर उपयोगी योगदान और दूसरों को सुनना भी महत्वपूर्ण है।"
  }
};

const hindiSyllabus = {
  "301": [
    "इकाई 1: कम्प्यूटेशनल थिंकिंग, वेरिएबल और डेटा निरूपण",
    "इकाई 2: ऑपरेटर और इनपुट-आउटपुट",
    "इकाई 3: कंडीशनल और लूपिंग कंस्ट्रक्ट्स",
    "इकाई 4: ऐरे और पॉइंटर",
    "इकाई 5: फंक्शन और रिकर्शन"
  ],
  "302": [
    "इकाई 1: परिचय, वेरिएबल और डेटा टाइप",
    "इकाई 2: उन्नत डेटा टाइप",
    "इकाई 3: कंट्रोल स्ट्रक्चर्स",
    "इकाई 4: फंक्शन, मॉड्यूल और पैकेज",
    "इकाई 5: फाइल I/O, टेक्स्ट प्रोसेसिंग और रेगुलर एक्सप्रेशन"
  ],
  "303": [
    "इकाई 1: डेटा स्ट्रक्चर की मूल बातें",
    "इकाई 2: सर्चिंग और सॉर्टिंग तकनीक",
    "इकाई 3: लीनियर डेटा स्ट्रक्चर्स",
    "इकाई 4: लिंक्ड लिस्ट",
    "इकाई 5: नॉन-लीनियर डेटा स्ट्रक्चर"
  ],
  "304": [
    "इकाई 1: कंप्यूटर की मूल संरचना",
    "इकाई 2: इंस्ट्रक्शन सेट आर्किटेक्चर",
    "इकाई 3: कंट्रोल यूनिट संगठन",
    "इकाई 4: मेमोरी और I/O संगठन",
    "इकाई 5: 8085 केस स्टडी और असेंबली प्रोग्रामिंग"
  ],
  "305": [
    "इकाई 1: एल्गोरिदम की मूल बातें",
    "इकाई 2: सॉर्टिंग",
    "इकाई 3: सर्चिंग",
    "इकाई 4: ग्राफ",
    "इकाई 5: स्ट्रिंग और डेटा कम्प्रेशन"
  ],
  "—": [
    "व्यावहारिक इंटर्नशिप",
    "व्यावसायिक और सामाजिक नैतिकता",
    "आजीवन और स्व-निर्देशित शिक्षा",
    "करियर योजना",
    "औद्योगिक भ्रमण",
    "CV, Resume, बायोडाटा और इंटरव्यू",
    "समूह चर्चा"
  ]
};
const hindiMcqs = [
  {
    "q": "OSI मॉडल की कौन-सी परत routing के लिए जिम्मेदार है?",
    "options": [
      "Transport",
      "नेटवर्क (Network)",
      "Session",
      "Presentation"
    ],
    "topic": "कंप्यूटर नेटवर्क",
    "answer": 1
  },
  {
    "q": "कौन-सा data structure LIFO सिद्धांत का पालन करता है?",
    "options": [
      "Queue",
      "Array",
      "स्टैक (Stack)",
      "Linked List"
    ],
    "topic": "डेटा स्ट्रक्चर",
    "answer": 2
  },
  {
    "q": "Information security में CIA का पूरा नाम क्या है?",
    "options": [
      "Control, Internet, Access",
      "गोपनीयता, अखंडता और उपलब्धता (Confidentiality, Integrity, Availability)",
      "Cyber, Identity, Authentication",
      "Code, Integrity, Access"
    ],
    "topic": "साइबर सुरक्षा की मूल बातें",
    "answer": 1
  },
  {
    "q": "डेटा प्राप्त करने के लिए कौन-सा SQL command उपयोग होता है?",
    "options": [
      "डेटा प्राप्त करने वाला SELECT command",
      "डेटा जोड़ने वाला INSERT command",
      "डेटा हटाने वाला DELETE command",
      "डेटा बदलने वाला UPDATE command"
    ],
    "topic": "डेटाबेस मैनेजमेंट",
    "answer": 0
  },
  {
    "q": "Processes और hardware resources का प्रबंधन कौन करता है?",
    "options": [
      "Compiler",
      "Browser",
      "ऑपरेटिंग सिस्टम (Operating System)",
      "Database"
    ],
    "topic": "ऑपरेटिंग सिस्टम",
    "answer": 2
  }
];

const hindiModuleTitles = {
  "Computer Programming|1": "इकाई 1 — कम्प्यूटेशनल थिंकिंग, वेरिएबल और डेटा निरूपण",
  "Computer Programming|2": "इकाई 2 — ऑपरेटर और इनपुट-आउटपुट",
  "Computer Programming|3": "इकाई 3 — कंडीशनल और लूपिंग कंस्ट्रक्ट्स"
};
const hindiModuleTopicContent = {
  "Concept of problem-solving and computational thinking": {
    "title": "समस्या समाधान और कम्प्यूटेशनल थिंकिंग",
    "lesson": "समस्या समाधान में समस्या को समझना और उसका तार्किक हल बनाना शामिल है। कम्प्यूटेशनल थिंकिंग ऐसी व्यवस्थित सोच है जिससे समाधान को स्पष्ट चरणों में बदला जा सके।\n\nउदाहरण: दो संख्याओं का योग निकालने के लिए इनपुट पहचानें, जोड़ की योजना बनाएँ, गणना करें और परिणाम दिखाएँ।"
  },
  "Steps involved in problem solving": {
    "title": "समस्या समाधान के चरण",
    "lesson": "समस्या समाधान के मुख्य चरण हैं: समस्या को समझना, इनपुट/आउटपुट पहचानना, बड़े काम को छोटे भागों में बाँटना, एल्गोरिदम या फ्लोचार्ट बनाना, प्रोग्राम लिखना, परीक्षण करना और त्रुटियाँ सुधारना।\n\nसमाधान को व्यवस्थित ढंग से बनाने से गलतियाँ ढूँढना आसान होता है।"
  },
  "Components of computational thinking": {
    "title": "कम्प्यूटेशनल थिंकिंग के घटक",
    "lesson": "चार प्रमुख घटक हैं:\n• Decomposition (विभाजन): बड़ी समस्या को छोटे भागों में बाँटना।\n• Pattern Recognition (पैटर्न पहचान): समानताओं को पहचानना।\n• Abstraction (अमूर्तन): गैर-जरूरी विवरण छोड़ना।\n• Algorithmic Thinking: क्रमबद्ध समाधान चरण बनाना।"
  },
  "Converting problems into flowcharts and algorithms": {
    "title": "एल्गोरिदम और फ्लोचार्ट",
    "lesson": "एल्गोरिदम समस्या हल करने के स्पष्ट, सीमित चरणों का क्रम है। फ्लोचार्ट मानक प्रतीकों से उन चरणों को चित्र के रूप में दिखाता है।\n\nOval Start/End, Rectangle Process, Parallelogram Input/Output और Diamond Decision दर्शाता है। उदाहरण: Start → A और B पढ़ें → SUM=A+B → परिणाम दिखाएँ → Stop।"
  },
  "Variables, constants, data types and memory representation of variables": {
    "title": "वेरिएबल, कॉन्स्टेंट, डेटा टाइप और मेमोरी",
    "lesson": "Variable ऐसा नामित memory स्थान है जिसका मान बदल सकता है। Constant ऐसा मान है जिसे बदलने के लिए नहीं रखा जाता।\n\nC में int पूर्णांक, char अक्षर, float और double दशमलव मान के लिए उपयोग होते हैं। कंप्यूटर डेटा को bits (0/1) में रखता है; 8 bits मिलकर 1 byte बनाते हैं।"
  },
  "Arithmetic Operators": {
    "title": "अंकगणितीय ऑपरेटर",
    "lesson": "Arithmetic operators गणना के लिए होते हैं: + जोड़, - घटाव, * गुणा, / भाग और % शेषफल।\n\nयदि दोनों operands int हों, तो C में 10/3 का परिणाम 3 होगा। उदाहरण: int sum = 5 + 3; से sum का मान 8 मिलता है।"
  },
  "Relational Operators": {
    "title": "तुलनात्मक ऑपरेटर",
    "lesson": "Relational operators दो मानों की तुलना करते हैं: <, >, <=, >=, == और !=। इनका परिणाम true या false होता है।\n\nध्यान दें: = किसी variable में मान assign करता है; == बराबरी की जाँच करता है।"
  },
  "Logical Operators": {
    "title": "लॉजिकल ऑपरेटर",
    "lesson": "&& (AND) तभी true होता है जब दोनों conditions true हों। || (OR) तब true होता है जब कम-से-कम एक condition true हो। ! (NOT) condition का उल्टा परिणाम देता है।\n\nये operators if और loops की शर्तों में उपयोग होते हैं।"
  },
  "Bitwise Operators": {
    "title": "बिटवाइज़ ऑपरेटर",
    "lesson": "Bitwise operators integer की अलग-अलग bits पर काम करते हैं। & AND, | OR, ^ XOR और ~ NOT करता है।\n\nउदाहरण: 5 = 0101 और 3 = 0011; इसलिए 5 & 3 = 0001 अर्थात 1। Bitwise operators को logical operators से अलग रखें।"
  },
  "Operator Precedence and Associativity": {
    "title": "Precedence और Associativity",
    "lesson": "Precedence तय करता है कि कौन-सा operator पहले evaluate होगा। Associativity समान precedence वाले operators की दिशा बताती है।\n\nउदाहरण: 2 + 3 * 4 = 14, क्योंकि multiplication पहले होता है। Parentheses () से क्रम स्पष्ट किया जा सकता है।"
  },
  "Input and Output Functions": {
    "title": "इनपुट और आउटपुट फंक्शन",
    "lesson": "C में printf() formatted output दिखाता है और scanf() input पढ़ता है। सामान्यतः इन functions के लिए #include <stdio.h> उपयोग होता है।\n\n%d int, %c character और %f floating-point data के लिए सामान्य format specifiers हैं।"
  },
  "Formatted Output": {
    "title": "फॉर्मेटेड आउटपुट",
    "lesson": "Formatted output में values को format specifier द्वारा पढ़ने योग्य रूप में दिखाया जाता है।\n\nउदाहरण: printf(\"Marks = %d\", marks); में %d integer की जगह उसका मान दिखाता है। \\n अगली line शुरू करता है।"
  },
  "Basic File I/O": {
    "title": "फ़ाइल इनपुट/आउटपुट",
    "lesson": "File I/O से C program फ़ाइल में डेटा पढ़ या लिख सकता है। सामान्य क्रम: FILE pointer घोषित करना, fopen() से फ़ाइल खोलना, डेटा पढ़ना/लिखना और fclose() से फ़ाइल बंद करना।\n\n'r' पढ़ने, 'w' लिखने और 'a' अंत में डेटा जोड़ने के लिए है।"
  },
  "if Statement": {
    "title": "if स्टेटमेंट",
    "lesson": "if condition जाँचता है। Condition true होने पर if block का code चलता है; false होने पर वह block छोड़ दिया जाता है।\n\nउदाहरण: if (marks >= 40) { printf(\"Pass\"); }"
  },
  "if-else Statement": {
    "title": "if-else स्टेटमेंट",
    "lesson": "if-else दो स्थितियों के लिए अलग code चलाता है। Condition true होने पर if block और false होने पर else block चलता है।\n\nइसका उपयोग Pass/Fail जैसे निर्णयों में किया जा सकता है।"
  },
  "Nested if": {
    "title": "Nested if",
    "lesson": "एक if के अंदर दूसरा if हो तो उसे nested if कहते हैं। इसका उपयोग जुड़े हुए कई निर्णय लेने में होता है, जहाँ अंदर की condition पहले निर्णय के पूरा होने पर ही जाँची जाती है।"
  },
  "Conditional Operator ?: ": {
    "title": "Conditional operator ?: ",
    "lesson": "Conditional operator condition के आधार पर दो expressions में से एक चुनता है। इसका रूप condition ? expression1 : expression2 है।\n\nउदाहरण: max = (a > b) ? a : b; — condition true होने पर a, अन्यथा b चुना जाता है।"
  },
  "for Loop": {
    "title": "for लूप",
    "lesson": "for loop के header में initialization, condition और update होते हैं। जब दोहराव की संख्या ज्ञात हो, तो यह उपयोगी है।\n\nउदाहरण: for (int i=1; i<=5; i++) { printf(\"%d\", i); }"
  },
  "while Loop": {
    "title": "while लूप",
    "lesson": "while loop पहले condition जाँचता है और true रहने तक body दोहराता है। यदि condition शुरू में false हो, तो body शून्य बार चल सकती है।\n\nध्यान रखें कि loop के अंदर condition बदलनी चाहिए ताकि अनंत loop न बने।"
  },
  "do-while Loop": {
    "title": "do-while लूप",
    "lesson": "do-while में body पहले चलती है और condition बाद में जाँची जाती है। इसलिए body कम-से-कम एक बार चलती है।\n\nउदाहरण: do { i++; } while (i < 3);"
  },
  "Nested Loops": {
    "title": "Nested loops",
    "lesson": "एक loop के अंदर दूसरा loop nested loop कहलाता है। सामान्यतः outer loop की हर iteration पर inner loop अपनी पूरी iteration करता है।\n\nउपयोग: patterns, multiplication tables और 2-D arrays पर काम करना।"
  },
  "switch-case": {
    "title": "switch-case",
    "lesson": "switch expression के मान के अनुसार matching case चुनता है। यदि कोई case match न हो, तो default block चल सकता है।\n\nbreak वर्तमान switch case से बाहर निकलने में मदद करता है।"
  },
  "break Statement": {
    "title": "break स्टेटमेंट",
    "lesson": "break निकटतम loop या switch से बाहर निकलता है। Loop में इसका उपयोग होने पर control loop के बाद आने वाले statement पर चला जाता है।"
  },
  "continue Statement": {
    "title": "continue स्टेटमेंट",
    "lesson": "continue वर्तमान iteration का बचा हुआ भाग छोड़ता है और अगली iteration की ओर बढ़ता है। break loop समाप्त करता है, जबकि continue loop को जारी रखता है।"
  },
  "Unit 1 — Introduction to Computational Thinking & Variables and Data Representation": {
    "title": "इकाई 1 — कम्प्यूटेशनल थिंकिंग और डेटा निरूपण",
    "lesson": "इस इकाई में समस्या को तार्किक चरणों में बदलना, सही solution की योजना बनाना और डेटा को computer memory में दर्शाने की मूल बातें सीखेंगे।\n\nमुख्य विषय: समस्या समाधान, computational thinking के घटक, algorithm, flowchart, variables, constants, C data types और memory representation।\n\nउदाहरण: किसी छात्र के marks का total निकालने के लिए inputs लेना, जोड़ करना और परिणाम दिखाना आवश्यक है। इस सरल उदाहरण से algorithm और program की बुनियाद समझी जा सकती है।"
  },
  "Unit 2 — Operators and Input-Output": {
    "title": "इकाई 2 — ऑपरेटर और इनपुट-आउटपुट",
    "lesson": "इस इकाई में C language के operators और data input/output के तरीके सीखेंगे।\n\nमुख्य विषय: arithmetic, relational, logical और bitwise operators; precedence और associativity; printf(), scanf(), format specifiers तथा basic file I/O।\n\nइन topics से calculations करना, conditions जाँचना, user input लेना और results को सही format में display करना समझ आता है।"
  },
  "Unit 3 — Conditional and Looping Constructs": {
    "title": "इकाई 3 — Conditional और Looping Constructs",
    "lesson": "इस इकाई में program को conditions के आधार पर निर्णय लेना और statements को बार-बार execute करना सिखाया जाता है।\n\nमुख्य विषय: if, if-else, nested if, conditional operator ?:, for, while, do-while, nested loops, switch-case, break और continue।\n\nइन concepts की मदद से marks check करना, menu-driven program बनाना, counters चलाना और repetitive tasks automate करना संभव होता है।"
  }
};
const hindiModuleQuestionPrompts = {
  "What is the main idea of computational thinking?": "कम्प्यूटेशनल थिंकिंग का मुख्य विचार क्या है?",
  "In one or two sentences, explain what problem solving means in programming.": "प्रोग्रामिंग में समस्या समाधान का अर्थ एक या दो वाक्यों में समझाइए।",
  "Which step should normally come before implementation?": "Implementation से पहले सामान्यतः कौन-सा चरण आता है?",
  "Write any three steps involved in problem solving.": "समस्या समाधान के कोई तीन चरण लिखिए।",
  "Which component means breaking a large problem into smaller parts?": "कौन-सा घटक बड़ी समस्या को छोटे भागों में बाँटता है?",
  "Which component focuses on important information and ignores unnecessary detail?": "कौन-सा घटक अनावश्यक विवरण छोड़कर जरूरी जानकारी पर ध्यान देता है?",
  "Name the four main components of computational thinking.": "कम्प्यूटेशनल थिंकिंग के चार मुख्य घटकों के नाम लिखिए।",
  "Which flowchart symbol is normally used for a decision?": "निर्णय के लिए सामान्यतः कौन-सा flowchart symbol उपयोग होता है?",
  "What is an algorithm?": "एल्गोरिदम क्या है?",
  "Write the basic algorithm steps for adding two numbers.": "दो संख्याओं को जोड़ने के एल्गोरिदम के चरण लिखिए।",
  "Which statement correctly describes a variable?": "कौन-सा कथन variable का सही वर्णन करता है?",
  "Which of the following is a C data type?": "इनमें से कौन-सा C data type है?",
  "Name any three common C data types.": "C के कोई तीन सामान्य data types लिखिए।",
  "What is the basic idea of memory representation of a variable?": "Variable के memory representation का मुख्य विचार क्या है?",
  "Which operator gives the remainder after integer division?": "Integer division के बाद remainder कौन-सा operator देता है?",
  "What is the value of 10 / 3 when both operands are int?": "दोनों operands int होने पर 10 / 3 का मान क्या होगा?",
  "Write the five basic arithmetic operators in C.": "C के पाँच मुख्य arithmetic operators लिखिए।",
  "Which operator checks equality?": "Equality जाँचने वाला operator कौन-सा है?",
  "Which operator means 'not equal to'?": "'बराबर नहीं' के लिए कौन-सा operator है?",
  "Differentiate = and == in C.": "C में = और == का अंतर बताइए।",
  "Which logical operator is true when both conditions are true?": "दोनों conditions true होने पर कौन-सा logical operator true होता है?",
  "What does ! do to a logical condition?": "Logical condition पर ! क्या करता है?",
  "Explain &&, || and ! in simple words.": "&&, || और ! को सरल शब्दों में समझाइए।",
  "Which operator is bitwise AND?": "Bitwise AND कौन-सा operator है?",
  "What is 5 & 3 using 4-bit binary representation?": "4-bit binary रूप में 5 & 3 का मान क्या होगा?",
  "What is the main difference between bitwise and logical operators?": "Bitwise और logical operators में मुख्य अंतर क्या है?",
  "What is the value of 2 + 3 * 4?": "2 + 3 * 4 का मान क्या है?",
  "What can be used to explicitly control the order of evaluation?": "Evaluation का क्रम स्पष्ट रूप से नियंत्रित करने के लिए क्या उपयोग होता है?",
  "Differentiate precedence and associativity.": "Precedence और associativity में अंतर बताइए।",
  "Which function is commonly used for formatted output in C?": "C में formatted output के लिए सामान्यतः कौन-सा function है?",
  "Which format specifier is commonly used for an int?": "int के लिए सामान्य format specifier कौन-सा है?",
  "What is the purpose of printf() and scanf()?": "printf() और scanf() का क्या उद्देश्य है?",
  "Which format specifier is commonly used to print a string?": "String print करने के लिए सामान्य format specifier कौन-सा है?",
  "What does \\\\n normally do in a printf() string?": "printf() string में \\\\n का सामान्य काम क्या है?",
  "What is formatted output?": "Formatted output क्या है?",
  "Which function opens a file in C?": "C में file खोलने वाला function कौन-सा है?",
  "Which mode is used to append data to a file?": "File के अंत में data जोड़ने के लिए कौन-सा mode है?",
  "Write the basic file I/O sequence.": "File I/O के मुख्य चरण लिखिए।",
  "When does an if block execute?": "if block कब execute होता है?",
  "Which keyword is used for a simple decision?": "साधारण decision के लिए कौन-सा keyword उपयोग होता है?",
  "What does an if statement do?": "if statement क्या करता है?",
  "How many main alternatives does if-else provide?": "if-else कितने मुख्य विकल्प देता है?",
  "Which block runs when the if condition is false?": "if condition false होने पर कौन-सा block चलता है?",
  "What is the purpose of if-else?": "if-else का उद्देश्य क्या है?",
  "What is a nested if?": "Nested if क्या होता है?",
  "When is the inner if checked?": "Inner if कब जाँचा जाता है?",
  "Why are nested if statements useful?": "Nested if statements क्यों उपयोगी हैं?",
  "Which operator is called the conditional operator?": "किस operator को conditional operator कहा जाता है?",
  "How many expressions are selected by a basic conditional operator?": "Basic conditional operator कितने expressions में से चयन करता है?",
  "How does ?: choose between two expressions?": "?: दो expressions में से चुनाव कैसे करता है?",
  "Which three parts are commonly in a for header?": "for header में सामान्यतः कौन-से तीन भाग होते हैं?",
  "When is the for-loop condition checked?": "for loop की condition कब जाँची जाती है?",
  "Give one situation where a for loop is useful.": "एक स्थिति बताइए जहाँ for loop उपयोगी है।",
  "When does a while loop check its condition?": "while loop अपनी condition कब जाँचता है?",
  "Can a while loop execute zero times?": "क्या while loop शून्य बार execute हो सकता है?",
  "What is the main idea of a while loop?": "while loop का मुख्य विचार क्या है?",
  "When is the do-while condition checked?": "do-while की condition कब जाँची जाती है?",
  "Minimum number of body executions?": "Body कम-से-कम कितनी बार चलती है?",
  "Why does do-while execute at least once?": "do-while कम-से-कम एक बार क्यों चलता है?",
  "What is a nested loop?": "Nested loop क्या है?",
  "For each outer-loop iteration, what normally happens to the inner loop?": "Outer loop की हर iteration पर inner loop में सामान्यतः क्या होता है?",
  "Name one common use of nested loops.": "Nested loops का एक सामान्य उपयोग बताइए।",
  "Which keyword selects an alternative in switch?": "switch में विकल्प चुनने वाला keyword कौन-सा है?",
  "What is the purpose of default?": "default का उद्देश्य क्या है?",
  "Why is break commonly used inside switch cases?": "switch case में break का उपयोग क्यों होता है?",
  "What does break do inside a loop?": "Loop के अंदर break क्या करता है?",
  "Where does control go after break exits a loop?": "break से loop बाहर आने के बाद control कहाँ जाता है?",
  "What is the main purpose of break?": "break का मुख्य उद्देश्य क्या है?",
  "What does continue do inside a loop?": "Loop के अंदर continue क्या करता है?",
  "After continue, what normally happens?": "continue के बाद सामान्यतः क्या होता है?",
  "Differentiate break and continue.": "break और continue में अंतर बताइए।"
};
const hindiModuleQuestionOptions = {
  "What is the main idea of computational thinking?": [
    "समस्या को तार्किक और व्यवस्थित तरीके से हल करना",
    "जल्दी उत्तर का अनुमान लगाना",
    "योजना के बिना केवल code लिखना",
    "अनावश्यक files हटाना"
  ],
  "Which step should normally come before implementation?": [
    "समाधान की योजना बनाना",
    "Program हटाना",
    "Testing छोड़ना",
    "Computer बंद करना"
  ],
  "Which component means breaking a large problem into smaller parts?": [
    "Abstraction (अमूर्तन)",
    "Decomposition (विभाजन)",
    "Pattern Recognition",
    "Algorithmic Thinking"
  ],
  "Which component focuses on important information and ignores unnecessary detail?": [
    "Abstraction (अमूर्तन)",
    "Decomposition (विभाजन)",
    "Pattern Recognition",
    "Testing"
  ],
  "Which flowchart symbol is normally used for a decision?": [
    "Oval",
    "Rectangle",
    "Diamond",
    "Parallelogram"
  ],
  "Which statement correctly describes a variable?": [
    "ऐसा नामित memory स्थान जिसका मान बदल सकता है",
    "Flowchart symbol",
    "File extension",
    "ऐसा मान जो कभी नहीं बदलता"
  ],
  "Which of the following is a C data type?": [
    "int",
    "flow",
    "input",
    "algorithm"
  ],
  "Which operator gives the remainder after integer division?": [
    "/",
    "%",
    "*",
    "+"
  ],
  "What is the value of 10 / 3 when both operands are int?": [
    "3",
    "3.33",
    "4",
    "0"
  ],
  "Which operator checks equality?": [
    "=",
    "==",
    "!=",
    "<="
  ],
  "Which operator means 'not equal to'?": [
    "!=",
    "==",
    "<>",
    "!"
  ],
  "Which logical operator is true when both conditions are true?": [
    "||",
    "&&",
    "!",
    "&"
  ],
  "What does ! do to a logical condition?": [
    "मानों को जोड़ता है",
    "Condition का truth value उलट देता है",
    "Bits को multiply करता है",
    "Value assign करता है"
  ],
  "Which operator is bitwise AND?": [
    "&&",
    "&",
    "||",
    "!"
  ],
  "What is 5 & 3 using 4-bit binary representation?": [
    "1",
    "2",
    "7",
    "8"
  ],
  "What is the value of 2 + 3 * 4?": [
    "20",
    "14",
    "24",
    "9"
  ],
  "What can be used to explicitly control the order of evaluation?": [
    "Comments",
    "Parentheses ( )",
    "केवल variables",
    "File modes"
  ],
  "Which function is commonly used for formatted output in C?": [
    "scanf()",
    "printf()",
    "fopen()",
    "fclose()"
  ],
  "Which format specifier is commonly used for an int?": [
    "%s",
    "%c",
    "%d",
    "%f"
  ],
  "Which format specifier is commonly used to print a string?": [
    "%d",
    "%c",
    "%s",
    "%f"
  ],
  "What does \\\\n normally do in a printf() string?": [
    "Text delete करता है",
    "नई line शुरू करता है",
    "Input पढ़ता है",
    "File बंद करता है"
  ],
  "Which function opens a file in C?": [
    "fopen()",
    "fclose()",
    "printf()",
    "scanf()"
  ],
  "Which mode is used to append data to a file?": [
    "r",
    "w",
    "a",
    "x"
  ],
  "When does an if block execute?": [
    "जब condition true हो",
    "हमेशा",
    "जब false हो",
    "केवल loop के बाद"
  ],
  "Which keyword is used for a simple decision?": [
    "when",
    "if",
    "check",
    "case"
  ],
  "How many main alternatives does if-else provide?": [
    "एक",
    "दो",
    "तीन",
    "कोई नहीं"
  ],
  "Which block runs when the if condition is false?": [
    "for",
    "case",
    "else",
    "while"
  ],
  "What is a nested if?": [
    "एक if के अंदर दूसरा if",
    "बिना condition का if",
    "switch के अंदर loop",
    "एक variable"
  ],
  "When is the inner if checked?": [
    "Outer condition से पहले",
    "जब outer condition अंदर जाने देती है",
    "Program के अंत में",
    "कभी नहीं"
  ],
  "Which operator is called the conditional operator?": [
    "::",
    "?:",
    "??",
    "=>"
  ],
  "How many expressions are selected by a basic conditional operator?": [
    "एक",
    "दो",
    "तीन",
    "चार"
  ],
  "Which three parts are commonly in a for header?": [
    "Input, output, print",
    "Initialization, condition, update",
    "Start, stop, switch",
    "Case, break, default"
  ],
  "When is the for-loop condition checked?": [
    "हर iteration से पहले",
    "केवल loop के बाद",
    "कभी नहीं",
    "केवल एक बार"
  ],
  "When does a while loop check its condition?": [
    "हर iteration से पहले",
    "केवल body के बाद",
    "Program के अंत में",
    "कभी नहीं"
  ],
  "Can a while loop execute zero times?": [
    "हाँ",
    "नहीं",
    "केवल C++ में",
    "केवल switch के साथ"
  ],
  "When is the do-while condition checked?": [
    "Body के बाद",
    "Body से पहले",
    "Program शुरू होने से पहले",
    "कभी नहीं"
  ],
  "Minimum number of body executions?": [
    "शून्य",
    "एक",
    "दो",
    "switch पर निर्भर"
  ],
  "What is a nested loop?": [
    "एक loop के अंदर दूसरा loop",
    "बिना condition का loop",
    "if के अंदर switch",
    "केवल function"
  ],
  "For each outer-loop iteration, what normally happens to the inner loop?": [
    "यह अपनी iterations पूरी करता है",
    "यह हमेशा छोड़ दिया जाता है",
    "Program समाप्त होता है",
    "Outer loop रुकता है"
  ],
  "Which keyword selects an alternative in switch?": [
    "case",
    "choose",
    "option",
    "select"
  ],
  "What is the purpose of default?": [
    "जब कोई case match न हो तब चलता है",
    "हमेशा सबसे पहले चलता है",
    "हर loop रोकता है",
    "Variable घोषित करता है"
  ],
  "Why is break commonly used inside switch cases?": [
    "एक iteration छोड़ने के लिए",
    "वर्तमान switch से बाहर निकलने के लिए",
    "Loop फिर शुरू करने के लिए",
    "Program pause करने के लिए"
  ],
  "What does break do inside a loop?": [
    "Loop के बाद वाले statement पर ले जाता है",
    "अनंत loop चलाता है",
    "पहली line पर लौटता है",
    "दूसरे case में जाता है"
  ],
  "What is the main purpose of break?": [
    "Loop समाप्त करना",
    "वर्तमान iteration छोड़ना",
    "Program समाप्त करना",
    "उसी iteration को दोहराना"
  ],
  "What does continue do inside a loop?": [
    "वर्तमान iteration का शेष भाग छोड़ता है",
    "Program से बाहर निकलता है",
    "Loop को switch बनाता है",
    "पिछली iteration दोहराता है"
  ],
  "After continue, what normally happens?": [
    "अगली iteration शुरू होती है",
    "Program समाप्त होता है",
    "Loop switch बन जाता है",
    "पिछली iteration दोहरती है"
  ],
  "Where does control go after break exits a loop?": [
    "Loop के बाद आने वाले अगले statement पर",
    "Loop condition पर हमेशा",
    "Program की पहली line पर",
    "दूसरे case पर"
  ]
};
const hindiModuleShortAnswers = {
  "In one or two sentences, explain what problem solving means in programming.": {
    "keywords": [
      "समस्या",
      "हल"
    ],
    "minKeywords": 2,
    "modelAnswer": "प्रोग्रामिंग में समस्या समाधान का अर्थ समस्या समझकर उसका तार्किक हल बनाना है।"
  },
  "Write any three steps involved in problem solving.": {
    "keywords": [
      "समझ",
      "इनपुट",
      "आउटपुट",
      "डिजाइन",
      "एल्गोरिदम",
      "फ्लोचार्ट",
      "परीक्षण",
      "त्रुटि"
    ],
    "minKeywords": 3,
    "modelAnswer": "उदाहरण: समस्या समझना, इनपुट/आउटपुट पहचानना, एल्गोरिदम बनाना, program लिखना और परीक्षण करना।"
  },
  "Name the four main components of computational thinking.": {
    "keywords": [
      "विभाजन",
      "decomposition",
      "पैटर्न",
      "pattern",
      "अमूर्तन",
      "abstraction",
      "algorithm"
    ],
    "minKeywords": 3,
    "modelAnswer": "Decomposition, Pattern Recognition, Abstraction और Algorithmic Thinking।"
  },
  "What is an algorithm?": {
    "keywords": [
      "चरण",
      "समस्या"
    ],
    "minKeywords": 2,
    "modelAnswer": "एल्गोरिदम समस्या हल करने के स्पष्ट और सीमित चरणों का क्रम है।"
  },
  "Write the basic algorithm steps for adding two numbers.": {
    "keywords": [
      "इनपुट",
      "जोड़",
      "योग",
      "परिणाम",
      "दिखाएँ",
      "display"
    ],
    "minKeywords": 2,
    "modelAnswer": "Start → A और B पढ़ें → SUM=A+B → परिणाम दिखाएँ → Stop."
  },
  "Name any three common C data types.": {
    "keywords": [
      "int",
      "char",
      "float",
      "double",
      "void"
    ],
    "minKeywords": 3,
    "modelAnswer": "int, char, float, double और void में से कोई तीन।"
  },
  "What is the basic idea of memory representation of a variable?": {
    "keywords": [
      "वेरिएबल",
      "variable",
      "मेमोरी",
      "memory",
      "स्थान",
      "location"
    ],
    "minKeywords": 3,
    "modelAnswer": "Variable का मान memory location पर रखा जाता है; data type value को समझने में मदद करता है।"
  },
  "Write the five basic arithmetic operators in C.": {
    "keywords": [
      "+",
      "-",
      "*",
      "/",
      "%"
    ],
    "minKeywords": 4,
    "modelAnswer": "+, -, *, / और %।"
  },
  "Differentiate = and == in C.": {
    "keywords": [
      "assign",
      "बराबरी",
      "तुलना",
      "मान देना"
    ],
    "minKeywords": 1,
    "modelAnswer": "= value assign करता है, जबकि == equality compare करता है।"
  },
  "Explain &&, || and ! in simple words.": {
    "keywords": [
      "दोनों",
      "एक",
      "उल्टा",
      "and",
      "or",
      "not"
    ],
    "minKeywords": 2,
    "modelAnswer": "&& दोनों conditions true होने पर true, || कम-से-कम एक true होने पर true, और ! condition को उलटता है।"
  },
  "What is the main difference between bitwise and logical operators?": {
    "keywords": [
      "bits",
      "condition",
      "बिट",
      "शर्त"
    ],
    "minKeywords": 2,
    "modelAnswer": "Bitwise operators bits पर काम करते हैं; logical operators conditions पर।"
  },
  "What can be used to explicitly control the order of evaluation?": {
    "keywords": [
      "parentheses",
      "कोष्ठक",
      "parenthesis"
    ],
    "minKeywords": 1,
    "modelAnswer": "Parentheses ( ) evaluation का क्रम स्पष्ट करते हैं।"
  },
  "Differentiate precedence and associativity.": {
    "keywords": [
      "precedence",
      "पहले",
      "क्रम",
      "दिशा",
      "associativity"
    ],
    "minKeywords": 2,
    "modelAnswer": "Precedence बताता है कौन-सा operator पहले लागू होगा; associativity समान precedence वाले operators की दिशा बताती है।"
  },
  "What is the purpose of printf() and scanf()?": {
    "keywords": [
      "printf",
      "output",
      "scanf",
      "input",
      "आउटपुट",
      "इनपुट"
    ],
    "minKeywords": 2,
    "modelAnswer": "printf() output दिखाता है और scanf() input पढ़ता है।"
  },
  "What is formatted output?": {
    "keywords": [
      "format",
      "specifier",
      "प्रारूप",
      "printf"
    ],
    "minKeywords": 1,
    "modelAnswer": "Format specifier की मदद से value को नियंत्रित तरीके से दिखाना formatted output है।"
  },
  "Write the basic file I/O sequence.": {
    "keywords": [
      "खोल",
      "पढ़",
      "लिख",
      "बंद",
      "open",
      "close"
    ],
    "minKeywords": 2,
    "modelAnswer": "फ़ाइल खोलें, डेटा पढ़ें/लिखें और फ़ाइल बंद करें।"
  },
  "What does an if statement do?": {
    "keywords": [
      "condition",
      "शर्त",
      "true",
      "सत्य"
    ],
    "minKeywords": 1,
    "modelAnswer": "if condition जाँचता है और true होने पर block चलाता है।"
  },
  "What is the purpose of if-else?": {
    "keywords": [
      "विकल्प",
      "true",
      "false",
      "सत्य",
      "असत्य"
    ],
    "minKeywords": 1,
    "modelAnswer": "if-else condition के true या false होने पर अलग block चलाता है।"
  },
  "Why are nested if statements useful?": {
    "keywords": [
      "कई",
      "शर्त",
      "निर्णय",
      "condition"
    ],
    "minKeywords": 1,
    "modelAnswer": "कई जुड़े हुए निर्णय या conditions जाँचने में nested if उपयोगी है।"
  },
  "How does ?: choose between two expressions?": {
    "keywords": [
      "condition",
      "true",
      "false",
      "शर्त",
      "सत्य",
      "असत्य"
    ],
    "minKeywords": 1,
    "modelAnswer": "Condition true हो तो पहला expression, अन्यथा दूसरा चुना जाता है।"
  },
  "Give one situation where a for loop is useful.": {
    "keywords": [
      "दोहराव",
      "iterations",
      "गिनती",
      "ज्ञात",
      "repeat"
    ],
    "minKeywords": 1,
    "modelAnswer": "जब किसी काम को ज्ञात संख्या में दोहराना हो, तब for loop उपयोगी है।"
  },
  "What is the main idea of a while loop?": {
    "keywords": [
      "condition",
      "शर्त",
      "दोहर",
      "true",
      "सत्य"
    ],
    "minKeywords": 1,
    "modelAnswer": "while condition true रहने तक body दोहराता है।"
  },
  "Why does do-while execute at least once?": {
    "keywords": [
      "पहले",
      "body",
      "बाद",
      "condition",
      "शर्त"
    ],
    "minKeywords": 1,
    "modelAnswer": "क्योंकि do-while में body पहले चलती है और condition बाद में जाँची जाती है।"
  },
  "Name one common use of nested loops.": {
    "keywords": [
      "pattern",
      "तालिका",
      "table",
      "array",
      "पैटर्न"
    ],
    "minKeywords": 1,
    "modelAnswer": "उदाहरण: patterns, tables या 2-D arrays पर काम करना।"
  },
  "What is the purpose of default?": {
    "keywords": [
      "match",
      "मिले",
      "case",
      "विकल्प"
    ],
    "minKeywords": 1,
    "modelAnswer": "switch में कोई case match न हो तो default चलता है।"
  },
  "Where does control go after break exits a loop?": {
    "keywords": [
      "बाद",
      "statement",
      "बाहर",
      "next",
      "अगला"
    ],
    "minKeywords": 1,
    "modelAnswer": "Control loop के बाद आने वाले statement पर जाता है।"
  },
  "Differentiate break and continue.": {
    "keywords": [
      "समाप्त",
      "छोड़",
      "iteration",
      "loop",
      "अगली"
    ],
    "minKeywords": 2,
    "modelAnswer": "break loop समाप्त करता है; continue वर्तमान iteration छोड़कर अगली iteration की ओर बढ़ता है।"
  },
  "Why is break commonly used inside switch cases?": {
    "keywords": [
      "अगला",
      "case",
      "रोक",
      "बाहर",
      "fall through"
    ],
    "minKeywords": 1,
    "modelAnswer": "switch में break अगले case में अनचाहे fall-through को रोकता है।"
  },
  "What is the main purpose of break?": {
    "keywords": [
      "समाप्त",
      "loop",
      "बाहर",
      "terminate",
      "exit"
    ],
    "minKeywords": 1,
    "modelAnswer": "break निकटतम loop या switch से बाहर निकलता है।"
  }
};

const papers = [
  { semester: '3rd Semester', subject: 'Computer Networks', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Data Structures', year: 'Previous Year', status: 'Practice set' },
  { semester: '3rd Semester', subject: 'Database Management', year: 'Question Bank', status: 'Revision' },
];


const inlineModuleVisuals = {"cp301-u1-problem-solving.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"720\" viewBox=\"0 0 1200 720\">\n<rect width=\"1200\" height=\"720\" rx=\"26\" fill=\"#f7faff\"/>\n<rect x=\"30\" y=\"25\" width=\"1140\" height=\"82\" rx=\"20\" fill=\"#0b2a5b\"/>\n<text x=\"64\" y=\"58\" font-family=\"Arial\" font-size=\"18\" font-weight=\"700\" fill=\"#a8cdfd\">COMPUTER PROGRAMMING • 301</text>\n<text x=\"64\" y=\"88\" font-family=\"Arial\" font-size=\"27\" font-weight=\"700\" fill=\"#ffffff\">Problem Solving and Computational Thinking</text>\n\n<text x=\"55\" y=\"145\" font-family=\"Arial\" font-size=\"22\" font-weight=\"700\" fill=\"#14213d\">1. What is Problem Solving?</text>\n<rect x=\"55\" y=\"165\" width=\"510\" height=\"115\" rx=\"16\" fill=\"#ffffff\" stroke=\"#d8e4f2\" stroke-width=\"2\"/>\n<text x=\"78\" y=\"198\" font-family=\"Arial\" font-size=\"16\" fill=\"#30445f\">Problem solving means understanding a problem</text>\n<text x=\"78\" y=\"224\" font-family=\"Arial\" font-size=\"16\" fill=\"#30445f\">and developing a logical solution that a computer</text>\n<text x=\"78\" y=\"250\" font-family=\"Arial\" font-size=\"16\" fill=\"#30445f\">can follow.</text>\n<rect x=\"590\" y=\"165\" width=\"555\" height=\"115\" rx=\"16\" fill=\"#edf5ff\" stroke=\"#cfe0f6\" stroke-width=\"2\"/>\n<text x=\"615\" y=\"196\" font-family=\"Arial\" font-size=\"15\" font-weight=\"700\" fill=\"#1d5fc4\">Simple example: add two numbers</text>\n<text x=\"615\" y=\"222\" font-family=\"Arial\" font-size=\"14\" fill=\"#30445f\">Identify A and B → plan addition → calculate A+B</text>\n<text x=\"615\" y=\"247\" font-family=\"Arial\" font-size=\"14\" fill=\"#30445f\">→ display the result.</text>\n\n<text x=\"55\" y=\"325\" font-family=\"Arial\" font-size=\"22\" font-weight=\"700\" fill=\"#14213d\">2. Problem-Solving Process</text>\n<g transform=\"translate(55,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#2b69d3\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">1</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Understand</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">What is the problem?</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(215,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#16a06b\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">2</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Identify</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Inputs & outputs</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(375,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#ef8b23\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">3</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Break down</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Smaller manageable parts</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(535,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#7b4fd6\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">4</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Design</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Algorithm / flowchart</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(695,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#d94a63\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">5</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Implement</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Write the program</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(855,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#0f8fa5\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">6</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Test</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Check the result</text>\n<path d=\"M140 72 L153 72\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M148 65 L157 72 L148 79\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(1015,350)\">\n<rect width=\"140\" height=\"145\" rx=\"15\" fill=\"#fff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<circle cx=\"70\" cy=\"34\" r=\"22\" fill=\"#7a65c4\"/><text x=\"70\" y=\"41\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"17\" font-weight=\"700\" fill=\"#fff\">7</text>\n<text x=\"70\" y=\"79\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Improve</text>\n<text x=\"70\" y=\"101\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Correct & refine</text>\n\n</g>\n\n<rect x=\"55\" y=\"525\" width=\"1090\" height=\"150\" rx=\"18\" fill=\"#ffffff\" stroke=\"#dce6f3\" stroke-width=\"2\"/>\n<text x=\"80\" y=\"557\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#14213d\">3. How Computational Thinking Helps</text>\n<text x=\"80\" y=\"586\" font-family=\"Arial\" font-size=\"14\" fill=\"#60748f\">Computational thinking gives us a structured way to understand, simplify and solve problems.</text>\n<g transform=\"translate(120,610)\">\n<rect width=\"225\" height=\"48\" rx=\"10\" fill=\"#efe8ff\"/>\n<text x=\"112\" y=\"20\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" font-weight=\"700\" fill=\"#263650\">Decomposition</text>\n<text x=\"112\" y=\"36\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"9.5\" fill=\"#60748f\">Break a big problem into smaller parts</text>\n</g><g transform=\"translate(380,610)\">\n<rect width=\"225\" height=\"48\" rx=\"10\" fill=\"#eaf7f0\"/>\n<text x=\"112\" y=\"20\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" font-weight=\"700\" fill=\"#263650\">Pattern Recognition</text>\n<text x=\"112\" y=\"36\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"9.5\" fill=\"#60748f\">Find similarities or repeated structures</text>\n</g><g transform=\"translate(640,610)\">\n<rect width=\"225\" height=\"48\" rx=\"10\" fill=\"#fff4e8\"/>\n<text x=\"112\" y=\"20\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" font-weight=\"700\" fill=\"#263650\">Abstraction</text>\n<text x=\"112\" y=\"36\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"9.5\" fill=\"#60748f\">Keep important information; ignore unnecessary detail</text>\n</g><g transform=\"translate(900,610)\">\n<rect width=\"225\" height=\"48\" rx=\"10\" fill=\"#edf5ff\"/>\n<text x=\"112\" y=\"20\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" font-weight=\"700\" fill=\"#263650\">Algorithmic Thinking</text>\n<text x=\"112\" y=\"36\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"9.5\" fill=\"#60748f\">Create clear step-by-step procedures</text>\n</g>\n</svg>","cp301-u1-problem-solving-steps.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"700\" viewBox=\"0 0 1200 700\">\n<rect width=\"1200\" height=\"700\" rx=\"26\" fill=\"#f8fbff\"/>\n<text x=\"600\" y=\"48\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"29\" font-weight=\"700\" fill=\"#14213d\">Steps Involved in Problem Solving</text>\n<text x=\"600\" y=\"78\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"15\" fill=\"#60748f\">A systematic path from understanding the problem to an improved working solution.</text>\n<path d=\"M125 170 H1075\" stroke=\"#b7c9df\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<g transform=\"translate(70,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#2b69d3\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">1</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Understand</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Define the problem clearly</text>\n</g><g transform=\"translate(245,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#16a06b\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">2</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Identify</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Inputs and expected outputs</text>\n</g><g transform=\"translate(420,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#ef8b23\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">3</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Break down</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Divide into smaller parts</text>\n</g><g transform=\"translate(595,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#7b4fd6\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">4</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Design</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Algorithm / flowchart</text>\n</g><g transform=\"translate(770,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#d94a63\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">5</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Implement</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Write program code</text>\n</g><g transform=\"translate(945,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#0f8fa5\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">6</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Test</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Run and check results</text>\n</g><g transform=\"translate(1120,115)\">\n<circle cx=\"55\" cy=\"55\" r=\"40\" fill=\"#6c63a8\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">7</text>\n<text x=\"55\" y=\"125\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#14213d\">Improve</text>\n<text x=\"55\" y=\"148\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Fix errors and refine</text>\n</g>\n<rect x=\"70\" y=\"220\" width=\"1060\" height=\"170\" rx=\"18\" fill=\"#fff\" stroke=\"#dbe6f3\" stroke-width=\"2\"/>\n<text x=\"600\" y=\"254\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#14213d\">Example: Find the total of two numbers</text>\n<g transform=\"translate(105,290)\">\n<rect width=\"220\" height=\"68\" rx=\"13\" fill=\"#edf5ff\"/><text x=\"110\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#2b69d3\">Input</text><text x=\"110\" y=\"49\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#30445f\">A = 10, B = 20</text>\n<path d=\"M220 34 H248\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M240 27 L249 34 L240 41\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(365,290)\">\n<rect width=\"220\" height=\"68\" rx=\"13\" fill=\"#ecfaf4\"/><text x=\"110\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#16a06b\">Plan</text><text x=\"110\" y=\"49\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#30445f\">We need addition</text>\n<path d=\"M220 34 H248\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M240 27 L249 34 L240 41\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(625,290)\">\n<rect width=\"220\" height=\"68\" rx=\"13\" fill=\"#fff4e8\"/><text x=\"110\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#ef8b23\">Process</text><text x=\"110\" y=\"49\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#30445f\">SUM = A + B</text>\n<path d=\"M220 34 H248\" stroke=\"#8aa6c9\" stroke-width=\"3\"/><path d=\"M240 27 L249 34 L240 41\" fill=\"none\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/>\n</g><g transform=\"translate(885,290)\">\n<rect width=\"220\" height=\"68\" rx=\"13\" fill=\"#f5efff\"/><text x=\"110\" y=\"26\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#7b4fd6\">Output</text><text x=\"110\" y=\"49\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#30445f\">SUM = 30</text>\n\n</g>\n<rect x=\"70\" y=\"425\" width=\"1060\" height=\"190\" rx=\"18\" fill=\"#ffffff\" stroke=\"#dbe6f3\" stroke-width=\"2\"/>\n<text x=\"95\" y=\"462\" font-family=\"Arial\" font-size=\"20\" font-weight=\"700\" fill=\"#14213d\">Why each step matters</text>\n<g transform=\"translate(95,485)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Understand:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Avoid solving the wrong problem.</text></g><g transform=\"translate(600,485)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Identify:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Know exactly what information is needed.</text></g><g transform=\"translate(95,525)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Break down:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Reduce complexity and make the task manageable.</text></g><g transform=\"translate(600,525)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Design:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Create logic before writing code.</text></g><g transform=\"translate(95,565)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Implement + Test:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Turn the plan into code and check whether it works.</text></g><g transform=\"translate(600,565)\"><circle cx=\"8\" cy=\"8\" r=\"5\" fill=\"#2b69d3\"/><text x=\"23\" y=\"12\" font-family=\"Arial\" font-size=\"12\" font-weight=\"700\" fill=\"#263650\">Improve:</text><text x=\"105\" y=\"12\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">Correct errors and make the solution better.</text></g>\n</svg>","cp301-u1-computational-thinking.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"720\" viewBox=\"0 0 1200 720\">\n<rect width=\"1200\" height=\"720\" rx=\"28\" fill=\"#f8fbff\"/>\n<rect x=\"32\" y=\"28\" width=\"1136\" height=\"86\" rx=\"20\" fill=\"#0b2a5b\"/>\n<text x=\"64\" y=\"62\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#a8cdfd\">COMPUTER PROGRAMMING 301</text>\n<text x=\"64\" y=\"94\" font-family=\"Arial\" font-size=\"28\" font-weight=\"700\" fill=\"#fff\">Computational Thinking: 4 Components</text>\n\n<text x=\"55\" y=\"150\" font-family=\"Arial\" font-size=\"20\" font-weight=\"700\" fill=\"#14213d\">Think of computational thinking as a toolbox for solving difficult problems.</text>\n<text x=\"55\" y=\"178\" font-family=\"Arial\" font-size=\"13\" fill=\"#60748f\">First simplify the problem, then look for patterns, keep only useful information, and finally create clear steps.</text>\n\n<circle cx=\"600\" cy=\"380\" r=\"98\" fill=\"#1d5fc4\"/>\n<text x=\"600\" y=\"370\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">Computational</text>\n<text x=\"600\" y=\"398\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#fff\">Thinking</text>\n\n<g transform=\"translate(80,225)\">\n<rect width=\"380\" height=\"170\" rx=\"18\" fill=\"#fff\" stroke=\"#7b4fd6\" stroke-width=\"3\"/>\n<circle cx=\"38\" cy=\"38\" r=\"23\" fill=\"#7b4fd6\"/><text x=\"38\" y=\"45\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#fff\">1</text>\n<text x=\"75\" y=\"42\" font-family=\"Arial\" font-size=\"18\" font-weight=\"700\" fill=\"#14213d\">Decomposition</text>\n<text x=\"24\" y=\"78\" font-family=\"Arial\" font-size=\"12.5\" fill=\"#526783\">Break a large problem into smaller manageable parts.</text>\n<rect x=\"22\" y=\"112\" width=\"336\" height=\"38\" rx=\"9\" fill=\"#7b4fd6\" opacity=\".10\"/>\n<text x=\"34\" y=\"136\" font-family=\"Arial\" font-size=\"11.5\" font-weight=\"700\" fill=\"#7b4fd6\">Example: divide a result system into marks, total and grade.</text>\n<path d=\"M380 85 C470 85 500 100 505 170\" fill=\"none\" stroke=\"#7b4fd6\" stroke-width=\"4\"/>\n</g><g transform=\"translate(740,225)\">\n<rect width=\"380\" height=\"170\" rx=\"18\" fill=\"#fff\" stroke=\"#16a06b\" stroke-width=\"3\"/>\n<circle cx=\"38\" cy=\"38\" r=\"23\" fill=\"#16a06b\"/><text x=\"38\" y=\"45\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#fff\">2</text>\n<text x=\"75\" y=\"42\" font-family=\"Arial\" font-size=\"18\" font-weight=\"700\" fill=\"#14213d\">Pattern Recognition</text>\n<text x=\"24\" y=\"78\" font-family=\"Arial\" font-size=\"12.5\" fill=\"#526783\">Find similarities, repeated steps or structures.</text>\n<rect x=\"22\" y=\"112\" width=\"336\" height=\"38\" rx=\"9\" fill=\"#16a06b\" opacity=\".10\"/>\n<text x=\"34\" y=\"136\" font-family=\"Arial\" font-size=\"11.5\" font-weight=\"700\" fill=\"#16a06b\">Example: the same calculation repeats for many students.</text>\n<path d=\"M0 85 C-90 85 -60 100 -55 170\" fill=\"none\" stroke=\"#16a06b\" stroke-width=\"4\"/>\n</g><g transform=\"translate(80,455)\">\n<rect width=\"380\" height=\"170\" rx=\"18\" fill=\"#fff\" stroke=\"#ef8b23\" stroke-width=\"3\"/>\n<circle cx=\"38\" cy=\"38\" r=\"23\" fill=\"#ef8b23\"/><text x=\"38\" y=\"45\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#fff\">3</text>\n<text x=\"75\" y=\"42\" font-family=\"Arial\" font-size=\"18\" font-weight=\"700\" fill=\"#14213d\">Abstraction</text>\n<text x=\"24\" y=\"78\" font-family=\"Arial\" font-size=\"12.5\" fill=\"#526783\">Focus on important information and ignore unnecessary detail.</text>\n<rect x=\"22\" y=\"112\" width=\"336\" height=\"38\" rx=\"9\" fill=\"#ef8b23\" opacity=\".10\"/>\n<text x=\"34\" y=\"136\" font-family=\"Arial\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ef8b23\">Example: use marks without worrying about unrelated details.</text>\n<path d=\"M380 85 C470 85 500 100 505 170\" fill=\"none\" stroke=\"#ef8b23\" stroke-width=\"4\"/>\n</g><g transform=\"translate(740,455)\">\n<rect width=\"380\" height=\"170\" rx=\"18\" fill=\"#fff\" stroke=\"#2b69d3\" stroke-width=\"3\"/>\n<circle cx=\"38\" cy=\"38\" r=\"23\" fill=\"#2b69d3\"/><text x=\"38\" y=\"45\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#fff\">4</text>\n<text x=\"75\" y=\"42\" font-family=\"Arial\" font-size=\"18\" font-weight=\"700\" fill=\"#14213d\">Algorithmic Thinking</text>\n<text x=\"24\" y=\"78\" font-family=\"Arial\" font-size=\"12.5\" fill=\"#526783\">Create a clear step-by-step procedure.</text>\n<rect x=\"22\" y=\"112\" width=\"336\" height=\"38\" rx=\"9\" fill=\"#2b69d3\" opacity=\".10\"/>\n<text x=\"34\" y=\"136\" font-family=\"Arial\" font-size=\"11.5\" font-weight=\"700\" fill=\"#2b69d3\">Example: write ordered steps before writing C code.</text>\n<path d=\"M0 85 C-90 85 -60 100 -55 170\" fill=\"none\" stroke=\"#2b69d3\" stroke-width=\"4\"/>\n</g>\n\n<rect x=\"120\" y=\"650\" width=\"960\" height=\"42\" rx=\"12\" fill=\"#eef4ff\"/>\n<text x=\"600\" y=\"678\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#315f99\">Quick memory line: Break it → Find patterns → Keep what matters → Write clear steps</text>\n</svg>","cp301-u1-algorithm-flowchart.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"720\" viewBox=\"0 0 1200 720\">\n<rect width=\"1200\" height=\"720\" rx=\"28\" fill=\"#f8fbff\"/>\n<rect x=\"32\" y=\"28\" width=\"1136\" height=\"82\" rx=\"20\" fill=\"#0b2a5b\"/>\n<text x=\"64\" y=\"61\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#a8cdfd\">COMPUTER PROGRAMMING 301</text>\n<text x=\"64\" y=\"92\" font-family=\"Arial\" font-size=\"27\" font-weight=\"700\" fill=\"#fff\">Algorithm and Flowchart: Add Two Numbers</text>\n\n<text x=\"55\" y=\"145\" font-family=\"Arial\" font-size=\"19\" font-weight=\"700\" fill=\"#14213d\">One problem, two useful representations</text>\n<text x=\"55\" y=\"171\" font-family=\"Arial\" font-size=\"13\" fill=\"#60748f\">An algorithm writes the solution as ordered steps. A flowchart shows the same logic graphically.</text>\n\n<g transform=\"translate(55,205)\">\n<rect width=\"505\" height=\"430\" rx=\"18\" fill=\"#fff\" stroke=\"#dbe6f3\" stroke-width=\"2\"/>\n<text x=\"252\" y=\"40\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#1d5fc4\">Algorithm</text>\n<rect x=\"28\" y=\"58\" width=\"449\" height=\"54\" rx=\"11\" fill=\"#edf5ff\"/>\n<text x=\"252\" y=\"91\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#315f99\">Finite, ordered sequence of clear steps</text>\n<g transform=\"translate(58,138)\">\n<g transform=\"translate(0,0)\"><circle cx=\"24\" cy=\"23\" r=\"20\" fill=\"#edf5ff\"/><text x=\"24\" y=\"29\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#1d5fc4\">1</text><text x=\"62\" y=\"29\" font-family=\"Arial\" font-size=\"14\" fill=\"#263650\">Start</text><path d=\"M24 45 V54\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/></g>\n</g><g transform=\"translate(58,138)\">\n<g transform=\"translate(0,55)\"><circle cx=\"24\" cy=\"23\" r=\"20\" fill=\"#edf5ff\"/><text x=\"24\" y=\"29\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#1d5fc4\">2</text><text x=\"62\" y=\"29\" font-family=\"Arial\" font-size=\"14\" fill=\"#263650\">Read A and B</text><path d=\"M24 45 V54\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/></g>\n</g><g transform=\"translate(58,138)\">\n<g transform=\"translate(0,110)\"><circle cx=\"24\" cy=\"23\" r=\"20\" fill=\"#edf5ff\"/><text x=\"24\" y=\"29\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#1d5fc4\">3</text><text x=\"62\" y=\"29\" font-family=\"Arial\" font-size=\"14\" fill=\"#263650\">Calculate SUM = A + B</text><path d=\"M24 45 V54\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/></g>\n</g><g transform=\"translate(58,138)\">\n<g transform=\"translate(0,165)\"><circle cx=\"24\" cy=\"23\" r=\"20\" fill=\"#edf5ff\"/><text x=\"24\" y=\"29\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#1d5fc4\">4</text><text x=\"62\" y=\"29\" font-family=\"Arial\" font-size=\"14\" fill=\"#263650\">Display SUM</text><path d=\"M24 45 V54\" stroke=\"#8aa6c9\" stroke-width=\"2.5\"/></g>\n</g><g transform=\"translate(58,138)\">\n<g transform=\"translate(0,220)\"><circle cx=\"24\" cy=\"23\" r=\"20\" fill=\"#edf5ff\"/><text x=\"24\" y=\"29\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#1d5fc4\">5</text><text x=\"62\" y=\"29\" font-family=\"Arial\" font-size=\"14\" fill=\"#263650\">Stop</text></g>\n</g>\n<rect x=\"28\" y=\"382\" width=\"449\" height=\"28\" rx=\"8\" fill=\"#f4f8fd\"/>\n<text x=\"252\" y=\"401\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"10.5\" fill=\"#60748f\">Easy to read, write and check step by step.</text>\n</g>\n\n<g transform=\"translate(610,205)\">\n<rect width=\"535\" height=\"430\" rx=\"18\" fill=\"#fff\" stroke=\"#dbe6f3\" stroke-width=\"2\"/>\n<text x=\"267\" y=\"40\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#16a06b\">Flowchart</text>\n<rect x=\"32\" y=\"58\" width=\"471\" height=\"54\" rx=\"11\" fill=\"#ecfaf4\"/>\n<text x=\"267\" y=\"91\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#146f4e\">Graphical representation of the same logic</text>\n<ellipse cx=\"267\" cy=\"145\" rx=\"68\" ry=\"24\" fill=\"#eaf7f0\" stroke=\"#16a06b\" stroke-width=\"3\"/><text x=\"267\" y=\"151\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#146f4e\">Start</text>\n<path d=\"M267 169 V187\" stroke=\"#8aa6c9\" stroke-width=\"3\"/>\n<path d=\"M180 187 H354 L374 214 L354 241 H180 L160 214 Z\" fill=\"#edf5ff\" stroke=\"#2b69d3\" stroke-width=\"3\"/><text x=\"267\" y=\"219\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#263650\">Input A, B</text>\n<path d=\"M267 241 V258\" stroke=\"#8aa6c9\" stroke-width=\"3\"/>\n<rect x=\"182\" y=\"258\" width=\"170\" height=\"50\" rx=\"8\" fill=\"#fff4e8\" stroke=\"#ef8b23\" stroke-width=\"3\"/><text x=\"267\" y=\"288\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#263650\">SUM = A + B</text>\n<path d=\"M267 308 V326\" stroke=\"#8aa6c9\" stroke-width=\"3\"/>\n<path d=\"M180 326 H354 L374 353 L354 380 H180 L160 353 Z\" fill=\"#f5efff\" stroke=\"#7b4fd6\" stroke-width=\"3\"/><text x=\"267\" y=\"358\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" fill=\"#263650\">Display SUM</text>\n<path d=\"M267 380 V395\" stroke=\"#8aa6c9\" stroke-width=\"3\"/>\n<ellipse cx=\"267\" cy=\"418\" rx=\"68\" ry=\"24\" fill=\"#ffecee\" stroke=\"#d94a63\" stroke-width=\"3\"/><text x=\"267\" y=\"424\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#b63750\">Stop</text>\n</g>\n\n<rect x=\"55\" y=\"655\" width=\"1090\" height=\"38\" rx=\"11\" fill=\"#eef4ff\"/>\n<text x=\"600\" y=\"680\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"13.5\" font-weight=\"700\" fill=\"#315f99\">Remember: Algorithm = written steps | Flowchart = graphical steps</text>\n</svg>","cp301-u1-variables-data-types.svg":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"720\" viewBox=\"0 0 1200 720\">\n<rect width=\"1200\" height=\"720\" rx=\"28\" fill=\"#fbfcff\"/>\n<rect x=\"32\" y=\"28\" width=\"1136\" height=\"82\" rx=\"20\" fill=\"#0b2a5b\"/>\n<text x=\"64\" y=\"61\" font-family=\"Arial\" font-size=\"16\" font-weight=\"700\" fill=\"#a8cdfd\">COMPUTER PROGRAMMING 301</text>\n<text x=\"64\" y=\"92\" font-family=\"Arial\" font-size=\"26\" font-weight=\"700\" fill=\"#fff\">Variables, Constants, Data Types and Memory</text>\n\n<g transform=\"translate(55,145)\">\n<rect width=\"350\" height=\"210\" rx=\"18\" fill=\"#fff\" stroke=\"#2b69d3\" stroke-width=\"3\"/>\n<text x=\"175\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#1d5fc4\">Variable</text>\n<text x=\"24\" y=\"76\" font-family=\"Arial\" font-size=\"13\" fill=\"#60748f\">A named storage location whose value may change.</text>\n<rect x=\"24\" y=\"104\" width=\"302\" height=\"70\" rx=\"12\" fill=\"#edf5ff\"/>\n<text x=\"175\" y=\"136\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"18\" font-weight=\"700\" fill=\"#183b6b\">int marks = 75;</text>\n<text x=\"175\" y=\"158\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">marks = name, 75 = current value</text>\n</g>\n\n<g transform=\"translate(425,145)\">\n<rect width=\"350\" height=\"210\" rx=\"18\" fill=\"#fff\" stroke=\"#16a06b\" stroke-width=\"3\"/>\n<text x=\"175\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#16a06b\">Constant</text>\n<text x=\"24\" y=\"76\" font-family=\"Arial\" font-size=\"13\" fill=\"#60748f\">A value intended not to change during execution.</text>\n<rect x=\"24\" y=\"104\" width=\"302\" height=\"70\" rx=\"12\" fill=\"#ecfaf4\"/>\n<text x=\"175\" y=\"136\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"18\" font-weight=\"700\" fill=\"#15684b\">const int DAYS = 7;</text>\n<text x=\"175\" y=\"158\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"11\" fill=\"#60748f\">The value is intended to stay fixed.</text>\n</g>\n\n<g transform=\"translate(795,145)\">\n<rect width=\"350\" height=\"210\" rx=\"18\" fill=\"#fff\" stroke=\"#7b4fd6\" stroke-width=\"3\"/>\n<text x=\"175\" y=\"42\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"21\" font-weight=\"700\" fill=\"#7b4fd6\">Memory Representation</text>\n<text x=\"24\" y=\"76\" font-family=\"Arial\" font-size=\"13\" fill=\"#60748f\">Information is stored in binary form in memory.</text>\n<rect x=\"24\" y=\"104\" width=\"302\" height=\"70\" rx=\"12\" fill=\"#f4efff\"/>\n<text x=\"175\" y=\"130\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">marks</text>\n<text x=\"175\" y=\"151\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"16\" font-weight=\"700\" fill=\"#5d3bab\">→ memory location → 75</text>\n<text x=\"175\" y=\"169\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"10.5\" fill=\"#60748f\">8 bits = 1 byte</text>\n</g>\n\n<text x=\"600\" y=\"405\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"22\" font-weight=\"700\" fill=\"#14213d\">Common C Data Types</text>\n<g transform=\"translate(55,438)\">\n<rect width=\"205\" height=\"150\" rx=\"15\" fill=\"#fff\" stroke=\"#2b69d3\" stroke-width=\"2\"/>\n<rect width=\"205\" height=\"42\" rx=\"15\" fill=\"#edf5ff\"/><rect y=\"28\" width=\"205\" height=\"14\" fill=\"#edf5ff\"/>\n<text x=\"102\" y=\"28\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"17\" font-weight=\"700\" fill=\"#263650\">int</text>\n<text x=\"14\" y=\"72\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Integer values</text>\n<rect x=\"14\" y=\"91\" width=\"177\" height=\"38\" rx=\"8\" fill=\"#f7f9fc\"/>\n<text x=\"102\" y=\"116\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"13\" font-weight=\"700\" fill=\"#30445f\">75</text>\n</g><g transform=\"translate(283,438)\">\n<rect width=\"205\" height=\"150\" rx=\"15\" fill=\"#fff\" stroke=\"#16a06b\" stroke-width=\"2\"/>\n<rect width=\"205\" height=\"42\" rx=\"15\" fill=\"#ecfaf4\"/><rect y=\"28\" width=\"205\" height=\"14\" fill=\"#ecfaf4\"/>\n<text x=\"102\" y=\"28\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"17\" font-weight=\"700\" fill=\"#263650\">char</text>\n<text x=\"14\" y=\"72\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Character value</text>\n<rect x=\"14\" y=\"91\" width=\"177\" height=\"38\" rx=\"8\" fill=\"#f7f9fc\"/>\n<text x=\"102\" y=\"116\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"13\" font-weight=\"700\" fill=\"#30445f\">'A'</text>\n</g><g transform=\"translate(511,438)\">\n<rect width=\"205\" height=\"150\" rx=\"15\" fill=\"#fff\" stroke=\"#ef8b23\" stroke-width=\"2\"/>\n<rect width=\"205\" height=\"42\" rx=\"15\" fill=\"#fff4e8\"/><rect y=\"28\" width=\"205\" height=\"14\" fill=\"#fff4e8\"/>\n<text x=\"102\" y=\"28\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"17\" font-weight=\"700\" fill=\"#263650\">float</text>\n<text x=\"14\" y=\"72\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Floating-point value</text>\n<rect x=\"14\" y=\"91\" width=\"177\" height=\"38\" rx=\"8\" fill=\"#f7f9fc\"/>\n<text x=\"102\" y=\"116\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"13\" font-weight=\"700\" fill=\"#30445f\">3.14</text>\n</g><g transform=\"translate(739,438)\">\n<rect width=\"205\" height=\"150\" rx=\"15\" fill=\"#fff\" stroke=\"#7b4fd6\" stroke-width=\"2\"/>\n<rect width=\"205\" height=\"42\" rx=\"15\" fill=\"#f5efff\"/><rect y=\"28\" width=\"205\" height=\"14\" fill=\"#f5efff\"/>\n<text x=\"102\" y=\"28\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"17\" font-weight=\"700\" fill=\"#263650\">double</text>\n<text x=\"14\" y=\"72\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Double-precision value</text>\n<rect x=\"14\" y=\"91\" width=\"177\" height=\"38\" rx=\"8\" fill=\"#f7f9fc\"/>\n<text x=\"102\" y=\"116\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"13\" font-weight=\"700\" fill=\"#30445f\">3.141592</text>\n</g><g transform=\"translate(967,438)\">\n<rect width=\"205\" height=\"150\" rx=\"15\" fill=\"#fff\" stroke=\"#d94a63\" stroke-width=\"2\"/>\n<rect width=\"205\" height=\"42\" rx=\"15\" fill=\"#ffecee\"/><rect y=\"28\" width=\"205\" height=\"14\" fill=\"#ffecee\"/>\n<text x=\"102\" y=\"28\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"17\" font-weight=\"700\" fill=\"#263650\">void</text>\n<text x=\"14\" y=\"72\" font-family=\"Arial\" font-size=\"12\" fill=\"#60748f\">Absence of a value/type</text>\n<rect x=\"14\" y=\"91\" width=\"177\" height=\"38\" rx=\"8\" fill=\"#f7f9fc\"/>\n<text x=\"102\" y=\"116\" text-anchor=\"middle\" font-family=\"Courier New\" font-size=\"13\" font-weight=\"700\" fill=\"#30445f\">relevant contexts</text>\n</g>\n<rect x=\"175\" y=\"610\" width=\"850\" height=\"44\" rx=\"12\" fill=\"#eef4ff\"/>\n<text x=\"600\" y=\"638\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"14\" font-weight=\"700\" fill=\"#315f99\">Memory idea: variable name → memory location → stored value</text>\n</svg>",
"cp301-u2-arithmetic.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Arithmetic Operators</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Mathematical calculation</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">+  -  *  /  %</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">10 + 3 = 13</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">10 % 3 = 1</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-relational.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Relational Operators</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Compare two values</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650"><  >  <=  >=  ==  !=</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">10 >= 5  →  true</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">10 == 5  →  false</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-logical.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Logical Operators</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Combine conditions</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">&&   ||   !</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">A && B  → both true</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">A || B  → at least one true</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-bitwise.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Bitwise Operators</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Work on individual bits</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">&   |   ^   ~   <<   >></text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">5 = 0101   3 = 0011</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">5 & 3 = 0001 = 1</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-precedence.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Precedence & Associativity</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Decide evaluation order</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">2 + 3 * 4</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">* first → 3 × 4 = 12</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">then + 2 → 14</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-io.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Input → Processing → Output</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Basic C I/O flow</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">scanf() → variable → printf()</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">scanf(\"%d\", &age)</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">printf(\"Age = %d\", age)</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`,
"cp301-u2-file-io.svg":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" rx="24" fill="#f7faff"/><rect x="35" y="28" width="930" height="72" rx="18" fill="#0b2a5b"/><text x="65" y="58" font-family="Arial" font-size="15" font-weight="700" fill="#a8cdfd">COMPUTER PROGRAMMING • 301 • UNIT 2</text><text x="65" y="84" font-family="Arial" font-size="25" font-weight="700" fill="#fff">Basic File I/O</text><rect x="70" y="135" width="860" height="95" rx="16" fill="#fff" stroke="#d9e5f3" stroke-width="2"/><text x="500" y="169" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#1d5fc4">Open → Read/Write → Close</text><text x="500" y="207" text-anchor="middle" font-family="Courier New" font-size="25" font-weight="700" fill="#263650">fopen() → read/write → fclose()</text><path d="M500 230 V275" stroke="#8aa6c9" stroke-width="4"/><path d="M492 263 L500 278 L508 263" fill="none" stroke="#8aa6c9" stroke-width="4"/><rect x="110" y="300" width="370" height="95" rx="15" fill="#edf5ff"/><text x="295" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#14213d">r = read   w = write   a = append</text><text x="295" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Key idea / example</text><rect x="520" y="300" width="370" height="95" rx="15" fill="#ecfaf4"/><text x="705" y="335" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#146f4e">Always check fopen() and close the file</text><text x="705" y="367" text-anchor="middle" font-family="Arial" font-size="13" fill="#60748f">Remember this for exams</text><text x="500" y="445" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#315f99">Understand → practice → recall</text></svg>`
};

const moduleLessons = {
  "Computer Programming|1": {
    title: "Unit 1 — Introduction to Computational Thinking & Variables and Data Representation",
    topics: [
      {
        title: "Concept of problem-solving and computational thinking",
        lesson: `Problem solving means understanding a problem and developing a logical solution that a computer can follow.

Computational thinking is a structured way of thinking about a problem so it can be broken into clear, manageable steps.

The focus is not on guessing the answer. It is on understanding the problem, planning a logical solution, implementing it, testing it and improving it when needed.

Simple example:
Suppose you need to find the total of two numbers. First identify the two inputs, decide that they must be added, plan the steps, perform the calculation and then display the result.`,
        questions: [
          {
            type: "mcq",
            prompt: "What is the main idea of computational thinking?",
            options: ["Solving problems through a logical and structured approach", "Guessing the answer quickly", "Only writing code without planning", "Deleting unnecessary files"],
            answer: 0
          },
          {
            type: "short",
            prompt: "In one or two sentences, explain what problem solving means in programming.",
            keywords: ["problem", "solution"],
            minKeywords: 2,
            modelAnswer: "Problem solving in programming means understanding a problem and developing a logical solution that can be implemented by a computer."
          }
        ]
      },
      {
        title: "Steps involved in problem solving",
        lesson: `A clear problem-solving process helps us move from a problem statement to a working solution.

A simple sequence is:

1. Understand and define the problem.
2. Identify the required inputs and expected outputs.
3. Break the problem into smaller parts.
4. Design the solution using logical steps, an algorithm and/or flowchart.
5. Implement the solution in a programming language.
6. Test the solution with suitable inputs.
7. Find errors and improve the solution if necessary.

The exact wording of the steps may vary, but the important idea is to move systematically from understanding the problem to testing the final solution.`,
        questions: [
          {
            type: "mcq",
            prompt: "Which step should normally come before implementation?",
            options: ["Design the solution", "Delete the program", "Skip testing", "Close the computer"],
            answer: 0
          },
          {
            type: "short",
            prompt: "Write any three steps involved in problem solving.",
            keywords: ["understand", "input", "output", "break", "design", "algorithm", "flowchart", "implement", "test", "error", "improve"],
            minKeywords: 3,
            modelAnswer: "Any three valid steps include: understand the problem, identify inputs/outputs, design the solution, implement it, test it, or find and correct errors."
          }
        ]
      },
      {
        title: "Components of computational thinking",
        lesson: `The syllabus includes the main components of computational thinking.

1. Decomposition — break a large or complex problem into smaller parts.
2. Pattern recognition — identify similarities, repeated steps or common structures.
3. Abstraction — focus on the important information and ignore unnecessary detail.
4. Algorithmic thinking — develop a clear sequence of steps to solve the problem.

Example:
For a student-result problem, we can break the task into reading marks, calculating the result and displaying it. Repeated calculation patterns can be recognized, unnecessary details can be ignored, and then a clear step-by-step method can be designed.`,
        questions: [
          {
            type: "mcq",
            prompt: "Which component means breaking a large problem into smaller parts?",
            options: ["Abstraction", "Decomposition", "Pattern recognition", "Algorithmic thinking"],
            answer: 1
          },
          {
            type: "mcq",
            prompt: "Which component focuses on important information and ignores unnecessary detail?",
            options: ["Abstraction", "Decomposition", "Pattern recognition", "Testing"],
            answer: 0
          },
          {
            type: "short",
            prompt: "Name the four main components of computational thinking.",
            keywords: ["decomposition", "pattern", "abstraction", "algorithmic"],
            minKeywords: 4,
            modelAnswer: "The four main components are decomposition, pattern recognition, abstraction and algorithmic thinking."
          }
        ]
      },
      {
        title: "Converting problems into flowcharts and algorithms",
        lesson: `An algorithm is a clear, finite sequence of steps used to solve a problem.

A flowchart is a graphical representation of an algorithm. It shows the sequence of operations and decisions using standard symbols.

Common flowchart symbols:
• Oval — Start/End
• Rectangle — Process
• Parallelogram — Input/Output
• Diamond — Decision

Example: Add two numbers

Algorithm:
1. Start
2. Read A and B
3. SUM = A + B
4. Display SUM
5. Stop

The same solution can be represented as a flowchart:
Start → Input A, B → SUM = A + B → Display SUM → Stop

So, the problem is first understood, then converted into logical steps, and those steps can be represented as an algorithm and a flowchart.`,
        questions: [
          {
            type: "mcq",
            prompt: "Which flowchart symbol is normally used for a decision?",
            options: ["Oval", "Rectangle", "Diamond", "Parallelogram"],
            answer: 2
          },
          {
            type: "short",
            prompt: "What is an algorithm?",
            keywords: ["finite", "steps"],
            minKeywords: 2,
            modelAnswer: "An algorithm is a finite, ordered sequence of clear steps used to solve a problem."
          },
          {
            type: "short",
            prompt: "Write the basic algorithm steps for adding two numbers.",
            keywords: ["start", "read", "sum", "display", "stop"],
            minKeywords: 4,
            modelAnswer: "Start → Read A and B → calculate SUM = A + B → Display SUM → Stop."
          }
        ]
      },
      {
        title: "Variables, constants, data types and memory representation of variables",
        lesson: `A variable is a named storage location whose value can change during program execution.

Example:
int marks = 75;

A constant is a value that is intended not to change during program execution.

Example:
const int DAYS = 7;

Common C data types include:
• int — integer values
• char — character values
• float — single-precision floating-point values
• double — double-precision floating-point values
• void — represents absence of a value/type in relevant contexts

Computers store information in binary form using bits (0 and 1). A group of 8 bits is called a byte.

A variable is associated with a memory location. Its data type tells the program how the stored value should be interpreted.

Concept:
Variable name → memory location → stored value`,
        questions: [
          {
            type: "mcq",
            prompt: "Which statement correctly describes a variable?",
            options: ["A named storage location whose value can change", "A flowchart symbol", "A file extension", "A value that can never change"],
            answer: 0
          },
          {
            type: "mcq",
            prompt: "Which of the following is a C data type?",
            options: ["int", "flow", "input", "algorithm"],
            answer: 0
          },
          {
            type: "short",
            prompt: "Name any three common C data types.",
            keywords: ["int", "char", "float", "double", "void"],
            minKeywords: 3,
            modelAnswer: "Any three examples are int, char, float, double and void."
          },
          {
            type: "short",
            prompt: "What is the basic idea of memory representation of a variable?",
            keywords: ["variable", "memory", "location"],
            minKeywords: 3,
            modelAnswer: "A variable is stored at a memory location, and its data type tells the program how the stored value is interpreted."
          }
        ]
      }
    ]
  },

  "Computer Programming|2": {
    title: "Unit 2 — Operators and Input-Output",
    topics: [
      {
        title: "Arithmetic Operators",
        lesson: `Arithmetic operators are used to perform mathematical calculations in C.

Operators:
• + Addition
• - Subtraction
• * Multiplication
• / Division
• % Remainder (modulus)

Example:
int a = 10, b = 3;
int sum = a + b;
int product = a * b;
int remainder = a % b;

Important: When both operands are integers, integer division gives an integer result. For example, 10 / 3 gives 3.

Remember:
+ → add
- → subtract
* → multiply
/ → divide
% → remainder`,
        questions: [
          { type:"mcq", prompt:"Which operator gives the remainder after integer division?", options:["/","%","*","+"], answer:1 },
          { type:"mcq", prompt:"What is the value of 10 / 3 when both operands are int?", options:["3","3.33","4","0"], answer:0 },
          { type:"short", prompt:"Write the five basic arithmetic operators in C.", keywords:["+","-","*","/","%"], minKeywords:5, modelAnswer:"The five basic arithmetic operators are +, -, *, / and %." }
        ]
      },
      {
        title: "Relational Operators",
        lesson: `Relational operators compare two values.

Operators:
• < less than
• > greater than
• <= less than or equal to
• >= greater than or equal to
• == equal to
• != not equal to

Example:
if (marks >= 40) {
    printf("Pass");
}

Important difference:
= means assignment.
== means equality comparison.

Relational operators are commonly used to form conditions for decision-making and loops.`,
        questions: [
          { type:"mcq", prompt:"Which operator checks equality?", options:["=","==","!=","<="], answer:1 },
          { type:"mcq", prompt:"Which operator means 'not equal to'?", options:["!=","==","<>","!"], answer:0 },
          { type:"short", prompt:"Differentiate = and == in C.", keywords:["assignment","equality","comparison"], minKeywords:2, modelAnswer:"= assigns a value to a variable, while == compares two values for equality." }
        ]
      },
      {
        title: "Logical Operators",
        lesson: `Logical operators combine conditions or reverse a condition.

Operators:
• && Logical AND — both conditions must be true.
• || Logical OR — at least one condition must be true.
• ! Logical NOT — reverses the truth value.

Example:
if (marks >= 40 && attendance >= 75) {
    printf("Eligible");
}

Think:
AND → both
OR → at least one
NOT → opposite`,
        questions: [
          { type:"mcq", prompt:"Which logical operator is true when both conditions are true?", options:["||","&&","!","&"], answer:1 },
          { type:"mcq", prompt:"What does ! do to a logical condition?", options:["Adds values","Reverses its truth value","Multiplies bits","Assigns a value"], answer:1 },
          { type:"short", prompt:"Explain &&, || and ! in simple words.", keywords:["both","one","reverse"], minKeywords:3, modelAnswer:"&& means both conditions must be true, || means at least one condition is true, and ! reverses the truth value." }
        ]
      },
      {
        title: "Bitwise Operators",
        lesson: `Bitwise operators work directly on the individual bits of integer values.

Main operators:
• & Bitwise AND
• | Bitwise OR
• ^ Bitwise XOR
• ~ Bitwise NOT
• << Left shift
• >> Right shift

Example:
5 = 0101
3 = 0011

5 & 3:
0101
0011
----
0001 = 1

Important: bitwise & and | are different from logical && and ||.`,
        questions: [
          { type:"mcq", prompt:"Which operator is bitwise AND?", options:["&&","&","||","!"], answer:1 },
          { type:"mcq", prompt:"What is 5 & 3 using 4-bit binary representation?", options:["1","2","7","8"], answer:0 },
          { type:"short", prompt:"What is the main difference between bitwise and logical operators?", keywords:["bits","conditions"], minKeywords:2, modelAnswer:"Bitwise operators work on individual bits of integer values, while logical operators work with logical conditions." }
        ]
      },
      {
        title: "Operator Precedence and Associativity",
        lesson: `Operator precedence decides which operator is evaluated first.

Example:
int x = 2 + 3 * 4;

Multiplication is evaluated before addition:
x = 14

Parentheses can explicitly change the order:
int y = (2 + 3) * 4;
y = 20

Associativity decides the evaluation direction when operators at the same precedence level occur together.

Example:
int z = 20 / 5 * 2;

/ and * have the same precedence and are evaluated left-to-right:
20 / 5 = 4
4 * 2 = 8

Exam tip:
Precedence = priority.
Associativity = direction when precedence is the same.`,
        questions: [
          { type:"mcq", prompt:"What is the value of 2 + 3 * 4?", options:["20","14","24","9"], answer:1 },
          { type:"mcq", prompt:"What can be used to explicitly control the order of evaluation?", options:["Comments","Parentheses","Variables only","File modes"], answer:1 },
          { type:"short", prompt:"Differentiate precedence and associativity.", keywords:["priority","direction"], minKeywords:2, modelAnswer:"Precedence determines operator priority, while associativity determines evaluation direction when operators have the same precedence." }
        ]
      },
      {
        title: "Input and Output Functions",
        lesson: `C programs commonly use standard input/output functions from stdio.h.

printf() displays formatted output.
scanf() reads formatted input.

Example:
#include <stdio.h>

int main() {
    int age;
    printf("Enter age: ");
    scanf("%d", &age);
    printf("Age = %d", age);
    return 0;
}

In scanf(), the address operator & is commonly used with ordinary variables so the function can store the entered value in the variable.

Common format specifiers:
%d → integer
%c → character
%f → floating-point value
%s → string

Flow:
Input → scanf() → variable → processing → printf() → output`,
        questions: [
          { type:"mcq", prompt:"Which function is commonly used for formatted output in C?", options:["scanf()","printf()","fopen()","fclose()"], answer:1 },
          { type:"mcq", prompt:"Which format specifier is commonly used for an int?", options:["%s","%c","%d","%f"], answer:2 },
          { type:"short", prompt:"What is the purpose of printf() and scanf()?", keywords:["output","input"], minKeywords:2, modelAnswer:"printf() displays formatted output, while scanf() reads formatted input." }
        ]
      },
      {
        title: "Formatted Output",
        lesson: `Formatted output means displaying values in a controlled and readable format using printf() and format specifiers.

Example:
int marks = 85;
printf("Marks = %d\\n", marks);

Common specifiers:
%d → int
%c → char
%f → floating-point value
%s → string

The format string tells printf() what text to display and how supplied values should be represented.

The escape sequence \\n moves the cursor to a new line.`,
        questions: [
          { type:"mcq", prompt:"Which format specifier is commonly used to print a string?", options:["%d","%c","%s","%f"], answer:2 },
          { type:"mcq", prompt:"What does \\n normally do in a printf() string?", options:["Deletes text","Moves to a new line","Reads input","Closes a file"], answer:1 },
          { type:"short", prompt:"What is formatted output?", keywords:["printf","format","specifier"], minKeywords:2, modelAnswer:"Formatted output is displaying values in a controlled format using printf() and format specifiers." }
        ]
      },
      {
        title: "Basic File I/O",
        lesson: `File I/O allows a C program to store data in a file and retrieve data from it.

Basic workflow:
1. Declare a file pointer.
2. Open the file using fopen().
3. Read from or write to the file.
4. Close the file using fclose().

Example:
FILE *fp;
fp = fopen("notes.txt", "w");

if (fp != NULL) {
    fprintf(fp, "Computer Programming");
    fclose(fp);
}

Common file modes:
• "r" → reading
• "w" → writing; an existing file may be replaced
• "a" → appending

Always check whether fopen() succeeded before using the file pointer, and close the file after finishing.

Simple flow:
Program → fopen() → read/write → fclose() → file`,
        questions: [
          { type:"mcq", prompt:"Which function opens a file in C?", options:["fopen()","fclose()","printf()","scanf()"], answer:0 },
          { type:"mcq", prompt:"Which mode is used to append data to a file?", options:["r","w","a","x"], answer:2 },
          { type:"short", prompt:"Write the basic file I/O sequence.", keywords:["open","read","write","close"], minKeywords:4, modelAnswer:"Open the file, read from or write to it, and then close the file." }
        ]
      }
    ]
  },
  "Computer Programming|3": {
    title:"Unit 3 — Conditional and Looping Constructs",
    topics:[
      {title:"if Statement",lesson:"DEFINITION:\nThe if statement is a decision-making statement. It runs a block of code only when a condition is true. This lets a program choose whether an action should happen.\n\nHOW IT WORKS:\n1. C evaluates the condition inside parentheses.\n2. A non-zero result is treated as true; zero is treated as false.\n3. If true, the statements inside the if block execute.\n4. If false, the program skips that block and continues after it.\n\nSYNTAX:\nif (condition) {\n    statements;\n}\n\nC EXAMPLE:\nint marks = 65;\nif (marks >= 40) {\n    printf(\"Pass\");\n}\n\nOUTPUT:\nPass\n\nDRY RUN:\nmarks is 65. The condition 65 >= 40 is true, so printf(\"Pass\") runs.\n\nCOMMON MISTAKES:\n• Use == to compare two values; a single = assigns a value.\n• Keep the condition inside parentheses.\n• Use braces around the block to make the intended statements clear.\n\nREMEMBER:\nAn if statement has no automatic else branch. When its condition is false, its body is skipped.",questions:[
        {type:"mcq",prompt:"When does an if block execute?",options:["When the condition is true","Always","When false","Only after a loop"],answer:0},
        {type:"mcq",prompt:"Which keyword is used for a simple decision?",options:["when","if","check","case"],answer:1},
        {type:"short",prompt:"What does an if statement do?",keywords:["condition","true","execute"],minKeywords:2,modelAnswer:"An if statement executes a block when its condition is true."}]},
      {title:"if-else Statement",lesson:"DEFINITION:\nThe if-else statement chooses between two alternative blocks. The if block runs when the condition is true; the else block runs when it is false.\n\nHOW IT WORKS:\n1. Evaluate the condition.\n2. If it is true, run the if block and skip the else block.\n3. Otherwise, run the else block.\nOnly one of these two branches is selected in a normal if-else statement.\n\nC EXAMPLE:\nint number = 7;\nif (number % 2 == 0) {\n    printf(\"Even\");\n} else {\n    printf(\"Odd\");\n}\n\nOUTPUT:\nOdd\n\nUNDERSTAND THE OPERATOR:\n% gives the remainder after integer division. An even integer has remainder 0 when divided by 2; an odd integer has remainder 1 or -1.\n\nDRY RUN:\n7 % 2 is 1, so the condition is false and the else branch prints Odd.\n\nCOMMON MISTAKE:\nDo not write an independent second if when you need exactly one of two alternatives. Use else to pair the alternatives.",questions:[
        {type:"mcq",prompt:"How many main alternatives does if-else provide?",options:["One","Two","Three","None"],answer:1},
        {type:"mcq",prompt:"Which block runs when the if condition is false?",options:["for","case","else","while"],answer:2},
        {type:"short",prompt:"What is the purpose of if-else?",keywords:["true","false","alternative"],minKeywords:2,modelAnswer:"if-else chooses one block when the condition is true and another when it is false."}]},
      {title:"Nested if",lesson:"DEFINITION:\nA nested if is an if statement placed inside another if or else block. It is useful when the second decision should only be considered after the first decision succeeds.\n\nC EXAMPLE:\nint marks = 82;\nif (marks >= 40) {\n    if (marks >= 75) {\n        printf(\"Distinction\");\n    }\n}\n\nHOW IT WORKS:\n• First, C checks marks >= 40.\n• If that condition is false, the outer block is skipped and the inner if is never reached.\n• If the outer condition is true, C checks marks >= 75.\n• The message is printed only when both conditions are true.\n\nDRY RUN:\n35 marks → outer condition false → inner if not reached.\n60 marks → outer true → inner false → no message.\n82 marks → outer true → inner true → Distinction.\n\nWHERE IT HELPS:\nUse nested if when one decision depends on another, such as checking eligibility first and then checking a second requirement.\n\nCOMMON MISTAKE:\nIndent nested blocks clearly and match each opening brace { with a closing brace }.",questions:[
        {type:"mcq",prompt:"What is a nested if?",options:["An if inside another if block","An if without a condition","A loop inside switch","A variable"],answer:0},
        {type:"mcq",prompt:"When is the inner if checked?",options:["Before the outer condition","After the outer condition allows entry","At program end","Never"],answer:1},
        {type:"short",prompt:"Why are nested if statements useful?",keywords:["condition","decision","inside"],minKeywords:2,modelAnswer:"They are useful when one decision depends on another condition."}]},
      {title:"Conditional Operator ?: ",lesson:"DEFINITION:\nThe conditional operator ?: is a compact operator for choosing one of two expressions based on a condition. It is also called the ternary operator because it uses three operands.\n\nSYNTAX:\ncondition ? expression_if_true : expression_if_false;\n\nC EXAMPLE:\nint a = 12, b = 20;\nint max = (a > b) ? a : b;\nprintf(\"%d\", max);\n\nOUTPUT:\n20\n\nHOW IT WORKS:\n1. Evaluate a > b.\n2. If true, the expression after ? is selected.\n3. If false, the expression after : is selected.\n4. The selected value is assigned to max.\n\nDRY RUN:\n12 > 20 is false, so b is selected and max becomes 20.\n\nWHEN TO USE IT:\nIt is best for a simple choice between two expressions. Use if-else when the logic contains several statements or becomes hard to read.\n\nCOMMON MISTAKE:\nRemember both symbols: ? separates the condition from the true expression, and : separates the true and false expressions.",questions:[
        {type:"mcq",prompt:"Which operator is called the conditional operator?",options:["::","?:","??","=>"],answer:1},
        {type:"mcq",prompt:"How many expressions are selected by a basic conditional operator?",options:["One","Two","Three","Four"],answer:1},
        {type:"short",prompt:"How does ?: choose between two expressions?",keywords:["condition","true","false"],minKeywords:2,modelAnswer:"The condition selects the first expression when true and the second when false."}]},
      {title:"for Loop",lesson:"DEFINITION:\nA for loop repeats a block of code. It is especially useful when the loop variable, stopping condition and update can be written together.\n\nSYNTAX:\nfor (initialization; condition; update) {\n    statements;\n}\n\nC EXAMPLE:\nfor (int i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n}\n\nOUTPUT:\n1 2 3 4 5\n\nTHE THREE PARTS:\n• Initialization: int i = 1 runs once before the loop starts.\n• Condition: i <= 5 is checked before every iteration.\n• Update: i++ increases i by 1 after the body finishes.\n\nDRY RUN:\ni = 1 → condition true → print 1 → update to 2.\nThis repeats through i = 5. After printing 5, i becomes 6; 6 <= 5 is false, so the loop stops.\n\nCOMMON MISTAKES:\n• The condition must eventually become false, or the loop may run forever.\n• A semicolon in the wrong place can create an empty loop body.\n• Check whether the final value should be included (< versus <=).",questions:[
        {type:"mcq",prompt:"Which three parts are commonly in a for header?",options:["Input, output, print","Initialization, condition, update","Start, stop, switch","Case, break, default"],answer:1},
        {type:"mcq",prompt:"When is the for-loop condition checked?",options:["Before each iteration","Only after the loop","Never","Only once"],answer:0},
        {type:"short",prompt:"Give one situation where a for loop is useful.",keywords:["repeat","iteration"],minKeywords:1,modelAnswer:"A for loop is useful when a task needs repeated iterations with a clear initialization, condition and update."}]},
      {title:"while Loop",lesson:"DEFINITION:\nA while loop repeatedly executes a block as long as its condition remains true. It is useful when repetition depends on a condition and the number of iterations may not be known in advance.\n\nSYNTAX:\nwhile (condition) {\n    statements;\n}\n\nC EXAMPLE:\nint i = 1;\nwhile (i <= 5) {\n    printf(\"%d \", i);\n    i++;\n}\n\nOUTPUT:\n1 2 3 4 5\n\nHOW IT WORKS:\n1. Check i <= 5 before entering the body.\n2. If true, print i.\n3. Increase i so the next check uses a new value.\n4. Repeat until the condition is false.\n\nIMPORTANT DIFFERENCE:\nA while loop can execute zero times. If its condition is false at the very first check, the body is skipped entirely.\n\nCOMMON MISTAKE:\nDo not forget to update the loop variable when needed. For example, forgetting i++ in this example means i stays 1 and the condition remains true forever.",questions:[
        {type:"mcq",prompt:"When does a while loop check its condition?",options:["Before each iteration","Only after the body","At program end","Never"],answer:0},
        {type:"mcq",prompt:"Can a while loop execute zero times?",options:["Yes","No","Only in C++","Only with switch"],answer:0},
        {type:"short",prompt:"What is the main idea of a while loop?",keywords:["condition","repeat","before"],minKeywords:2,modelAnswer:"A while loop repeats a block while its condition remains true and checks it before each iteration."}]},
      {title:"do-while Loop",lesson:"DEFINITION:\nA do-while loop is a condition-controlled loop that executes the body first and checks the condition afterward. Therefore, its body always executes at least once.\n\nSYNTAX:\ndo {\n    statements;\n} while (condition);\n\nC EXAMPLE:\nint i = 5;\ndo {\n    printf(\"%d \", i);\n    i++;\n} while (i <= 3);\n\nOUTPUT:\n5\n\nHOW IT WORKS:\n1. The body prints 5.\n2. i is increased to 6.\n3. C checks 6 <= 3.\n4. The condition is false, so the loop stops—but the body has already run once.\n\nWHY IT IS USEFUL:\nIt can be used for menus or prompts that must be shown at least once before deciding whether to repeat.\n\nCOMMON MISTAKE:\nA semicolon is required after while(condition); at the end of a do-while loop. This differs from the usual while loop syntax.",questions:[
        {type:"mcq",prompt:"When is the do-while condition checked?",options:["Before the body","After the body","Before the program","Never"],answer:1},
        {type:"mcq",prompt:"Minimum number of body executions?",options:["Zero","One","Two","Depends on switch"],answer:1},
        {type:"short",prompt:"Why does do-while execute at least once?",keywords:["body","condition","after"],minKeywords:2,modelAnswer:"The body runs before the condition is checked, so it executes at least once."}]},
      {title:"Nested Loops",lesson:"DEFINITION:\nA nested loop is a loop placed inside another loop. The outer loop controls one level of repetition; the inner loop completes its own repetitions for each outer-loop iteration.\n\nC EXAMPLE:\nfor (int row = 1; row <= 2; row++) {\n    for (int col = 1; col <= 3; col++) {\n        printf(\"* \");\n    }\n    printf(\"\\\\n\");\n}\n\nOUTPUT:\n* * *\n* * *\n\nHOW IT WORKS:\n• The outer loop selects row 1.\n• The inner loop prints three stars for columns 1, 2 and 3.\n• The inner loop finishes; the newline moves output to the next line.\n• The outer loop selects row 2 and the inner loop runs three more times.\n\nCOUNT THE WORK:\n2 rows × 3 columns = 6 executions of the inner loop body.\n\nWHERE IT HELPS:\nNested loops are common in pattern printing, multiplication tables, matrices and row-column data.\n\nCOMMON MISTAKE:\nThe inner loop normally starts again for each outer iteration. Carefully check which variable belongs to each loop.",questions:[
        {type:"mcq",prompt:"What is a nested loop?",options:["A loop inside another loop","A loop without a condition","A switch inside if","A function only"],answer:0},
        {type:"mcq",prompt:"For each outer-loop iteration, what normally happens to the inner loop?",options:["It completes its iterations","It is skipped forever","The program exits","The outer loop stops"],answer:0},
        {type:"short",prompt:"Name one common use of nested loops.",keywords:["pattern","table","matrix"],minKeywords:1,modelAnswer:"Nested loops are commonly used for patterns, tables or multidimensional data."}]},
      {title:"switch-case",lesson:"DEFINITION:\nThe switch-case statement selects a branch by matching the value of an expression against case labels. It is useful for menus or a fixed set of choices.\n\nBASIC FORM:\nswitch (choice) {\n    case 1:\n        printf(\"Add\");\n        break;\n    case 2:\n        printf(\"Subtract\");\n        break;\n    default:\n        printf(\"Invalid choice\");\n}\n\nHOW IT WORKS:\n1. Evaluate choice.\n2. Jump to the matching case label.\n3. Run that case's statements.\n4. break exits the switch.\n5. If no case matches, default runs when it is provided.\n\nIMPORTANT RULES:\n• Case labels must be constant values of a compatible type.\n• The default section is optional but helpful for unexpected choices.\n• Without break, execution may fall through into later cases.\n\nCOMMON MISTAKE:\nDo not confuse switch with a general range comparison. For ranges such as marks >= 40, an if-else structure is usually more suitable.",questions:[
        {type:"mcq",prompt:"Which keyword selects an alternative in switch?",options:["case","choose","option","select"],answer:0},
        {type:"mcq",prompt:"What is the purpose of default?",options:["Runs when no case matches","Always runs first","Exits every loop","Declares a variable"],answer:0},
        {type:"short",prompt:"Why is break commonly used inside switch cases?",keywords:["stop","next","case"],minKeywords:2,modelAnswer:"break stops execution from falling through to the next case."}]},
      {title:"break Statement",lesson:"DEFINITION:\nThe break statement immediately exits the nearest enclosing loop or switch statement. Execution continues at the first statement after that loop or switch.\n\nC EXAMPLE:\nfor (int i = 1; i <= 5; i++) {\n    if (i == 4) {\n        break;\n    }\n    printf(\"%d \", i);\n}\n\nOUTPUT:\n1 2 3\n\nDRY RUN:\nWhen i is 1, 2 and 3, the condition i == 4 is false, so each value is printed. When i becomes 4, break runs before printf, and the loop ends.\n\nWHERE IT WORKS:\nbreak can be used inside loops and switch statements. It exits only the nearest enclosing loop or switch, not every nested loop.\n\nCOMMON MISTAKE:\nbreak is different from continue. break ends the loop; continue skips only the remaining statements in the current iteration.",questions:[
        {type:"mcq",prompt:"What does break do inside a loop?",options:["Skips one iteration","Terminates the nearest loop","Restarts the loop","Pauses the program"],answer:1},
        {type:"mcq",prompt:"Where does control go after break exits a loop?",options:["To the next statement after the loop","To the loop condition forever","To the first line","To another case"],answer:0},
        {type:"short",prompt:"What is the main purpose of break?",keywords:["terminate","loop","exit"],minKeywords:2,modelAnswer:"break terminates the nearest enclosing loop or switch."}]},
      {title:"continue Statement",lesson:"DEFINITION:\nThe continue statement skips the remaining statements in the current loop iteration and moves to the next iteration. It does not end the loop.\n\nC EXAMPLE:\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) {\n        continue;\n    }\n    printf(\"%d \", i);\n}\n\nOUTPUT:\n1 2 4 5\n\nDRY RUN:\nWhen i is 1 and 2, the value is printed. When i becomes 3, continue skips printf. The for loop still performs its update, i becomes 4, and printing resumes.\n\nBREAK VS CONTINUE:\n• break: exits the nearest enclosing loop or switch.\n• continue: skips the rest of the current loop iteration and continues with the next one.\n\nCOMMON MISTAKE:\nIn a while loop, make sure the loop variable still updates when continue is used. If the update is accidentally skipped, the loop may never reach its stopping condition.",questions:[
        {type:"mcq",prompt:"What does continue do inside a loop?",options:["Terminates the loop","Skips the current iteration","Ends the program","Repeats the same iteration"],answer:1},
        {type:"mcq",prompt:"After continue, what normally happens?",options:["The next iteration begins","The program exits","The loop becomes a switch","The previous iteration repeats"],answer:0},
        {type:"short",prompt:"Differentiate break and continue.",keywords:["break","terminate","continue","skip"],minKeywords:3,modelAnswer:"break terminates the loop, while continue skips the current iteration and proceeds with the next one."}]}
    ]
  }
};
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
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [medium, setMedium] = useState(() => window.localStorage.getItem('cse-diploma-medium') === 'hi' ? 'hi' : 'en');
  useEffect(() => { window.localStorage.setItem('cse-diploma-medium', medium); }, [medium]);
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const nav = ['Dashboard', 'Subjects', 'Modules', 'Notes', 'Question Papers', 'MCQ Practice', 'Study Planner', 'AI Study Assistant'];
  const query = search.trim().toLowerCase();
  const filteredSubjects = useMemo(() => subjects.filter((subject) => { const localizedTopics = hindiSyllabus[subject.code] || []; return `${subject.name} ${subject.code} ${subject.topics.join(' ')} ${localizedTopics.join(' ')}`.toLowerCase().includes(query); }), [query]);

  useEffect(() => {
    const initialState = {
      gpStudentPortal: true,
      active: 'Dashboard',
      selectedSubject: null,
      selectedUnit: null,
    };

    if (!window.history.state?.gpStudentPortal) {
      window.history.replaceState(initialState, '', window.location.href);
    }

    const handlePopState = (event) => {
      const state = event.state;
      setActive(state?.gpStudentPortal && state.active ? state.active : 'Dashboard');
      setSelectedSubject(state?.gpStudentPortal ? (state.selectedSubject || null) : null);
      setSelectedUnit(state?.gpStudentPortal ? (state.selectedUnit || null) : null);
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const go = (page, subject = null, unit = null) => {
    const nextSubject = subject || null;
    const nextUnit = unit || null;

    if (active === page && (selectedSubject || null) === nextSubject && (selectedUnit || null) === nextUnit) {
      setMenuOpen(false);
      return;
    }

    const nextState = {
      gpStudentPortal: true,
      active: page,
      selectedSubject: nextSubject,
      selectedUnit: nextUnit,
    };

    window.history.pushState(nextState, '', window.location.href);
    setActive(page);
    setSelectedSubject(nextSubject);
    setSelectedUnit(nextUnit);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const pageTitle = active === 'Dashboard' ? 'Student Dashboard' : active === 'Module' ? 'Study Module' : active;

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="brand"><div className="brand-mark"><GraduationCap size={23}/></div><div><strong>CSE Diploma</strong><span>Learning Platform</span></div><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20}/></button></div>
        <div className="college-chip">Study support for<br/>Diploma &amp; Polytechnic students</div>
        <nav>{nav.map((item) => <button key={item} className={active === item ? 'nav-item active' : 'nav-item'} onClick={() => { go(item); setMenuOpen(false); }}><span>{item === 'Dashboard' ? <LayoutDashboard size={18}/> : item === 'Subjects' ? <BookOpen size={18}/> : item === 'Modules' ? <BookOpen size={18}/> : item === 'Notes' ? <FileText size={18}/> : item === 'Question Papers' ? <FileText size={18}/> : item === 'MCQ Practice' ? <CircleHelp size={18}/> : item === 'Study Planner' ? <CalendarDays size={18}/> : <BrainCircuit size={18}/>}</span>{item}</button>)}</nav>
        <div className="sidebar-bottom"><div className="security-note"><ShieldCheck size={17}/><span>Learning resources<br/><b>Student-focused</b></span></div></div>
      </aside>

      <main className="main">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22}/></button><div className="crumb">Academic Portal <ChevronRight size={15}/> <b>{pageTitle}</b></div><div className="search-box"><Search size={17}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects, topics, notes..."/></div><div className="medium-switch" role="group" aria-label="Study material language"><span className="medium-label">Study Medium</span><button type="button" className={medium === 'en' ? 'medium-option active' : 'medium-option'} aria-pressed={medium === 'en'} onClick={() => setMedium('en')}>English</button><button type="button" className={medium === 'hi' ? 'medium-option active' : 'medium-option'} aria-pressed={medium === 'hi'} onClick={() => setMedium('hi')}>हिन्दी</button></div></header>

        <section className="content">
          {active === 'Dashboard' && <Dashboard go={go} filteredSubjects={filteredSubjects} />}
          {active === 'Subjects' && <Subjects filteredSubjects={filteredSubjects} go={go} medium={medium} />}
          {active === 'Modules' && <ModuleLibrary go={go} subjectFilter={selectedSubject} medium={medium} />}
          {active === 'Notes' && <Notes search={query} subjectFilter={selectedSubject} medium={medium} />}
          {active === 'Module' && <StudyModule subject={selectedSubject} unit={selectedUnit} onExit={() => go('Modules', selectedSubject)} medium={medium} />}
          {active === 'Question Papers' && <Papers medium={medium} />}
          {active === 'MCQ Practice' && <MCQPractice mcq={(medium === 'hi' ? hindiMcqs[mcqIndex] : mcqs[mcqIndex])} index={mcqIndex} selected={selected} score={score} answer={answerMcq} next={nextMcq} />}
          {active === 'Study Planner' && <Planner tasks={tasks} newTask={newTask} setNewTask={setNewTask} addTask={addTask} toggleTask={toggleTask} />}
          {active === 'AI Study Assistant' && <AIAssistant question={aiQuestion} setQuestion={setAiQuestion} answer={aiAnswer} loading={aiLoading} ask={askAI} />}
          <footer><span>CSE Diploma Learning</span><span>Learning platform • Built for students</span></footer>
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
    <div className="subject-grid">{filteredSubjects.map(({name,code,icon:Icon,tag},i) => <button className="subject-card" key={code} onClick={() => go('Modules', name)}><div className="subject-top"><div className="subject-icon"><Icon size={20}/></div><span>{tag}</span></div><strong>{name}</strong><small>{code} · Study material available</small><div className="progress"><i style={{width:`${52+i*8}%`}}/></div></button>)}</div>
    <div className="lower-grid"><section className="notice-card"><div className="card-title"><div><span className="section-kicker">STUDENT HUB</span><h2>Build your study routine</h2></div><CalendarDays size={21}/></div><div className="notice"><b>Study resources</b><span>Notes, question papers and revision material are organized into dedicated sections.</span></div><div className="notice"><b>Practice zone</b><span>Use MCQs to check your understanding before exams.</span></div></section><section className="planner-card"><div className="card-title"><div><span className="section-kicker">YOUR FOCUS</span><h2>One target at a time</h2></div><Target size={21}/></div><div className="focus-ring"><strong>01</strong><span>Set one small target<br/>for today.</span></div><button className="primary full" onClick={() => go('Study Planner')}>Open Study Planner <ChevronRight size={17}/></button></section></div>
  </>;
}

function Subjects({ filteredSubjects, go, medium }) {
  const [selected, setSelected] = useState(filteredSubjects[0]?.code || null);
  const current = filteredSubjects.find((s) => s.code === selected);
  return <><div className="page-intro"><span className="section-kicker">ACADEMIC CONTENT</span><h1>Subjects & Modules</h1><p>Choose a subject to see its current module outline and jump into study material.</p></div><div className="subject-page-grid"><div className="subject-list">{filteredSubjects.map(({name,code,icon:Icon,tag}) => <button key={code} className={selected===code?'subject-row selected':'subject-row'} onClick={() => setSelected(code)}><span className="subject-icon"><Icon size={19}/></span><span><strong>{name}</strong><small>{code} · {tag}</small></span><ChevronRight size={17}/></button>)}</div>{current && <section className="module-panel"><div className="module-head"><div className="subject-icon">{React.createElement(current.icon,{size:21})}</div><div><span className="section-kicker">MODULE OUTLINE</span><h2>{current.name}</h2><small>{current.code}</small></div></div><div className="topic-list">{current.topics.map((topic,i)=><button key={topic} onClick={() => {
            if (current.name === 'Computer Programming' && i === 0) {
              go('Module', current.name, 1);
            } else {
              go('Notes', current.name);
            }
          }}><span>{String(i+1).padStart(2,'0')}</span><b>{medium === 'hi' ? (hindiSyllabus[current.code]?.[i] || topic) : topic}</b><ChevronRight size={16}/></button>)}</div><button className="primary full" onClick={() => go('Notes', current.name)}>Open Study Material <BookOpen size={16}/></button></section>}</div></>;
}

function Notes({ search, subjectFilter, medium }) {
  const localizedNotes = notes.map((note) => medium === 'hi' ? { ...note, ...(hindiNotes[`${note.code}|${note.unit}`] || {}) } : note);
  const filtered = localizedNotes.filter((n) => {
    const original = notes.find((item) => item.code === n.code && item.unit === n.unit);
    return (!subjectFilter || n.subject === subjectFilter) && `${n.subject} ${n.code} ${n.unit} ${n.title} ${n.desc} ${original?.title || ''} ${original?.desc || ''}`.toLowerCase().includes(search);
  });
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
          {(() => {
            let inImportantQuestions = false;
            return selectedNote.content.split('\n').map((line, i) => {
              const text = line.trim();
              const isImportantQuestionsHeading =
                /^(?:IMPORTANT EXAM QUESTIONS|महत्वपूर्ण परीक्षा प्रश्न(?:\s*\(IMPORTANT EXAM QUESTIONS\))?|महत्वपूर्ण प्रश्न(?:\s*\(IMPORTANT EXAM QUESTIONS\))?)\s*:?\s*$/i.test(text);
              const isEndOfImportantQuestions =
                /^(?:\d+\.\s*)?(?:PRACTICAL.*PRACTICE|QUICK EXAM REVISION|SYLLABUS ALIGNMENT|त्वरित परीक्षा पुनरावृत्ति.*|प्रैक्टिकल अभ्यास.*|प्रैक्टिस|अभ्यास|पाठ्यक्रम अनुरूपता.*|विस्तृत विषय-वस्तु.*|DETAILED TOPIC COVERAGE)\s*:?\s*$/i.test(text);

              if (isImportantQuestionsHeading) inImportantQuestions = true;
              const isImportantQuestion = inImportantQuestions && /^\d+\.\s+/.test(text);
              if (isEndOfImportantQuestions && !isImportantQuestionsHeading) inImportantQuestions = false;

              const isHeading =
                /^\d+\.\s+/.test(text) ||
                /^(IMPORTANT EXAM QUESTIONS|PRACTICAL PRACTICE|QUICK EXAM REVISION|SYLLABUS ALIGNMENT|PRACTICAL PRACTICE|FUNCTION VS RECURSIVE FUNCTION|त्वरित परीक्षा पुनरावृत्ति \(QUICK EXAM REVISION\)|महत्वपूर्ण परीक्षा प्रश्न \(IMPORTANT EXAM QUESTIONS\)|महत्वपूर्ण प्रश्न|प्रैक्टिकल अभ्यास \(PRACTICAL PRACTICE\)|पाठ्यक्रम अनुरूपता \(SYLLABUS ALIGNMENT\)|विस्तृत विषय-वस्तु \(DETAILED TOPIC COVERAGE\))$/.test(text);
              const isLabel = /^(Example:|Syntax:|General form:|Declaration:|Initialization:|Access example:)$/.test(text);

              if (!text) return <div key={i} className="note-blank" />;

              const className = isImportantQuestionsHeading
                ? 'note-important-heading'
                : isImportantQuestion
                  ? 'note-important-question'
                  : isHeading
                    ? 'note-heading'
                    : isLabel
                      ? 'note-label'
                      : 'note-line';

              return <div key={i} className={className}>{line}</div>;
            });
          })()}
        </div>
        <button className="primary full" style={{marginTop:'16px'}} onClick={() => setSelectedNote(null)}>Close Resource</button>
      </section>
    </div>}
  </>;
}



function ModuleLibrary({ go, subjectFilter, medium }) {
  const moduleSubjects = subjects.filter((subject) => subject.code && subject.code !== '—');
  const initialCode = moduleSubjects.find((subject) => subject.name === subjectFilter)?.code || moduleSubjects[0]?.code || null;
  const [selected, setSelected] = useState(initialCode);

  useEffect(() => {
    const nextCode = moduleSubjects.find((subject) => subject.name === subjectFilter)?.code || moduleSubjects[0]?.code || null;
    setSelected(nextCode);
  }, [subjectFilter]);

  const current = moduleSubjects.find((subject) => subject.code === selected);

  return <>
    <div className="page-intro">
      <span className="section-kicker">INTERACTIVE LEARNING</span>
      <h1>Modules</h1>
      <p>Choose a subject, select its unit, and open the interactive module. The learning flow is topic-by-topic with questions before moving ahead.</p>
    </div>

    <div className="subject-page-grid">
      <div className="subject-list">
        {moduleSubjects.map(({name,code,icon:Icon,tag}) => (
          <button key={code} className={selected===code ? 'subject-row selected' : 'subject-row'} onClick={() => setSelected(code)}>
            <span className="subject-icon"><Icon size={19}/></span>
            <span><strong>{name}</strong><small>{code} · {tag}</small></span>
            <ChevronRight size={17}/>
          </button>
        ))}
      </div>

      {current && <section className="module-panel">
        <div className="module-head">
          <div className="subject-icon">{React.createElement(current.icon,{size:21})}</div>
          <div>
            <span className="section-kicker">MODULES · {current.code}</span>
            <h2>{current.name}</h2>
            <small>Select a unit to start interactive learning</small>
          </div>
        </div>

        <div className="topic-list">
          {current.topics.map((topic,i) => {
            const available = current.name === 'Computer Programming' && i >= 0 && i <= 2;
            return <button
              key={topic}
              disabled={!available}
              className={available ? '' : 'module-topic-disabled'}
              onClick={() => available && go('Module', current.name, i + 1)}
            >
              <span>{String(i+1).padStart(2,'0')}</span>
              <b>{medium === 'hi' ? (hindiSyllabus[current.code]?.[i] || topic) : topic}</b>
              <span className={available ? 'module-open-badge' : 'module-soon-badge'}>{available ? 'Open Module' : 'Coming Soon'}</span>
              <ChevronRight size={16}/>
            </button>;
          })}
        </div>
      </section>}
    </div>
  </>;
}


function Unit3Lab({ title, subtitle, code, takeaway, challenge, answer, children }) {
  const [showAnswer,setShowAnswer]=useState(false);
  return <section className="unit3-lab-card">
    <div className="unit3-lab-header">
      <div><span className="unit3-lab-kicker">HANDS-ON C LAB · UNIT 3</span><h3>{title}</h3><p>{subtitle}</p></div>
      <span className="unit3-lab-badge"><Sparkles size={13}/> Explore</span>
    </div>
    <div className="unit3-lab-workspace">{children}</div>
    <div className="unit3-lab-learning-grid">
      <section className="unit3-code-panel"><div className="unit3-panel-heading"><Code2 size={14}/> C CODE PATTERN</div><pre><code>{code}</code></pre></section>
      <section className="unit3-idea-panel"><div className="unit3-panel-heading"><BookOpen size={14}/> KEY IDEA</div><p>{takeaway}</p></section>
    </div>
    <div className="unit3-challenge-panel">
      <div className="unit3-challenge-copy"><span>YOUR TURN</span><strong>{challenge}</strong>{showAnswer&&<p>{answer}</p>}</div>
      <button type="button" onClick={()=>setShowAnswer(value=>!value)}>{showAnswer?'Hide answer':'Reveal answer'} <ChevronRight size={14}/></button>
    </div>
  </section>;
}

function VisualLearningLab({ topicIndex, subject, unit }) {
  const [a,setA]=useState(10), [b,setB]=useState(3), [op,setOp]=useState('+');
  const [step,setStep]=useState(0), [logicA,setLogicA]=useState(true), [logicB,setLogicB]=useState(false);
  const [ioValue,setIoValue]=useState('25'), [ioRun,setIoRun]=useState(false);
  const [formatValue,setFormatValue]=useState('85'), [formatSpec,setFormatSpec]=useState('%d');
  const [fileMode,setFileMode]=useState('w'), [fileText,setFileText]=useState('Computer Programming');

  const binary4=(n)=>((Number(n)||0)&15).toString(2).padStart(4,'0');
  const arithmetic=op==='+'?a+b:op==='-'?a-b:op==='*'?a*b:b===0?'undefined':Math.trunc(a/b);
  const relation=op==='<'?a<b:op==='>'?a>b:op==='<='?a<=b:op==='>='?a>=b:op==='=='?a===b:a!==b;
  const logical=op==='&&'?(logicA&&logicB):op==='||'?(logicA||logicB):!logicA;
  const bitwise=op==='&'?((a|0)&(b|0)):op==='|'?((a|0)|(b|0)):((a|0)^(b|0));
  const bitsA=binary4(a), bitsB=binary4(b), bitsR=binary4(bitwise);
  const [problemChoice,setProblemChoice]=useState('sum'), [problemStep,setProblemStep]=useState(0);
  const [ctPart,setCtPart]=useState('decomposition');
  const [algA,setAlgA]=useState('10'), [algB,setAlgB]=useState('20'), [algStep,setAlgStep]=useState(0);
  const [varValue,setVarValue]=useState('75'), [varType,setVarType]=useState('int');
  const [ifNumber,setIfNumber]=useState(55), [ifThreshold,setIfThreshold]=useState(40);
  const [parityNumber,setParityNumber]=useState(7);
  const [nestedMarks,setNestedMarks]=useState(82), [nestedAttendance,setNestedAttendance]=useState(80);
  const [condA,setCondA]=useState(12), [condB,setCondB]=useState(20);
  const [loopStart,setLoopStart]=useState(1), [loopEnd,setLoopEnd]=useState(5), [loopStep,setLoopStep]=useState(1);
  const [whileStart,setWhileStart]=useState(1), [whileLimit,setWhileLimit]=useState(5);
  const [doStart,setDoStart]=useState(0), [doLimit,setDoLimit]=useState(3);
  const [gridRows,setGridRows]=useState(3), [gridCols,setGridCols]=useState(4);
  const [switchChoice,setSwitchChoice]=useState('2');
  const [breakStop,setBreakStop]=useState(4);
  const [skipValue,setSkipValue]=useState(3);

  const isUnit1=subject==='Computer Programming' && String(unit)==='1';
  if(isUnit1 && topicIndex===0) return <div className="visual-lab">
    <div className="visual-lab-title">Turn a problem into a solution</div>
    <div className="visual-toggle-row"><button className={problemChoice==='sum'?'active':''} onClick={()=>{setProblemChoice('sum');setProblemStep(0)}}>Add two numbers</button><button className={problemChoice==='average'?'active':''} onClick={()=>{setProblemChoice('average');setProblemStep(0)}}>Find average</button></div>
    <div className="problem-pipeline">{(problemChoice==='sum'?['Problem','Inputs: A, B','Operation: A + B','Output: SUM']:['Problem','Inputs: A, B','Operation: (A + B) / 2','Output: Average']).map((x,i)=><div className={i<=problemStep?'shown':''} key={x}>{i+1}. {x}</div>)}</div>
    <div className="visual-step-actions"><button disabled={problemStep===0} onClick={()=>setProblemStep(problemStep-1)}>Previous</button><button disabled={problemStep===3} onClick={()=>setProblemStep(problemStep+1)}>Next step</button></div>
    <small>Problem solving means understanding the problem, identifying inputs/outputs, planning the logic and then implementing it.</small>
  </div>;

  if(isUnit1 && topicIndex===1) return <div className="visual-lab">
    <div className="visual-lab-title">Problem-solving process — move through the steps</div>
    <div className="problem-pipeline">{['Understand problem','Identify inputs & outputs','Design algorithm / flowchart','Implement in C','Test with inputs','Find errors & improve'].map((x,i)=><button className={i===problemStep?'shown':''} onClick={()=>setProblemStep(i)} key={x}>{i+1}. {x}</button>)}</div>
    <div className="visual-output"><b>Step {problemStep+1}:</b> {['Understand what is being asked.','Decide what data enters and what result is required.','Plan clear logical steps.','Write the solution in a programming language.','Check the program with suitable inputs.','Correct errors and improve the solution.'][problemStep]}</div>
  </div>;

  if(isUnit1 && topicIndex===2) return <div className="visual-lab">
    <div className="visual-lab-title">Explore the four components of computational thinking</div>
    <div className="visual-toggle-row">{[['decomposition','Decomposition'],['pattern','Pattern recognition'],['abstraction','Abstraction'],['algorithmic','Algorithmic thinking']].map(([v,label])=><button key={v} className={ctPart===v?'active':''} onClick={()=>setCtPart(v)}>{label}</button>)}</div>
    <div className="ct-demo"><b>{ctPart==='decomposition'?'Break it down':ctPart==='pattern'?'Find repetition':ctPart==='abstraction'?'Keep what matters':'Create clear steps'}</b><span>{ctPart==='decomposition'?'Large problem → smaller manageable parts':ctPart==='pattern'?'Notice similarities and repeated structures':ctPart==='abstraction'?'Ignore unnecessary details and focus on important information':'Arrange a logical sequence that solves the problem'}</span></div>
  </div>;

  if(isUnit1 && topicIndex===3) return <div className="visual-lab">
    <div className="visual-lab-title">Algorithm → flowchart for adding two numbers</div>
    <div className="visual-controls"><input type="number" value={algA} onChange={e=>setAlgA(e.target.value)}/><span>+</span><input type="number" value={algB} onChange={e=>setAlgB(e.target.value)}/><button onClick={()=>setAlgStep(algStep===4?0:algStep+1)}>{algStep===4?'Reset':'Next step'}</button></div>
    <div className="algorithm-flow">{['START','Read A = '+(algA||'...')+', B = '+(algB||'...'),'SUM = '+(Number(algA||0)+Number(algB||0)),'Display SUM','STOP'].map((x,i)=><div className={i<=algStep?'shown':''} key={x}>{x}</div>)}</div>
    <small>Click Next step to follow the same logical sequence an algorithm/flowchart represents.</small>
  </div>;

  if(isUnit1 && topicIndex===4) return <div className="visual-lab">
    <div className="visual-lab-title">Variable + data type + memory value</div>
    <div className="visual-controls"><input value={varValue} onChange={e=>setVarValue(e.target.value)} placeholder="Type a value"/><select value={varType} onChange={e=>setVarType(e.target.value)}><option>int</option><option>char</option><option>float</option><option>double</option></select></div>
    <div className="variable-card"><code>{varType} value = {varType==='char' ? "'"+(varValue||'A')[0]+"'" : (varValue||'0')};</code><div className="memory-box"><span>Memory</span><b>{varValue||'empty'}</b><small>{varType} variable</small></div></div>
    <small>A variable is a named storage location whose value can change during program execution. The selected data type tells the program what kind of value is stored.</small>
  </div>;


  const isUnit2=subject==='Computer Programming' && String(unit)==='2';
  if(isUnit2 && topicIndex===0) return <div className="visual-lab">
    <div className="visual-lab-title">Try the operator</div>
    <div className="visual-controls"><input type="number" value={a} onChange={e=>setA(Number(e.target.value))}/><select value={op} onChange={e=>setOp(e.target.value)}><option>+</option><option>-</option><option>*</option><option>/</option></select><input type="number" value={b} onChange={e=>setB(Number(e.target.value))}/></div>
    <div className="visual-result"><span>{a} {op} {b}</span><b>= {arithmetic}</b></div>
  </div>;

  if(isUnit2 && topicIndex===1) return <div className="visual-lab">
    <div className="visual-lab-title">Change the values and compare</div>
    <div className="visual-controls"><input type="number" value={a} onChange={e=>setA(Number(e.target.value))}/><select value={op} onChange={e=>setOp(e.target.value)}><option>&lt;</option><option>&gt;</option><option>&lt;=</option><option>&gt;=</option><option>==</option><option>!=</option></select><input type="number" value={b} onChange={e=>setB(Number(e.target.value))}/></div>
    <div className={`visual-result ${relation?'is-true':'is-false'}`}><span>{a} {op} {b}</span><b>{relation?'TRUE':'FALSE'}</b></div>
  </div>;

  if(isUnit2 && topicIndex===2) return <div className="visual-lab">
    <div className="visual-lab-title">See how conditions combine</div>
    <div className="visual-toggle-row"><button className={logicA?'active':''} onClick={()=>setLogicA(!logicA)}>A = {String(logicA)}</button><button className={logicB?'active':''} onClick={()=>setLogicB(!logicB)}>B = {String(logicB)}</button><select value={op} onChange={e=>setOp(e.target.value)}><option>&amp;&amp;</option><option>||</option><option>!</option></select></div>
    <div className={`visual-result ${logical?'is-true':'is-false'}`}><span>{op==='!'?`!A`:`A ${op} B`}</span><b>{String(logical).toUpperCase()}</b></div>
  </div>;

  if(isUnit2 && topicIndex===3) return <div className="visual-lab">
    <div className="visual-lab-title">Bitwise operation — watch the bits change</div>
    <div className="visual-controls"><input type="number" min="0" max="15" value={a} onChange={e=>setA(Number(e.target.value))}/><select value={op} onChange={e=>setOp(e.target.value)}><option>&amp;</option><option>|</option><option>^</option></select><input type="number" min="0" max="15" value={b} onChange={e=>setB(Number(e.target.value))}/></div>
    <div className="bit-row"><span>{a}</span><code>{bitsA}</code></div><div className="bit-row"><span>{b}</span><code>{bitsB}</code></div><div className="bit-row result"><span>Result</span><code>{bitsR}</code><b>{bitwise}</b></div>
  </div>;

  if(isUnit2 && topicIndex===4) return <div className="visual-lab">
    <div className="visual-lab-title">Precedence step-by-step: 2 + 3 × 4</div>
    <div className="precedence-steps">{['2 + 3 × 4','2 + 12','14'].map((x,i)=><div className={i<=step?'shown':''} key={x}>{x}</div>)}</div>
    <div className="visual-step-actions"><button disabled={step===0} onClick={()=>setStep(step-1)}>Previous</button><button disabled={step===2} onClick={()=>setStep(step+1)}>Next step</button></div>
    <small>Multiplication is evaluated before addition.</small>
  </div>;

  if(isUnit2 && topicIndex===5) return <div className="visual-lab">
    <div className="visual-lab-title">Input → variable → program → output</div>
    <div className="io-flow"><span>User enters <b>{ioValue}</b></span><i>→</i><span>scanf()</span><i>→</i><span>age = {ioRun?ioValue:'?'}</span><i>→</i><span>printf()</span></div>
    <div className="visual-controls"><input value={ioValue} onChange={e=>setIoValue(e.target.value)} /><button onClick={()=>setIoRun(true)}>Run</button></div>
    {ioRun&&<div className="visual-output">Screen output: Age = {ioValue}</div>}
  </div>;

  if(isUnit2 && topicIndex===6) return <div className="visual-lab">
    <div className="visual-lab-title">Formatted output — type a value and see printf()</div>
    <div className="visual-controls">
      <input value={formatValue} onChange={e=>setFormatValue(e.target.value)} placeholder="Type value" />
      <select value={formatSpec} onChange={e=>setFormatSpec(e.target.value)}>
        <option value="%d">%d — integer</option><option value="%c">%c — character</option><option value="%f">%f — floating-point</option><option value="%s">%s — string</option>
      </select>
    </div>
    <div className="format-preview"><code>printf("Value = {formatSpec}", {formatValue || '...'});</code><div>Screen: <b>{formatSpec==='%c' ? (formatValue ? String(formatValue)[0] : '...') : formatValue || '...'}</b></div></div>
    <small>Type in the box, choose a format specifier, and see how printf() formats the output.</small>
  </div>;


  const isUnit3=subject==='Computer Programming' && String(unit)==='3';
  if(isUnit3 && topicIndex===0) {
    const ok=ifNumber>=ifThreshold;
    return <Unit3Lab key={topicIndex} title="Conditional branch: if" subtitle="Change the values and watch the condition decide whether the code runs." code={"if (marks >= 40) {\n    printf(\"Pass\");\n}"} takeaway="An if block runs only when its condition is true. If the condition is false, the block is skipped." challenge="Set marks below the pass mark. What should happen to the if block?" answer="The condition becomes false, so the statements inside the if block do not run.">
      <div className="visual-controls"><label>Student marks<input type="number" min="0" max="100" value={ifNumber} onChange={e=>setIfNumber(Math.max(0,Math.min(100,Number(e.target.value)||0)))}/></label><label>Pass mark<input type="number" min="0" max="100" value={ifThreshold} onChange={e=>setIfThreshold(Math.max(0,Math.min(100,Number(e.target.value)||0)))}/></label></div>
      <div className="unit3-execution"><span className="unit3-execution-label">LIVE EXECUTION</span><div className={"unit3-condition "+(ok?'passed':'failed')}><code>{ifNumber} &gt;= {ifThreshold}</code><b>{ok?'TRUE':'FALSE'}</b></div><div className="unit3-execution-result"><span className="unit3-result-icon">{ok?'✓':'↷'}</span><div><strong>{ok?'printf(\"Pass\") runs':'if block is skipped'}</strong><small>{ok?'The condition is satisfied.':'Try raising marks to the pass mark or above.'}</small></div></div></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===1) {
    const even=parityNumber%2===0;
    return <Unit3Lab key={topicIndex} title="Two-way decision: if-else" subtitle="Try different integers and see how C chooses exactly one branch." code={"if (number % 2 == 0) {\n    printf(\"Even\");\n} else {\n    printf(\"Odd\");\n}"} takeaway="if-else gives the program two paths: the if path for true, and the else path for false." challenge="Try 14, then 9. Which branch runs for each number?" answer="14 % 2 is 0, so the if branch prints Even. 9 % 2 is 1, so the else branch prints Odd.">
      <div className="visual-controls"><label>Test integer<input type="number" value={parityNumber} onChange={e=>setParityNumber(Number(e.target.value)||0)}/></label></div>
      <div className="unit3-branch-map"><div className={"unit3-branch "+(even?'branch-active':'')}><span>IF</span><code>number % 2 == 0</code><b>{even?'✓ TRUE':'FALSE'}</b><small>{even?'Print Even':'Not selected'}</small></div><div className={"unit3-branch "+(!even?'branch-active':'')}><span>ELSE</span><code>otherwise</code><b>{!even?'✓ RUNS':'Not selected'}</b><small>{!even?'Print Odd':'Skipped'}</small></div></div>
      <div className={"visual-result "+(even?'is-true':'is-false')}><span>Program output</span><b>{even?'Even':'Odd'}</b></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===2) {
    const pass=nestedMarks>=40, distinction=pass&&nestedMarks>=75;
    return <Unit3Lab key={topicIndex} title="Nested if: decision inside a decision" subtitle="The inner condition is checked only when the outer condition is true." code={"if (marks >= 40) {\n    if (marks >= 75) {\n        printf(\"Distinction\");\n    }\n}"} takeaway="A nested if is an if statement inside another if. The outer condition controls whether the inner decision is reached." challenge="Try 35, 60, and 85 marks. At which value does the inner condition run and become true?" answer="At 35 the outer condition is false, so the inner if is not checked. At 60 the outer condition is true but the inner one is false. At 85 both conditions are true.">
      <div className="visual-controls"><label>Marks<input type="number" min="0" max="100" value={nestedMarks} onChange={e=>setNestedMarks(Math.max(0,Math.min(100,Number(e.target.value)||0)))}/></label></div>
      <div className="unit3-nested-flow"><div className={"unit3-flow-step "+(pass?'step-true':'step-false')}><span>1</span><div><strong>Outer if: marks &gt;= 40?</strong><small>{pass?'TRUE — enter the outer block':'FALSE — stop; inner if is not checked'}</small></div><b>{pass?'TRUE':'FALSE'}</b></div><div className={"unit3-flow-step "+(pass?(distinction?'step-true':'step-false'):'step-muted')}><span>2</span><div><strong>Inner if: marks &gt;= 75?</strong><small>{!pass?'Not reached':distinction?'TRUE — Distinction condition met':'FALSE — inside outer block, but below 75'}</small></div><b>{!pass?'—':distinction?'TRUE':'FALSE'}</b></div></div>
      <div className={"visual-result "+(distinction?'is-true':'is-false')}><span>Final message</span><b>{distinction?'Distinction':'No distinction'}</b></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===3) {
    const max=condA>condB?condA:condB, aWins=condA>condB;
    return <Unit3Lab key={topicIndex} title="Conditional operator: ?:" subtitle="Compare two values and watch the operator choose one expression." code={"max = (a > b) ? a : b;"} takeaway="condition ? value_if_true : value_if_false. This operator is a compact alternative for a simple two-way choice." challenge="Set both values equal. Does the comparison a > b become true?" answer="No. When both values are equal, a > b is false, so the expression after the colon is selected. Both values are equal, so the result is still that same value.">
      <div className="visual-controls"><label>Value a<input type="number" value={condA} onChange={e=>setCondA(Number(e.target.value)||0)}/></label><span className="unit3-compare-word">compared with</span><label>Value b<input type="number" value={condB} onChange={e=>setCondB(Number(e.target.value)||0)}/></label></div>
      <div className="unit3-ternary"><div className={"unit3-ternary-option "+(aWins?'picked':'')}><span>IF TRUE</span><strong>{condA}</strong><small>a is greater</small></div><div className="unit3-ternary-operator">?</div><div className={"unit3-ternary-option "+(!aWins?'picked':'')}><span>IF FALSE</span><strong>{condB}</strong><small>b is selected</small></div></div>
      <div className="unit3-output-banner"><span>Selected result: max</span><strong>{max}</strong><small>Condition {condA} &gt; {condB} is {aWins?'TRUE':'FALSE'}.</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===4) {
    const stepN=Math.max(1,Math.abs(loopStep)), values=[];
    if(loopStart<=loopEnd) for(let n=loopStart,g=0;n<=loopEnd&&g<20;n+=stepN,g++) values.push(n);
    return <Unit3Lab key={topicIndex} title="for loop: trace every iteration" subtitle="Change start, end and step to see exactly when the loop body executes." code={"for (int i = start; i <= end; i += step) {\n    printf(\"%d \", i);\n}"} takeaway="The for header groups initialization, condition and update. The condition is checked before each iteration." challenge="Set start = 1, end = 5, step = 2. Which values are printed?" answer="The loop prints 1, 3, 5. After printing 5, i becomes 7 and the condition 7 <= 5 is false, so the loop stops.">
      <div className="visual-controls"><label>Start<input type="number" value={loopStart} onChange={e=>setLoopStart(Number(e.target.value)||0)}/></label><label>End<input type="number" value={loopEnd} onChange={e=>setLoopEnd(Number(e.target.value)||0)}/></label><label>Step<input type="number" min="1" max="10" value={loopStep} onChange={e=>setLoopStep(Math.max(1,Math.min(10,Number(e.target.value)||1)))}/></label></div>
      <div className="unit3-loop-trace">{values.map((n,i)=><div key={i} className="unit3-loop-chip"><span>ITERATION {i+1}</span><strong>i = {n}</strong><small>print {n}</small></div>)}{values.length===0&&<div className="unit3-empty-state">The starting value is already greater than the end value, so the first condition is false and the body runs zero times.</div>}</div>
      <div className="unit3-output-banner"><span>Output</span><strong>{values.length?values.join('  '):'(no output)'}</strong><small>{values.length?'After the final value, the condition becomes false.':'No iteration takes place.'}</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===5) {
    const values=[];
    if(whileStart<=whileLimit) for(let n=whileStart,g=0;n<=whileLimit&&g<20;n++,g++) values.push(n);
    const finalCheck=values.length?values[values.length-1]+1:whileStart;
    return <Unit3Lab key={topicIndex} title="while loop: check, then execute" subtitle="Follow the condition on every pass, including the final false check." code={"int i = start;\nwhile (i <= limit) {\n    printf(\"%d \", i);\n    i++;\n}"} takeaway="A while loop checks its condition before running the body. If the first condition is false, the body runs zero times." challenge="Set start = 4 and limit = 3. How many times will the body run?" answer="Zero times. The first check 4 <= 3 is false, so execution never enters the loop body.">
      <div className="visual-controls"><label>Start<input type="number" value={whileStart} onChange={e=>setWhileStart(Number(e.target.value)||0)}/></label><label>Limit<input type="number" value={whileLimit} onChange={e=>setWhileLimit(Number(e.target.value)||0)}/></label></div>
      <div className="unit3-nested-flow">{values.map((n,i)=><div className="unit3-flow-step step-true" key={i}><span>{i+1}</span><div><strong>Check {n} &lt;= {whileLimit}</strong><small>TRUE — print {n}, then increment i</small></div><b>TRUE</b></div>)}<div className={"unit3-flow-step "+(values.length?'step-false':'step-false')}><span>{values.length+1}</span><div><strong>Check {finalCheck} &lt;= {whileLimit}</strong><small>FALSE — leave the loop</small></div><b>FALSE</b></div></div>
      <div className="unit3-output-banner"><span>Printed values</span><strong>{values.length?values.join('  '):'(no output)'}</strong><small>There is one final condition check that stops the loop.</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===6) {
    const values=[];
    let current=doStart;
    for(let guard=0;guard<20;guard++){values.push(current);current++;if(!(current<=doLimit))break;}
    return <Unit3Lab key={topicIndex} title="do-while: execute, then check" subtitle="Notice that the body executes once before the condition is checked." code={"int i = start;\ndo {\n    printf(\"%d \", i);\n    i++;\n} while (i <= limit);"} takeaway="Unlike while, do-while checks the condition after executing the body, so the body always runs at least once." challenge="Set start = 5 and limit = 3. Does the body run?" answer="Yes. It prints 5 once, increments i to 6, then checks 6 <= 3. That condition is false, so the loop stops.">
      <div className="visual-controls"><label>Start<input type="number" value={doStart} onChange={e=>setDoStart(Number(e.target.value)||0)}/></label><label>Limit<input type="number" value={doLimit} onChange={e=>setDoLimit(Number(e.target.value)||0)}/></label></div>
      <div className="unit3-nested-flow">{values.map((n,i)=><div className="unit3-flow-step step-true" key={i}><span>{i+1}</span><div><strong>Body runs: print {n}</strong><small>Increment i to {n+1}; then check {n+1} &lt;= {doLimit}</small></div><b>{n+1<=doLimit?'TRUE':'FALSE'}</b></div>)}</div>
      <div className="unit3-output-banner"><span>Printed values</span><strong>{values.join('  ')}</strong><small>Minimum body executions: 1.</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===7) {
    const rows=Math.max(1,Math.min(6,gridRows)), cols=Math.max(1,Math.min(6,gridCols));
    return <Unit3Lab key={topicIndex} title="Nested loops: build a pattern" subtitle="Change the rows and columns. The outer loop controls rows; the inner loop controls each row's symbols." code={"for (int row = 1; row <= rows; row++) {\n    for (int col = 1; col <= cols; col++) {\n        printf(\"* \");\n    }\n    printf(\"\\\\n\");\n}"} takeaway="For every outer-loop iteration, the inner loop completes all of its iterations. A 3 × 4 pattern prints 12 stars." challenge="Set 2 rows and 3 columns. How many stars are printed in total?" answer="2 × 3 = 6 stars. Each of the two outer-loop iterations prints three stars through the inner loop.">
      <div className="visual-controls"><label>Rows<input type="number" min="1" max="6" value={gridRows} onChange={e=>setGridRows(Math.max(1,Math.min(6,Number(e.target.value)||1)))}/></label><label>Columns<input type="number" min="1" max="6" value={gridCols} onChange={e=>setGridCols(Math.max(1,Math.min(6,Number(e.target.value)||1)))}/></label></div>
      <div className="unit3-pattern-grid" style={{gridTemplateColumns:'repeat('+cols+', minmax(0, 1fr))'}}>{Array.from({length:rows*cols},(_,i)=><div className="unit3-pattern-cell" key={i}><span>*</span><small>r{Math.floor(i/cols)+1}, c{(i%cols)+1}</small></div>)}</div>
      <div className="unit3-output-banner"><span>Total body executions / stars</span><strong>{rows*cols}</strong><small>{rows} outer iterations × {cols} inner iterations.</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===8) {
    const labels={1:'Add',2:'Subtract',3:'Multiply',4:'Exit'}, choice=Number(switchChoice);
    return <Unit3Lab key={topicIndex} title="switch-case: menu selection" subtitle="Select an option and follow the matching case and break." code={"switch (choice) {\n    case 1: printf(\"Add\"); break;\n    case 2: printf(\"Subtract\"); break;\n    case 3: printf(\"Multiply\"); break;\n    default: printf(\"Invalid choice\");\n}"} takeaway="switch compares its expression with case labels. default handles unmatched values; break prevents fall-through to the next case." challenge="Choose 9. Which part of the switch runs?" answer="No listed case matches 9, so the default block runs and prints Invalid choice.">
      <div className="visual-controls"><label>Choose menu item<select value={switchChoice} onChange={e=>setSwitchChoice(e.target.value)}><option value="1">1 — Add</option><option value="2">2 — Subtract</option><option value="3">3 — Multiply</option><option value="4">4 — Exit</option><option value="9">9 — Invalid option</option></select></label></div>
      <div className="unit3-nested-flow"><div className="unit3-flow-step step-true"><span>1</span><div><strong>Evaluate switch(choice)</strong><small>choice = {choice}</small></div><b>{labels[choice]?'MATCH':'NO MATCH'}</b></div><div className={"unit3-flow-step "+(labels[choice]?'step-true':'step-false')}><span>2</span><div><strong>{labels[choice]?'case '+choice:'default'} runs</strong><small>Output: {labels[choice]||'Invalid choice'}</small></div><b>RUN</b></div><div className="unit3-flow-step step-muted"><span>3</span><div><strong>break</strong><small>Exit the switch block</small></div><b>EXIT</b></div></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===9) {
    const stopAt=Math.max(1,Math.min(10,breakStop)), values=[];
    for(let n=1;n<=10;n++){if(n===stopAt)break;values.push(n);}
    return <Unit3Lab key={topicIndex} title="break: exit the loop" subtitle="Move the break point. Values after the break point should not be printed." code={"for (int i = 1; i <= 10; i++) {\n    if (i == stopAt) break;\n    printf(\"%d \", i);\n}"} takeaway="break terminates the nearest enclosing loop immediately. It does not merely skip one value." challenge="Set the break point to 4. Which values are printed?" answer="1, 2 and 3 are printed. When i becomes 4, break exits the loop before printf runs for that value.">
      <div className="visual-controls"><label>Break when i equals<input type="number" min="1" max="10" value={breakStop} onChange={e=>setBreakStop(Math.max(1,Math.min(10,Number(e.target.value)||1)))}/></label></div>
      <div className="unit3-loop-trace">{values.map(n=><div className="unit3-loop-chip" key={n}><span>PRINT</span><strong>i = {n}</strong><small>loop continues</small></div>)}<div className="unit3-loop-chip chip-stop"><span>BREAK</span><strong>i = {stopAt}</strong><small>loop stops here</small></div></div>
      <div className="unit3-output-banner"><span>Output</span><strong>{values.join('  ')||'(no output)'}</strong><small>The break value itself is not printed because break runs first.</small></div>
    </Unit3Lab>;
  }
  if(isUnit3 && topicIndex===10) {
    const skipAt=Math.max(1,Math.min(10,skipValue)), values=[];
    for(let n=1;n<=10;n++){if(n===skipAt)continue;values.push(n);}
    return <Unit3Lab key={topicIndex} title="continue: skip this iteration" subtitle="Choose a value to skip. The loop should keep running after continue." code={"for (int i = 1; i <= 10; i++) {\n    if (i == skipValue) continue;\n    printf(\"%d \", i);\n}"} takeaway="continue skips the remaining statements in the current iteration and moves to the next iteration. Unlike break, it does not end the loop." challenge="Set the skipped value to 3. Does the loop end at 3?" answer="No. The number 3 is not printed, but the loop continues and prints 4 through 10.">
      <div className="visual-controls"><label>Skip value<input type="number" min="1" max="10" value={skipValue} onChange={e=>setSkipValue(Math.max(1,Math.min(10,Number(e.target.value)||1)))}/></label></div>
      <div className="unit3-loop-trace">{values.map(n=><div className="unit3-loop-chip" key={n}><span>PRINT</span><strong>i = {n}</strong><small>loop continues</small></div>)}<div className="unit3-loop-chip chip-skip"><span>CONTINUE</span><strong>i = {skipAt}</strong><small>this value is skipped</small></div></div>
      <div className="unit3-output-banner"><span>Output</span><strong>{values.join('  ')}</strong><small>The loop continues after the skipped value.</small></div>
    </Unit3Lab>;
  }

  return <div className="visual-lab">
    <div className="visual-lab-title">File I/O — type file data and choose a mode</div>
    <div className="visual-controls">
      <input className="visual-wide-input" value={fileText} onChange={e=>setFileText(e.target.value)} placeholder="Type file content..." />
    </div>
    <div className="visual-toggle-row">{[['w','Write'],['r','Read'],['a','Append']].map(([v,label])=><button key={v} className={fileMode===v?'active':''} onClick={()=>setFileMode(v)}>{label}</button>)}</div>
    <div className="file-flow"><span>Program</span><i>→</i><span>fopen("notes.txt", "{fileMode}")</span><i>→</i><span>{fileMode==='r'?'Read data':fileMode==='a'?'Add data':'Write data'}</span><i>→</i><span>fclose()</span></div>
    <div className="visual-output">{fileMode==='r' ? <>File contains: <b>{fileText || '...'}</b></> : fileMode==='a' ? <>Append: <b>{fileText || '...'}</b></> : <>Write: <b>{fileText || '...'}</b></>}</div>
    <small>{fileMode==='w'?'w = writing; an existing file may be replaced.':fileMode==='r'?'r = reading an existing file.':'a = appending data at the end.'}</small>
  </div>;
}

function StudyModule({ subject, unit, onExit, medium }) {
  const key = `${subject || ''}|${unit || ''}`;
  const sourceModule = moduleLessons[key];
  const module = medium === 'hi' && sourceModule ? {
    ...sourceModule,
    title: hindiModuleTitles[key] || sourceModule.title,
    topics: sourceModule.topics.map((topic) => {
      const translatedTopic = hindiModuleTopicContent[topic.title];
      return {
        ...topic,
        title: translatedTopic?.title || topic.title,
        lesson: translatedTopic?.lesson || topic.lesson,
        questions: topic.questions.map((question) => ({
          ...question,
          prompt: hindiModuleQuestionPrompts[question.prompt] || question.prompt,
          options: hindiModuleQuestionOptions[question.prompt] || question.options,
          ...(hindiModuleShortAnswers[question.prompt] || {})
        }))
      };
    })
  } : sourceModule;
  const [started, setStarted] = useState(false);
  const [topicIndex, setTopicIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [startedAt, setStartedAt] = useState(null);
  const [finishedAt, setFinishedAt] = useState(null);

  if (!module) {
    return <section className="module-empty">
      <span className="section-kicker">MODULE</span>
      <h1>This module is being prepared</h1>
      <p>The interactive learning flow is ready, and this unit will be added next. You can still open the full study material for this unit.</p>
      <button className="primary" onClick={onExit}>Back to Subjects <ChevronRight size={16}/></button>
    </section>;
  }

  const currentTopic = module.topics[topicIndex];
  const isUnit3Module = subject === 'Computer Programming' && String(unit) === '3';

  const topicVisuals = subject === 'Computer Programming' && String(unit) === '1'
    ? [
        'cp301-u1-problem-solving.svg',
        'cp301-u1-problem-solving-steps.svg',
        'cp301-u1-computational-thinking.svg',
        'cp301-u1-algorithm-flowchart.svg',
        'cp301-u1-variables-data-types.svg'
      ]
    : subject === 'Computer Programming' && String(unit) === '2'
      ? [
          'cp301-u2-arithmetic.svg',
          'cp301-u2-relational.svg',
          'cp301-u2-logical.svg',
          'cp301-u2-bitwise.svg',
          'cp301-u2-precedence.svg',
          'cp301-u2-io.svg',
          'cp301-u2-file-io.svg'
        ]
      : [];
  const currentVisual = inlineModuleVisuals[topicVisuals[topicIndex]] || null;
  const totalQuestions = module.topics.reduce((sum, topic) => sum + topic.questions.length, 0);
  const flatQuestions = module.topics.flatMap((topic, tIndex) => topic.questions.map((question, qIndex) => ({
    ...question,
    topicIndex: tIndex,
    questionIndex: qIndex,
    id: `${tIndex}-${qIndex}`
  })));

  const topicComplete = currentTopic.questions.every((question, qIndex) => {
    const value = answers[`${topicIndex}-${qIndex}`];
    return value !== undefined && String(value).trim() !== '';
  });

  const setAnswer = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [`${topicIndex}-${qIndex}`]: value }));
  };

  const startModule = () => {
    setStarted(true);
    setStartedAt(Date.now());
  };

  const nextTopic = () => {
    if (!topicComplete) return;
    if (topicIndex < module.topics.length - 1) {
      setTopicIndex((index) => index + 1);
    }
  };

  const submitModule = () => {
    if (!topicComplete) return;
    setFinishedAt(Date.now());
    setSubmitted(true);
  };

  const checkQuestion = (question, value) => {
    if (question.type === 'mcq') {
      if (value === '' || value === null || value === undefined) return false;
      const selectedIndex = Number(value);
      return Number.isInteger(selectedIndex) && selectedIndex >= 0 && selectedIndex < question.options.length && selectedIndex === question.answer;
    }
    const normalized = String(value || '').toLowerCase().replace(/[^a-z0-9\u0900-\u097f+.#]+/g, ' ');
    const hits = question.keywords.filter((keyword) => {
      const key = keyword.toLowerCase().replace(/[^a-z0-9\u0900-\u097f+.#]+/g, ' ').trim();
      return key && normalized.includes(key);
    });
    return hits.length >= question.minKeywords;
  };

  const results = submitted ? flatQuestions.map((question) => {
    const value = answers[question.id] ?? '';
    const selectedAnswer = question.type === 'mcq'
      ? (value !== '' && question.options[Number(value)] ? question.options[Number(value)] : 'No option selected')
      : (String(value).trim() || 'No answer');
    const correctAnswer = question.type === 'mcq'
      ? question.options[question.answer]
      : question.modelAnswer;

    return {
      ...question,
      value,
      selectedAnswer,
      correct: checkQuestion(question, value),
      correctAnswer
    };
  }) : [];

  const correctCount = results.filter((item) => item.correct).length;
  const wrongCount = results.length - correctCount;
  const scorePercent = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const elapsedSeconds = submitted && startedAt && finishedAt ? Math.max(0, Math.round((finishedAt - startedAt) / 1000)) : 0;
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  if (!started) {
    return <section className={`module-shell ${isUnit3Module ? "module-shell-unit3" : ""}`}>
      <div className="module-hero">
        <div>
          <span className="section-kicker">INTERACTIVE STUDY MODULE</span>
          <h1>{module.title}</h1>
          <p>Read each topic in simple language, answer short questions, then move to the next topic.</p>
        </div>
        <div className="module-stat"><strong>{module.topics.length}</strong><span>Topics</span></div>
      </div>

      <section className="module-overview-card">
        <div className="module-overview-head">
          <div>
            <span className="section-kicker">FIRST LOOK</span>
            <h2>What you will study</h2>
          </div>
          <BookOpen size={22}/>
        </div>
        {isUnit3Module ? <div className="unit3-launch-roadmap">
          {module.topics.map((topic, index) => <div className="unit3-launch-roadmap-item" key={topic.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><strong>{topic.title}</strong><small>{index < 3 ? "Decision making" : index < 4 ? "Conditional shortcut" : "Loop control"} · {topic.questions.length} questions</small></div>
          </div>)}
        </div> : <div className="module-topic-preview">
          {module.topics.map((topic, index) => <div className="module-topic-preview-row" key={topic.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><strong>{topic.title}</strong><small>{topic.questions.length} quick questions</small></div>
          </div>)}
        </div>}
        <div className="module-rules">
          {isUnit3Module ? <><span>01 · Understand the rule</span><span>02 · Change inputs in the lab</span><span>03 · Predict output, then answer</span></> : <><span>✓ Learn the topic first</span><span>✓ Answer all questions before moving on</span><span>✓ Results stay hidden until final submit</span></>}
        </div>
        {isUnit3Module && <div className="unit3-flow-steps" aria-label="Unit 3 learning flow"><span><b>01</b> THEORY</span><i>→</i><span><b>02</b> INTERACTIVE LAB</span><i>→</i><span><b>03</b> PRACTICE</span></div>}
        <button className="primary full" onClick={startModule}>Start Module <ChevronRight size={17}/></button>
      </section>
    </section>;
  }

  if (submitted) {
    return <section className={`module-shell ${isUnit3Module ? "module-shell-unit3" : ""}`}>
      <div className="module-result-hero">
        <span className="section-kicker">MODULE COMPLETE</span>
        <h1>Unit completed</h1>
        <p>Here is your final result for <b>{module.title}</b>.</p>
      </div>

      <div className="module-result-grid">
        <div><span>Correct</span><strong>{correctCount}</strong></div>
        <div><span>Wrong</span><strong>{wrongCount}</strong></div>
        <div><span>Score</span><strong>{scorePercent}%</strong></div>
        <div><span>Time</span><strong>{minutes}m {seconds}s</strong></div>
      </div>

      <section className="module-review-card">
        <div className="module-overview-head"><div><span className="section-kicker">ANSWER REVIEW</span><h2>See what you got right and wrong</h2></div><CheckCircle2 size={22}/></div>
        <div className="module-review-list">
          {results.map((item, index) => <article key={item.id} className={item.correct ? 'module-review-item correct' : 'module-review-item wrong'}>
            <div className="module-review-top">
              <span>Q{index + 1}</span>
              <b>{item.correct ? 'Correct' : 'Wrong'}</b>
            </div>
            <h3>{item.prompt}</h3>
            <div className="module-review-answer">
              <strong>Your answer:</strong>
              <span>{item.type === 'mcq' ? item.selectedAnswer : (item.value || 'No answer')}</span>
            </div>
            <div className="module-review-answer">
              <strong>Correct answer:</strong>
              <span>{item.correctAnswer}</span>
            </div>
          </article>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
          <button className="secondary dark full" onClick={() => { setAnswers({}); setSubmitted(false); setTopicIndex(0); setStartedAt(Date.now()); setFinishedAt(null); }}>Retry Module</button>
          <button className="primary full" onClick={onExit}>Back to Subjects</button>
        </div>
      </section>
    </section>;
  }

  return <section className={`module-shell ${isUnit3Module ? "module-shell-unit3" : ""}`}>
    {isUnit3Module && <section className="unit3-studio-banner">
      <div className="unit3-studio-copy">
        <span>CP-301 / CONTROL FLOW STUDIO</span>
        <h2>Teach your code to choose and repeat.</h2>
        <p>Follow the path from decisions to loops. Each topic has its own experiment, code pattern, and challenge.</p>
        <div className="unit3-studio-tags"><span>DECISIONS</span><span>CONDITIONS</span><span>LOOPS</span></div>
      </div>
      <div className="unit3-studio-side"><div><strong>{String(topicIndex + 1).padStart(2, "0")}</strong><span>/ {String(module.topics.length).padStart(2, "0")}</span></div><small>TOPIC IN PROGRESS</small></div>
    </section>}
    <div className="module-progress-head">
      <div>
        <span className="section-kicker">TOPIC {topicIndex + 1} OF {module.topics.length} · {currentTopic.questions.length} QUESTIONS</span>
        <h1>{currentTopic.title}</h1>
      </div>
      <span className="module-progress-count">{Math.round(((topicIndex + 1) / module.topics.length) * 100)}%</span>
    </div>
    <div className="module-progress-bar"><i style={{ width: `${((topicIndex + 1) / module.topics.length) * 100}%` }}/></div>
    {isUnit3Module && <div className="unit3-roadmap-wrap">
      <div className="unit3-roadmap-heading"><div><span>YOUR ROADMAP</span><strong>11 steps through control flow</strong></div><small>Current topic highlighted</small></div>
      <div className="unit3-topic-roadmap">{module.topics.map((topic, index) => <div key={topic.title} className={`unit3-roadmap-node ${index < topicIndex ? "is-done" : index === topicIndex ? "is-current" : ""}`} title={topic.title}><span>{String(index + 1).padStart(2, "0")}</span><b>{topic.title}</b></div>)}</div>
      <div className="unit3-roadmap-legend"><span><i className="current-dot"/> Current topic</span><span><i className="done-dot"/> Earlier topic</span><span><i className="next-dot"/> Upcoming</span></div>
    </div>}

    <article className={`module-lesson-card ${isUnit3Module ? "unit3-content-panel" : ""}`}>
      {isUnit3Module && <div className="unit3-section-heading"><span>01</span><div><b>Understand the rule</b><small>Start with the explanation, then try the lab below.</small></div><em>THEORY</em></div>}
      <span className="section-kicker">{isUnit3Module ? "THEORY EXPLANATION · STEP 01" : "THEORY EXPLANATION · START HERE"}</span>
      <div className="module-lesson-text">
        {currentTopic.lesson.split('\n').map((line, index) => line.trim() ? <p key={index}>{line}</p> : <div key={index} className="module-space" />)}
      </div>
      <div className={`module-visual-card ${isUnit3Module ? "unit3-practice-card" : ""}`}>
        {isUnit3Module && <div className="unit3-section-heading"><span>02</span><div><b>Experiment with the logic</b><small>Change the inputs and observe the program’s decision.</small></div><em>INTERACTIVE LAB</em></div>}
        <span className="section-kicker">{isUnit3Module ? "VISUAL LEARNING · STEP 02" : "VISUAL LEARNING"}</span>
        {currentVisual && <div className="module-visual-svg" role="img" aria-label={`Visual explanation for ${currentTopic.title}`} dangerouslySetInnerHTML={{ __html: currentVisual }} />}
        <VisualLearningLab topicIndex={topicIndex} subject={subject} unit={unit} />
      </div>
    </article>

    <article className={`module-questions-card ${isUnit3Module ? "unit3-practice-quiz" : ""}`}>
      <div className="module-overview-head"><div><span className="section-kicker">{isUnit3Module ? "STEP 03 / YOUR TURN" : "CHECK YOUR UNDERSTANDING"}</span><h2>{isUnit3Module ? "Can you predict the program?" : "Answer before continuing"}</h2></div><CircleHelp size={22}/></div>
      <div className="module-question-list">
        {currentTopic.questions.map((question, qIndex) => {
          const value = answers[`${topicIndex}-${qIndex}`];
          return <div className="module-question" key={`${topicIndex}-${qIndex}`}>
            <div className="module-question-number">Q{qIndex + 1}</div>
            <h3>{question.prompt}</h3>
            {question.type === 'mcq'
              ? <div className="module-option-grid">{question.options.map((option, index) => <button
                  key={option}
                  className={Number(value) === index ? 'module-option selected' : 'module-option'}
                  onClick={() => setAnswer(qIndex, index)}
                ><span>{String.fromCharCode(65 + index)}</span>{option}</button>)}</div>
              : <textarea
                  className="module-short-answer"
                  value={value || ''}
                  onChange={(e) => setAnswer(qIndex, e.target.value)}
                  rows={3}
                  placeholder="Write a short answer..."
                />
            }
          </div>;
        })}
      </div>

      <div className="module-navigation">
        <span>{topicComplete ? 'Topic complete. You can continue.' : 'Answer all questions to continue.'}</span>
        {topicIndex < module.topics.length - 1
          ? <button className="primary" disabled={!topicComplete} onClick={nextTopic}>Next Topic <ChevronRight size={17}/></button>
          : <button className="primary" disabled={!topicComplete} onClick={submitModule}>I Have Completed / Submit <CheckCircle2 size={17}/></button>
        }
      </div>
    </article>
  </section>;
}


function Papers({ medium }) { return <><div className="page-intro"><span className="section-kicker">EXAM PREPARATION</span><h1>Question Papers</h1><p>{medium === 'hi' ? 'ये अभी practice sets हैं; इन्हें verified college/university papers से आगे बढ़ाया जा सकता है।' : 'Practice sets are ready here; replace or extend them with verified college/university papers later.'}</p></div><div className="paper-list">{papers.map((p)=><article className="paper-row" key={p.subject}><div className="paper-icon"><FileText size={21}/></div><div><strong>{medium === 'hi' ? ({'Computer Networks':'कंप्यूटर नेटवर्क','Data Structures':'डेटा स्ट्रक्चर','Database Management':'डेटाबेस मैनेजमेंट'}[p.subject] || p.subject) : p.subject}</strong><small>{medium === 'hi' ? 'तीसरा सेमेस्टर' : p.semester} · {medium === 'hi' ? (p.year === 'Previous Year' ? 'पिछले वर्ष का अभ्यास' : 'प्रश्न बैंक') : p.year}</small></div><span>{medium === 'hi' ? (p.status === 'Practice set' ? 'अभ्यास सेट' : 'दोहराव') : p.status}</span><button className="secondary dark">Practice <ChevronRight size={15}/></button></article>)}</div></>;
}

function MCQPractice({ mcq,index,selected,score,answer,next }) { const correct=selected!==null&&selected===mcq.answer; return <><div className="page-intro"><span className="section-kicker">OBJECTIVE PRACTICE</span><h1>MCQ Practice</h1><p>Question {index+1} of {mcqs.length} · Score: {score}</p></div><section className="quiz-card"><div className="quiz-meta"><span>{mcq.topic}</span><span>Question {index+1}/{mcqs.length}</span></div><h2>{mcq.q}</h2><div className="option-grid">{mcq.options.map((option,i)=><button key={option} disabled={selected!==null} className={`option ${selected!==null?(i===mcq.answer?'correct':i===selected?'wrong':''):''}`} onClick={()=>answer(i)}><span>{String.fromCharCode(65+i)}</span>{option}</button>)}</div>{selected!==null&&<div className={correct?'answer-note good':'answer-note'}>{correct?'Correct! Nice work.':`Not quite. The correct answer is ${mcq.options[mcq.answer]}.`}<button className="primary" onClick={next}>Next Question <ChevronRight size={16}/></button></div>}</section></> }

function Planner({tasks,newTask,setNewTask,addTask,toggleTask}) { const done=tasks.filter(t=>t.done).length; return <><div className="page-intro"><span className="section-kicker">PERSONAL PRODUCTIVITY</span><h1>Study Planner</h1><p>Turn your study goals into small, trackable tasks.</p></div><section className="planner-board"><div className="planner-summary"><div><span className="section-kicker">TODAY</span><h2>{done}/{tasks.length} tasks complete</h2></div><div className="planner-progress"><i style={{width:`${tasks.length?done/tasks.length*100:0}%`}}/></div></div><div className="add-task"><input value={newTask} onChange={(e)=>setNewTask(e.target.value)} onKeyDown={(e)=>e.key==='Enter'&&addTask()} placeholder="Add a study target..."/><button className="primary" onClick={addTask}><Plus size={16}/> Add</button></div><div className="task-list">{tasks.map(t=><button className={t.done?'task done':'task'} key={t.id} onClick={()=>toggleTask(t.id)}><CheckCircle2 size={19}/><span><strong>{t.title}</strong><small>{t.subject}</small></span></button>)}</div></section></> }

function AIAssistant({question,setQuestion,answer,loading,ask}) { return <><div className="page-intro"><span className="section-kicker">AI LEARNING</span><h1>AI Study Assistant</h1><p>Ask for explanations, examples, revision plans or exam-style practice. The API key stays on the server.</p></div><section className="ai-card"><div className="ai-header"><div className="ai-avatar"><BrainCircuit size={25}/></div><div><h2>Study with AI</h2><span>Clear explanations • Step-by-step learning</span></div></div><div className="prompt-chips">{['Explain OSI model simply','Give me 10 SQL MCQs','Make a revision plan'].map((p)=><button key={p} onClick={()=>setQuestion(p)}>{p}</button>)}</div><textarea value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder="Ask a study question..." rows={5}/><button className="primary ask-button" onClick={ask} disabled={loading||!question.trim()}>{loading?'Thinking...':'Ask AI'} <Send size={16}/></button>{answer&&<div className="ai-answer"><span className="section-kicker">AI RESPONSE</span><div>{answer}</div></div>}</section></> }

createRoot(document.getElementById('root')).render(<App />);
