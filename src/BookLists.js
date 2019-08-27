import React from 'react';

export default class BookLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookNumbers: {
                book1: 5,
                book2: 7,
                book3: 9,
                book4: 3,
                book5: 1
            },
            temBookNumbers: {
                book1: 5,
                book2: 7,
                book3: 9,
                book4: 3,
                book5: 1
            },
            studentBookList: [{
                id: this.props.selectedStudentBookStatus['id'],
                tempBooks: this.props.selectedStudentBookStatus.tempBooks,
                rentBooks: this.props.selectedStudentBookStatus.rentBooks
            }]

        }

    }
    componentDidMount() {


        let { bookNumbers, temBookNumbers } = this.state;
        let x = bookNumbers;
        Object.keys(this.props.bookStatus).forEach((element) => {
            if (element.rentBooks !== undefined) {
                if (element.rentBooks.book1 === true) {
                    // x['book1']--;
                    // temBookNumbers = x;
                    // temBookNumbers['book1'] = x['book1']--;
                    // this.setState(temBookNumbers);
                }

                if (element.rentBooks['book2'] === true) {
                    // x['book2']--;
                    // temBookNumbers = x;
                    // this.setState(temBookNumbers);
                }

                if (element.rentBooks['book3'] === true) {
                    // x['book3']--;
                    // temBookNumbers = x;
                    // this.setState(temBookNumbers);
                }

                if (element.rentBooks['book4'] === true) {
                    // x['book4']--;
                    // temBookNumbers = x;
                    // this.setState(temBookNumbers);
                }

                if (element.rentBooks['book5'] === true) {
                    // x['book5']--;
                    // temBookNumbers = x;
                    // this.setState(temBookNumbers);
                }
                temBookNumbers['book1'] = x['book1']--;
                this.setState(temBookNumbers);
            }
        });
    }
    componentWillUpdate() {

        let { bookNumbers, temBookNumbers } = this.state;
        let x = bookNumbers;
        Object.keys(this.props.bookStatus).forEach((element) => {
            if (element.rentBooks !== undefined) {
                // if (element.rentBooks.book1 === true) {
                //     x['book1']--;
                //     temBookNumbers = x;
                //     this.setState(temBookNumbers);
                // }

                // if (element.rentBooks['book2'] === true) {
                //     x['book2']--;
                //     temBookNumbers = x;
                //     this.setState(temBookNumbers);
                // }

                // if (element.rentBooks['book3'] === true) {
                //     x['book3']--;
                //     temBookNumbers = x;
                //     this.setState(temBookNumbers);
                // }

                // if (element.rentBooks['book4'] === true) {
                //     x['book4']--;
                //     temBookNumbers = x;
                //     this.setState(temBookNumbers);
                // }

                // if (element.rentBooks['book5'] === true) {
                //     x['book5']--;
                //     temBookNumbers = x;
                //     this.setState(temBookNumbers);
                // }
                temBookNumbers['book1'] = x['book1']--;
                this.setState(temBookNumbers);
            }
        });
    }

    selectedBookList = (event) => {
        let { studentBookList } = this.state;
        if (event.target.value === 'book1' && event.target.checked === true) {
            studentBookList.tempBooks['book1'] = true
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book2' && event.target.checked === true) {
            studentBookList.tempBooks['book2'] = true
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book3' && event.target.checked === true) {
            studentBookList.tempBooks['book3'] = true
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book4' && event.target.checked === true) {
            studentBookList.tempBooks['book4'] = true
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book5' && event.target.checked === true) {
            studentBookList.tempBooks['book5'] = true
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book5' && event.target.checked === false) {
            studentBookList.tempBooks['book5'] = false
            this.setState({ studentBookList });
        }

        else if (event.target.value === 'book4' && event.target.checked === false) {
            studentBookList.tempBooks['book4'] = false
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book3' && event.target.checked === false) {
            studentBookList.tempBooks['book3'] = false
            this.setState({ studentBookList });
        }
        else if (event.target.value === 'book2' && event.target.checked === false) {
            studentBookList.tempBooks['book2'] = false
            this.setState({ studentBookList });
        }

        else if (event.target.value === 'book1' && event.target.checked === false) {
            studentBookList.tempBooks['book1'] = false
            this.setState({ studentBookList });

        }

        this.props.onBookChanged(studentBookList);


    }









    render() {
        let { temBookNumbers, studentBookList, bookNumbers } = this.state;
        const calculateBookNumbersFromSelectedStu = (selectedStudentBookStatus, temBookNumbers) => {
            console.log(selectedStudentBookStatus);
            return temBookNumbers;
        };
        const { selectedStudentBookStatus, bookStatus } = this.props;
        temBookNumbers = calculateBookNumbersFromSelectedStu(selectedStudentBookStatus, temBookNumbers);

        console.log('tembooknumber: ');
        console.log(temBookNumbers);
        return (
            <React.Fragment>

                <label>Book 1 {temBookNumbers['book1']}</label>
                {temBookNumbers['book1'] > 0 && (!selectedStudentBookStatus['rentBooks']['book1'] && <input type="checkbox" value='book1' id='book1' onChange={this.selectedBookList} checked={false}></input>)}
                <label htmlFor='book2'>Book 2 {temBookNumbers['book2']}</label>
                {temBookNumbers['book2'] > 0 && (!selectedStudentBookStatus['rentBooks']['book2'] && <input type="checkbox" value='book2' id='book2' onChange={this.selectedBookList} ></input>)}
                <br />
                <label htmlFor='book3'>Book 3 {temBookNumbers['book3']}</label>
                {temBookNumbers['book3'] > 0 && (!selectedStudentBookStatus['rentBooks']['book3'] && <input type="checkbox" value='book3' id='book3' onChange={this.selectedBookList}></input>)}
                <br />
                <label htmlFor='book4'>Book 4 {temBookNumbers['book4']}</label>
                {temBookNumbers['book4'] > 0 && (!selectedStudentBookStatus['rentBooks']['book4'] && <input type="checkbox" value='book4' id='book4' onChange={this.selectedBookList} ></input>)}
                <label htmlFor='book5'>Book 5 {temBookNumbers['book5']}</label>
                {temBookNumbers['book5'] > 0 && (!selectedStudentBookStatus['rentBooks']['book5'] && <input type="checkbox" value='book5' id='book5' onChange={this.selectedBookList} ></input>)}
                <button onClick={() => {
                    for (let a of bookStatus) {
                        if (studentBookList['id'] === a['id']) {
                            if (studentBookList['tempBooks']['book1'] !== undefined) {
                                a['rentBooks']['book1'] = studentBookList['tempBooks']['book1'];
                                this.setState({ a });
                            }
                            if (studentBookList['tempBooks']['book2'] !== undefined) {
                                a['rentBooks']['book2'] = studentBookList['tempBooks']['book2'];
                                this.setState({ a });
                            }
                            if (studentBookList.tempBooks.book3 !== undefined) {
                                a.rentBooks.book3 = studentBookList.tempBooks.book3;
                                this.setState({ a });
                            }
                            if (studentBookList.tempBooks.book4 !== undefined) {
                                a.rentBooks.book4 = studentBookList.tempBooks.book4;
                                this.setState({ a });
                            }
                            if (studentBookList.tempBooks.book5 !== undefined) {
                                a.rentBooks.book5 = studentBookList.tempBooks.book5;
                                this.setState({ a });
                            }

                            this.props.onSubmitted(bookStatus);

                        }
                    }

                    let x = bookNumbers;
                    Object.keys(bookStatus).forEach((element) => {
                        if (!element.rentBooks === undefined) {
                            if (element.rentBooks.book1 === true) {
                                x['book1']--;
                            }

                            if (element.rentBooks['book2'] === true) {
                                x['book2']--;
                            }

                            if (element.rentBooks['book3'] === true) {
                                x['book3']--;
                            }

                            if (element.rentBooks['book4'] === true) {
                                x['book4']--;
                            }

                            if (element.rentBooks['book5'] === true) {
                                x['book5']--;
                            }
                        }
                    });

                    temBookNumbers = x;
                    this.setState(temBookNumbers);


                }

                }>Submit</button>

            </React.Fragment>


        );
    }
}