package redux

import data.*

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
