import React from 'react';

class Table extends React.Component{
  render(){
    return (
      <table class="ui selectable celled table">
        <thead>
          <tr>
            <th>Attention Score</th>
            <th>Citations</th>
            <th>Published Date</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Article Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>782</td>
            <td>180</td>
            <td>January 1, 2014</td>
            <td>Machine learning for science and society</td>
            <td>Rudin, C</td>
            <td>http://dx.doi.org/10.1007/s10994-013-5425-9</td>
          </tr>
          <tr>
            <td>782</td>
            <td>180</td>
            <td>January 1, 2014</td>
            <td>Machine learning for science and society</td>
            <td>Rudin, C</td>
            <td>http://dx.doi.org/10.1007/s10994-013-5425-9</td>
          </tr>
          <tr>
            <td>782</td>
            <td>180</td>
            <td>January 1, 2014</td>
            <td>Machine learning for science and society</td>
            <td>Rudin, C</td>
            <td>http://dx.doi.org/10.1007/s10994-013-5425-9</td>
          </tr>
        </tbody>
      </table>
    );
  }
}


export default Table;