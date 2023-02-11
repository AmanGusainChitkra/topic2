// const devices = [];
const devices = JSON.parse(localStorage.getItem('devices')) || [];

// devices.push({ user: "Mary", name: "Mary's iPhone" });
// devices.push({ user: "Alex", name: "Alex's Surface Pro" });
// devices.push({ user: "Mary", name: "Mary's MacBook" });

devices.forEach(function(device) {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });

  $('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    // console.log(devices);
    localStorage.setItem('devices', JSON.stringify(devices));
    console.log(devices);
  });

  $('#view-devices').on('click', function(){
    location.href = 'device-list.html';
  });

  $('#register').on('click', function(){
    location.href = 'register-device.html';
  });