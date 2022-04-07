import {
  Form,
  Input,
  
  InputNumber,
  Cascader,
  Select,
  message,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import http from "../ui/Services";
import { useForm } from "react-hook-form";
import logo from './assets/logo.gif'

import MaskedInput from "antd-mask-input";
import "./assets/murojat.scss";
import { QuestionOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useEffect, useState } from "react";
import { PageTitle } from "../ui/PageTitle";
import { useTranslation } from "react-i18next";
import { Col, Row ,  Tooltip } from 'antd';
import { region } from '../../host';
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
const { Option } = Select;

/* eslint-disable no-template-curly-in-string */

/* eslint-enable no-template-curly-in-string */

function OnlineEnquiries() {
  const { reset, register } = useForm();

  const [firstName, setfirstName]=useState(false)
  const [text, settext]=useState(false)
  const [textClass, settextClass]=useState(false)
  const [textData, settextData]=useState("")
  const [emailClass, setemailClass]=useState(false)
  const [phone, setphone]=useState(false)
  const [firstNameClass, setfirstNameClass]=useState(false)
  const [lastNameClass, setlastNameClass]=useState(false)
  const [phoneClass, setphoneClass]=useState(false)
  const [loader, setLoader] = useState(true)
  const [form] = Form.useForm();
  const [regions, setRegions] = useState<any>(null)
  const [regionsClass, setRegionsClass] = useState<any>(false)
  const [typeClass, settypeClass] = useState<any>(false)
  const [typeS, settypeS] = useState<any>(false)
  const [secondName, setsecondName]=useState(false)
  const [secondNameClass, setsecondNameClass]=useState(false)
  const [lastName, setlastName]=useState(false)
    const { t } = useTranslation();
  const onFinish = (values: any) => {
    const formData = new FormData();
    if(textData.length<70){
     settext(true)
    }else{
      settext(false)
          
setLoader(true)
for (const key in values) {
  if (Object.prototype.hasOwnProperty.call(values, key)) {
      const element = values[key];
      
      formData.append(key, element)
  }
}

formData.append("text", textData)

http.post<any>(`/PostApi/Application`, formData, {
  headers: { "Content-Type": "multipart/form-data" }
}).then(() => {
     message.success({content:"Ma'lumotlaringiz qabul qilindi oparatorlarimiz siz bilan bog'lanishadi",
       className: 'custom-class',
    style: {
      marginTop: '30vh',
      padding:'30px',
      fontSize:'20px'
    },})
    
setLoader(false)
  
setfirstName(false)
settext(false)
settextClass(false)
settextData("")
setemailClass(false)
setphone(false)
setfirstNameClass(false)
setlastNameClass(false)
setphoneClass(false)
setLoader(false)
setlastName(false)
settypeS(false)
settypeClass(false)
setRegionsClass(false);
     form.resetFields();
   
  })
  .catch(e =>        {message.error({content:"Ma'lumotlaringiz qabul qilinmadi keyinroq yana urinib ko'ring", 
    className: 'custom-class',
    style: {
      marginTop: '30vh',
      padding:'30px',
      fontSize:'20px'
    },});  
    setLoader(false)}
  )
  console.log('sdsddsdds')
 
 
 
 
 
    }

  };
  
  const getRegion = () => {
    http.get<any>(`GetApi/GetRegionContacts`)
        .then((res) => {setRegions(res.data); setLoader(false)})
        .catch(e => console.log(e))
}
  const loaderT=()=>{
      setTimeout(()=>{
          setLoader(false)
      }, 500)
  }
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
  const checktext=(value:any)=>{
    if(value.target.value.length>0){
      settextClass(true)

    }else{
      settextClass(false)
    }
    settextData(value.target.value);
    if(value.target.value.length>70)
    {settext(false)
    }else
    settext(true)   
  }
  
  const checkphone=(value:any)=>{
    if(value.target.value.length>0){
      setphoneClass(true)

    }else{
      setphoneClass(false)
    }


  var v=value.target.value
 
    if(v.indexOf("_")===-1)
       setphone(false)
    else
    setphone(true)   
  }
  
  const checkEmail=(value: any)=>{
    if(value.target.value.length>0){
      setemailClass(true)
  
    }else{
      setemailClass(false)
    }
  }


  return ( <div className="murojat" onLoad={()=>{loaderT()}}>
  {loader?<div className="loaderG">
  <div className="befG">
<img src={logo} alt="..."/>
</div>

</div>
:''}
  <div className="container">
      <PageTitle title={t('onlayn_murojat')} />
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="form">
      <Form  form={form} {...layout} onFinish={onFinish} validateMessages={{
  required: t("Maydonni to'ldirish shart"),
  types: {
    email: t("Emailni to'g'ri kiriting"),
    },
  
}}>
        <Row>
        <Col style={{padding:'0px 20px'}} lg={12} md={24} sm={24}>
            <Form.Item  data-placeholder={t("Ism")}  label=" "  className={`myFor ${firstName?"salom":''} ${firstNameClass?"forPlace":''}`}  tooltip={{ title: t("Lotin tilida yozing") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='firstName'   rules={[{ required: true, message: t("check")?`${t("Ism")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("Ism")}` }]} >
          <Input onChange={(e)=>{checkIsm(e)}} className="in1 ot" placeholder={t("Ism")} />
        </Form.Item>
      <Form.Item data-placeholder={t("Familiya")}  label=" "  tooltip={{ title: t("Lotin tilida yozing") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='lastName'  className={`myFor ${lastName?"salom":''} ${lastNameClass?"forPlace":''}`}  rules={[{ required: true, message: t("check")?`${t("Familiya")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("fam")}` }]} >
          <Input onChange={(e)=>{checkFam(e)}}  className="in1 ot" placeholder={t("Familiya")} />
         
      </Form.Item>
      <Form.Item data-placeholder={t("Ariza turi")} className={`myFor ${typeClass?"forPlace":''}`}  label=" "  tooltip={{ title: t("Ariza turini e'tibor bilan tanlang") , icon: <QuestionOutlined style={{color:'white'}} /> }} name="typeId"   rules={[{ required: true, message: t("check")?`${t("Ariza turi")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Ariza turi")}` }]}>
      <Select
        className="border"
        placeholder={!typeClass?t("Ariza turi"):''}
        onChange={(value) => {if(value===3){form.setFieldsValue({
          regionId: 0,
        })
      settypeS(true)
      }else{
        settypeS(false)

      } }}
        
      >
       
         <Option value={1}>{t("check")?t("Murojaat"):t("Murojaat")}</Option>
         <Option value={2}>{t("check")?t("Taklif"):t("Taklif")}</Option>
         <Option value={3}>{t("check")?t("Shikoyat"):t("Shikoyat")}</Option>
    
       
      </Select>
    
    </Form.Item>
          </Col>
          <Col style={{padding:'0px 20px'}} lg={12} md={24} sm={24} >

          <Form.Item data-placeholder={t("Telefon raqam")} label=" "  className={`myFor ${phone?"salom":''} ${phoneClass?"forPlace":''}`} tooltip={{ title: t("Telefon raqamni ko'rsatilgan formatda kiriting") , icon: <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} name='phone'  rules={[{ required: true, message: t("check")?`${t("Telefon raqam")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("Telefon raqam")}` }]} >
<MaskedInput className='in' mask="(11) 111 11 11" onChange={(e)=>{checkphone(e)}}  addonBefore="+998"   placeholder={t("Telefon raqam")}/>

</Form.Item>
<Form.Item label=" " data-placeholder={t("E-mail")} tooltip={{ title: "Lotin tilida yozing", icon:  <QuestionOutlined style={{color:'white'}} /> }}   className={`myFor in ${emailClass?"forPlace":''}`} name='email' rules={[{ required: true, type: 'email',  message: t("check")?`${t("E-mail")}${t("ni kirtishingiz shart")}`:`${t("ni kirtishingiz shart")} ${t("E-mail")}`}]}>
        <Input style={{textTransform:'lowercase'}}  className="in1 ot" id="em" onChange={(e)=>{checkEmail(e)}} placeholder={t("E-mail")}/>
      </Form.Item> 
      <Form.Item data-placeholder={t("Viloyat")} className={`myFor ${regionsClass?"forPlace":''}`}  label=" "  tooltip={{ title: t("Viloyatni e'tibor bilan tanlang") , icon: <QuestionOutlined style={{color:'white'}} /> }} name="regionId"   rules={[{ required: true, message: t("check")?`${t("Viloyat")}${t("ni tanlashingiz shart")}`:`${t("ni tanlashingiz shart")} ${t("Viloyat")}` }]}>
      <Select
        className="border"
        placeholder={!regionsClass?t("Viloyat"):''}
        onChange={(value) => {  setRegionsClass(true); }}
        disabled={typeS} 
      >
        <Option value={0}>{t("Markaziy kengash")}</Option>
        <Option value={region}>{t("region")}</Option>
       
      </Select>
    
    </Form.Item>
</Col>
<Col lg={24} md={24} sm={24} style={{padding:'0px 20px'}}  className={text?"salom":''}>
<Form.Item  data-placeholder={t("Murojaat matni")} className={`myFor1 in ${textClass?"forPlace1":''}`} tooltip={{ title: "Lotin tilida yozing", icon:  <QuestionOutlined style={{color:'white'}} /> }}   style={{width:'100%'}} >
<div className="dateTool">
     <Tooltip placement="top" title={t("Murojaatni ko'proq yoriting")}>
<QuestionOutlined />  </Tooltip>
     </div>
        <Input.TextArea 
        onChange={(e)=>{checktext(e)}}
       style={{width:"100%", position:'relative'}}
          id="fr" 
          rows={20}
        value={textData}
           placeholder={t("Murojaat matni")} />
        {text?<p className="error1">{t("Murojaatni ko'proq yoriting")}</p>:''}
      </Form.Item>
      </Col>
      <Col lg={24} md={24} sm={24}  style={{padding:'0px'}} className="butCol">
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

export default OnlineEnquiries;