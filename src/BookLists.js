import React from "react";

export default class BookLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temBookNumbers: {}
    };
  }

  /*selectedBookList = event => {
    let { studentBookList, bookNumbers } = this.state;
    Object.keys(bookNumbers).map(key => {
      if (event.target.value === key && event.target.checked === true) {
        studentBookList.tempBooks[key] = true;
      } else if (event.target.value === key && event.target.checked === false) {
        studentBookList.tempBooks["book5"] = false;
      }
      this.setState({ studentBookList });
      this.props.onBookChanged(studentBookList);
    });
  };
*/
  render() {
    let { temBookNumbers } = this.state;
    const { selectedStudent, onBookChanged, bookNumbers } = this.props;
   /*const calculateBookNumbersFromSelectedStu = (
      bookStatus,
      temBookNumbers,
      bookNumbers
    ) => {
      let x = bookNumbers;
      if (bookStatus.rentBooks !== undefined) {
        return Object.keys(bookStatus.rentBooks).map(key => {
          if (bookStatus.rentBooks[key] === true) {
            return x[key]--, (temBookNumbers[key] = x[key]);
          }
        });
      } else {
        temBookNumbers = bookNumbers;
      }
    };

    temBookNumbers = calculateBookNumbersFromSelectedStu(
      bookStatus,
      temBookNumbers,
      bookNumbers
    );
*/
    return (
      <div>
        <h3> Book List</h3>
        
          {Object.keys(bookNumbers).map(bookName => {
            if (
              !selectedStudent[bookName]
            ) {
              return (
                  <div key={bookName}>
                  <label htmlFor={bookName}>
                    {bookName} : {bookNumbers[bookName]}
                  </label>
                  <input
                    type="checkbox"
                    value={bookName}
                    id={bookName}
                    checked={temBookNumbers[bookName]}
                    disabled={bookNumbers[bookName] <= 0}
                    onChange={() => {
                      temBookNumbers[bookName] = !temBookNumbers[bookName];
                      this.setState({ temBookNumbers });
                  }}
                  />
                 </div>

              );
            }
          })}

        <button
          onClick={() => {
             onBookChanged(temBookNumbers);
             this.setState({ tempBookNumbers: {} });
              }}>
          Submit
        </button>
      </div>
    );
  }
}
