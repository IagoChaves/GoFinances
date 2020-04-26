const formatData = (date: Date): string => {
  return Intl.DateTimeFormat('pt-br').format(date);
};

export default formatData;
