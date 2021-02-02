import Link from 'next/link'
const contact = () => {
    return (
    <>
        <div className="body">

            <h1>Contact</h1>

            <div>If you want to contact me, please fill in your information. </div><br />
            <table id="table">
                <tr>
                    <th><label>First name:</label><br /></th>
                    <th><label>Last name:</label><br /></th>
                </tr>
                <th><input type="text" /><br /></th>
                <th><input type="text" /><br /></th>
            </table>
        
            <p>Gender</p>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label>

            <p></p>
            <label for="subject">Subject:</label><br />
            <input type="text" id="subject" name="subject" /><br />

            <p></p>
            <label for="mgs">Message:</label><br />
            <input type="text" id="mgs" name="mgs" /><br />

            <p></p>
            <label for="phone">Phone:</label><br />
            <input type="text" id="phone" name="phone" /><br />

            <p></p>
            <label for="Email">Email:</label><br/>
            <input type="text" id="Email" name="Email" /><br />

            <br />
            <input type="submit" value="Submit" />
           
           <br/><br/><br/>
        </div>

    </>
    )
}
    export default contact;