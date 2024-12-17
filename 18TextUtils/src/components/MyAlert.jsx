export default function MyAlert(props) {
  return (
    props.descriptionAlert && <div className={`alert alert-${props.descriptionAlert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.descriptionAlert.type}</strong> {props.descriptionAlert.msg}
      
    </div>
  );
}
