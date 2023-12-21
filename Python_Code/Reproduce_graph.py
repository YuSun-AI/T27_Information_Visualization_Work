import matplotlib.pyplot as plt

# Data
years = ["2006", "07", "08", "09", "10", "11", "12", "13", "14", "15"]
weights = [20.5, 20, 19.5, 19.3, 19.1, 19, 18.7, 18.6, 18.4, 18.1]
neck_sizes = [44.4, 43.9, 43.5, 43.25, 43.15, 43.1, 42.9, 42.8, 42.7, 42.5]

# Adjusting the plot so that the left and right y-axis ticks are aligned

# Setting up the figure
fig, ax1 = plt.subplots()
fig.patch.set_facecolor('#b9d1dd')
ax1.set_facecolor('#b9d1dd')

# Customizing the appearance
ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)
ax1.spines['left'].set_visible(False)
ax1.axhline(18, color='white', alpha=0.5)  # Transparent line at 18
ax1.axhline(19, color='white', alpha=0.5)  # Transparent line at 19
ax1.axhline(20, color='white', alpha=0.5)  # Transparent line at 20
ax1.axhline(21, color='white', alpha=0.5)  # Transparent line at 21
# Plotting Weight
color = '#12a4d8'
ax1.set_xlabel('Year')
ax1.plot(years, weights, color=color, linewidth=4)
ax1.tick_params(axis='y', labelcolor=color)
ax1.set_yticks([18, 19, 20, 21])
ax1.set_ylim(17.5, 21.5)
ax1.text(0.0, 1.02, 'Weight*, kg', transform=ax1.transAxes, color=color, va='bottom', ha='left')

# Plotting Neck Size on a secondary axis
ax2 = ax1.twinx()
ax2.spines['top'].set_visible(False)
ax2.spines['right'].set_visible(False)
ax2.spines['left'].set_visible(False)
color = '#82282a'
ax2.plot(years, neck_sizes, color=color, linewidth=4)
ax2.tick_params(axis='y', labelcolor=color)

# Adjusting the right y-axis ticks to align with the left y-axis
right_axis_ticks = [42 + (tick - 18) * (45 - 42) / (21 - 18) for tick in [18, 19, 20, 21]]
ax2.set_yticks(right_axis_ticks)
ax2.set_ylim(41.5, 45.5)
ax2.text(1.0, 1.02, 'Neck Size, cm', transform=ax2.transAxes, color=color, va='bottom', ha='right')

# Show the plot
plt.show()

plt.savefig('Reproduce.png')
