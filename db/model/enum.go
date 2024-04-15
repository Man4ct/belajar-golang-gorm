package db

type Role string

const (
	RoleAuthor    Role = "AUTHOR"
	RoleAdmin     Role = "ADMIN"
	RoleLibrarian Role = "LIBRARIAN"
	RoleStudent   Role = "STUDENT"
)

type EmploymentStatus string

const (
	EmploymentStatusFullTime EmploymentStatus = "FULLTIME"
	EmploymentStatusPartTime EmploymentStatus = "PARTTIME"
	EmploymentStatusIntern   EmploymentStatus = "INTERN"
)

type Sex string

const (
	SexMale   Sex = "MALE"
	SexFemale Sex = "FEMALE"
)

type BorrowStatus string

const (
	BorrowStatusBorrowed      BorrowStatus = "BORROWED"
	BorrowStatusPartialReturn BorrowStatus = "PARTIAL_RETURN"
	BorrowStatusAllReturn     BorrowStatus = "ALL_RETURN"
)