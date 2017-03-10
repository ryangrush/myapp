var Prospect = React.createClass({
  componentDidMount: function() {
    $.ajax({
      method: "GET",
      url: "/prospect/get_prospects",
      datatype: 'jsonp'
    }).success(function(data){
      this.setState({prospects: data});
    }.bind(this));
  },
  getInitialState: function() {
    return {
      prospects: null
    }
  },
  render: function() {
    var prospects = [];

    if (this.state.prospects == null) {
      return (
        <p>Loading ...</p>
      )
    }
    else {
      this.state.prospects.forEach(function(prospect, i) {
        prospects.push(
          <tr key={prospect.id}>
            <td>{prospect.first_name}</td>
            <td>{prospect.last_name}</td>
            <td>{prospect.email}</td>
            <td>{prospect.phone_number}</td>
          </tr>
        )
      })
      
      return (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {prospects}
          </tbody>
        </table>
      )
    }
  }
})