import React from "react";
import BL from "./BookLists";

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {
        'Fiona':{},
        'Frank':{},
        'Eric':{},
        'Jane':{}
      },
      selectedStudent:{},
      bookNumbers: {
        'book1': 5,
        'book2': 7,
        'book3': 9,
        'book4': 3,
        'book5': 1
      },
      isSelected: false,
      isShowedBookList: false
    };
  }

  showStudentList = event => {
    this.setState({ selectedStudent: event.target.value,isSelected:true });}
    
 
  createStudentOptions = (studentName)=> {
      
      return <option key={studentName} value={studentName}>{studentName}</option>;
    };
 


  render() {
    let { selectedStudent, isSelected, isShowedBookList, student,bookNumbers } = this.state;

    return (
      <div>
        <h2> Library </h2>
        <label> Choose Student </label>
        <br />
        <select onChange={this.showStudentList}>
          {!isSelected&&<option>Please select:</option>}
          { Object.keys(student).map(this.createStudentOptions)}
        </select>
        {isSelected && (
          <React.Fragment>
            <button
              onClick={() => {
                this.setState({
                  isShowedBookList: true
                });
              }}
            >
              Borrow Book
            </button>
            {isShowedBookList && (
              <React.Fragment>
                <BL
                  bookNumbers={bookNumbers}
                  selectedStudent={selectedStudent}
                  onBookChanged={tempBookSelect => {
                    Object.keys(tempBookSelect).map((bookName) => {
                      const bookSelected = tempBookSelect[bookName];
                      if (bookSelected) {
                          if (student[selectedStudent][bookName] === undefined) {
                              student[selectedStudent][bookName] = false;
                          }
                          student[selectedStudent][bookName]=true;
                          bookNumbers[bookName]--;
                      }
                  });
                  this.setState({
                      student, bookNumbers
                  });
                  return null;
              }}></BL>
              
              </React.Fragment>
            )}
            <p> Borrowed Book: </p>
            {Object.keys(student).map(studentName => {
              const books = student[studentName];
                return (
                  <React.Fragment>
                    <span>
                      {Object.keys(books).map((bookName) => {
                      return <React.Fragment>
                        {(books[bookName])&& <p>{studentName + ' borrowed: ' + bookName}
                         <button
                      onClick={() => {
                        student[selectedStudent][bookName]=false;
                        bookNumbers[bookName]++;
                        this.setState({
                          student, bookNumbers
                        });
                      
                          }
                        }
                    >
                      return
                    </button>
                    </p>}
                  </React.Fragment>
                      })}
                      </span>
                      </React.Fragment>);
              })}
     </React.Fragment>
    )}
    </div>
    )}
            }
