function Space() {
  this.name = "My new space"
  this.description = "Add details about your space here."
}

Space.prototype.editName = function(name){
  this.name = name
}

Space.prototype.editDescription = function(description){
  this.description = description
}
