paragraph_line_array = [];

function submit() {
    var display_lines_array = []


    for (var j = 1; j <= 10; j++) {
        var lines = document.getElementById("line_"+j).value;
        console.log(lines);
        paragraph_line_array.push(lines);
        console.log(paragraph_line_array);
    }

    var length_of_paragraph_lines_array = paragraph_line_array.length;
    console.log(length_of_paragraph_lines_array);

    var create = paragraph_line_array.join(" ");
    console.log(create);
    document.getElementById("display_paragraph").innerHTML = create;
}