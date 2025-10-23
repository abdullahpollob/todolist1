
    const form = document.getElementById('todoForm');
    const tableBody = document.querySelector('#todoTable tbody');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const polytechnic = document.getElementById('polytechnic').value;
      const classNo = document.getElementById('classNo').value;
      const classDate = document.getElementById('classDate').value;
      const toolsUsed = document.getElementById('toolsUsed').value;
      const workDetails = document.getElementById('workDetails').value;
      const remarks = document.getElementById('remarks').value;

      const row = document.createElement('tr');
      const values = [name, polytechnic, classNo, classDate, toolsUsed, workDetails, remarks];

      values.forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        td.setAttribute('contenteditable', 'true');
        row.appendChild(td);
      });

      tableBody.appendChild(row);
      form.reset();
    });
  