// استعلام لـ button and input
const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
//event listeners
todoBtn.addEventListener("click" , addTask);
todoList.addEventListener("click" , checkOrDelete);
// functions
function addTask(e){
    e.preventDefault(); // to prevent the form from submitting

    //create li
    const todoli=document.createElement("li");
    todoli.classList.add('todo');

    //create div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-item");

    //add input value to div
    tododiv.innerText=todoInput.value;

    //create button complete
    const completeBtn=document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML='<i class="fas fa-check"></i>';

    //create trash button
    const  trashBtn=document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';

    //add div +button 1+ button 2->li
    todoli.appendChild(tododiv);
    todoli.appendChild(completeBtn);
    todoli.appendChild(trashBtn);

    //add li to ul
    todoList.appendChild(todoli);

    //remove input value
    todoInput.value="";
}

function checkOrDelete(e) {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}


// هنا شرح مختصر لكل جزء في الأكواد:

// 1. استعلام للعناصر:
//    - `todoBtn` يستخدم لتحديد زر إضافة المهمة.
//    - `todoInput` يستخدم لتحديد حقل إدخال النص لإضافة المهمة.
//    - `todoList` يستخدم لتحديد قائمة المهام.

// 2. أحداث الاستماع (Event Listeners):
//    - يتم إضافة "event listener" إلى زر إضافة المهمة (`todoBtn`)، وعند النقر عليه، يتم تنفيذ الدالة `addTask`.
//    - يتم إضافة "event listener" إلى قائمة المهام (`todoList`)، وعند النقر على أي عنصر داخل القائمة، يتم تنفيذ الدالة `checkOrDelete`.

// 3. الدوال:
//    - `addTask` تستخدم لإضافة مهمة جديدة إلى قائمة المهام.
//      - يتم إنشاء عنصر `li` وإضافتها إلى القائمة.
//      - يتم إنشاء عنصر `div` وإضافتها إلى العنصر `li`، ويتم تعيين قيمة النص من حقل الإدخال (`todoInput`) إلى العنصر `div`.
//      - يتم إنشاء زر "Complete" وزر "Trash" وإضافتها إلى العنصر `li`.
//      - يتم إضافة العنصر `li` إلى قائمة المهام (`todoList`).
//      - يتم مسح قيمة حقل الإدخال (`todoInput`).

//    - `checkOrDelete` تستخدم للتحقق من حالة المهمة أو حذفها.
//      - يتم التحقق إذا كان العنصر الذي تم النقر عليه يحتوي على الفئة "complete-btn"، ثم يتم تبديل حالة المهمة بين المكتملة وغير المكتملة.
//      - يتم التحقق إذا كان العنصر الذي تم النقر عليه يحتوي على الفئة "trash-btn"، ثم يتم إضافة تأثير "انزلاق" للمهمة وبعد الانتهاء من التأثير يتم حذف المهمة.
