class TodoModel {

  constructor() {
    // todo list를 관리 할 array 변수를 관리한다.
    this.todoList = [ {id: 'RCB-123',name: "React Cook Book", isFavorite: false},
    {id: 'VCB-123',name: "Vue Cook Book", isFavorite: false},
    {id: 'ACB-123',name: "Angular Cook Book", isFavorite: false}];
  }


  // 투두 리스트를 가져갈 수 있는 메소드를 만든다.
  getTodoList() {
    return this.todoList;
  }

  // 투두가 추가 될때 리스트에 추가하는 메소드를 만든다.
  pushTodoListData(todo) {
    this.todoList.push(todo);
  }
}