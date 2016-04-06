# SupplementLabAngularCalculator


Depot/U
Supplemental Exercise 2
The Calculator
Set up an angular app. It will consist of a single view and controller. Routing is not necessary for this particular exercise. Then, complete the following:
Put the following elements on your page in your HTML:
• Two (2) input boxes. Make them only accept numbers. Give them respective
placeholders of Operand 1 and Operand 2.
• Four (4) buttons, respectively labeled +,-,*, and /.
• A feedback paragraph. The content of this paragraph will be dictated below. NOTE: You have stylistic liberty to make all of this look good. However, I encourage you to style only AFTER you get the calculator functionality working properly.
Implement the following functionality:
• The user enters a number in the box titled Operand 1 and another number in the
box titled Operand 2. When they click one of the four operation buttons (+,-,*,/), the calculation should be performed and the feedback should be updated appropriately. Both operand input boxes should be reset to 0 as well.
o For example, if I enter 5 in the first box and 4 in the second box and then: § click +, the feedback paragraph should read “The result of adding
5 and 4 is 9”.
§ Click -, the feedback paragraph should read “The result of
subtracting 5 and 4 is 1”.
§ Click *, the paragraph should read “The result of multiplying 5 and
4 is 20.”
§ Click /, the paragraph should read “The result of dividing 5 and 4 is
1.25”.
o In all of these cases, the input boxes should be reset to 0 after clicking
one of the operation buttons. Implement the following error checks:
• If one of the input boxes for operands is empty when an operation button is clicked, display an alert telling the user that both operands are required.
• If the second operand is 0, and the division button is clicked, display an alert
saying that you cannot divide by 0. Do not perform the calculation. Or else.
Notes
• You need not worry about formatting the numeric answer. For example, 1254 is okay. You do not need to format it as 1,254.
• You must not use JQuery or direct DOM manipulation to complete this exercise.