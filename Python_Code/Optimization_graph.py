import matplotlib.pyplot as plt

# Data
years = ["2006", "07", "08", "09", "10", "11", "12", "13", "14", "15"]
weights = [20.5, 20, 19.5, 19.3, 19.1, 19, 18.7, 18.6, 18.4, 18.1]
neck_sizes = [44.4, 43.9, 43.5, 43.25, 43.15, 43.1, 42.9, 42.8, 42.7, 42.5]


# Setting up the figure
fig, ax1 = plt.subplots()
fig.patch.set_facecolor('#e6f2ff')  # Lighter background color for better contrast
ax1.set_facecolor('#e6f2ff')

# Customizing the appearance
ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)
ax1.spines['left'].set_visible(False)

# Plotting Weight
color = '#3366cc'  # Changed to a more distinguishable blue
ax1.set_xlabel('Year')
ax1.plot(years, weights, color=color, linewidth=2, marker='o')  # Added markers
ax1.tick_params(axis='y', labelcolor=color)
ax1.set_yticks([18, 19, 20, 21])
ax1.set_ylim(17.5, 21.5)
ax1.text(0.0, 1.02, 'Weight*, kg', transform=ax1.transAxes, color=color, va='bottom', ha='left', fontsize=7)

# Plotting Neck Size on a secondary axis
ax2 = ax1.twinx()
ax2.spines['top'].set_visible(False)
ax2.spines['right'].set_visible(False)
ax2.spines['left'].set_visible(False)
color = '#d9534f'  # Changed to a contrasting red
ax2.plot(years, neck_sizes, color=color, linewidth=2, marker='o')  # Added markers
ax2.tick_params(axis='y', labelcolor=color)

# Aligning right y-axis ticks with the left y-axis
right_axis_ticks = [42 + (tick - 18) * (45 - 42) / (21 - 18) for tick in [18, 19, 20, 21]]
ax2.set_yticks(right_axis_ticks)
ax2.set_ylim(41.5, 45.5)
ax2.text(1.0, 1.02, 'Neck Size, cm', transform=ax2.transAxes, color=color, va='bottom', ha='right', fontsize=7)

# Adding a title to the plot for context
plt.title('Weight and Neck Size Over Years', fontsize=10, color='#333333')

# Show the plot
plt.show()

# Saving the optimized plot
plt.savefig('Optimization.png')
