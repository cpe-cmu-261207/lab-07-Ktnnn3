import Link from 'next/link'
const resume = () => {

    return (
        <>
            <div className="body-re">

                <h1>Resume</h1>


                <img src="/photos/pofile.jpg" alt="my pofile image"
                    style={{ width: "400px", height: "600px" }} />
                <p> <b>นางสาว กฤตธินันท์ ทวีบุญ</b></p>
                <p> <b>คณะ วิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</b></p>
                <p><b>ความสามารถพิเศษ:</b>สื่อสารได้ 4 ภาษา</p>
                <table id="table">
                    <tr>
                        <th>ภาษาไทย:</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                    </tr>

                    <tr>
                        <th>ภาษาอังกฤษ:</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                    </tr>

                    <tr>
                        <th>ภาษาอิตาลี:</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                    </tr>

                    <tr>
                        <th>ภาษาจีน:</th>
                        <th>&#128151;</th>
                        <th>&#128151;</th>
                    </tr>
                </table> <br />

                <b>ประวัติการศึกษา</b>
                <p id="experience">
                    <li id="experience">2017-2018 : ไปแลกเปลี่ยนที่อิตาลี ระยะเวลา 1 ปี</li>
                    <li id="experience">2019&nbsp;&nbsp;: จบการศึกษา จากโรงเรียนพระหฤทัย เชียงใหม่</li>
                    <ul id="experience">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: เข้าศึกษาปริญญาตรี ในคณะวิศวกรรมศาสาตร์ สาขา วิศวกรรมคอมพิวเตอร์</ul>
                    <li id="experience">2020&nbsp;&nbsp;: ได้ประกาศนียบัตรผลการเรียนดีประจำปี 2562</li>
                    <ul id="experience">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: เข้าร่วมการแข่งขันรายการ R2M และเข้ารอบในระดับประเทศต่อไป</ul>
                    <ul id="experience">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: เป็น TA(Teacher Assistance)ในวิชา Computer Programmimg ภาษา Python</ul> <br /><br />

                    <tr><b>ช่องทางการติดต่อ</b></tr>
                    <td>อีเมล์:ktn.three@gmail.com</td>
                </p>
            </div>
        </>
    )
}
export default resume;