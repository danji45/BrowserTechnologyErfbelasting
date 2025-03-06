document.addEventListener('DOMContentLoaded', function() {
    const welGetrouwdCheckbox = document.getElementById('welGetrouwd');
    const hiddenElementGetrouwd = document.getElementById('hiddenElementGetrouwd');

    welGetrouwdCheckbox.addEventListener('change', function() {
      if (welGetrouwdCheckbox.checked) {
        hiddenElementGetrouwd.style.display = 'block';
      } else {
        hiddenElementGetrouwd.style.display = 'none';
      }
    });
  });document.getElementById('welGetrouwd').addEventListener('change', function() {
    document.getElementById('hiddenElementGetrouwd').style.display = this.checked ? 'block' : 'none';
});
