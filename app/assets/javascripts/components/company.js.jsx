var Company = React.createClass({
  getInitialState: function() {
    return {
      companies: this.props.companies
    }
  },
  render: function() {
    var companies = [];

    this.state.companies.forEach(function(company, i) {
      companies.push(
        <tr key={company.id}>
          <td>{company.name}</td>
          <td>{company.url}</td>
          <td>{company.address}</td>
          <td>{company.phone_number}</td>
        </tr>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {companies}
        </tbody>
      </table>
    )
  }
})