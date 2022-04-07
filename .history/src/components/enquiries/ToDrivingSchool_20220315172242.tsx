import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    DatePicker,
    Checkbox,
    Button,
    AutoComplete,
    Upload, message,
  } from 'antd';
import { AppField } from "../ui/AppField";
import { useForm } from "react-hook-form";
import { QuestionOutlined, InboxOutlined,  UploadOutlined, MobileTwoTone, CloudUploadOutlined } from '@ant-design/icons';
  import MaskedInput from "antd-mask-input";
  import http from "../ui/Services";
import "./assets/murojat.scss";
import 'moment/locale/uz-latn';
import ImageUploader from "../ui/ImageUploader";
import logo from './assets/logo.gif'

import frFR from '../../../node_modules/antd/es/date-picker/locale/ru_RU'
  import 'antd/dist/antd.css';
  import { useEffect, useState } from "react";
  import { PageTitle } from "../ui/PageTitle";
  import { useTranslation } from "react-i18next";
  import { Col, Row,  Tooltip } from 'antd';
import moment from 'moment';
import { OverlayTrigger, ToastBody, } from 'react-bootstrap';
import { region } from '../../host';
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 22 },
  };
  const { Option } = Select;
  
  /* eslint-disable no-template-curly-in-string */
  

  /* eslint-enable no-template-curly-in-string */

  function ToDirivingSchool() {
    const initialObj = { diplomFile: null, passportFile: null }
    const { reset, register } = useForm();
    const [firstName, setfirstName]=useState(false)
    const [firstNameClass, setfirstNameClass]=useState(false)
    const [text, settext]=useState(false)
    const [birthDate, setbirthDate]=useState(false)
    const [birthDateData, setbirthDateData]=useState(false)
    const [birthDateClass, setbirthDateClass]=useState(false)
    const [databirthDate, setdatabirthDate]=useState("")
    const [passportFile, setpassportFile]=useState(false)
    const [passportClass, setpassportClass]=useState(false)
    const [diplomClass, setdiplomClass]=useState(false)
    const [black, setblack]=useState(false)
    const [diplomFile, setdiplomFile]=useState(false)
    const [form] = Form.useForm();
    const [now, setNow] = useState('0000-00-00')
    const [loader, setLoader] = useState(true)
    const [phone, setphone]=useState(false)
    const [phoneClass, setphoneClass]=useState(false)
    const [school, setSchool] = useState<any>(null)
    const [schoolF, setSchoolF] = useState<any>(null)
    const [schoolClass, setSchoolClass] = useState<any>(false)
    const [shifts, setShifts] = useState<any>(null)
    const [shiftsClass, setShiftsClass] = useState<any>(false)
    const [regions, setRegions] = useState<any>(null)
    const [regionsClass, setRegionsClass] = useState<any>(true)
    const [district, setDistrict] = useState<any>(null)
    const [districtF, setDistrictF] = useState<any>(false)
    const [districtClass, setDistrictClass] = useState<any>(false)
    const [districtS, setDistrictS] = useState<any>(true)
        const [districtdata, setDistrictdata] = useState<any>(null)
    const [districtL, setDistrictL] = useState<any>(false)
    const [schoolS, setSchoolS] = useState<any>(true)
        const [schooldata, setSchooldata] = useState<any>()
    const [schoolL, setSchoolL] = useState<any>(false)
    const [branchS, setBranchS] = useState<any>(true)
        const [branchdata, setBranchdata] = useState<any>()
    const [branchL, setBranchL] = useState<any>(false)
    const [category, setCategory] = useState<any>(null)
    const [branchF, setBranchF] = useState<any>(null)
    const [categoryClass, setCategoryClass] = useState<any>(false)
    const [lastName, setlastName]=useState(false)
    const [lastNameClass, setlastNameClass]=useState(false)
    const [data, setData] = useState<any>({ diplomFile: "", passportFile: "" })

    const [secondName, setsecondName]=useState(false)
    const [secondNameClass, setsecondNameClass]=useState(false)
      const { t } = useTranslation();
    const onFinish = (values: any) => {
      const formData = new FormData();
      if(data.passportFile===""){
        setpassportFile(true)
      }
  
      if(data.diplomFile===""){
        setdiplomFile(true)
      }
      if(data.passportFile===null){
        setpassportFile(true)
      }
  
      if(data.diplomFile===null){
        setdiplomFile(true)
      }
      if(databirthDate.length===0){
        setbirthDate(true)
      }
    
      if(districtdata===null){
        setDistrictF(true)
      }
      if(schooldata===null){
        setSchoolF(true)
      }
      
      if(branchdata===null){
        setBranchF(true)
      }
      
       

if(databirthDate.length!==0 && data.passportFile!=="" && data.diplomFile!=="" &&data.passportFile!==null && data.diplomFile!==null && !lastName && !firstName && !secondName && !phone && districtdata!==null && schooldata!==null && branchdata!==null){
  setLoader(true)
 
for (const key in values) {
    if (Object.prototype.hasOwnProperty.call(values, key)) {
        const element = values[key];
        
        formData.append(key, element)
    }
}
for (const key in data) {
  if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key];
      formData.append(key, element)
  }
}

formData.append("birthDate", databirthDate)
http.post<any>(`PostApi/LicenseApplication`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
})
    .then(() => {
       message.success({content:"Ma'lumotlaringiz qabul qilindi oparatorlarimiz siz bilan bog'lanishadi",
       className: 'custom-class',
    style: {
      marginTop: '30vh',
      padding:'30px',
      fontSize:'20px'
    },
    duration: 2,})
       setData({ diplomFile: null, passportFile: null });
  setLoader(false)
    
       setDistrictdata(null); setBranchdata(null);setSchooldata(null);
       form.resetFields();
     
    })
    .catch(e =>        {message.error({content:"Ma'lumotlaringiz qabul qilinmadi keyinroq yana urinib ko'ring", 
    className: 'custom-class',
    style: {
      marginTop: '30vh',
      padding:'30px',
      fontSize:'20px'
    },
    duration: 2,});  
     setLoader(false)}
    )
    console.log('sdsddsdds')
    setfirstName(false)
    settext(false)
    setbirthDate(false)
    setdatabirthDate("")
    setpassportFile(false)
    setdiplomFile(false)
    setphone(false)
    setSchool(null)
    setfirstNameClass(false)
    setbirthDateClass(false)
    setphoneClass(false)
    setSchoolClass(false)
    setShiftsClass(false)
    
    setDistrictClass(false)
    setCategoryClass(false)
    setlastNameClass(false)
    setsecondNameClass(false)
    setDistrict(null)
    setDistrictS(true)
    setDistrictL(false)
    setSchoolS(true)
    setSchoolL(false)
    setBranchS(true)
    setBranchL(false)
    setCategory(null)
    setlastName(false)
   
    setsecondName(false)
    setDistrictL(null)
    setSchoolL(null)
   
   
  }
};
const checkIsm=(value:any)=>{
  var a=value.target.value
  var b="" 
  var f=true 
  for(let i=0; i<a.length; i++){

      if(a.charCodeAt(i)===39 || a.charCodeAt(i)===44 || (a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90) || (a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122)){
        b+=a[i]
      }else{
        f=false
      }
    }
    if(value.target.value.length>0){
      setfirstNameClass(true)
  
    }else{
      setfirstNameClass(false)
    }
      form.setFieldsValue({
        firstName:b
      })
 
   
  }
  const checkOt=(value:any)=>{
    var a=value.target.value
    var b="" 
    var f=true 
    for(let i=0; i<a.length; i++){
  
        if(a.charCodeAt(i)===39 || a.charCodeAt(i)===44 || (a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90) || (a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122)){
          b+=a[i]
        }else{
          f=false
        }
      }
      if(value.target.value.length>0){
        setsecondNameClass(true)
    
      }else{
        setsecondNameClass(false)
      }
        form.setFieldsValue({
          secondName:b
        })
   
}
const checkFam=(value:any)=>{
  var a=value.target.value
  var b="" 
  var f=true 
  for(let i=0; i<a.length; i++){

      if(a.charCodeAt(i)===39 || a.charCodeAt(i)===44 || (a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90) || (a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122)){
        b+=a[i]
      }else{
        f=false
      }
    }
    if(value.target.value.length>0){
      setlastNameClass(true)
  
    }else{
      setlastNameClass(false)
    }
      form.setFieldsValue({
        lastName:b
      })
 
}
   
   
    const checkphone=(value:any)=>{
      if(value.target.value.length>0){
        setphoneClass(true)

      }else{
        setphoneClass(false)
      }
  
    var v=value.target.value
   
      if(v.indexOf("_")!==-1){
         setphone(true)
       }
      else{
      setphone(false)}   
    }
    
  
  
    const getShifts = () => {
        http.get<any>(`GetApi/GetStudyShifts`)
            .then((res) => setShifts(res.data) )
            .catch(e => console.log(e))
    }
    const handleDistrict = (id: number) => {
    setLoader(false);  setDistrictS(true);setDistrictL(true); setSchoolS(true);setSchoolL(true); setBranchS(true);setBranchL(true);
        http.get<any>(`GetApi/GetDistricts/${id}`)
        
            .then((res) => {setDistrict(res.data);setDistrictS(false);setDistrictL(false); })
            .catch(e => console.log(e))
    }
    const handleSchool = (id: number) => {
      setSchoolS(true);setSchoolL(true); setBranchS(true);setBranchL(true);setBranchdata(null);setSchooldata(null);
        http.get<any>(`GetApi/GetBranches/${id}`)
            .then((res) => {setSchool(res.data); setSchoolS(false);setSchoolL(false);} )
            .catch(e => console.log(e))
    }
    const handleCategory = (id: number) => {
      setBranchS(true);setBranchL(true);
        http.get<any>(`GetApi/GetBranchCategories/${id}`)
            .then((res) => {setCategory(res.data); setBranchS(false);setBranchL(false);})
            .catch(e => console.log(e))
    }
    
    useEffect(()=>{
      handleDistrict(region)
        getShifts()
        form.setFieldsValue({regionId:region})
     var date=new Date
    
        var year=String(date.getFullYear()-17)
        var month=String(date.getMonth()+1)
        if(month.length===1){
          month="0"+month
        }
        var day=String(date.getDate())
        if(day.length===1){
          day="0"+day
        }
setNow(`${year}-${month}-${day}`)
console.log(date.getFullYear(), date.getMonth(), date.getDate(),`${year}-${month}-${day}`)

    }, [])
    //
   
      //
