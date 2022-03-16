import React, { useState,useEffect } from 'react'
import ProfilePageComponent from './component/ProfilePage';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { hanldeUserInfomation } from './service';
import { handleUserInfo } from '../../shared/store/redux/actions';
function ProfilePageContainer() {
    const dispatch=useDispatch();
    const user= useSelector(state=>state.user);
    const [settingShow,setSettingShow]=useState(false);
    const [selectedMon,setSelectedMon]= useState(1);
    const [selectedYear,setSelectedYear]=useState(1923);
    const [selectedDay,setSelectedDay]=useState(1);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]= useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] =useState(user.gender);
    useEffect(()=>{
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setGender(user.gender);
    },[user])
    const token=localStorage.getItem('token');
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
                setSettingShow(false);
                dispatch(handleUserInfo({
                    firstName:firstName,
                    lastName:lastName,
                    gender:gender,
                    email:email,
                    dateOfBirth:new Date(selectedYear,selectedMon,selectedDay)
                }))
            }
    }
    if(token){
        return(
            <ProfilePageComponent 
            selectedMon={selectedMon} handleChangeMon={handleChangeMon} 
            selectedYear={selectedYear} handleChangeYear={handleChangeYear} 
            selectedDay={selectedDay} handleChangeDay={handleChangeDay}
            firstName={firstName} handleChangeFirstName={handleChangeFirstName}
            lastName={lastName} handleChangeLastName={handleChangeLastName}
            email={email} handleChangeEmail={handleChangeEmail}
            gender={gender} handleChangeGender={handleChangeGender}
            putUserInfo={putUserInfo}
            settingShow={settingShow} setSettingShow={setSettingShow} user={user}/>
        )
    }
    else{
        return <Redirect to="/login"></Redirect>
    }
}

export default ProfilePageContainer;
