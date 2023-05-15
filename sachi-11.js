import { LitElement, html } from "lit-element";

class EmployeeForm extends LitElement {
    static get properties() {
    return {
        name: { type: String },
        empCode: { type: String }, 
        email: { type: String },
        officialEmail: { type: String },
        personalEmail: { type: String },
        nameError: { type: String },
        empCodeError: { type: String },
        emailError: { type: String },
        officialEmailError: { type: String },
        personalEmailError: { type: String },
        designation: { type: String },
        designationOptions: { type: Array },
        designationError: { type: String },
        department: { type: String },
        departmentOptions: { type: Array },
        departmentError: { type: String },
        primaryContact: { type: String },
        secondaryContact: { type: String },
        emergencyContact: { type: String },
        primaryContactError: { type: String },
        secondaryContactError: { type: String },
        emergencyContactError: { type: String },
        correspondenceAddressLine1: { type: String },
        correspondenceAddressLine2: { type: String },
        correspondenceLandmark: { type: String },
        correspondenceCity: { type: String },
        correspondenceState: { type: String },
        correspondenceCountry: { type: String },
        correspondenceZip: { type: String },
        correspondenceAddressLine1Error: { type: String },
        correspondenceLandmarkError: { type: String },
        correspondenceCityError: { type: String },
        correspondenceStateError: { type: String },
        correspondenceCountryError: { type: String },
        correspondenceZipError: { type: String },
        correspondenceCityOptions: { type: Array },
        correspondenceStateOptions: { type: Array },
        correspondenceCountryOptions: { type: Array },
        
        
        permanentAddressLine1: { type: String },
        permanentAddressLine2: { type: String },
        permanentLandmark: { type: String },
        permanentCity: { type: String },
        permanentState: { type: String },
        permanentCountry: { type: String },
        permanentZip: { type: String },
        permanentAddressLine1Error: { type: String },
        permanentLandmarkError: { type: String },
        permanentCityError: { type: String },
        permanentStateError: { type: String },
        permanentCountryError: { type: String },
        permanentZipError: { type: String },
        permanentCityOptions: { type: Array },
        permanentStateOptions: { type: Array },
        permanentCountryOptions: { type: Array },
    };
    }

constructor() {
    super();
    this.name = "";
    this.empCode = "";
    this.email = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.nameError = "";
    this.empCodeError = "";
    this.emailError = "";
    this.officialEmailError = "";
    this.personalEmailError = "";
    this.designationError = "";
    this.departmentError = "";
    this.designationOptions = [
            { label: "Select Designation", value: "" },
            { label: "Manager", value: "manager" },
            { label: "Developer", value: "developer" },
            { label: "Designer", value: "designer" },
            { label: "Tester", value: "tester" },
            { label: "QA", value: "qa" },
            { label: "Sales", value: "sales" },
            { label: "Accountant", value: "accountant" },
    ];
    this.departmentOptions = [
        { label: "Select Department", value: "" },
        { label: "IT", value: "it" },
        { label: "HR", value: "hr" },
        { label: "Finance", value: "finance" },
        { label: "Marketing", value: "marketing" },
        { label: "Sales", value: "sales" },
        { label: "Accounting", value: "accounting" },
        { label: "Support", value: "support" },
        { label: "Others", value: "others" },
    ];
    this.primaryContact = "";
    this.secondaryContact = "";
    this.emergencyContact = "";
    this.primaryContactError = "";
    this.secondaryContactError = "";
    this.emergencyContactError = "";
    this.correspondenceAddressLine1 = '';
    this.correspondenceAddressLine2 = '';
    this.correspondenceLandmark = '';
    this.correspondenceCity = '';
    this.correspondenceState = '';
    this.correspondenceCountry = '';
    this.correspondenceZip = '';
    this.correspondenceAddressLine1Error = '';
    this.correspondenceLandmarkError = '';
    this.correspondenceCityError= '';
    this.correspondenceStateError = '';
    this.correspondenceCountryError ='';
    this.correspondenceZipError = '';
    this.correspondenceCityOptions = [
        { label: "Select City", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];
    this.correspondenceStateOptions = [
        { label: "Select State", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];
    this.correspondenceCountryOptions = [
        { label: "Select Country", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];


    this.permanentAddressLine1 = '';
    this.permanentAddressLine2 = '';
    this.permanentLandmark = '';
    this.permanentCity = '';
    this.permanentState = '';
    this.permanentCountry = '';
    this.permanentZip = '';
    this.permanentAddressLine1Error = '';
    this.permanentLandmarkError = '';
    this.permanentCityError = '';
    this.permanentStateError= '';
    this.permanentCountryError= '';
    this.permanentZipError = '';
    this.permanentCityOptions = [
        { label: "Select City", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];
    this.permanentStateOptions = [
        { label: "Select State", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];
    this.permanentCountryOptions = [
        { label: "Select Country", value: "" },
        { label: "Manager", value: "manager" },
        { label: "Developer", value: "developer" },
        { label: "Designer", value: "designer" },
        { label: "Tester", value: "tester" },
        { label: "QA", value: "qa" },
        { label: "Sales", value: "sales" },
        { label: "Accountant", value: "accountant" },
    ];
    }

    render() {
    return html`
    <form @submit=${this.handleSubmit}>
        <label for="name-input">Full Name:</label>
        <input type="text" id="name-input" .value=${this.name} @input=${this.validateName }  required />
        <span class="error">${this.nameError}</span>

        <label for="empcode-input">Employee Code:</label>
        <input type="text" id="empcode-input" .value=${this.empCode} @input=${this.validateEmpCode}  required/>
        <span class="error">${this.empCodeError}</span>
        
        <label for="official-email-input">Official Email Address:</label>
        <input type="text" id="official-email-input" .value=${this.officialEmail}  @input=${this.validateOfficialEmail}  required/>
        <span class="error">${this.officialEmailError}</span>

        <label for="personal-email-input">Personal Email Address:</label>
        <input type="text" id="personal-email-input" .value=${this.personalEmail} @input=${this.validatePersonalEmail}  required/>
        <span class="error">${this.personalEmailError}</span>

        <label for="designation-select">Designation:</label>
        <select id="designation-select" @change=${this.handleDesignationChange}  required>
            ${this.designationOptions.map(
                (option) =>
                html`<option value="${option.value}">${option.label}</option>`
            )}
        </select>
        <span class="error">${this.designationError}</span>
        <label for="department-select">Department:</label>
        <select id="department-select" @change=${this.handleDepartmentChange}  required>
            ${this.departmentOptions.map(
                (option) =>
                html`<option value="${option.value}">${option.label}</option>`
            )}
        </select>
        <span class="error">${this.departmentError}</span>
        <fieldset>
            <legend>Contact Numbers:</legend>
            <label for="primary-contact-input">Primary:</label>
            <input type="tel" id="primary-contact-input" .value=${this.primaryContact} @input=${this.validatePrimaryContact}  required/>
            <span class="error">${this.primaryContactError}</span>

            <label for="secondary-contact-input">Secondary:</label>
            <input type="tel" id="secondary-contact-input" .value=${this.secondaryContact} @input=${this.validateSecondaryContact}  required/>
            <span class="error">${this.secondaryContactError}</span>

            <label for="emergency-contact-input">Emergency:</label>
            <input type="tel" id="emergency-contact-input" .value=${this.emergencyContact} @input=${this.validateEmergencyContact}  required />
        <span class="error">${this.emergencyContactError}</span>
        </fieldset>
        <h3>Correspondence Address</h3>
        <label for="correspondence-address-line1-input">Address Line 1:</label>
        <input type="text" id="correspondence-address-line1-input" .value=${this.correspondenceAddressLine1} @input=${this.validateCorrespondenceAddressLine1} required />
        <span class="error">${this.correspondenceAddressLine1Error}</span>

        <label for="correspondence-address-line2-input">Address Line 2:</label>
        <input type="text" id="correspondence-address-line2-input" .value=${this.correspondenceAddressLine2} required />
        
        <label for="correspondence-landmark-input">Landmark:</label>
        <input type="text" id="correspondence-landmark-input" .value=${this.correspondenceLandmark}  @input=${this.validateCorrespondenceLandmark} required />
        <span class="error">${this.correspondenceLandmarkError}</span>

        <label for="correspondence-city-input">City:</label>
        <select id="correspondence-city-input" @change=${this.handleCorrespondenceCityChange} required>
        ${this.correspondenceCityOptions.map(
        (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select>


        <label for="correspondence-state-input">State:</label>
        <select id="correspondence-state-input" @change=${this.handleCorrespondenceStateChange} required>
            ${this.correspondenceStateOptions.map(
            (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select>
        <label for="correspondence-country-input">Country:</label>
        <select id="correspondence-country-input" @change=${this.handleCorrespondenceCountryChange} required>
        ${this.correspondenceCountryOptions.map(
            (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select>

        <label for="correspondence-zip-input">Zip:</label>
        <input type="text" id="correspondence-zip-input" .value=${this.correspondenceZip} @input=${this.validateCorrespondenceZip}  required/>
        <span class="error">${this.correspondenceZipError}</span>
        
        <!-- Permanent Address -->
        <h3>Permanent Address</h3>
        <label for="permanent-address-line1-input">Address Line 1:</label>
        <input type="text" id="permanent-address-line1-input" .value=${this.permanentAddressLine1} @input=${this.validatePermanentAddressLine1} required />
        <span class="error">${this.permanentAddressLine1Error}</span>

        <label for="permanent-address-line2-input">Address Line 2:</label>
        <input type="text" id="permanent-address-line2-input" .value=${this.permanentAddressLine2} required />

        <label for="permanent-landmark-input">Landmark:</label>
        <input type="text" id="permanent-landmark-input" .value=${this.permanentLandmark} @input=${this.validatePermanentLandmark} required/>
        <span class="error">${this.permanentLandmarkError}</span>

        <label for="permanent-city-input">City:</label>
        <select id="permanent-city-input" @change=${this.handlePermanentCityChange} required>
        ${this.permanentCityOptions.map(
        (option) =>
            html`<option value="${option.value}">${option.label}</option>`)}
        </select>
        
        <label for="permanent-state-input">State:</label>
        <select id="permanent-state-input" @change=${this.handlePermanentStateChange} required>
        ${this.permanentStateOptions.map(
        (option) =>
        html`<option value="${option.value}">${option.label}</option>`)}
        </select>

        <label for="permanent-state-input">Country:</label>
        <select id="permanent-country-input" @change=${this.handlePermanentCountryChange} required>
        ${this.permanentCountryOptions.map(
        (option) =>
        html`<option value="${option.value}">${option.label}</option>`)}
        </select>
        
        <label for="permanent-zip-input">Zip:</label>
        <input type="text" id="permanent-zip-input" .value=${this.permanentZip} @input=${this.validatePermanentZip} required/>
        <span class="error">${this.permanentZipError}</span>
        

        <button type="submit">Submit</button>
    </form>
    `;
    }

validateName(e) {
    const name = e.target.value;
    if (name.trim() === "" || name.length > 40) {
    this.nameError ="Please enter a valid full name (maximum length 40 characters)";
    } else {
    this.nameError = "";
    this.name = name;
    }
    }

validateEmpCode(e) {
    const empCode = e.target.value;
    if (/^[A-Za-z]\d{6}$/.test(empCode)) {
    this.empCodeError = "";
    this.empCode = empCode;
    } else {
    this.empCodeError ="Please enter a valid employee code (1 alphabet and 6 digits)";
    }
    }

validateOfficialEmail(e) {
    const officialEmail = e.target.value;
    if (/^\S+@(annalect)\.com$/.test(officialEmail)) {
    this.officialEmailError = "";
    this.officialEmail = officialEmail;
    } else {
    this.officialEmailError = "Please enter a valid official email address";
    }
    }

validatePersonalEmail(e) {
    const personalEmail = e.target.value;
    if (/^\S+@(gmail|yahoo|outlook)\.com$/.test(personalEmail)) {
    this.personalEmailError = "";
    this.personalEmail = personalEmail;
    } else {
    this.personalEmailError = "Please enter a valid personal email address";
    }
    }
handleDesignationChange(e) {
    const designation = e.target.value;
    if (designation === "") {
        this.designationError = "Please select a designation";
    } else {
        this.designationError = "";
        this.designation = designation;
    }
    }
handleDepartmentChange(e) {
    const department = e.target.value;
    if (department === "") {
        this.departmentError = "Please select a department";
    } else {
        this.departmentError = "";
        this.department = department;
    }
    }
validatePrimaryContact(e) {
    const primaryContact = e.target.value;
    if (/^\d{10}$/.test(primaryContact)) {
        this.primaryContactError = "";
        this.primaryContact = primaryContact;
    } else {
        this.primaryContactError =
        "Please enter a valid 10-digit primary contact number";
    }
    }

validateSecondaryContact(e) {
    const secondaryContact = e.target.value;
    if (/^\d{10}$/.test(secondaryContact)) {
        this.secondaryContactError = "";
        this.secondaryContact = secondaryContact;
    } else {
        this.secondaryContactError =
        "Please enter a valid 10-digit secondary contact number";
    }
    }
validateEmergencyContact(e) {
    const emergencyContact = e.target.value;
    if (/^\d{10}$/.test(emergencyContact)) {
        this.emergencyContactError = "";
        this.emergencyContact = emergencyContact;
    } else {
        this.emergencyContactError =
        "Please enter a valid 10-digit emergency contact number";
    }
    }
    validateCorrespondenceAddressLine1(e) {
        const addressLine1 = e.target.value;
        if (addressLine1.trim() === '' || addressLine1.length > 80) {
            this.correspondenceAddressLine1Error = 'Please enter a valid address (maximum length 80 characters)';
        } else {
            this.correspondenceAddressLine1Error = '';
            this.correspondenceAddressLine1 = addressLine1;
        }
        }
    validateCorrespondenceLandmark(e) {
        const landmark = e.target.value;
        if (landmark.trim() === '' || landmark.length > 50) {
            this.correspondenceLandmarkError = 'Please enter a valid Landmark (maximum length 50 characters)';
        } else {
            this.correspondenceLandmarkError = '';
            this.correspondenceLandmark = landmark;
        }
        }
    handleCorrespondenceCityChange(e) {
        const correspondenceCity = e.target.value;
        if (correspondenceCity === "") {
            this.correspondenceCityError = "Please select a City";
        } else {
            this.correspondenceCityError = "";
            this.correspondenceCity = correspondenceCity;
        }
        }
    handleCorrespondenceStateChange(e) {
        const correspondenceState = e.target.value;
        if (correspondenceState === "") {
            this.correspondenceStateError = "Please select a State";
        } else {
            this.correspondenceStateError = "";
            this.correspondenceState = correspondenceState;
        }
        }
    handleCorrespondenceCountryChange(e) {
        const correspondenceCountry = e.target.value;
        if (correspondenceCountry === "") {
            this.correspondenceCountryError = "Please select a Country";
        } else {
            this.correspondenceCountryError = "";
            this.correspondenceCountry = correspondenceCountry;
        }
        }
    
    validateCorrespondenceZip(e) {
        const zip = e.target.value;
        if (/^\d{6}$/.test(zip)) {
            this.correspondenceZipError = '';
            this.correspondenceZip = zip;
        } else {
          this.correspondenceZipError = 'Please enter a valid zip code (6 digits only)';
        }
      }
    
      // Validation methods for Permanent Address
      validatePermanentAddressLine1(e) {
        const addressLine1 = e.target.value;
        if (addressLine1.trim() === '' || addressLine1.length > 80) {
          this.permanentAddressLine1Error = 'Please enter a valid address (maximum length 80 characters)';
        } else {
          this.permanentAddressLine1Error = '';
          this.permanentAddressLine1 = addressLine1;
        }
      }
      validatePermanentLandmark(e) {
        const landmark = e.target.value;
        if (landmark.trim() === '' || landmark.length > 50) {
          this.PermanentLandmarkError = 'Please enter a valid Landmark (maximum length 50 characters)';
        } else {
          this.PermanentLandmarkError = '';
          this.PermanentLandmark = landmark;
        }
      }
      handlePermanentCityChange(e) {
        const permanentCity = e.target.value;
        if (permanentCity === "") {
          this.permanentCityError = "Please select a City";
        } else {
          this.permanentCityError = "";
          this.permanentCity = permanentCity;
        }
      }
      handlePermanentStateChange(e) {
        const permanentState = e.target.value;
        if (permanentState === "") {
          this.permanentStateError = "Please select a State";
        } else {
          this.permanentStateError = "";
          this.permanentState = permanentState;
        }
      }
      handlePermanentCountryChange(e) {
        const permanentCountry = e.target.value;
        if (permanentCountry === "") {
          this.permanentcorrespondenceCountryError = "Please select a Country";
        } else {
          this.permanentCountryError = "";
          this.permanentCountry = permanentCountry;
        }
      }
    
      validatePermanentZip(e) {
        const zip = e.target.value;
        if (/^\d{6}$/.test(zip)) {
          this.permanentZipError = '';
          this.permanentZip = zip;
        } else {
          this.permanentZipError = 'Please enter a valid zip code (6 digits only)';
        }
      }

handleSubmit(e) {
    e.preventDefault();
    const formData = {
        name: this.name,
        empCode: this.empCode,
        officialEmail: this.officialEmail,
        personalEmail: this.personalEmail,
        designation: this.designation,
        department: this.department,
        primaryContact: this.primaryContact,
        secondaryContact: this.secondaryContact,
        emergencyContact: this.emergencyContact,
        correspondenceAddressLine1: this.correspondenceAddressLine1,
        correspondenceAddressLine2: this.correspondenceAddressLine2,
        correspondenceLandmark: this.correspondenceLandmark,
        correspondenceCity: this.correspondenceCity,
        correspondenceState: this.correspondenceState,
        correspondenceCountry:this.correspondenceCountry,
        correspondenceZip: this.correspondenceZip,
        permanentAddressLine1: this.permanentAddressLine1,
        permanentAddressLine2: this.permanentAddressLine2,
        permanentLandmark: this.PermanentLandmark,
        permanentCity: this.permanentCity,
        permanentState: this.permanentState,
        permanentCountry: this.permanentCountry,
        permanentZip: this.permanentZip
    };
    const data = JSON.parse(localStorage.getItem("formData") || "[]");
    data.push(formData);
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Form submitted and data saved to local storage:", formData);
    alert("Form submitted and data saved to local storage");
    }
}

customElements.define("sachi-11", EmployeeForm);
