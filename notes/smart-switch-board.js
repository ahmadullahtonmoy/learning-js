/*
switch activated {
    positive(1) + negative(0) = health Good!
    positive(1) + negative(1) = Error! Negative(1) Power on. But Health is not Good!
    positive(0) + negative(0) = Error! Positive(0) , Negative(0). There is no Power! Please Check Your Power Management!
    positive(!= 1) + negative(!=0) = Error! Positive(>~<) , Negative(>~<). Power Error!!! Check Out What Happened!
}

switch deactivated {
    positive(0) + negative(0) = health Good!
    positive(1) + negative(0) = Error! Positive(1) Power is not OFF. Health is not Good!
    positive(1) + negative(1) = DANGER! Positive(1) , Negative(1). The Power Board is Shocked Out! Please REPAIR Your Power Management!
}
*/