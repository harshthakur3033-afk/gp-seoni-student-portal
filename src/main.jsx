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
