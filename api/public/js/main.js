const signUpButton = document.getElementById('Add');
const signInButton = document.getElementById('GoBack');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.getElementsByClassName('right')[0].innerHTML=`<iframe name="dest"></iframe>
                <form id="initialForm" target="dest">
                    <h1>Add Student</h1>
                    <input type="number" name="reg_id" id="reg_id" placeholder="Registration number" required />
                    <input type="text" name="name" placeholder="Name" required/>
                    <select id="gender" name="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" id="sclass" placeholder="Class" name="class" required>
                    <input type="number" id="roll_no" placeholder="Roll number" name="roll_no" required>
                    <button id="addBut">Add</button>
                </form>`;
    Add();
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementsByClassName('left')[0].innerHTML=
                `<iframe name="dest3"></iframe>
                <div class="form" action="#" target="dest3">
                    <h1>View Student</h1>
                    <input type="number" name="reg_id" id="Reg_id" placeholder="Registration number" />
                    <span>OR</span>
                    <input type="text" name="name" id="Name" placeholder="Name" />
                    <button id="Search">Search</button>
                    <button id="viewAll">View All</button>
                </div>`;
    Search();
    const view = document.getElementById("viewAll");
    view.addEventListener("click", View);
});