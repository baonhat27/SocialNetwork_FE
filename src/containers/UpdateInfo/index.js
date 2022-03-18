import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { handleUserInfo } from '../../shared/store/redux/actions';
import UpdateInfoComponent from './component'
import { hanldeUserInfomation } from './service';
function UpdateInfoContainer(props) {
    const dispatch=useDispatch();
    const [selectedMon,setSelectedMon]= useState(1);
    const [selectedYear,setSelectedYear]=useState(1923);
    const [selectedDay,setSelectedDay]=useState(1);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]= useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] =useState(props.user.gender);
    useEffect(()=>{
        setFirstName(props.user.firstName);
        setLastName(props.user.lastName);
        setEmail(props.user.email);
        setGender(props.user.gender);
    },[props.user])
    
    const handleChangeMon=(item)=>{
        setSelectedMon(item.target.value);
    }
    const handleChangeYear=(item)=>{
        setSelectedYear(item.target.value)
    }
    const handleChangeDay=(item)=>{
        setSelectedDay(item.target.value);
    }
    const handleChangeFirstName=(item)=>{
        setFirstName(item.target.value);
    }
    const handleChangeLastName=(item)=>{
        setLastName(item.target.value);
    }
    const handleChangeEmail=(item)=>{
        setEmail(item.target.value);
    }
    const handleChangeGender=(item)=>{
        setGender(item.target.value);
    }
    const putUserInfo= async ()=>{
        const checkSuccess=await hanldeUserInfomation({
            firstName:firstName,
            lastName:lastName,
            gender:gender,
            email:email,
            dateOfBirth:new Date(selectedYear,selectedMon,selectedDay)
        })
        if(checkSuccess){
            props.setSettingShow(false);
            dispatch(handleUserInfo({
                firstName:firstName,
                lastName:lastName,
                gender:gender,
                email:email,
                dateOfBirth:new Date(selectedYear,selectedMon,selectedDay)
            }))
        }
}
    return (
        <div>
            <UpdateInfoComponent user={props.user}
                setSettingShow={props.setSettingShow} settingShow={props.settingShow}
                putUserInfo={putUserInfo}
                selectedMon={selectedMon} handleChangeMon={handleChangeMon} 
                selectedYear={selectedYear} handleChangeYear={handleChangeYear} 
                selectedDay={selectedDay} handleChangeDay={handleChangeDay}
                firstName={firstName} handleChangeFirstName={handleChangeFirstName}
                lastName={lastName} handleChangeLastName={handleChangeLastName}
                email={email} handleChangeEmail={handleChangeEmail}
                gender={gender} handleChangeGender={handleChangeGender}
            />
        </div>
    )
}

export default UpdateInfoContainer
