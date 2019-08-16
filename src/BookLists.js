import React from 'react';

export default class BookLists extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookNumbers:[5,4,2,1],
            studentBookList:[{
                name:this.props.studentName,
                id:this.props.studentIndex,
                book1:this.props.book1,
                book2:this.props.book2,
                book3: this.props.book3,
                book4: this.props.book4}],
        
}}
componentWillMount(){
    let {bookNumbers}=this.state;
    let x=bookNumbers;
    for (let item of this.props.studentBookStatus) {
      
        if(item['book1']===true && x[0]>0){
            x[0]=x[0]-1}
           if(item['book2']===true && x[1]>0){
            x[1]=x[1]-1}
              if(item['book3']===true && x[2]>0){
                x[2]=x[2]-1}
                if(item['book4']===true && x[3]>0){
                    x[3]=x[3]-1}
    }
    
    bookNumbers=x
    this.setState(bookNumbers);
   
}

selectedBookList=(event)=>{
    let {studentBookList}=this.state;
   if (event.target.value==='book1'){
    this.setState({ studentBookList: {book1:true}
    //isBook1:!this.state.isBook1
});}
  else if (event.target.value==='book2')
  {
    this.setState({ studentBookList: {book2:true}
    //isBook1:!this.state.isBook1
});}
else if (event.target.value==='book3')
{
  this.setState({ studentBookList: {book3:true}
  //isBook1:!this.state.isBook1
});}
else if (event.target.value==='book4')
{
  this.setState({ studentBookList: {book4:true}
  //isBook1:!this.state.isBook1
});}

    this.props.onBookChanged(studentBookList['book1'],studentBookList['book2'],studentBookList['book3'],studentBookList['book4'], this.props.studentIndex)
}

    


 



    

render() {
    const {selectedStudentBookStatus} = this.props;

    let {bookNumbers}=this.state;
    return (
        <React.Fragment>
                    
                    <label>Book 1 {bookNumbers[0]}</label>
                    {bookNumbers[0]>0 && (!selectedStudentBookStatus['book1'] && <input type="checkbox" value='book1' id='book1' onChange={this.selectedBookList} ></input>)} 
                    <label htmlFor='book2'>Book 2 {bookNumbers[1]}</label>
                    {bookNumbers[1]>0 &&(!selectedStudentBookStatus['book2']&&<input type="checkbox" value='book2' id='book2' onChange={this.selectedBookList} ></input>)}
                    <br />
                    <label htmlFor='book3'>Book 3 {bookNumbers[2]}</label>
                    {bookNumbers[2]>0 &&(!selectedStudentBookStatus['book3']&&<input type="checkbox" value='book3'id='book3' onChange={this.selectedBookList}></input>)}
                    <br />
                    <label htmlFor='book4'>Book 4 {bookNumbers[3]}</label>
                    {bookNumbers[3]>0 &&(!selectedStudentBookStatus['book4']&&<input type="checkbox" value='book4' id='book4' onChange={this.selectedBookList} ></input>)}
                    
                       
        </React.Fragment>
   
   
   );
}
}