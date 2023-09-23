
export type DataDisplayProps = {
    cssClass: string,
    text: string,
    prefix: string,
    data: number | string
}
export function DataDisplay({
    cssClass,
    text,
    prefix,
    data
}: DataDisplayProps) {
  return (
    <div className={`${cssClass} d-flex gap-2`}>
      <div className='right-icons d-flex justify-content-center'>
        <i className='fa-solid fa-droplet mt-2 fs-4'></i>
      </div>
      <div>
        <span>{text}</span>
        <h4>
          {data} {prefix}
        </h4>
      </div>
    </div>
  );
}
