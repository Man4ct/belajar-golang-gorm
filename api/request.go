// librarian_request.go

package api

import (
	"time"

	db "github.com/Man4ct/belajar-golang-gorm/db/model"
)

type LibrarianRequest struct {
	Username         string              `json:"username" binding:"required"`
	Email            string              `json:"email" binding:"required,email"`
	Password         string              `json:"password" binding:"required"`
	FullName         string              `json:"full_name" binding:"required"`
	Salary           int                 `json:"salary" binding:"required"`
	EmploymentStatus db.EmploymentStatus `json:"employment_status" binding:"required"`
	JoiningDate      time.Time           `json:"joining_date" binding:"required"`
}

type AdminRequest struct {
	Username         string              `json:"username" binding:"required"`
	Email            string              `json:"email" binding:"required,email"`
	Password         string              `json:"password" binding:"required"`
	FullName         string              `json:"full_name" binding:"required"`
	Salary           int                 `json:"salary" binding:"required"`
	EmploymentStatus db.EmploymentStatus `json:"employment_status" binding:"required"`
}