const checkbirthDate=(date: any)=>{
  console.log(date.target.value)
  if(date.target.value.length!==0){
    setbirthDateClass(true)
  
  }else{
    setbirthDateClass(false)
  }
  var dat=""
  var year=String(date.target.value).substring(0,4)
  var day=String(date.target.value).substring(8)
  var mon=String(date.target.value).substring(5,7)
  
  var Tyear=new Date().getFullYear()
  var month=new Date().getMonth()+1
  var today=new Date().getDate()
  console.log(Tyear, month, today)
  console.log(Number(year),Number(mon), Number(day) )
  console.log(Tyear-Number(year))
  setdatabirthDate(date.target.value)
if(Tyear-Number(year)>17){
  setbirthDate(false)
}else{
  if(Tyear-Number(year)===17){
    if(Number(mon)<month){
      setbirthDate(false)

    }else{
      if(Number(mon)===month){
        if(Number(day)<=today){
      setbirthDate(false)

        }else{
          setbirthDate(true)
        }
      }else{
        setbirthDate(true)
      }
    }
  }else{
    setbirthDate(true)
  }
}
  
 }

  
  
    return ( <div className="murojat">
      
            {loader?<div className="loader">
            <div className="bef">
      <img src={logo} alt="..."/>
      </div>
   </div>
        :''}
    <div className="container">
    <PageTitle title={t("HAYDOVCHILIK MAKTABIGA YOZILISH")} />
        <div className="form">
        <Form  form={form} {...layout} onFinish={onFinish} validateMessages={{
    required: t("Maydonni to'ldirish shart"),
    types: {
      email: t("Emailni to'g'ri kiriting"),
      },
    
  }}>
        <Form.Item name="name">
       
      </Form.Item>
          <Row>
            <Col style={{padding:'0px 20px'}} lg={12} md={24} sm={24}>
            <Form.Item  data-placeholder={t("Ism")}  label=" "  className={`myFor ${firstName?"salom":''} ${firstNameClass?"forPlace":''}`}  tooltip={{ title: t("Lotin tilida yozing") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='firstName'   rules={[{ required: true, message: t("check")?`${t("Ism")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("Ism")}` }]} >
          <Input onChange={(e)=>{checkIsm(e)}} className="in1 ot" placeholder={t("Ism")} />
        </Form.Item>
      <Form.Item data-placeholder={t("Familiya")}  label=" "  tooltip={{ title: t("Lotin tilida yozing") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='lastName'  className={`myFor ${lastName?"salom":''} ${lastNameClass?"forPlace":''}`}  rules={[{ required: true, message: t("check")?`${t("Familiya")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("fam")}` }]} >
          <Input onChange={(e)=>{checkFam(e)}}  className="in1 ot" placeholder={t("Familiya")} />
         
      </Form.Item>
      <Form.Item data-placeholder={t("Otasining ismi")}  label=" "  tooltip={{ title: t("Lotin tilida yozing") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='secondName'  className={`myFor ${secondName?"salom":''} ${secondNameClass?"forPlace":''}`}  rules={[{ required: true, message: t("check")?`${t("Sharif")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("Sharif")}` }]} >
          <Input onChange={(e)=>{checkOt(e)}}  className="in1 ot" placeholder={t("Otasining ismi")} />
         
      </Form.Item>
    
      <div data-placeholder={t("Tug'ilgan sana")}       className={`myFor datFor ${birthDate?"salom":''} ${birthDateClass?"forPlace f":''}`} > 
     <div className="dateTool">
     <Tooltip placement="top" title={t("17 yoshdan katta bo' kerak")}>
<QuestionOutlined />  </Tooltip>
     </div>
             <input  type="date" max={now} className="border dateInput in1" style={{width:'100%', fontSize:'14px'}} value={databirthDate}  onChange={(e)=>{checkbirthDate(e)}}  placeholder={t("Tug'ilgan sana")} />
     
             </div>
             <Form.Item data-placeholder={t("Telefon raqam")} label=" "  className={`myFor ${phone?"salom":''} ${phoneClass?"forPlace":''}`} tooltip={{ title: t("Telefon raqamni ko'rsatilgan formatda kiriting") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='phone'  rules={[{ required: true, message: t("check")?`${t("Telefon raqam")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("Telefon raqam")}` }]} >
<MaskedInput className='in' mask="(11) 111 11 11" onChange={(e)=>{checkphone(e)}}  addonBefore="+998"   placeholder={t("Telefon raqam")}/>

</Form.Item>
            </Col>

            <Col style={{padding:'0px 20px'}} lg={12} md={24} sm={24} >
         
              
                
            
            <Form.Item data-placeholder={t("Viloyat")} className={`myFor ${regionsClass?"forPlace":''}`}  label=" "  tooltip={{ title: t("Viloyatni e'tibor bilan tanlang") , icon: <QuestionOutlined style={{color:'white'}} /> }} name="regionId"   rules={[{ required: true, message: t("check")?`${t("Viloyat")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Viloyat")}` }]}>
      <Select
        className="border"
        placeholder={!regionsClass?t("Viloyat"):''}
       
        disabled={true} 
      >
       
        <Option value={region}>{t("region")}</Option>
       
      </Select>
    
    </Form.Item>
            
              
          
        
          <Form.Item  data-placeholder={t("Tuman")} className={`myFor ${districtClass?"forPlace":''} ${districtF?"salom":''}`}  name="districtId" label=" "   tooltip={{ title: t("Avval viloyat tanlang") , icon: <QuestionOutlined style={{color:'white'}} /> }}  rules={[{ required: true, message: t("check")?`${t("Tuman")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Tuman")}` }]} >
       
      <Select
  
        className="border"
        placeholder={!districtClass?t("Tuman"):''}
        onChange={(value) => { form.setFieldsValue({ branchId:null, categoryId:null}); setDistrictF(false);  setBranchdata(null);setSchooldata(null);  setDistrictClass(true);  setCategoryClass(false); setSchoolClass(false); setSchoolL(true);setDistrictdata(value);handleSchool(value)}}
        disabled={districtS} 
        loading={districtL}
        
      >
      
        {district!==null?district.map((item:any, key:any)=>{
           return(<Option value={item.id}>{t("check")?item.nameUz:item.nameRu}</Option>)
       }):""} 
      
      </Select>
   
    </Form.Item>

    <Form.Item  data-placeholder={t("Avtomaktab nomi")}  className={`myFor ${schoolClass?"forPlace":''}  ${schoolF?"salom":''}`} name="branchId"  label=" "  tooltip={{ title: t("Avval tuman tanlang") , icon: <QuestionOutlined style={{color:'white'}} /> }} rules={[{ required: true, message: t("check")?`${t("Avtomaktab nomi")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Avtomaktab nomi")}` }]} >
      <Select
      value={schooldata}
        className="border"
        placeholder={!schoolClass?t("Avtomaktab nomi"):''}
        style={{textTransform:'none'}}
        onChange={(value) => { form.setFieldsValue({ categoryId:null}); handleCategory(value); setSchoolF(false);  setBranchdata(null);setSchooldata(value);setSchoolClass(true);  setCategoryClass(false);setBranchL(true);}}
        disabled={schoolS} 
        loading={schoolL}
        
      >
        {school!==null?school.map((item:any)=>{
           return(<Option  style={{textTransform:'none'}} value={item.branchId}>{t("check")?item.branchName:item.branchNameRu}</Option>)
       }):""} 
     
      </Select>
     
    </Form.Item>
            
 
            
            <Form.Item   rules={[{ required: true, message: t("check")?`${t("Toifa turi")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Toifa turi")}` }]} data-placeholder={t("Toifa turi")}  label=" " name="categoryId"  className={`myFor ${categoryClass?"forPlace":''}  ${branchF?"salom":''}`}   tooltip={{ title: t("Avval avtomaktab tanlang") , icon:  <QuestionOutlined style={{color:'white'}} /> }}>
        <Select
        value={branchdata}
          className="border"
          placeholder={!categoryClass?t("Toifa turi"):''}
          disabled={branchS} 
          loading={branchL}
          onChange={(value) => { setBranchF(false);setBranchdata(value); setCategoryClass(true);}}
          
        >
           {category!==null?category.map((item:any)=>{
             return(<Option value={item.categoryId}>{item.categoryName}</Option>)
         }):""} 
        </Select>
        
      </Form.Item>
              
                
  
  

  
            <Form.Item  data-placeholder={t("Ta'lim vaqti")}  className={`myFor ${shiftsClass?"forPlace":''}`}   label=" "  tooltip={{ title: t("O'zingizga mos ta'lim vaqtini tanlang") , icon:  <QuestionOutlined style={{color:'white'}} /> }} name="shiftId"  rules={[{ required: true }]}>
        <Select
          className="border"
          placeholder={!shiftsClass?t("Ta'lim vaqti"):''}
         
          onChange={(value) => { setShiftsClass(true);}}
        >
          {shifts!==null?shifts.map((item:any)=>{
             return(<Option value={item.id}>{t("check")?item.nameUz:item.nameRu}</Option>)
         }):""} 
        </Select>
      </Form.Item>
                </Col>
          </Row>
      
            <div className="form-group">
            <div   data-placeholder={t("passport")} className={`group myFor ${passportFile?"salom":''} ${passportClass?"forPlace2":''}`} style={{ position:'relative',marginBottom: "35px", padding:'30px 20px' }}   >
            <div className="dateTool">
     <Tooltip placement="top" title={t("Passport nusxasini rasmi tiniq va aniq bo'lsin")}>
<QuestionOutlined />  </Tooltip>
     </div>
                                  <ImageUploader descriptionDialogText={t("passport")}
                                          placeholder={t("passport")} id="passport"
                                    
                                          setImageUrl={(e: any) => {setpassportFile(false);   setData((prev: any) => {e?setpassportClass(true):setpassportClass(false);;return({ ...prev, passportFile: e })})}} />
                                           {passportFile?<p className="error2">{t("check")?`${t("passport")}${t("ni kirtishingiz shart")}`: `${t("ni tanlashingiz shart")} ${t("passport")}`}</p>:''}
                                  </div>
                                    <div  data-placeholder={t("diplom")}  className={`group myFor ${diplomFile?"salom":''}  ${diplomClass?"forPlace2":''}`} style={{ marginBottom: "35px", padding:'30px 20px' }} >
                                    <div className="dateTool">
     <Tooltip placement="top" title={t("Diplom nusxasini rasmi tiniq va aniq bo'lsin")}>
<QuestionOutlined />  </Tooltip>
     </div>
                                    <ImageUploader descriptionDialogText={t("Dimplom yoki attestat nusxasi")}
                                            placeholder={t("diplom")} id="diplom"
                                            setImageUrl={(e: any) => {setdiplomFile(false);   setData((prev: any) => {e?setdiplomClass(true):setdiplomClass(false);;return({ ...prev, diplomFile: e })})}} />
                                              {diplomFile?<p className="error2">{t("check")?`${t("diplom")}${t("ni kirtishingiz shart")}`: `${t("ni tanlashingiz shart")} ${t("diplom")}`}</p>:''}
                                    </div>
                                </div>
      <Row>
      <Col lg={24} md={24} sm={24} className="butCol">
      <Form.Item   style={{width:'200px',  display:'flex', justifyContent:'center'}}>
        <Button type="primary" className="but" htmlType="submit">
        {t("Yuborish")}
        </Button>
      </Form.Item>
      
        </Col>
      </Row>
      </Form>
      </div>
              </div>
              
          </div>
    );
  };
  
  export default ToDirivingSchool;