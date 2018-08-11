const tags = /^(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i; // match the tag name of any element we do not care for

function convert(html) { // pass in a self closing tag we need to normalize ex: <table/>
  return html.replace(/(<(\w+)[^>]*?)\/>/g, (all, front, tag) => { // convert the tag to a normal form
    console.log(all); // all is everything that matches
    console.log(front); // front is everything that matches in parentheses (...)
    console.log(tag); // tag (the 3rd parameter) is the next (...) which is (\w+)
    return tags.test(tag) ? all : front + "></" + tag + ">"; // test if regex (tags) matches a string (tag)
  }); // if it is one of the tags we don't care for, return as is. If we care about the tag
}
console.log(convert("<option>Yoshi</option>"));
console.log(convert("<option>Kuma</option>"));
console.log(convert("<table/>"));