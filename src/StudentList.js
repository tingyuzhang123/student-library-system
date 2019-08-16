import React from 'react';
import BL from './BookLists'


export default class StudentList extends React.Component{
    constructor(){
        super();
        this.state={
            student:[{
                id:0,
                name:'Fiona',
                book1:false,
                book2:false,
                book3:false,
                book4:false,
            },
            {
                id:1,
                name:'Frank',
                book1:false,
                book2:false,
                book3:false,
                book4:false,
            },
            {
                id:2,
                name:'Eric',
                book1:false,
                book2:false,
                book3:false,
                book4:false,
            },
            {
                id:3,
                name:'Jane',
                book1:false,
                book2:false,
                book3:false,
                book4:false,
            }],
            selectedStudent:[],
            isSelected: false,
            isShowedBookList:false,
            bookList:[],
            selectedBook:[],
};

       }
       
    

        showStudentList=(event)=>{
            for (let x of this.state.student) { 
                if(event.target.value  === x['name']){
                this.setState({ selectedStudent: {id:x['id'],name:x['name'],book1:x['book1'],book2:x['book2'],book3:x['book3'],book4:x['book4']},
                 isSelected:true})
                }
             }
         }
            /* else if(event.target.value  ===this.student.name[1]){
                this.setState({ selectedStudent: this.student[1],
                    isSelected:true})
             }
             else if(event.target.value  === this.student.name[2]){
                this.setState({ selectedStudent: this.student[2],
                    isSelected:true})
             }
             else if (event.target.value  === this.student.name[3]){
                this.setState({ selectedStudent: this.student[3],
                    isSelected:true})
             }
            else{
                this.setState({
                    isSelected:false}) 
            }*/
        render() {
            
           let {selectedStudent,isSelected,isShowedBookList,student,selectedBook } = this.state;
           
            return (
                
                <div>
                    
                    <label>Choose Student </label>
                    <br />
                    <select onChange={this.showStudentList}>
                    <option value='Fiona'>Fiona</option>
                    <option value='Frank'>Frank</option>
                    <option value='Eric'>Eric</option>
                    <option value='Jane'>Jane</option>
                    </select>
                {isSelected &&
                        <React.Fragment>
                           <p>Name:{selectedStudent['name']}</p>
                           <button onClick={()=>{
                            this.setState({
                              isShowedBookList:true});
                        }}>Borrow Book</button>
                         {isShowedBookList &&
                        <React.Fragment>
                            {selectedBook.map(() => {
                                return <BL 
                                    studentBookStatus={student}
                                    selectedStudentBookStatus={selectedStudent}
                                    onBookChanged={(bookList) => {
                                        selectedBook= {id:bookList['id'],book1:bookList['book1'],book2:bookList['book2'],book3:bookList['book3'],book4:bookList['book4']}
                                    }} />
    })}
                    <button onClick={()=>{
                            for (let a of student) { 
                                    if(selectedBook['id']  === a['id']){
                                        a={id:selectedBook['id'],name:selectedBook['name'],book1:selectedBook['book1'],book2:selectedBook['book2'],book3:selectedBook['book3'],book4:selectedBook['book4']}
                                        this.setState({a});
                                 
                                     }} 
                            }}>Submit</button>  
                         </React.Fragment>
                         }
                           <p>Borrowed Book:</p>
                           {selectedStudent['book1'] &&
                           <React.Fragment>
                           <p>Book1</p>
                           <button onClick={() => {
                            selectedStudent['book1']=false;
                            this.setState({
                                selectedStudent
                            });
                            for (let x of this.state.student) { 
                                if(selectedStudent['id']  === x['id']){
                                    x['book1']=selectedStudent['book1']
                                    this.setState({x}); }}}}>
                            return
                            </button>
                            </React.Fragment>
                            }
                            {selectedStudent['book2'] &&
                           <React.Fragment>
                           <p>Book2</p>
                           <button onClick={() => {
                            selectedStudent['book2']=false;
                            this.setState({
                                selectedStudent});
                                for (let x of this.state.student) { 
                                    if(selectedStudent['id']  === x['id']){
                                        x['book2']=false
                                        this.setState({x});}} }}>
                            return
                            </button>
                            </React.Fragment>
                            }
                            {selectedStudent['book3'] &&
                           <React.Fragment>
                           <p>Book3</p>
                           <button onClick={() => {
                            selectedStudent['book3']=false
                            this.setState({
                                selectedStudent});
                        
                                for (let x of this.state.student) { 
                                    if(selectedStudent['id']  === x['id']){
                                        x['book3']=false
                                        this.setState({x});
                                 
                                     }} 
                             }
                            }>>
                            return
                            </button>
                            </React.Fragment>
                            }
                            {selectedStudent['book4'] &&
                           <React.Fragment>
                           <p>Book4</p>
                           <button onClick={() => {
                            selectedStudent['book4']=false
                            this.setState({
                                selectedStudent});
                              
                                    for (let x of this.state.student) { 
                                        if(selectedStudent['id']  === x['id']){
                                            x['book4']=false
                                            this.setState({x});}}}}>return</button>
                            
                            </React.Fragment>}
                         </React.Fragment>
                        }
                    </div>)
                    }
                }