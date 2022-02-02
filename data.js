const Question = () =>[
    {
         
        id :'1',
        searchterm:'what',
        type:'Easy',
        question:'What is a Data Structure?',
        solution:'The Data Structure is the way data is organized (stored) and manipulated for retrieval and access. It also defines the way different sets of data relate to one another, establishing relationships and forming algorithms.',
        date:new Date()
            
    },
    {
        id :'2',
        type:'hard',
        searchterm:'describe',
        question:'Describe the types of Data Structures?',
        solution:"The following are the types of data structures:\
        Lists: A collection of related things linked to the previous or/and following data items.\
        Arrays: A collection of values that are all the same.\
        Records: A collection of fields, each of which contains data from a single data type.\
        Trees: A data structure that organizes data in a hierarchical framework. This form of data structure follows the ordered order of data item insertion, deletion, and modification.\
        Tables: The data is saved in the form of rows and columns. These are comparable to records in that the outcome or alteration of data is mirrored across the whole table.",
        date:new Date()
    },
    {
        id :'3',
        type:'hard',
        searchterm:'what',
        question:' What is a Linear Data Structure? Name a few examples?',
        solution:'A data structure is linear if all its elements or data items are arranged in a sequence or a linear order. The elements are stored in a non-hierarchical way so that each item has successors and predecessors except the first and last element in the list.\
        Examples of linear data structures are Arrays, Stack, Strings, Queue, and Linked List. ',
        date:new Date()
    },
    {
         
        id :'4',
        type:'Easy',
        searchterm:'what',
        question:'What is the difference between file structure and storage structure?',
        solution:'Numerical analysis, operating system, AI, compiler design, database management, graphics, statistical analysis, and simulation.',
        date:new Date()
            
    },
    {
        id :'5',
        type:'hard',
        searchterm:'how',
        question:'How are the elements of a 2D array stored in the memory?',
        solution:'The difference lies in the memory area accessed. Storage structure refers to the\
         data structure in the memory of the computer system, whereas file structure represents the storage structure in the auxiliary memory.',
         date:new Date()
    },
    {
        id :'6',
        type:'hard',
        searchterm:'how',
        question:' What is a linked list Data Structure?',
        solution:'This is one of the most frequently asked data structure interview questions where the interviewer expects you to give a thorough answer. Try to explain as much as possible rather than finishing your answer in a sentence!\
                It’s a linear Data Structure or a sequence of data objects where elements are not stored in adjacent memory locations. The elements are linked using pointers to form a chain. Each element is a separate object, called a node.\
                Each node has two items: a data field and a reference to the next node. The entry point in a linked list is called the head. Where the list is empty, the head is a null reference and the last node has a reference to null.\
                A linked list is a dynamic data structure, where the number of nodes is not fixed, and the list has the ability to grow and shrink on demand.\
                It is applied in cases where:\
                We deal with an unknown number of objects or don’t know how many items are in the list\
                We need constant-time insertions/deletions from the list, as in real-time computing where time predictability is critical\
                Random access to any elements is not needed\
                The algorithm requires a data structure where objects need to be stored irrespective of their physical address in memory\
                We need to insert items in the middle of the list as in a priority queue\
                Some implementations are stacks and queues, graphs, directory of names, dynamic memory allocation, and performing arithmetic operations on long integers.',
                date:new Date()
    },
    
    {
            id :'7',
            type:'hard',
            searchterm:'are',
            question:'Are linked lists considered linear or non-linear Data Structures?',
            solution:'Linked lists are considered both linear and non-linear data structures depending upon the application they are used for. When used for access strategies, it is considered as a linear data-structure. When used for data storage, it is considered a non-linear data structure.',
            date:new Date()
    },
    {
        id :'8',
        type:'hard',
        searchterm:'what',
        question:' What are the advantages of a linked list over an array? In which scenarios do we use Linked List and when Array?',
        solution:' This is another frequently asked data structure interview question! Advantages of a linked list over an array are:\
        1. Insertion and Deletion\
        Insertion and deletion of nodes is an easier process, as we only update the address present in the next pointer of a node. It’s expensive to do the same in an array as the room has to be created for the new elements and existing elements must be shifted.\
        2. Dynamic Data Structure\
        As a linked list is a dynamic data structure, there is no need to give an initial size as it can grow and shrink at runtime by allocating and deallocating memory. However, the size is limited in an array as the number of elements is statically stored in the main memory.\
        3. No Wastage of Memory\
        As the size of a linked list can increase or decrease depending on the demands of the program, and memory is allocated only when required, there is no memory wasted. In the case of an array, there is memory wastage. For instance, if we declare an array of size 10 and store only five elements in it, then the space for five elements is wasted.\
        4. Implementation\
        Data structures like stack and queues are more easily implemented using a linked list than an array.',
        date:new Date()
    },
    {
        id :'9',
        type:'hard',
        searchterm:'what',
        question:' What is a doubly-linked list? Give some examples.',
        solution:'It is a complex type (double-ended LL) of a linked list in which a node has two links, one that connects to the next node in the sequence and another that connects to the previous node. This allows traversal across the data elements in both directions. \
        Examples include: \
        A music playlist with next and previous navigation buttons\
        The browser cache with BACK-FORWARD visited pages\
        The undo and redo functionality on a browser, where you can reverse the node to get to the previous page',
        date:new Date()
    },
    {
        id :'10',
        type:'hard',
        searchterm:'how',
        question:' How do you reference all of the elements in a one-dimension array?',
        solution:'Using an indexed loop, we may access all of the elements in a one-dimensional array. The counter counts down from 0 to the maximum array size, n,\
         minus one. The loop counter is used as the array subscript to refer to all items of the one-dimensional array in succession.',
         date:new Date()
    },
    {
        id :'11',
        type:'hard',
        searchterm:'what',
        question:' What are dynamic Data Structures? Name a few?',
        solution:'They are collections of data in memory that expand and contract to grow or shrink in size as a program runs. This enables the programmer to control exactly how much memory is to be utilized.\
        Examples are the dynamic array, linked list, stack, queue, and heap',
        date:new Date()
    },
    {
        id :'12',
        type:'hard',
        searchterm:'what',
        question:'What is an algorithm? ',
        solution:'An algorithm is a step by step method of solving a problem or manipulating data. It defines a set of instructions to be executed in a certain order to get the desired output. ',
        date:new Date()
    },
    {
        id :'13',
        type:'hard',
        searchterm:'why',
        question:' Why do we need to do an algorithm analysis?',
        solution:'A problem can be solved in more than one way using several solution algorithms. Algorithm analysis provides an estimation of the required resources of an algorithm to solve a specific computational problem. The amount of time and space resources required to execute is also determined.\
                The time complexity of an algorithm quantifies the amount of time taken for an algorithm to run as a function of the length of the input. The space complexity quantifies the amount of space or memory taken by an algorithm, to run as a function of the length of the input.',
                date:new Date()
    },
    {
        id :'14',
        type:'hard',
        searchterm:'what',
        question:'What is a stack?',
        solution:'A stack is an abstract data type that specifies a linear data structure, as in a real physical stack or piles where you can only take the top item off the stack in order to remove things. Thus, insertion (push) and deletion (pop) of items take place only at one end called top of the stack, with a particular order: LIFO (Last In First Out) or FILO (First In Last Out).',
        date:new Date()
    },
    {
        id :'15',
        type:'hard',
        searchterm:'where',
        question:'  Where are stacks used?',
        solution:'Expression, evaluation, or conversion of evaluating prefix, postfix, and infix expressions\
        Syntax parsing\
        String reversal\
        Parenthesis checking\
        Backtracking',
        date:new Date()
    },
    {
         
        id :'16',
        type:'Easy',
        searchterm:'what',
        question:'What are the operations that can be performed on a stack?',
        solution:'solution',
        date:new Date()
            
    },
    {
        id :'17',
        type:'hard',
        searchterm:'what',
        question:"What is a postfix expression?",
        solution:"A stack is a linear data structure that operates on the same concept, in that components in a stack are added and deleted only from one end, referred to as the TOP. As a result, a stack is known as a LIFO\
         (Last-In-First-Out) data structure because the piece that was put last is the first to be removed.\
         A stack may perform three fundamental operations:\
         PUSH: The push action inserts a new element into the stack. The new feature is placed at the top of the stack. However, before inserting the value, we must first verify if TOP=MAX–1, since if so, the stack is filled, and no more insertions are possible. An OVERFLOW message is printed if an attempt is made to put a value into an existing stack.\
        POP: The pop operation is performed to remove the stack's topmost element. However, before removing the value, we must first verify if TOP=NULL, since if it is, the stack is empty, and no further deletions are permitted. An UNDERFLOW notice is produced if an attempt is made to erase a value from a stack that is already empty.\
        PEEK: A peek action returns the value of the stack's topmost element without removing it from the stack. On the other hand, the Peek operation first checks if the stack is empty, i.e., if TOP = NULL, then an appropriate message is written. Otherwise, a value is returned.",

        date:new Date()
    },
    {
        id :'18',
        type:'hard',
        searchterm:'what',
        question:'  What is a queue Data Structure?',
        solution:'In this data structure interview question, you can also discuss your experience and situations using queue. A queue is an abstract data type that specifies a linear data structure or an ordered list,  using the First In First Out (FIFO) operation to access elements. Insert operations can be performed only at \
        one end called REAR and delete operations can be performed only at the other end called FRONT. ',
        date:new Date()
    },
    {
         
        id :'19',
        type:'Easy',
        searchterm:'list',
        question:'List some applications of queue Data Structure.',
        solution:'To prioritize jobs as in the following scenarios:\
        As waiting lists for a single shared resource in a printer, CPU, call center systems, or image uploads; where the first one entered is the first to be processed\
        In the asynchronous transfer of data; or example pipes, file IO, and sockets\
        As buffers in applications like MP3 media players and CD players\
        To maintain the playlist in media players (to add or remove the songs)',
        date:new Date()
            
    },
    {
        id :'20',
        type:'hard',
        searchterm:'what',
        question:'What is a Dequeue?',
        solution:'It is a double-ended queue, or a data structure, where the elements can be inserted or deleted at both ends (FRONT and REAR).',
        date:new Date()
    },
    {
        id :'21',
        type:'hard',
        searchterm:'what',
        question:'What operations can be performed on queues?',
        solution:'enqueue() adds an element to the end of the queue\
        dequeue() removes an element from the front of the queue\
        init() is used for initializing the queue\
        isEmpty tests for whether or not the queue is empty\
        The front is used to get the value of the first data item but does not remove it\
        The rear is used to get the last item from a queue',
        date:new Date()
    },
    
    {
            id :'22',
            type:'hard',
            searchterm:'what',
            question:'What are the advantages of the heap over a stack?',
            solution:'In this data structure interview questions, try giving various advantages, along with examples, if possible. It will show the interviewer your domain expertise. Generally, both heap and stack are part of memory and used in Java for different needs: \
            Heap is more flexible than the stack because memory space can be dynamically allocated and de-allocated as needed\
            Heap memory is used to store objects in Java, whereas stack memory is used to store local variables and function call \
            Objects created in the heap are visible to all threads, whereas variables stored in stacks are only visible to the owner as private memory\
            When using recursion, the size of heap memory is more whereas it quickly fill-ups stack memory ',
            date:new Date()
    },
    {
        id :'23',
        type:'hard',
        searchterm:'where',
        question:' Where can stack Data Structure be used?',
        solution:'Expression evaluation\
        Backtracking\
        Memory management\
        Function calling and return',
        date:new Date()
    },
    {
        id :'24',
        type:'hard',
        searchterm:'what',
        question:'What is the difference between a PUSH and a POP?',
        solution:'The acronyms stand for Pushing and Popping operations performed on a stack. These are ways data is stored and retrieved.\
         PUSH is used to add an item to a stack, while POP is used to remove an item.\
        PUSH takes two arguments, the name of the stack to add the data to and the value of the entry to be added. POP only needs the name of the stack. \
        When the stack is filled and another PUSH command is issued, you get a stack overflow error, which means that the stack can no longer accommodate the last PUSH. In POP, a stack underflow error occurs when you’re trying to POP an already empty stack. ',
        date:new Date()
    },
    {
        id :'25',
        type:'hard',
        searchterm:'which',
        question:' Which sorting algorithm is considered the fastest? Why?',
        solution:'A single sorting algorithm can’t be considered best, as each algorithm is designed for a particular data structure and data set. However, the QuickSort algorithm is generally considered the fastest because it has the best performance for most inputs.\
        Its advantages over other sorting algorithms include the following:\
        Cache-efficient: It linearly scans and linearly partitions the input. This means we can make the most of every cache load. \
        Can skip some swaps: As QuickSort is slightly sensitive to input that is in the right order, it can skip some swaps.\
        Efficient even in worst-case input sets, as the order is generally random.\
        Easy adaption to already- or mostly-sorted inputs.\
        When speed takes priority over stability.',
        date:new Date()
    },
    {
        id :'26',
        type:'hard',
        searchterm:'what',
        question:'What is the merge sort? How does it work?',
        solution:'Merge sort is a divide-and-conquer algorithm for sorting the data. It works by merging and sorting adjacent data to create bigger sorted lists, which are then merged recursively to form even bigger sorted lists until you have one single sorted list.',
        date:new Date()
    },
    {
        id :'27',
        type:'hard',
        searchterm:'how',
        question:' How does the Selection sort work?',
        solution:'Selection sort works by repeatedly picking the smallest number in ascending order from the list and placing it at the beginning. This process is repeated moving toward the end of the list or sorted subarray.\
        Scan all items and find the smallest. Switch over the position as the first item. Repeat the selection sort on the remaining N-1 items. We always iterate forward (i from 0 to N-1) and swap with the smallest element (always i).\
        Time complexity: best case O(n^2); worst O(n^2)\
        Space complexity: worst O(1)',
        date:new Date()
    },
    {
        id :'28',
        type:'hard',
        searchterm:'what',
        question:'What is an asymptotic analysis of an algorithm?',
        solution:"Asymptotic analysis is the technique of determining an algorithm's running time in mathematical units to determine the program's limits, also known as 'run-time performance.\
        'The purpose is to identify the best case, worst case, and average-case times for completing a particular activity. While not a deep learning training technique, Asymptotic analysis is an essential diagnostic tool for programmers to analyze an algorithm's efficiency rather than its correctness.",
        date:new Date()
    },
    {
        id :'29',
        type:'hard',
        searchterm:'what',
        question:'What are asymptotic notations?',
        solution:"Asymptotic Notation represents an algorithm's running time - how long an algorithm takes with a given input, n. Big O, large Theta (), and big Omega () are the three distinct notations. When the running time is the same in all circumstances, big- is used, big-O for the worst-case running time, and big- for the best case running time.Asymptotic Notation represents an algorithm's running time - how long an algorithm takes with a given input, n. Big O, large Theta (), and big Omega () are the three distinct notations. When the running time is the same in all circumstances,\
         big- is used, big-O for the worst-case running time, and big- for the best case running time.",
         date:new Date()
    },
    {
        id :'30',
        type:'hard',
        searchterm:'what',
        question:'What are some examples of divide and conquer algorithms?',
        solution:'Quicksort is the name of a sorting algorithm. The method selects a pivot element and rearranges the array elements so that all items less than the pivot chosen element go to the left side of the pivot and all elements more significant than the pivot element move to the right side.\
        Merge Sort is a sorting algorithm as well. The algorithm divides the array into two halves, sorts them recursively, and then combines the two sorted halves. The goal of points that are closest together is to identify the nearest pair of points in an x-y plane collection of points. The issue may be solved in O(n2) time by computing the distances between each pair of locations and comparing them to determine the shortest distance.',
        date:new Date()
    },
    
    
]



module.exports= {
    Question,
     
}