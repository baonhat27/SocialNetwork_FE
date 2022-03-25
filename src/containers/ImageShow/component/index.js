import styles from './index.module.css';
export default function ImageshowComponent(props){
    return <div className={styles.imageshow+" "+styles.show}>
        <span className={styles.imageshow__exit} onClick={function(){
            props.setImageShow(-1)
        }}><i className={"fas fa-times "+styles.icon}></i></span>
        <img className={styles.imageshow__image} src={props.listImage[props.index]}/>
        {props.index<props.listImage.length-1 && <i className={"fas fa-chevron-right "+styles.iconRight} onClick={props.congIndex}></i>}
        {props.index > 0 && <i className={"fas fa-chevron-left "+styles.iconLeft} onClick={props.truIndex}></i>}
    </div>
}