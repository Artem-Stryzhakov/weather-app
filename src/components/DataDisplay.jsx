export function DataDisplay(props) {
  return (
    <div className={`${props.cssClass} d-flex gap-2`}>
      <div className='right-icons d-flex justify-content-center'>
        <i className='fa-solid fa-droplet mt-2 fs-4'></i>
      </div>
      <div>
        <span>{props.text}</span>
        <h4>
          {props.data} {props.prefix}
        </h4>
      </div>
    </div>
  );
}
