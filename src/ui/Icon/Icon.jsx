const icons = {
  moon: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
        fill="#EC6E4D"
      />
      <path
        d="M13.6067 5.12132C12.8345 4.34916 11.8969 3.8358 10.9126 3.57276C11.4472 5.57528 10.9338 7.79418 9.36403 9.36396C7.79425 10.9337 5.57535 11.4471 3.57283 10.9125C3.83587 11.8968 4.34923 12.8344 5.12139 13.6066C7.46333 15.9485 11.2647 15.9485 13.6067 13.6066C15.9486 11.2647 15.9486 7.46326 13.6067 5.12132Z"
        fill="#212331"
      />
    </svg>
  ),
  location: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 3.33334C13.5499 3.33334 8.33325 8.55001 8.33325 15C8.33325 23.75 19.9999 36.6667 19.9999 36.6667C19.9999 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.4499 3.33334 19.9999 3.33334ZM19.9999 19.1667C18.8949 19.1667 17.835 18.7277 17.0536 17.9463C16.2722 17.1649 15.8333 16.1051 15.8333 15C15.8333 13.8949 16.2722 12.8351 17.0536 12.0537C17.835 11.2723 18.8949 10.8333 19.9999 10.8333C21.105 10.8333 22.1648 11.2723 22.9462 12.0537C23.7276 12.8351 24.1666 13.8949 24.1666 15C24.1666 16.1051 23.7276 17.1649 22.9462 17.9463C22.1648 18.7277 21.105 19.1667 19.9999 19.1667Z"
        fill="#EC6E4D"
      />
    </svg>
  ),
  cross: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
        fill="#48484A"
      />
    </svg>
  ),
  arrowInCircle: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <circle cx="19" cy="19" r="19" fill="white" />
      <path
        d="M15 13.5L24.1265 19.1497C24.758 19.5407 24.758 20.4593 24.1265 20.8503L15 26.5"
        stroke="#ACACAC"
        strokeWidth="3"
      />
    </svg>
  ),
  arrow: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09312 0L0 1.7625L6.79892 7.5L0 13.2375L2.09312 15L11 7.5L2.09312 0Z"
        fill="#ACACAC"
      />
    </svg>
  ),
  direction: (blockName, className) => (
    <svg
      className={`${blockName}__${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <circle cx="19" cy="19" r="19" fill="#48484A" />
      <path
        d="M8.86923 28.0341L17.3526 8.08441C17.6926 7.28486 18.8203 7.26943 19.182 8.05938L28.308 27.9874C28.6719 28.7822 27.9093 29.6352 27.0704 29.3896C20.6901 27.5219 16.3703 27.5561 10.1189 29.4078C9.29242 29.6526 8.53193 28.8273 8.86923 28.0341Z"
        fill="#E6E6E6"
      />
    </svg>
  ),
};

export function Icon({name, blockName, className}) {
  className = className || 'icon';
  return icons[name](blockName, className);
}
