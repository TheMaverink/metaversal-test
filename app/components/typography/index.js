//need to fix 'wdth'

export const Heading1 = ({ children, style }) => {
  return (
    <h1
      className="font-bold text-primary_black text-[30px] leading-[1]"
      style={style}
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, style }) => {
  return (
    <h2
      className="font-bold text-primary_black text-[24px] leading-[1]"
      style={style}
    >
      {children}
    </h2>
  );
};

export const Heading3 = ({ children, style }) => {
  return (
    <h3
      className="font-bold text-primary_black text-[18px] leading-[1]"
      style={style}
    >
      {children}
    </h3>
  );
};

export const Heading4 = ({ children, style }) => {
  return (
    <h4
      className="font-bold text-primary_black text-[16px] leading-[1]"
      style={style}
    >
      {children}
    </h4>
  );
};

export const Body = ({ children, style }) => {
  return (
    <p
      className="font-medium text-primary_black text-[16px] leading-[1.17]"
      style={style}
    >
      {children}
    </p>
  );
};

export const BodyBold = ({ children, style }) => {
    return (
      <p
        className="font-[700] text-primary_black text-[16px] leading-[1.17]"
        style={style}
      >
        {children}
      </p>
    );
  };

export const BodyMedium = ({ children, style }) => {
  return (
    <p
      className="font-medium text-primary_black text-[14px] leading-[1.15]"
      style={style}
    >
      {children}
    </p>
  );
};

export const BodySmall = ({ children, style }) => {
  return (
    <p
      className="font-medium text-primary_black text-[12px] leading-[1.16]"
      style={style}
    >
      {children}
    </p>
  );
};

export const BodyOverline = ({ children, style }) => {
  return (
    <p
      className="font-medium text-primary_black text-[16px] leading-[1.17] uppercase"
      style={style}
    >
      {children}
    </p>
  );
};

export const BodyOverlineSmall = ({ children, style }) => {
  return (
    <p
      className="font-medium text-primary_black text-[12px] leading-[1.16] uppercase"
      style={style}
    >
      {children}
    </p>
  );
};
