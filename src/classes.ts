class Employee {
    private firstName : string = '';
    private lastName : string = '';
    private experience : number | null = null;
    private department : string | null = null;
    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    public setDepartment(department : string): void {
        this.department = department;
    }

    public setExperience(experience : number): void {
        this.experience = experience;
    }

    public async fetchProfilePicUrl(): Promise < string > { // imagine we are doing fetch call and we received this url
        let response = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
        return response;
    }
};
// change return type of getFullName() function and see
const emp1 = new Employee('Dharmik', 'Jampala');
emp1.setDepartment('IT');
emp1.setExperience(4);


const emp2 = new Employee('Shubham', 'Patel');
// emp2.firstName = 'dsf';

const formatEmployeeDetails = (emp : Employee) : string => {
    console.log('---Employee Details are-----');
    // console.log(emp.firstName); will display error as it is private
    console.log(emp.getFullName());
    return '';
};
let formattedData: string = formatEmployeeDetails(emp1);
console.log(formattedData);

(async () => {
    let profilePicUrl: string = await emp1.fetchProfilePicUrl();
    console.log(profilePicUrl);
})();
