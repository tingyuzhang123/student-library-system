import React from 'react';
import BL from './BookLists'


export default class StudentList extends React.Component {
    constructor() {
        super();
        this.state = {
            student: [{
                id: 0,
                name: 'Fiona',
                rentBooks: {
                    book1: true,
                    book4: true
                },
                tempBooks: {}
            },
            {
                id: 1,
                name: 'Frank',
                rentBooks: { book2: true, },
                tempBooks: {}
            },
            {
                id: 2,
                name: 'Eric',
                rentBooks: { book3: true },
                tempBooks: {}
            },

            {
                id: 3,
                name: 'Jane',
                rentBooks: { book5: true },
                tempBooks: {}
            }],
            selectedStudent: [{
                id: null,
                name: null,
                rentBooks: {},
                tempBooks: {}
            }],
            isSelected: false,
            isShowedBookList: false,
            bookList: [],
            libraryBookNumbers: [],
        };

    }



    showStudentList = (event) => {
        for (let x of this.state.student) {
            if (event.target.value === x['name']) {
                this.setState({
                    selectedStudent: { id: x['id'], name: x['name'], rentBooks: x['rentBooks'], tempBooks: x['tempBooks'] },
                    isSelected: true
                })
            }
        }
    }
    render() {

        let { selectedStudent, isSelected, isShowedBookList, student } = this.state;

        return (

            <div>

                <label>Choose Student </label>
                <br />
                <select onChange={this.showStudentList}>
                    <option>Please select</option>
                    <option value='Fiona'>Fiona</option>
                    <option value='Frank'>Frank</option>
                    <option value='Eric'>Eric</option>
                    <option value='Jane'>Jane</option>
                </select>
                {isSelected &&
                    <React.Fragment>
                        <p>Name:{selectedStudent['name']}</p>
                        <button onClick={() => {
                            this.setState({
                                isShowedBookList: true
                            });
                        }}>Borrow Book</button>
                        {isShowedBookList &&
                            <React.Fragment>
                                <BL
                                    bookStatus={student}
                                    selectedStudentBookStatus={selectedStudent}
                                    onBookChanged={(bookList) => {
                                        for (let a of student) {
                                            if (bookList['id'] === a['id']) {
                                                this.setState({ a: { tempBooks: bookList['tempBooks'] } });
                                            }
                                        }
                                        this.setState({ selectedStudent: { tempBooks: bookList['tempBooks'] } });
                                    }
                                    }
                                    onSubmitted={(rentBookList) => {
                                        this.setState({
                                            student: { rentBooks: rentBookList.rentBooks },
                                            selectedStudent: { rentBooks: selectedStudent.tempBooks }
                                        });
                                    }
                                    } />
                            </React.Fragment>
                        }
                        <p>Borrowed Book:</p>
                        {selectedStudent.rentBooks['book1'] &&
                            <React.Fragment>
                                <p>Book1</p>
                                <button onClick={() => {
                                    selectedStudent.rentBooks['book1'] = false;
                                    this.setState({
                                        selectedStudent
                                    });
                                    for (let x of student) {
                                        if (selectedStudent['id'] === x['id']) {
                                            x.rentBooks['book1'] = selectedStudent.rentBooks['book1']
                                            this.setState({ x });
                                        }
                                    }
                                }}>
                                    return
                            </button>
                            </React.Fragment>
                        }
                        {selectedStudent.rentBooks['book2'] &&
                            <React.Fragment>
                                <p>Book2</p>
                                <button onClick={() => {
                                    selectedStudent.rentBooks['book2'] = false;
                                    this.setState({
                                        selectedStudent
                                    });
                                    for (let x of student) {
                                        if (selectedStudent['id'] === x['id']) {
                                            x.rentBooks['book2'] = false
                                            this.setState({ x });
                                        }
                                    }
                                }}>
                                    return
                            </button>
                            </React.Fragment>
                        }
                        {selectedStudent.rentBooks['book3'] &&
                            <React.Fragment>
                                <p>Book3</p>
                                <button onClick={() => {
                                    selectedStudent.rentBooks['book3'] = false
                                    this.setState({
                                        selectedStudent
                                    });

                                    for (let x of student) {
                                        if (selectedStudent['id'] === x['id']) {
                                            x.rentBooks['book3'] = false
                                            this.setState({ x });

                                        }
                                    }
                                }
                                }>
                                    return
                            </button>
                            </React.Fragment>
                        }
                        {selectedStudent.rentBooks['book4'] &&
                            <React.Fragment>
                                <p>Book4</p>
                                <button onClick={() => {
                                    selectedStudent.rentBooks['book4'] = false
                                    this.setState({
                                        selectedStudent
                                    });
                                    for (let x of student) {
                                        if (selectedStudent['id'] === x['id']) {
                                            x.rentBooks['book4'] = false
                                            this.setState({ x });
                                        }
                                    }
                                }}>
                                    return</button>

                            </React.Fragment>}
                        {selectedStudent.rentBooks['book5'] &&
                            <React.Fragment>
                                <p>Book5</p>
                                <button onClick={() => {
                                    selectedStudent.rentBooks['book5'] = false;
                                    this.setState({
                                        selectedStudent
                                    });
                                    for (let x of student) {
                                        if (selectedStudent['id'] === x['id']) {
                                            x.rentBooks['book5'] = selectedStudent.rentBooks['book5']
                                            this.setState({ x });
                                        }
                                    }
                                }}>
                                    return
                            </button>
                            </React.Fragment>
                        }
                    </React.Fragment>

                }
            </div>)
    }
}