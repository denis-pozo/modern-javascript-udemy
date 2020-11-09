document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);
  console.log('READYSTATE', xhr.readyState);

  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
          </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.onrror = function() {
    console.log('Request error...');
  }

  xhr.send();
}

function loadCustomers () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);
  console.log('READYSTATE', xhr.readyState);

  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  };

  xhr.onload = function() {
    if(this.status === 200) {
      const customers = JSON.parse(this.responseText);
      console.log(customers);

      let output = '';
      customers.forEach(function(customer) {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
          </ul>
        `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  }

  // Older method requires to check for this.readyState
  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE ', xhr.readyState);
  //   if(this.status === 200 && this.readyState == 4) {
  //     console.log(this.responseText);
  //   }
  // }
  
  xhr.onrror = function() {
    console.log('Request error...');
  }

  xhr.send();
}
