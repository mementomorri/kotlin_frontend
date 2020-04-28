# lab 9
Задание:\
Используя код приложения из лекций переделайте приложения из последнего задания предыдущего модуля с использованием redux. Реализовать хранилище нужно простым способом, без использования функций комбинирования reducer'ов.



В компонент  "anyList" внесены изменения в соответствии с последним заданием предыдущего модуля, сравнительно с предыдущим заданий изменений никаких . Компонент "State" дополнен массивами "lessons" и "students": 

	class State (
	    val presents: Array<Array<Boolean>>,
	    var lessons: Array<Lesson>,
	    var students: Array<Student>
	)

"actions" дополнен новыми классами для корректной работы с состояниями:

	class ChangePresent(val lesson: Int, val student: Int) : RAction
	class addLesson (val click:Event):RAction
	class addStudent (val click: Event):RAction
	class removeLesson (val indexOfLesson: Int):RAction
	class removeStudent(val indexOfStudent:Int):RAction
	class editLesson(val lesson: Lesson):RAction
	class editStudent(val student: Student):RAction

"reducers" дополнен элементами из последнего задания предыдущего модуля:

	fun changeReducer(state: State, action: RAction) =
	    when (action) {
	        is ChangePresent -> State(
	            state.presents.mapIndexed { indexLesson, lesson ->
	                if (indexLesson == action.lesson)
	                    lesson.mapIndexed { indexStudent, student ->
	                        if (indexStudent == action.student)
	                            !student
	                        else student
	                    }.toTypedArray()
	                else
	                    lesson
	            }.toTypedArray(),
	            state.lessons,
	            state.students
	        )
	
	        is addLesson -> State(
	            state.presents.plus(arrayOf(Array(state.students.size) { false })),
	            state.lessons.plus(Lesson("new lesson")),
	            state.students
	        )
	
	        is addStudent ->State(
	            state.presents.plus(arrayOf(Array(state.students.size) { false })),
	            state.lessons,
	            state.students.plus(Student("New", "Student"))
	        )
	
	        is removeLesson ->State(
	            presents = state.presents.copyOfRange(0,action.indexOfLesson)
	                    +state.presents.copyOfRange(action.indexOfLesson+1,state.presents.size),
	            lessons = state.lessons.copyOfRange(0,action.indexOfLesson)
	                    +state.lessons.copyOfRange(action.indexOfLesson+1,state.lessons.size),
	            students = state.students
	        )
	
	        is removeStudent ->State(
	            presents = state.presents.copyOfRange(0,action.indexOfStudent)
	                    +state.presents.copyOfRange(action.indexOfStudent+1,state.presents.size),
	            lessons = state.lessons,
	            students = state.students.copyOfRange(0,action.indexOfStudent)
	                    +state.students.copyOfRange(action.indexOfStudent+1,state.students.size)
	        )
	
	        is editLesson -> State(
	            state.presents,
	            state.lessons.plus(action.lesson),
	            state.students
	        )
	
	        is editStudent -> State(
	            state.presents,
	            state.lessons,
	            state.students.plus(action.student)
	        )
	        else -> state
	    }

В сравнении с последним заданием предыдущего модуля нет никаких концептуальных изменений, изминения лишь касаются корректировки работы с "Redux", функции добавления занятия или студента, их изминения или удаления остались прежними, их параметры и возвращаемые данные остаются прежними.\

Приложение после загрузки и после клика по "Students":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/onLoad.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/students.PNG)

После двойного нажатия по строке "Add":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/newStudents.PNG)

Как видно по скриншоту, добавилось два новых студента "New Student", ссылка по прежнему кликабельна:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/newStudent.PNG)

Элементы внутри списка попрежнему активны, клик по занятию "Lecture"  изменяет стиль строки:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/lectureClicked.PNG)

Вернувшись назад к студентам можно менять имена или удалять его из списка, кликнув по "Edit" напротив "New Student" попрежнему открывается компонент с редактирование имени студента:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/newStudentEdit.PNG)

Изменим имя на "Rajesh Ramayan":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/RajeshRamayanEditing.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/RajeshRamayan.PNG)

Удалим элемент "New Student":

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/deleteStudent.PNG)

Аналогичные действия могут быть совершены с занятиями:

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/lessons.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/newLessons.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/devOps.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/lessons2.PNG)

![](https://github.com/mementomorri/Kotlin-Frontend/blob/lab9/screenshots/deleteLesson.PNG)

Исходный код находится в папке src/main/kotlin/.
