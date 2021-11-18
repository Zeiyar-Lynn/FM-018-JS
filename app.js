const vali = document.querySelectorAll('#fname, #lname, #email, #pwd');
const submit = document.getElementById('submit');
const err = ['First Name', 'Last Name', 'Email', 'Password']

submit.onclick = () => {
   vali.forEach( (iter, i) => {
      const node = iter.parentElement;
      if (iter.value == '') {
         node.lastElementChild.innerText = err[i] + " cannot be empty";
         node.classList.add('error');
      }
      else if (iter.id == 'email' && !isEmail(email)) {
         node.lastElementChild.innerText = "Looks like it is not an email";
         node.classList.add('error');
      }
      else
         node.classList.remove('error');
   });
}

function isEmail(email) {
   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}