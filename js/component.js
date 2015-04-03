var Finder = React.createClass({
  displayName: 'Finder',
  getInitialState: function() {
    return {files: []};
  },

  loadFileList: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(res) {
        this.setState({files: res.files});
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadFileList();
    setInterval(this.loadFileList, 1000);
  },

  render: function() {
    var filelist = this.state.files.map(function(filename){
      return (
        <File filename={filename} />
      );
    });
    return (
      <ul>
        {filelist}
      </ul>
    );
  }
});

var File = React.createClass({
  displayName: 'Files',
  render: function() {
    return (
      <li class='files'>
        {this.props.filename}
      </li>
    );
  }
});

React.render (
  <Finder url="examples.php" />,
  document.getElementById('finder')
);
